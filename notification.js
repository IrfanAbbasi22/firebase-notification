// Notification Reference & Options
// https://developer.mozilla.org/en-US/docs/Web/API/notification#constructor
        
let notification;
function notifyMe() {
    const options = {
        title: 'HI '+Math.random(), // Title
        body: 'Drivers available please check!', // Content 
        icon: '', // we can add the icon path here.
    };

    if (notification) {
        notification.close();
    }
    
    if (!("Notification" in window)) {
        // Check if the browser supports notifications
        alert("This browser does not support desktop notification");
    } else if (Notification.permission === "granted") {
        // Check the notification permissions if yes then show notification
        notification = new Notification(options.title, options);

    } else if (Notification.permission !== "denied") {
        // ask for the permission
        Notification.requestPermission().then((permission) => {
        // If accept by user then, create a notification - its static at the bottom 
        if (permission === "granted") {
            notification = new Notification("Hi there!");
        }
        });
    }
}