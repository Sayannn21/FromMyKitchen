const firebaseConfig = {
    apiKey: "AIzaSyAJQIpMxkimFUTmGOyYJ8mpEnh-_7O-pYg",
    authDomain: "frommykit.firebaseapp.com",
    databaseURL: "https://frommykit-default-rtdb.firebaseio.com",
    projectId: "frommykit",
    storageBucket: "frommykit.appspot.com",
    messagingSenderId: "406235715405",
    appId: "1:406235715405:web:a5adc30e09425e68780904"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var firebaseref = firebase.database().ref('/delivery-form/-NZm9i0p2bTid75C0NIy');
firebaseref.on("value", function (snapshot) {
    snapshot.forEach(function (element) {
        document.querySelector('#root').innerHTML +=
            `<div>${element.val()}</div>`
    });

})
var firebaseref = firebase.database().ref('/delivery-form/-NZmOI5ugDcK-hUOtP2G');
firebaseref.on("value", function (snapshot) {
    snapshot.forEach(function (element) {
        document.querySelector('#root2').innerHTML +=
            `<div>${element.val()}</div>`
    });

})

var agentdetailsdb = firebase.database().ref('agent-form');
document.getElementById('agent-form').addEventListener("submit", submitform);
function submitform(e) {
    e.preventDefault();
    var name = getElementVAl('name');
    var email = getElementVAl('email');
    var phone = getElementVAl('phone');
    var address = getElementVAl('address');

    savedata(name, email, phone, address);
}
const savedata = (name, email, phone, address) => {
    var newagentdetailsdb = agentdetailsdb.push();
    newagentdetailsdb.set({
        name: name,
        email: email,
        Phone: phone,
        address: address,
    });
};
const getElementVAl = (id) => {
    return document.getElementById(id).value;
}

