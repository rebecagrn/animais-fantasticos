/** Tab animais */
function Tabnav() {
    const tabmenu = document.querySelectorAll('.js-tabmenu li');
    const tabcontent = document.querySelectorAll('.js-tabcontent section');

    function activeTab(index) {
        tabcontent.forEach((section) => {
            section.classList.remove('active');
        });
        tabcontent[index].classList.toggle('active');

    }

    tabmenu.forEach((itemMenu, index) => {
        itemMenu.addEventListener('click', () => {
            activeTab(index);
        })
    });
}
Tabnav();

/** Accordion List */
function initAccordion() {
    const accordionList = document.querySelectorAll('.js-accordion dt');
    accordionList[0].classList.add('active');
    accordionList[0].nextElementSibling.classList.add('active');;

    function activeAccordion() {
        this.classList.toggle('active');
        this.nextElementSibling.classList.toggle('active');
    }
    accordionList.forEach((item) => {
        item.addEventListener('click', activeAccordion);
    });
}
initAccordion();