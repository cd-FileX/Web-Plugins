/* 
Modals Website Plugin by cd-FileX
Version 1.0.0
Licensed under GPL-3.0 license
Example: https://cd-Filex.github.io/FlexBot/

Issues: https://github.com/cd-FileX/Web-Plugins/issues
*/

var modal_layer;


function openModal(t, c, id, classes) {
	if (document.getElementsByClassName('fx-modal')[0]) document.getElementsByClassName('fx-modal')[0].remove();

	modal_layer = document.getElementById('filex-modals');
	
	modal = document.createElement('div');
	modal.id = id;
	for (i = 0; i < classes.length; i++) modal.classList.add(classes[i]);
	modal.classList.add('fx-modal');

	modal.innerHTML=`
		<div id="fx-modal-top">
			<h4 id="fx-modal-title">
				${t}
			</h4>
			<button id="fx-modal-close" class="fx-m-c" role="button">
				×
			</button>
		</div>
		<div class="fxm-divider"></div>
		<span id="fx-modal-content">
			${c}
		</span>`;

	// Button Click
	modal.getElementsByClassName('fx-m-c')[0].addEventListener('click', close);
	modal.getElementsByClassName('fx-m-c')[0].addEventListener('keyup', close)
	function close(e) {
		if (typeof e.key && (e.key == "Shift" || e.key == "Tab")) return;

		modal_layer.classList.add('fxm-closing');
		setTimeout(() => {
			if (document.getElementsByClassName('fx-modal')[0]) modal_layer.removeChild(document.getElementsByClassName('fx-modal')[0]);
			modal_layer.classList.remove('fxm-closing', 'fxm-opened');
		}, 125);
	}

	// Click Outside
	modal_layer.addEventListener('click', (e) => {
		if (document.getElementsByClassName('fx-modal')[0] == e.target || document.getElementsByClassName('fx-modal')[0].contains(e.target)) return; // Click Inside

		modal_layer.classList.add('fxm-closing');
		setTimeout(() => {
			if (document.getElementsByClassName('fx-modal')[0]) modal_layer.removeChild(document.getElementsByClassName('fx-modal')[0]);
			modal_layer.classList.remove('fxm-closing', 'fxm-opened');
		}, 125);
	});

	modal_layer.appendChild(modal);
	modal_layer.classList.add('fxm-opening');

	setTimeout(() => {
		modal_layer.classList.replace('fxm-opening', 'fxm-opened');
	}, 1);
}
