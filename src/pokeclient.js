const Pokeclient = (baseUrl) => {
    const c = {}
    c.getMon = async (family) => {
        const url = `${baseUrl}/pokemon/${family}`
        const res = await fetch(url)
        const data = await res.json()
        const mon = {family: data.name, imgSrc: data.sprites.front_default}
        return mon
    }
    return c
}

export default Pokeclient
