// Navigation Buttons //

let switches = document.querySelector('.settings');

switches.addEventListener('click', (e) => {
  let sw = e.target;

  if (sw.tagName === 'INPUT') {
    if (sw.parentNode.className == "switch sw-on") {
      sw.parentNode.className = "switch sw-off"
    } else {
      sw.parentNode.className = "switch sw-on"
    }
  }

});