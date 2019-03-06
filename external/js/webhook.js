function Help() {
   //document.getElementById("buttons").style.display = "none"
    var roomName = localStorage.getItem("roomName");
    var nameInput = /*document.getElementById("nameIn").value*/"Someone";
    if (nameInput == "") {
        nameInput = "Someone"
    }
    var content = document.getElementById("hdresponse");
    var contentSetting = content.style.display;
    var xhr = new XMLHttpRequest();
   /* if (contentSetting == "none") {
        content.style.display = "block";
    }
    else {
        content.style.display = "block"
    }*/
    $.ajax({
        data: 'payload=' + JSON.stringify({
            "text": nameInput + " is calling for help from the " + roomName + " room!"
        }),
        dataType: 'json',
        processData: false,
        type: 'POST',
        url: "https://hooks.slack.com/services/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"

    });
    
   
   
    setTimeout(function () { window.location.reload(false);}, 30000)
}
