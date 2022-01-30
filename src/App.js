import { useState, useEffect } from 'react'

import Container from 'react-bootstrap/Container'

import Header from './components/Header'
import AddMon from './components/AddMon'
import Mons from './components/Mons'

const App = ({ pokeclient }) => {
    const [mons, setMons]  = useState([])

    useEffect(() => {
        // TODO: load from store
        const monsString = localStorage.getItem('mons')
        if (!monsString) {
            setMons([])
        } else {
            setMons(JSON.parse(monsString))
        }
  }, [])

    const updateMons = (mons) => {
        localStorage.setItem('mons', JSON.stringify(mons))
        setMons(mons)
    }

    const addMon = async (mon) => {
        const newMon = await pokeclient.getMon(mon.family)
        if (newMon === null) {
            alert(`unknown mon family: '${mon.family}'`)
            return
        }

        newMon.name = mon.name
        newMon.evs = [0, 0, 0, 0, 0, 0]

        const newMons = [...mons, newMon]
        updateMons(newMons)
    }

    const onBattle = async (mon, opponentFamily) => {
        const opponent = await pokeclient.getMon(opponentFamily)
        if (opponent === null) {
            alert(`unknown opponent mon family: '${opponentFamily}'`)
            return
        }

        const newMons = [...mons]
        const i = newMons.findIndex(m => m.name === mon.name)
        newMons[i].evs.forEach((ev, j) => newMons[i].evs[j] += opponent.evYields[j])
        updateMons(newMons)
    }

    const onEvolve = async (mon, evolution) => {
        const newMon = await pokeclient.getMon(evolution)
        if (newMon === null) {
            alert(`unknown evolution mon family: '${evolution}'`)
            return
        }

        newMon.name = mon.name
        newMon.evs = mon.evs

        const newMons = [...mons]
        const i = newMons.findIndex(m => m.name === mon.name)
        newMons[i] = newMon

        updateMons(newMons)
    }

    const onDelete = async (mon) =>{
        if (window.confirm(`are you sure you want to delete ${mon.name}?`)) {
            const newMons = mons.filter(m => m.name !== mon.name)
            updateMons(newMons)
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
