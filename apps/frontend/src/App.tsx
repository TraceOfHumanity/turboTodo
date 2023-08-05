import './App.css'

function App() {

  return (
    <>
      <button onClick={async () => {
        const res = await fetch('/api')
        const data = await res.json()
        console.log(data)
      }
      }>Fetch</button>

    </>
  )
}

export default App
