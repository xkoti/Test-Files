function isElementOverflowing(element) {
  var overflowX = element.offsetWidth < element.scrollWidth,
    overflowY = element.offsetHeight < element.scrollHeight;

  return (overflowX || overflowY);
}

function wrapContentsInMarquee(element) {
  var marquee = document.createElement('marquee'),
    contents = element.innerText;

  marquee.innerText = contents;
  element.innerHTML = '';
  element.appendChild(marquee);
}

var element = document.getElementById('overflow');

if (isElementOverflowing(element)) {
  wrapContentsInMarquee(element);
}