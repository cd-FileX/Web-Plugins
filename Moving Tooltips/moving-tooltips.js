/* 
Moving ToolTips Website Plugin by cd-FileX
Version 1.0.0
Example: https://cd-Filex.github.io/FlexBot/

Issues: https://github.com/cd-FileX/Web-Plugins/issues
*/

// ! THIS SYSTEM DOES NOT WORK ON MOBILE DEVICES

var el, tt_els, i;


for (i = 0; i < (tt_els = document.getElementsByClassName('filex-toolTip')).length; i++) {
	tt_els[i].addEventListener('mousemove', (evt) => {
		el = document.getElementById('fxt-curToolTip');

		// Attributes
		if (el.innerHTML != evt.currentTarget.getAttribute('aria-label')) el.innerHTML = evt.currentTarget.getAttribute('aria-label');
		if (el.style.visibility != "visible") el.style.visibility = "visible";
		if (el.style.opacity != 1) el.style.opacity = 1;

		// Position
		el.style.left = `${evt.pageX - (el.offsetWidth / 2)}px`;
		evt.currentTarget.classList.contains('toolTipTop') ? 
			(el.style.top = `${evt.pageY - el.offsetHeight - 10}px`) : 
			(el.style.top = `${evt.pageY + el.offsetHeight}px`);
	});

	tt_els[i].addEventListener('mouseleave', (evt) => {
		if (!evt.bubbles) {
			el = document.getElementById('fxt-curToolTip');
			el.style.opacity = 0;
			setTimeout(() => {
				if (el.style.opacity == 0) el.style.visibility = "hidden";
			}, 250);
		}
	});
}
