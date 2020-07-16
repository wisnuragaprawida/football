var webPush = require('web-push');

const vapidKeys = {
    "publicKey": "BKolvVDRf8qGScMyQ9BC5TcBUysflgZiPadot8azWJkWDj29-JPvI8NiG7EBIXIwAPXnOv2ePskFuLz9h7IiCgc",
    "privateKey": "E3oQpPvzZdGgFe-liFbo6TZlxOsvs_2h705HDjKu7NQ"
};


webPush.setVapidDetails(
    'mailto:example@yourdomain.org',
    vapidKeys.publicKey,
    vapidKeys.privateKey
)
var pushSubscription = {
    "endpoint": "https://fcm.googleapis.com/fcm/send/cZsNDRGbahY:APA91bGiNoIa9c8z8N53yHL3tKTlPRKFvDGMOdAXn5xN7Jb51OAmzZEzfPMJY_wea-QUu42uHDX-ZG25hLi8J54oNykc7jICNDEA2KfiZrpMniTqnTYOdNqLPjqyMMNUD6kEXJGU2JsS",
    "keys": {
        "p256dh": "BJovbCa1aOcMS/X5BIOxsh7ih6t6G+1PuXqfhjQhg4onGICUJvO/ACHIsWHDhPs1OJ0Qb9C4y9BFNsxYHvZBEX4=",
        "auth": "zTUeqB3MomcIzh5fiNvKLQ=="
    }
};
var payload = 'haloo apa kabar';

var options = {
    gcmAPIKey: '498427989307',
    TTL: 60
};
webPush.sendNotification(
    pushSubscription,
    payload,
    options
);