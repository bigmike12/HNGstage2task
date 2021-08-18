const personName = document.getElementById("name");
const personEmail = document.getElementById('email');
const personMessage = document.getElementById('message');

const testing = personEmail.value

document.getElementById('submit').addEventListener('click', function(e){
  if(personName.value === "" || personEmail.value === "" || personMessage.value === "" ){
    displayMessage('Please Fill All Fields.', '#fa5151');
  } else {
    displayMessage(`Thank You For Reaching Out ${personName.value}.`, '#51fa71');
  }

  //remove message
  setTimeout(clearMessage, 3000)
  e.preventDefault();
})

function displayMessage(message, color){
  //create div
  const popUp = document.createElement('div');
  //get parent element
  const form = document.querySelector('form');
  const contactMe = document.getElementById('contact-me');
  //add classname
  popUp.className = 'form-control'
  //add id
  popUp.id = 'message'
  //add text
  popUp.appendChild(document.createTextNode(`${message}`));
  //add style
  popUp.style.textAlign = 'center'
  popUp.style.color = '#fff'
  popUp.style.border = '1px solid'
  popUp.style.borderColor = `${color}`
  popUp.style.backgroundColor = `${color}`
  //insert under header
  form.insertBefore(popUp, contactMe)
}

function clearMessage(){
  document.getElementById('message').remove();
  personMessage.value = '';
  personEmail.value = '';
  personName.value = '';
}