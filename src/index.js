import html from './../markup.html';
function addCss(fileName) {

  var head = document.head;
  var link = document.createElement("link");

  link.type = "text/css";
  link.rel = "stylesheet";
  link.href = fileName;

  head.appendChild(link);
}

addCss('https://cdn.jsdelivr.net/gh/joseph-farruggio/Ineject-HTML-Components-with-Script/dist/styles.css');

import Alpine from 'alpinejs'
Alpine.data('toggled', () => ({
    open: false,

    toggle() {
        this.open = ! this.open
    }
}))

window.Alpine = Alpine
Alpine.start();

document.getElementById("app").innerHTML = html;