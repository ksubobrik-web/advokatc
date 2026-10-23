/* Show the MAX contact only if the real profile link was configured. */
(function () {
  'use strict';
  function setup() {
    var el = document.getElementById('notalex-max-contact');
    var value = window.NOTALEX_MAX_PROFILE_URL;
    if (!el || typeof value !== 'string' || !value.trim()) return;
    try {
      var url = new URL(value.trim());
      // Only accept MAX direct-profile and bot links; never guess a URL by telephone.
      if (url.protocol !== 'https:' || url.hostname !== 'max.ru' ||
          !(/^\/u\/[^/?#]+/.test(url.pathname) || /^\/@[^/?#]+/.test(url.pathname))) return;
      el.href = url.href;
      el.hidden = false;
    } catch (err) { /* invalid URL, keep hidden */ }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', setup, {once:true});
  else setup();
})();
