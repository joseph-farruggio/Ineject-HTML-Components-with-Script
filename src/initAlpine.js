import Alpine from 'alpinejs'
import widget from './widget.js'

// import modal from './modal.js'
import widgetHTML from './../widget.html';

const initAlpine = () => {
    Alpine.data('widget', widget)
    window.Alpine = Alpine
    Alpine.start();

    document.getElementById("app").innerHTML = widgetHTML;
}

export default initAlpine;