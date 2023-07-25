numberButtons = document.querySelectorAll('.number-button')
submitButton = document.querySelector('.submit-button')
container = document.querySelector('.container')

let active;

numberButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    removeActiveClasses()
    button.classList.add('active')
    active = index + 1
    transform()
  })
})

function transform() {
  submitButton.addEventListener('click', () => {

    container.classList.add('active')


    container.innerHTML = `<div class="svg-active-container" style="background-image: url(\'images/illustration-thank-you.svg\')"></div>
    <p class="select-message">You selected ${active} out of 5</p>
    <h2 class="head">Thank you!</h2>
    <p class="description active">We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
    `

  })

}


function removeActiveClasses() {
  numberButtons.forEach(button => {
    button.classList.remove('active')
  })
}