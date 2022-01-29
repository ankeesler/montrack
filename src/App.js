import { useState, useEffect } from 'react'
import Header from './components/Header'
import AddMon from './components/AddMon'
import Mons from './components/Mons'

function App() {
    const [mons, setMons]  = useState([])

    useEffect(() => {
        // TODO: load from store
        const initialMons = [{name:'treecko'}, {name: 'poochyena'}, {name: 'zigzagoon'}]
        setMons(initialMons)
  }, [])

    const addMon = (mon) => {
        const newMons = [...mons, mon]
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
