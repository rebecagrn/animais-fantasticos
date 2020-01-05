/** Navtab */
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
    const activeClass = 'active';
    if (accordionList.length) {
        accordionList[0].classList.toggle(activeClass);
        accordionList[0].nextElementSibling.classList.toggle(activeClass);

        function activeAccordion() {
            this.classList.toggle(activeClass);
            this.nextElementSibling.classList.toggle(activeClass);
        }
        accordionList.forEach((item) => {
            item.addEventListener('click', activeAccordion);
        });
    }
}
initAccordion();

/** Scroll suave */

function initscrollSuave() {
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

    function smoothScroll(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    }

    linksInternos.forEach((link) => {
        link.addEventListener('click', smoothScroll);
    });
}
initscrollSuave();