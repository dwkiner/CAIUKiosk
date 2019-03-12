# CAIU Kiosk
Made for the Capital Area Intermediate Unit 15 to act as a helpdesk kiosk

All flat file and local, no external services (except for a Slack bot)

# Prerequisites
Composer

phpmailer

# Ticketing
Uses an HTML form and a PHP backend (Including phpmailer) to send over smtp to the CAIU mail server

# Ping system
Uses Ajax to send a POST request to a Slack bot webhook on click



# External Ping
/external/index has only a ping button and uses localStorage to store the room name in

/external/clear clears the internalStorage vars and returns back to /external/index

