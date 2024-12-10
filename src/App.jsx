import './App.css'

function App() {

  return (
    <>
      <div className='landing-page'>
        <div className='background-hero'>
          {/* header section */}
          <div className='container'>
            <div className='header-content'>
              <img src='src\assets\logo.png' alt='logo' />
              <nav>
                <a href='#'>Add Tour</a>
                <a href='#'>Book Tour</a>
                <a href='#'>My Tours</a>
              </nav>
              <button className='h-explorer-btn'>Explore Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
