function Help() {
   
    var nameInput = /*document.getElementById("nameIn").value*/"Someone";
    /*if (nameInput == "") {
        nameInput = "Someone"
    }*/
    var content = document.getElementById("hdresponse");
    var contentSetting = content.style.display;
    var xhr = new XMLHttpRequest();
    if (contentSetting == "none") {
        content.style.display = "block";
    }
    else {
        content.style.display = "initial"
    }
   
    xhr.open("POST", "https://maker.ifttt.com/trigger/callHelp/with/key/ZB_WQg5fBbfqAIZAZIxdE3cA8JGkS04XwBoC0ya97d?value1=" + nameInput, true);
    xhr.setRequestHeader("Content-type", "application/json");
    var data = JSON.stringify({ "value1": nameInput });

    xhr.send(data);
    setTimeout(function () { window.location.reload(false);}, 60000)
}
