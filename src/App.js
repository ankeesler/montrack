import { useState, useEffect } from 'react'
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
        newMon.name = mon.name
        const newMons = [...mons, newMon]
        console.log(newMons)
        setMons(newMons)
    }

  return (
    <div className='container'>
          <Header title='montrack'/>
          <AddMon onAdd={addMon}/>
          <Mons mons={mons} />
    </div>
  );
}

export default App;
