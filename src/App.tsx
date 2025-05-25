import './App.css'
import CharAnimation from './components/CharAnimation/CharAnimation'
import stackCircle from "./stack-circle.svg"

const text = "MARCOFORMANTE"

function App() {

  return (
    <div id='app'>
      <div id='app__container'>
        <header>
          <div className='width-limit-center flex-row flex-between flex-items-center h-full'>
            <span>sad</span>
            <span>asd</span>
          </div>
        </header>
          <main>
              <div className='hero width-limit-center'>
                <div className='hero__container'>
                  <div className='left-container'>
                    <div className='display-center-mobile'>
                        <CharAnimation text={text}/>
                        <p id='name'>Marco Formante</p>
                    </div>
                    <div>
                        <p id='dev' className='sata'>WEB DEVELOPER</p>
                    </div>
                  </div>

                  <div className='sata circle'>
                    <div className='circle__container'>
                    <img id='stack-circle' src={stackCircle} alt="Marco Formante dev Stack" />
                    </div>
                  </div>
                </div>
              </div>
          </main>
        </div>
    </div>
    
  )
}

export default App







