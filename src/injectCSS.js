const injectCSS = () => {
  var head = document.head;
  var link = document.createElement("link");

  link.type = "text/css";
  link.rel = "stylesheet";
  if (process.env.NODE_ENV  == 'production') {
    link.href = "https://cdn.jsdelivr.net/gh/joseph-farruggio/Ineject-HTML-Components-with-Script@master-built/styles.css";
  } else {
    link.href = "./../dist/styles.css";
  }
  head.appendChild(link);
}

export default injectCSS;
