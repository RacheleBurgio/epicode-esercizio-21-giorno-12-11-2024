if (sessionStorage.getItem('timer')) {
  timer = parseInt(sessionStorage.getItem('timer'))
} else {
  timer = 0
}

function counter() {
  timer++
  document.getElementById('Timer').textContent = timer
  sessionStorage.setItem('timer', timer)
}

setInterval(counter, 1000)
