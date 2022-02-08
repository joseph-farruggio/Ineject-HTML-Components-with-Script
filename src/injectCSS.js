const injectCSS = () => {
  var head = document.head;
  var link = document.createElement("link");

  link.type = "text/css";
  link.rel = "stylesheet";
  link.href = "./../dist/styles.css";
  head.appendChild(link);
}

export default injectCSS;
