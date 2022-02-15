const injectCSS = () => {
	var head = document.head;
	var link = document.createElement("link");

	link.type = "text/css";
	link.rel = "stylesheet";
	link.href =
		"https://cdn.jsdelivr.net/gh/joseph-farruggio/Ineject-HTML-Components-with-Script@master-built/styles.min.css";

	// For local dev:
	// link.href = "./../dist/styles.css";
	head.appendChild(link);
};

export default injectCSS;
