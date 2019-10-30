export function carousel(target) {
  let item = target.children[0];
  let itemWidth = item.offsetWidth;
  let itemMargin = parseInt(document.defaultView.getComputedStyle(item).marginRight);
  let startedAt, duration = 3000;
  let domain = [0, itemWidth + itemMargin];
  let range = domain[1] - domain[0];

  function start() {
    startedAt = Date.now();
    target.appendChild(target.children[0].cloneNode(true));
    updateTarget(0);
    requestAnimationFrame(update);
  }

  function update() {
    let elapsedTime = Date.now() - startedAt;
    let playback = elapsedTime / duration;

    updateTarget(playback);

    if (playback > 0 && playback < 1) {
    	requestAnimationFrame(update);
    } else {
      target.removeChild(target.children[0]);
      target.style.left = 0;
    	setTimeout(start, duration);
    }
  }

  function updateTarget(playback) {
    let position = domain[0] + (playback * range);

    target.style.left = '-' + position + 'px';
  }

  start();
}
