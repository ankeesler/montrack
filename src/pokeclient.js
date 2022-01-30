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
        const mon = {family: data.name, imgSrc: data.sprites.front_default, ivs: ivs, evs: [0,0,0,0,0,0]}

        return mon
    }
    return c
}

export default Pokeclient
