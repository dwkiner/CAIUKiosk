function Help() {
   
    var roomName = localStorage.getItem("roomName");
   
    if (document.getElementById("hdresponse").style.display == "none") {
        document.getElementById("hdresponse").style.display = "block";
    }
    else {
        document.getElementById("hdresponse").style.display = "block";
    }
    $.ajax({
        data: 'payload=' + JSON.stringify({
            "text": "Someone is calling for help from the " + roomName + " room!"
        }),
        dataType: 'json',
        processData: false,
        type: 'POST',
        url: "https://hooks.slack.com/services/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"

    });
    
   
   
    setTimeout(function () { window.location.reload(false);}, 30000)
}
