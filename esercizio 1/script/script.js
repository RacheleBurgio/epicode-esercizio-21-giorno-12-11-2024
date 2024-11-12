const firstNameInput = document.getElementById('name')
const lastNameInput = document.getElementById('surname')
const emailInput = document.getElementById('email')
const ibanInput = document.getElementById('iban')

const myForm = document.getElementById('form')

class User {
  constructor(_firstName, _surname, _email, _iban) {
    this.firstName = _firstName
    this.lastName = _surname
    this.email = _email
    this.iban = _iban
  }
}

myForm.addEventListener('submit', function (e) {
  e.preventDefault()
  const utente = new User(
    firstNameInput.value,
    lastNameInput.value,
    emailInput.value,
    ibanInput.value
  )

  console.log('UTENTE CREATO', utente)
})
