"use strict";

let rusLang = document.getElementsByClassName('rus')[0],
    engLang = document.getElementsByClassName('eng')[0],
    btnRU = document.querySelectorAll('.btn__ru')[0],
    btnENG = document.querySelectorAll('.btn__eng')[1];

function checkHideTag(elemForRemoveHide, elemForAddHide) {
  if (elemForRemoveHide.classList.contains('hide-element')) {
		elemForRemoveHide.classList.remove('hide-element');
    elemForAddHide.classList.add('hide-element');
	}
}

btnRU.addEventListener('click', () => {
	checkHideTag(rusLang, engLang);
});

btnENG.addEventListener('click', () => {
	checkHideTag(engLang, rusLang);
});
