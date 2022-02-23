"use strict";

var user = { id: "908990)))", name: "Juliia", age: 33, email: "better@gmail.com", city: "Zaporozhye" }

var main = document.querySelector("#card-item")

main.className = "user-card"

user.show = function (nameid) {

    var card = document.getElementById(nameid)

    card.innerHTML = `<li>Id: ${this.id}</li> <li>Name: ${this.name}</li> <li>Age: ${this.age}</li> 
    <li>Email: ${this.email}</li> <li>City: ${this.city}</li>`
}
user.show("card-item")