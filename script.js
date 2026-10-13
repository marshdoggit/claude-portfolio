// Opens project dialogs and the screenshot viewer. No dependencies.
(function () {
  'use strict';

  var lightbox = document.getElementById('lightbox');
  var lbImg = document.getElementById('lb-img');
  var lbCap = document.getElementById('lb-cap');
  var items = [];
  var index = 0;

  function openProject(id, pushHash) {
    var dlg = document.getElementById(id);
    if (!dlg || typeof dlg.showModal !== 'function' || dlg.open) return;
    dlg.showModal();
    dlg.scrollTop = 0;
    if (pushHash) {
      try { history.replaceState(null, '', '#' + id); } catch (e) { /* ignore */ }
    }
  }

  document.querySelectorAll('[data-open]').forEach(function (btn) {
    btn.addEventListener('click', function () { openProject(btn.getAttribute('data-open'), true); });
  });

  document.querySelectorAll('dialog.project').forEach(function (dlg) {
    dlg.querySelector('[data-close]').addEventListener('click', function () { dlg.close(); });
    dlg.addEventListener('click', function (e) { if (e.target === dlg) dlg.close(); });
    dlg.addEventListener('close', function () {
      if (location.hash === '#' + dlg.id) {
        try { history.replaceState(null, '', location.pathname + location.search); } catch (e) { /* ignore */ }
      }
    });
  });

  function show(i) {
    if (!items.length) return;
    index = (i + items.length) % items.length;
    var b = items[index];
    lbImg.src = b.getAttribute('data-src');
    lbImg.alt = b.getAttribute('data-caption') || '';
    lbCap.textContent = (b.getAttribute('data-caption') || '') + '  (' + (index + 1) + ' of ' + items.length + ')';
  }

  document.querySelectorAll('[data-zoom]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var group = btn.closest('[data-group]');
      items = group ? Array.prototype.slice.call(group.querySelectorAll('[data-zoom]')) : [btn];
      show(items.indexOf(btn));
      lightbox.showModal();
    });
  });

  document.getElementById('lb-prev').addEventListener('click', function () { show(index - 1); });
  document.getElementById('lb-next').addEventListener('click', function () { show(index + 1); });
  document.getElementById('lb-close').addEventListener('click', function () { lightbox.close(); });
  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox || e.target.classList.contains('lb')) lightbox.close();
  });
  lightbox.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') { show(index - 1); e.preventDefault(); }
    if (e.key === 'ArrowRight') { show(index + 1); e.preventDefault(); }
  });
  lightbox.addEventListener('close', function () { lbImg.removeAttribute('src'); });

  // Deep link: index.html#guest-checkout opens that project.
  if (location.hash.length > 1) {
    var id = decodeURIComponent(location.hash.slice(1));
    var target = document.getElementById(id);
    if (target && target.matches('dialog.project')) {
      window.addEventListener('load', function () { openProject(id, false); });
    }
  }
})();
