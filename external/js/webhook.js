function Help() {
   
    var roomName = localStorage.getItem("roomName");
   
    
        document.getElementById("hdresponse").style.display = "block";
        document.getElementById("hdresponse1").style.display = "none";
    
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
