let timerInterval
let timeLeft = 60

window.onload = () => {
  const timerElement = document.getElementById('seconds')
  const circle = document.querySelector('.progress-ring-circle')
  const radius = circle.r.baseVal.value
  const circonferenza = 2 * Math.PI * radius
  circle.style.strokeDasharray = `${circonferenza} ${circonferenza}`
  circle.style.strokeDashoffset = `${circonferenza}`

  function setProgress(percent) {
    const offset = circonferenza - (percent / 100) * circonferenza
    circle.style.strokeDashoffset = offset
  }

  const resetTimer = () => {
    clearInterval(timerInterval)
    timeLeft = 60
    const totalTime = timeLeft
    timerElement.innerHTML = timeLeft
    setProgress(100)

    timerInterval = setInterval(() => {
      if (timeLeft > 0) {
        timeLeft--
        timerElement.innerHTML = timeLeft

        const progressPercentage = (timeLeft / totalTime) * 100
        setProgress(progressPercentage)
      } else {
        clearInterval(timerInterval)
      }
    }, 1000)
  }

  resetTimer()
}
