let c = 3;
let b = document.getElementById("addButton")
let l = document.getElementById("list")
b.addEventListener("click",function(){
    let n = document.createElement("li");
    n.innerHTML = `list ${c}`;
    l.append(n);
    c++;
});