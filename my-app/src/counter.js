export function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}
export function setupCounter1(element) {
  let counters = 0
  const setCounter = (count) => {
    counters = count
    element.innerHTML = `count is ${counters}`
  }
  element.addEventListener('click', () => setCounter(counters + 1))
  setCounter(0)
}
export function setupCounter2(element) {
  let counters = 0
  const setCounter = (count) => {
    counters = count
    element.innerHTML = `count is ${counters}`
  }
  element.addEventListener('click', () => setCounter(counters + 1))
  setCounter(0)
}



