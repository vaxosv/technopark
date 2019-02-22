let el = document.getElementsByClassName("koub")[0]


for (let i = 0; i < 100; i++) {
    let a = document.createElement("input");
    a.style.display = "block"
    el.appendChild(a)    
}
