import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter, setupCounter1,setupCounter2} from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <h1>CAT!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
  </div>
  <div>
    <h1>DOG!</h1>
    <div class="card">
      <button id="counters" type="button"></button>
    </div>
  </div>
  <div>
    <h1>RAT!</h1>
    <div class="card">
      <button id="counters1" type="button"></button>
    </div>
  </div>
`


setupCounter(document.querySelector('#counter'))
setupCounter1(document.querySelector('#counters'))
setupCounter2(document.querySelector('#counters1'))

