function buttonChange() {
  buttonElement = document.querySelector('.js-startButton')
  reportElement = document.querySelector('.js-report')
  reportElement.innerHTML = ''
  buttonElement.innerHTML = 'Loading...'

  setTimeout(function() {
    buttonElement.innerHTML = 'Add To Cart'
    reportElement.innerHTML = 'Added!'
  }, 2000)
}