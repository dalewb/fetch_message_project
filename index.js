let liId = 0

function clickFunction() {
  // add button to turn element into an update form
  // populate form with message text
  // ON CLICK (add event listener):
    // fetch post request to update message body text
    // re-render page?
    newInput = document.createElement('input')
}

function makeUpdateList(el) {
  changeLi = document.getElementById(el.id)

  debugger
}

function makeList(el) {
  myUl = document.getElementById('list');
  newLi = document.createElement('li');
  newLi.id = ++liId
  bttn = document.createElement('button')
  bttn.id = liId
  newInput = document.createElement('input')
  newInput.value = el.message
  newInput.name="message"
  newSubmit = document.createElement('input')
  newSubmit.setAttribute('type', 'submit')
  newSubmit.value = 'update'
  newForm = document.createElement('form')
  newForm.appendChild(newInput)
  newForm.appendChild(newSubmit)
  newForm.addEventListener('onsubmit', function(input) {
    alert(`Update ${el.message}`)
    input.preventDefault()
    debugger
    var url = 'https://fetch-message-in-the-bottle.herokuapp.com/api/v2/messages.json'
    var data = {message: ""}

    fetch('https://fetch-message-in-the-bottle.herokuapp.com/api/v2/messages.json', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      }
    })
  })
  newLi.append(newForm)
  myUl.appendChild(newLi);
  // debugger
}

fetch('https://fetch-message-in-the-bottle.herokuapp.com/api/v2/messages.json')
  .then(response => response.json())
  .then(myJson => myJson)
  .then(array => array.map(el => makeList(el)));


// myList = document.getElementById('list');
// myList.addEventListener('click', function() {
//   alert(`Clicked!`)
// })
