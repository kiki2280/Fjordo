
// табы
const tabsBtns = document.querySelectorAll(".tabs__nav button");
const tabsItems = document.querySelectorAll(".tabs__item");


// ф-я скрывает табы и убирает active у кнопок 
function hideTabs () {
    tabsItems.forEach(item => item.classList.add("hide"));
    tabsBtns.forEach(item => item.classList.remove("active"));
}

//ф-я показывает переданный номер таба и делает соотвецтвоющую ему кнопку активной.
function showTab(index) {
    tabsItems[index].classList.remove("hide");
    tabsBtns[index].classList.add("active");
}

hideTabs();
showTab(0);


tabsBtns.forEach((btn, index) => btn.addEventListener("click", () => {
    hideTabs();
    showTab(index);
}));

// якорные ссылки 
const anchors = document.querySelectorAll(".header__nav a");
// console.log (anchors);
anchors.forEach(anc => {
    anc.addEventListener("click", function(event) {
        event.preventDefault(); 

        const id = anc.getAttribute("href");
        const elem = document.querySelector(id);

        window.scroll({
            top: elem.offsetTop -74,
            behavior:'smooth' //медленная прокрутка
        });
        
    });
});