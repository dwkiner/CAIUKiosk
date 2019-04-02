function Help() {
   //document.getElementById("buttons").style.display = "none"
    var nameInput = /*document.getElementById("nameIn").value*/"Someone";
    if (nameInput == "") {
        nameInput = "Someone"
    }
    var content = document.getElementById("hdresponse");
    var contentSetting = content.style.display;
    var xhr = new XMLHttpRequest();
    if (contentSetting == "none") {
        content.style.display = "block";
    }
    else {
        content.style.display = "block"
    }
    $.ajax({
        data: 'payload=' + JSON.stringify({
            "text": nameInput + " is calling for help!"
        }),
        dataType: 'json',
        processData: false,
        type: 'POST',
        url: "https://hooks.slack.com/services/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"

    });
    
   
   
    setTimeout(function () { window.location.reload(false);}, 30000)
}
