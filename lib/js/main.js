const database = firebase.database().ref();
database.on('child_added', displayMessageOnBoard);

const usernameElement = document.getElementById("username");
const messageElement = document.getElementById("message");
const button = document.getElementById("submitButton");
button.addEventListener("click",updateDB);

//Set database object here


/**
 * Updates the database with the username and message.
 */
function updateDB(event){
    event.preventDefault();
    const username        = usernameElement.value;
    const message         = messageElement.value;

    usernameElement.value = "";
    messageElement.value  = "";

    const userData= {
        NAME: username,
        MESSAGE: message, 
    };
    



    //Update database here

}

// Set database "child_added" event listener here

function displayMessageOnBoard(rowData) {
    const row= rowData.val();

   const messageBox = document.querySelector('.allMessages');
    const message = document.createTextNode(row.MESSAGE);
   const name = document.createTextNode(row.NAME);
  messageBox.appendChild(name);
  messageBox.appendChild(message);
}