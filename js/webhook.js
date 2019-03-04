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
   
    //xhr.open("POST", "https://maker.ifttt.com/trigger/callHelp/with/key/ZB_WQg5fBbfqAIZAZIxdE3cA8JGkS04XwBoC0ya97d?value1=" + nameInput, true);
    fetch('https://hooks.slack.com/services/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', {
        method: "POST", // *GET, POST, PUT, DELETE, etc
        body: JSON.stringify({ 'text': 'Someone is calling for help!'})
    })
    /*xhr.setRequestHeader("Content-type", "application/json");
    

    xhr.send("text=test");
    */
    setTimeout(function () { window.location.reload(false);}, 60000)
}
