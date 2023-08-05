import './App.css'

function App() {

  return (
    <>
      <button onClick={async () => {
        const res = await fetch('/api')
        const data = await res.text()
        console.log(data)
      }
      } className='bg-red-600' >Fetch</button>

    </>
  )
}

export default App
