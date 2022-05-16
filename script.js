let titles = document.querySelectorAll(".paragraph-title");

let linksToc = document.querySelector(".links-toc");

let toc = document.querySelector(".toc-navbar");

titles = Array.from(titles);

titles.forEach (element => {
    let a = document.createElement("a");
    let li = document.createElement("li");
    // li.classList.add("navbar-item");
    // li.classList.add("pd-2rem-x");
    a.style.fontWeight = "550";

    a.innerHTML = element.innerHTML;
    a.href = "#" + element.id;
    li.appendChild(a);
    linksToc.appendChild(li);
    
})

toc.style.display = "block";