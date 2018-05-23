let liId = 0;

function clickFunction() {
  // add button to turn element into an update form
  // populate form with message text
  // ON CLICK (add event listener):
  // fetch post request to update message body text
  // re-render page?
  newInput = document.createElement("input");
}

function makeUpdateList(el) {
  changeLi = document.getElementById(el.id);

  debugger;
}

function makeList(el) {
  myUl = document.getElementById("list");
  newLi = document.createElement("li");
  newLi.id = `id-${el.id}`;
  bttn = document.createElement("button");
  bttn.id = liId;
  newInput = document.createElement("input");
  newInput.value = el.message;
  newInput.id = `message-input-id-${el.id}`;
  newInput.name = "message";
  newSubmit = document.createElement("input");
  newSubmit.setAttribute("type", "submit");
  newSubmit.value = "update";
  newForm = document.createElement("form");
  newForm.appendChild(newInput);
  newForm.appendChild(newSubmit);
  newForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const newMessage = document.getElementById(`message-input-id-${el.id}`)
      .value;
    console.log(`The updated message you want is "${newMessage}"`);

    function updateMessage(msgObj) {
      debugger;
      const liToUpdate = document.querySelector(`li#id-${msgObj.id}`);
      liToUpdate.innerText = msgObj.message;
    }

    fetch(
      `https://fetch-message-in-the-bottle.herokuapp.com/api/v2/messages/${
        el.id
      }`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify({
          message: { real_name: el.real_name, message: newMessage }
        })
      }
    )
      .then(r => r.json())
      .then(data => updateMessage(data));
  });

  newLi.append(newForm);
  myUl.appendChild(newLi);
  // debugger
}

fetch("https://fetch-message-in-the-bottle.herokuapp.com/api/v2/messages")
  .then(response => response.json())
  .then(myJson => myJson)
  .then(array => array.map(el => makeList(el)));

// myList = document.getElementById('list');
// myList.addEventListener('click', function() {
//   alert(`Clicked!`)
// })
