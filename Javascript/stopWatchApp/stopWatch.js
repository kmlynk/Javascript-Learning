timerElement = document.querySelector('.js-timerDisplay')
startButtonElement = document.querySelector('.js-startButton')
stopButtonElement = document.querySelector('.js-stopButton')
resetButtonElement = document.querySelector('.js-resetButton')

const time = {
  secondsFirst : 0,
  secondsSecond : 0,
  minutesFirst : 0,
  minutesSecond : 0,
  hoursFirst : 0,
  hoursSecond : 0
}

startButtonElement.addEventListener('click', startTimer)
stopButtonElement.addEventListener('click', stopTimer)
resetButtonElement.addEventListener('click', resetTimer)

let isTimer = false
let intervalID

function startTimer() {
  if (!isTimer) {
    intervalID = setInterval(() => 
    { 
      time.secondsSecond++
      if (time.secondsSecond == 10) {
        time.secondsSecond = 0
        time.secondsFirst++
        
        if (time.secondsFirst == 6) {
          time.secondsFirst = 0
          time.minutesSecond++

          if (time.minutesSecond == 10) {
            time.minutesSecond = 0
            time.minutesFirst++
          }

          if (time.minutesFirst == 6) {
            time.minutesFirst = 0
            time.hoursSecond++

            if (time.hoursSecond == 10) {
              time.hoursSecond = 0
              time.hoursFirst++
            }
          }
        }
      }

      timerElement.innerHTML = `${time.hoursFirst}${time.hoursSecond} : 
                                ${time.minutesFirst}${time.minutesSecond} : 
                                ${time.secondsFirst}${time.secondsSecond}`
    }, 1000)

    isTimer = true
  }
}

function stopTimer() {
  if (intervalID) {
    clearInterval(intervalID)
    isTimer = false
  }
}

function resetTimer() {
  clearInterval(intervalID)

  time.hoursFirst = 0
  time.hoursSecond = 0
  time.minutesFirst = 0
  time.minutesSecond = 0
  time.secondsFirst = 0
  time.secondsSecond = 0

  timerElement.innerHTML = `${time.hoursFirst}${time.hoursSecond} : 
                                ${time.minutesFirst}${time.minutesSecond} : 
                                ${time.secondsFirst}${time.secondsSecond}`

  isTimer = false
}