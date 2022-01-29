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
        const newMons = [...mons, newMon]
        setMons(newMons)
    }

  return (
    <Container >
          <Header title='montrack'/>
          <AddMon onAdd={addMon}/>
          <Mons mons={mons} />
    </Container>
  );
}

export default App;
