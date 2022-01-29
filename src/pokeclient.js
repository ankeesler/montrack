const Pokeclient = (baseUrl) => {
    const c = {}
    c.getMon = async (family) => {
        const url = `${baseUrl}/pokemon/${family}`
        const res = await fetch(url)
        if (res.status === 404) {
            return null
        }

        const data = await res.json()
        const ivs = data.stats.map(s => s.base_stat)
        const mon = {family: data.name, imgSrc: data.sprites.front_default, ivs: ivs}

        return mon
    }
    return c
}

export default Pokeclient
