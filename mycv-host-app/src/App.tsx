import './App.scss'
import NavView from './components/Navigation/navView'

function App() {
  return (
    <>
        <div className="gridMain">
        <div className="gridLeft"><NavView /></div>
        <div className="gridRight">Right</div> 
      </div>
    </>
  )
}

export default App
