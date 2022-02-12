const injectCSS = () => {
	var head = document.head;
	var link = document.createElement("link");

	link.type = "text/css";
	link.rel = "stylesheet";
	if (process.env.NODE_ENV == "production") {
		link.href =
			"https://rawcdn.githack.com/joseph-farruggio/Ineject-HTML-Components-with-Script/45f29714f100a4aa1a680a824eb58ec4d2a1971d/dist/styles.css";
	} else {
		link.href = "./../dist/styles.css";
	}
	head.appendChild(link);
};

export default injectCSS;
