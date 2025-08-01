/* ======================= Typing Animation ======================= */
var typed = new Typed('.typing', {
    strings: ["", "Java Web Developer", "Android Developer", "Software Engineer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

/* ======================= Default Dark Theme ======================= */
document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("dark-theme");
});

/* ======================= Aside Navigation ======================= */
const nav = document.querySelector(".nav"),
      navList = nav.querySelectorAll("li"),
      totalNavList = navList.length,
      allSections = document.querySelectorAll(".section");

for (let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function () {
        removeBackSection();
        for (let j = 0; j < totalNavList; j++) {
            if (navList[j].querySelector("a").classList.contains("active")) {
                addBackSection(j);
            }
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active");
        showSection(this);
        if (window.innerWidth < 1200) {
            asideSectionToggleBtn();
        }
    });
}

function removeBackSection() {
    for (let i = 0; i < allSections.length; i++) {
        allSections[i].classList.remove("back-section");
    }
}

function addBackSection(num) {
    allSections[num].classList.add("back-section");
}

function showSection(element) {
    for (let i = 0; i < allSections.length; i++) {
        allSections[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active");
}

function updateNav(element) {
    for (let i = 0; i < totalNavList; i++) {
        navList[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1];
        if (target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
            navList[i].querySelector("a").classList.add("active");
        }
    }
}

/* ======================= Hire Me Button ======================= */
document.querySelector(".hire-me").addEventListener("click", function () {
    const sectionIndex = this.getAttribute("data-section-index");
    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSection(sectionIndex);
});

/* ======================= Aside Toggle Button ======================= */
const navTogglerBtn = document.querySelector(".nav-toggler"),
      aside = document.querySelector(".aside");

navTogglerBtn.addEventListener("click", () => {
    asideSectionToggleBtn();
});

function asideSectionToggleBtn() {
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for (let i = 0; i < allSections.length; i++) {
        allSections[i].classList.toggle("open");
        if (navList[i].querySelector("a").classList.contains("active")) {
            allSections[i].classList.add("back-section");
        }
    }
}
