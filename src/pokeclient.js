const Pokeclient = (baseUrl) => {
    const c = {}
    c.getMon = async (family) => {
        const url = `${baseUrl}/pokemon/${family.toLowerCase()}`
        const res = await fetch(url)
        if (res.status === 404) {
            return null
        }

        const data = await res.json()
        const ivs = data.stats.map(s => s.base_stat)
        const evYields = data.stats.map(s => s.effort)
        const mon = {family: data.name, imgSrc: data.sprites.front_default, ivs: ivs, evYields: evYields, evolutions: []}

        const speciesRes = await fetch(data.species.url)
        const speciesData = await speciesRes.json()
        const evolutionChainRes = await fetch(speciesData.evolution_chain.url)
        const evolutionChainData = await evolutionChainRes.json()
        const form = findForm(evolutionChainData.chain, mon.family)

        for (let i = 0; i < form.evolves_to.length; ++i) {
            const evolvesToForm = form.evolves_to[i]
            const evolvesToFamily = evolvesToForm.species.name
            const evolvesToUrl = `${baseUrl}/pokemon/${evolvesToFamily.toLowerCase()}`
            const evolvesToRes = await fetch(evolvesToUrl)
            const evolvesToData = await evolvesToRes.json()
            mon.evolutions.push({family: evolvesToFamily, imgSrc: evolvesToData.sprites.front_default})
        }

        return mon
    }
    return c
}

const findForm = (chain, family) => {
    if (chain.species.name === family) {
        return chain
    }
    for (let i = 0; i < chain.evolves_to.length; ++i) {
        const next = findForm(chain.evolves_to[i], family)
        if (next !== null) {
            return next
        }
    }
    return null
}

export default Pokeclient
