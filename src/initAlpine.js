import widgetAlpine from "alpinejs";
import widget from "./widget.js";

// import modal from './modal.js'
import widgetHTML from "./../widget.html";

const initAlpine = () => {
	widgetAlpine.data("widget", widget);
	window.widgetAlpine = widgetAlpine;
	widgetAlpine.start();

	document.getElementById("app").innerHTML = widgetHTML;
};

export default initAlpine;
