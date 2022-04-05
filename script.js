let titles = document.querySelectorAll(".paragraph-title");

let titlesToc = document.querySelector(".titles-toc");

titles = Array.from(titles);

titles.forEach (element => {
    let a = document.createElement("a");
    a.innerHTML = element.innerHTML;
    a.href = element.id;
    titlesToc.appendChild(a);
})