function TicketSub() {
    var email = document.getElementById("email").value;
    var emsubject = document.getElementById("emailsubject").value;
    var body = document.getElementById("emailbody").value;
    $.ajax({
        data: JSON.stringify(
            {
                "request": {
                    "requester": {
                        "email": email
                    },
                    "type": "incident",
                    "status": "new",
                    "subject": emsubject + "(iPad Kiosk)",
                    "comment": {
                        "body": body
                    },
                    "custom_fields": [
                        {
                            "id": 22238464,
                            "value": "caiu_support"
                        },
                        {
                            "id": 22764340,
                            "value": "1"
                        }
                    ]
                }
            }
        ),
        contentType: 'application/json',
        
        type: 'POST',
        url: "https://caiu.zendesk.com/api/v2/requests.json",
        async: false
    });
    $.ajax({
        data: 'payload=' + JSON.stringify({
            "text": email + " just submitted a ticket from the Kiosk! <!channel>"
        }),
        dataType: 'json',
        async: false,
        processData: false,
        type: 'POST',
        url: "https://hooks.slack.com/services/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"

    });
    window.location.assign("/thanks.html")
};
