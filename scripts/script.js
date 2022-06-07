






let tocs = document.querySelectorAll(".toc-navbar");

tocs.forEach(element => {
    console.log(element);
    let titles = element.parentElement.parentElement.querySelectorAll(".paragraph-title");
    let linksToc = element.querySelector(".links-toc");
    titles = Array.from(titles);
    console.log(titles);
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

    element.style.display = "block";
    
});



