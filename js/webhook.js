function Help() {
    var nameInput = /*document.getElementById("nameIn").value*/"Someone";
    /*if (nameInput == "") {
        nameInput = "Someone"
    }*/
    var xhr = new XMLHttpRequest();
    /*if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }*/
   
    xhr.open("POST", "https://maker.ifttt.com/trigger/callHelp/with/key/ZB_WQg5fBbfqAIZAZIxdE3cA8JGkS04XwBoC0ya97d?value1=" + nameInput, true);
    xhr.setRequestHeader("Content-type", "application/json");
    var data = JSON.stringify({ "value1": nameInput });

    xhr.send(data);
    document.getElementById("response").innerHTML = "Someone will be with you shortly";
 
}
