import Pokeclient from './pokeclient';

test('can get basic mon', async () => {
    const client = Pokeclient(`https://pokeapi.co/api/v2`)
    const mon = await client.getMon('treecko')
    expect(mon).toStrictEqual({
        family: 'treecko',
        imgSrc: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/252.png',
        ivs: [40, 45, 35, 65, 55, 70],
        evYields: [0, 0, 0, 0, 0, 1],
        evolutions: [{
            family: 'grovyle',
            imgSrc: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/253.png',
        }],
    })
});

test('can get middle-form mon', async () => {
    const client = Pokeclient(`https://pokeapi.co/api/v2`)
    const mon = await client.getMon('kirlia')
    expect(mon).toStrictEqual({
        family: 'kirlia',
        imgSrc: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/281.png',
        ivs: [38, 35, 35, 65, 55, 50],
        evYields: [0, 0, 0, 2, 0, 0],
        evolutions: [
            {
                family: 'gardevoir',
                imgSrc: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/282.png',
            },
            {
                family: 'gallade',
                imgSrc: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/475.png',
            },
        ],
    })
});

test('can get final-form mon', async () => {
    const client = Pokeclient(`https://pokeapi.co/api/v2`)
    const mon = await client.getMon('gardevoir')
    expect(mon).toStrictEqual({
        family: 'gardevoir',
        imgSrc: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/282.png',
        ivs: [68, 65, 65, 125, 115, 80],
        evYields: [0, 0, 0, 3, 0, 0],
        evolutions: [],
    })
});

test('can get multi-next form', async () => {
    const client = Pokeclient(`https://pokeapi.co/api/v2`)
    const mon = await client.getMon('eevee')
    expect(mon.evolutions).toStrictEqual([
        {
            "family": "vaporeon",
            "imgSrc": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png",
        },
        {
            "family": "jolteon",
            "imgSrc": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png",
        },
        {
            "family": "flareon",
            "imgSrc": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/136.png",
        },
        {
            "family": "espeon",
            "imgSrc": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/196.png",
        },
        {
            "family": "umbreon",
            "imgSrc": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/197.png",
        },
        {
            "family": "leafeon",
            "imgSrc": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/470.png",
        },
        {
            "family": "glaceon",
            "imgSrc": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/471.png",
        },
        {
            "family": "sylveon",
            "imgSrc": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/700.png",
        },
    ])
});

test('can return null mon for non existent families', async () => {
    const client = Pokeclient(`https://pokeapi.co/api/v2`)
    const mon = await client.getMon('nah')
    expect(mon).toBeNull()
});
