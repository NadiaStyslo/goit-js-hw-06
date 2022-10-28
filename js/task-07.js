let controlSize = document.getElementById('font-size-control');
let textSize = document.getElementById('text');

controlSize.oninput = function () {
  textSize.style.fontSize = controlSize.value + 'px';
};
