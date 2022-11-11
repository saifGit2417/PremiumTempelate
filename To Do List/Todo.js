function addMore() {
    document.getElementById("error").innerHTML = ""
    let name = document.getElementById("name").value
    if (name === "") {
        document.getElementById("error").innerHTML = "*Please enter some task"
    } else {
        let box = document.getElementById("box");
        box.style.width="80vw"
        box.style.marginLeft="10vw"
        box.style.textAlign="center"
        let li = document.createElement("li")
        li.textContent = name;
        li.style.fontSize = "40px"
        let a = document.createElement("a")
        a.textContent = "Task Completed"
        a.style.textDecoration = "none"
        a.style.color = "green"
        a.style.fontSize = "20px"
        a.style.marginLeft = "20vw"
        a.href = "javascript:void(0)";
        a.className = "remove";
        li.appendChild(a);
        let pos = box.firstElementChild;
        if (pos === null) {
            box.appendChild(li)
        } else {
            box.insertBefore(li, pos)
        }
    }
    name = document.getElementById("name").value = ""
}

let button = document.querySelector("ol");
button.addEventListener("click", (e) => {
    let box = document.getElementById("box");
    let li = e.target.parentNode;
    box.removeChild(li)
})