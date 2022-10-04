let ul = document.getElementById("lista");

let li5 = document.createElement("li");

li5.textContent = "Item 5";

ul.appendChild(li5);

let li0 = document.createElement("li");

li0.textContent = "Item 0";

ul.insertAdjacentElement("afterbegin", li0);