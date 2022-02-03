import Alpine from 'alpinejs'
import dropdown from './dropdown.js'
import dropdownHtml from './../dropdown.html';

// import modal from './modal.js'
import modalHtml from './../modal.html';

const initAlpine = () => {
    Alpine.data('dropdown', dropdown)
    window.Alpine = Alpine
    Alpine.start();

    document.getElementById("dropdown").innerHTML = dropdownHtml;
    document.getElementById("modal").innerHTML = modalHtml;
}

export default initAlpine;