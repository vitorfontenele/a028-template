function insereItem(event){
    let ul = document.getElementById("lista");
    let input = document.getElementById("meu-input");
    let value = input.value;
    let li = document.createElement("li");
    li.textContent = value;
    ul.appendChild(li);
    input.value = "";
}