// Copper Kettle – kleine extra's, zonder framework.
(function () {
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // 1. Fade-in van secties als ze in beeld komen
  var items = document.querySelectorAll('[data-reveal]');

  if (reduceMotion || !('IntersectionObserver' in window)) {
    items.forEach(function (el) { el.classList.add('is-visible'); });
  } else {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });

    items.forEach(function (el) { observer.observe(el); });
  }

  // 2. Minder beweging gevraagd: hero-video niet automatisch afspelen, wel bedienbaar
  if (reduceMotion) {
    var video = document.querySelector('.hero__video');
    if (video) {
      video.removeAttribute('autoplay');
      video.pause();
      video.setAttribute('controls', '');
    }
  }
})();
