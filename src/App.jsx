import {Information} from './data'

function App() {

  return (
    <div className="App">
      {Information && Information.map(home => {
        return(
          <img src={home.imageURL} alt="" />
        )
      })}
    </div>
  )
}

export default App
