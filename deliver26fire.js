const firebaseConfig = {
    apiKey: "AIzaSyAJQIpMxkimFUTmGOyYJ8mpEnh-_7O-pYg",
    authDomain: "frommykit.firebaseapp.com",
    databaseURL: "https://frommykit-default-rtdb.firebaseio.com",
    projectId: "frommykit",
    storageBucket: "frommykit.appspot.com",
    messagingSenderId: "406235715405",
    appId: "1:406235715405:web:a5adc30e09425e68780904"
};
firebase.initializeApp(firebaseConfig);
var deliveryformdb = firebase.database().ref('delivery-form');
document.getElementById('delivery-form').addEventListener("submit", submitform);
function submitform(e) {
    e.preventDefault();
    var name = getElementVAl('name');
    var youraddress = getElementVAl('youraddress');
    var deliveryaddress = getElementVAl('deliveryaddress');
    var contact = getElementVAl('contact');
    
    savedata(name,youraddress,deliveryaddress,contact);
}
const savedata = (name, youraddress, deliveryaddress,contact) => {
    var newdeliveryform = deliveryformdb.push();
    newdeliveryform.set({
        name: name,
        youraddress: youraddress,
        deliveryaddress: deliveryaddress,
        contact: contact,
    });
};
const getElementVAl = (id) => {
    return document.getElementById(id).value;
}
