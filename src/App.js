import { useState, useEffect } from 'react'

import Container from 'react-bootstrap/Container'

import Header from './components/Header'
import AddMon from './components/AddMon'
import Mons from './components/Mons'

const App = ({ pokeclient }) => {
    const [mons, setMons]  = useState([])

    useEffect(() => {
        // TODO: load from store
        const initialMons = []
        setMons(initialMons)
  }, [])

    const addMon = async (mon) => {
        const newMon = await pokeclient.getMon(mon.family)
        if (newMon === null) {
            alert(`unknown mon family: '${mon.family}'`)
            return
        }

        newMon.name = mon.name
        newMon.evs = [0, 0, 0, 0, 0, 0]

        const newMons = [...mons, newMon]
        setMons(newMons)
    }

    const onBattle = async (mon, opponentFamily) => {
        const opponent = await pokeclient.getMon(opponentFamily)

        const newMons = [...mons]
        const i = newMons.findIndex(m => m.name === mon.name)
        newMons[i].evs.forEach((ev, j) => newMons[i].evs[j] += opponent.evYields[j])
        setMons(newMons)
    }

    const onEvolve = async (mon, evolution) => {
        const newMon = await pokeclient.getMon(evolution)
        newMon.name = mon.name
        newMon.evs = mon.evs

        const newMons = [...mons]
        const i = newMons.findIndex(m => m.name === mon.name)
        newMons[i] = newMon

        setMons(newMons)
    }

    const onDelete = async (mon) =>{
        if (window.confirm(`are you sure you want to delete ${mon.name}?`)) {
            const newMons = mons.filter(m => m.name !== mon.name)
            setMons(newMons)
        }
    }

  return (
          <Container>
          <Header title='montrack'/>
          <AddMon onAdd={addMon}/>
          <Mons mons={mons} onBattle={onBattle} onEvolve={onEvolve} onDelete={onDelete}/>
    </Container>
  );
}

export default App;
