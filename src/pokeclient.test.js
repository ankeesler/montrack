import express from 'express';
import Pokeclient from './pokeclient';

test('can get mon', () => {
    const client = Pokeclient(`https://pokeapi.co/api/v2`)
    client.getMon('treecko').then(() => {
        expect(mon)
        expect(mon.name).toBe(wantName)
        expect(mon.imgSrc).toBe(wantImgSrc)
    })
});

test('can return null mon for non existent families', () => {
    const client = Pokeclient(`https://pokeapi.co/api/v2`)
    client.getMon('nah').then(() => {
        expect(mon).toBeNull()
    })
});
