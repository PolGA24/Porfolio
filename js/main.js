/* Portfolio — interacción: modo claro/oscuro, navegación activa, visor y formulario */
(function () {
  'use strict';

  var root = document.documentElement;

  // Traducción segura: si i18n.js no está cargado, devuelve el texto por defecto
  function t(key, fallback) {
    return (window.i18n && window.i18n.t(key)) || fallback;
  }

  function storageSet(key, value) {
    try { localStorage.setItem(key, value); } catch (e) { /* almacenamiento no disponible */ }
  }

  /* ---------- Modo claro / oscuro ---------- */
  var themeToggle = document.getElementById('theme-toggle');
  var themeMeta = document.querySelector('meta[name="theme-color"]');

  function updateThemeUi() {
    var isDark = root.getAttribute('data-theme') === 'dark';
    themeToggle.setAttribute('aria-label', isDark
      ? t('theme.toLight', 'Cambiar a modo claro')
      : t('theme.toDark', 'Cambiar a modo oscuro'));
    themeToggle.setAttribute('title', themeToggle.getAttribute('aria-label'));
    if (themeMeta) themeMeta.setAttribute('content', isDark ? '#15120F' : '#FAF8F5');
  }

  function applyTheme(theme, persist) {
    root.setAttribute('data-theme', theme);
    if (persist) storageSet('theme', theme);
    updateThemeUi();
  }

  themeToggle.addEventListener('click', function () {
    applyTheme(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark', true);
  });

  // Si el usuario no ha elegido tema, seguimos el del sistema en tiempo real
  var darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
  var onSystemChange = function (e) {
    var saved = null;
    try { saved = localStorage.getItem('theme'); } catch (err) {}
    if (!saved) applyTheme(e.matches ? 'dark' : 'light', false);
  };
  if (darkQuery.addEventListener) darkQuery.addEventListener('change', onSystemChange);
  else if (darkQuery.addListener) darkQuery.addListener(onSystemChange);

  updateThemeUi();
  document.addEventListener('languagechange', updateThemeUi);

  /* ---------- Sección activa en los menús ---------- */
  var navLinks = document.querySelectorAll('[data-section]');
  var sections = ['about', 'experience', 'projects', 'skills', 'contact']
    .map(function (id) { return document.getElementById(id); })
    .filter(Boolean);

  function setActive(id) {
    navLinks.forEach(function (link) {
      var active = link.getAttribute('data-section') === id;
      link.classList.toggle('is-active', active);
      if (active) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }

  if ('IntersectionObserver' in window) {
    var visible = {};
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) { visible[entry.target.id] = entry.isIntersecting; });
      var current = null;
      sections.forEach(function (section) { if (!current && visible[section.id]) current = section.id; });
      setActive(current);
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach(function (section) { observer.observe(section); });
  }

  /* ---------- Visor de imágenes de proyectos ---------- */
  var lightbox = document.getElementById('lightbox');
  var lightboxImg = document.getElementById('lightbox-img');

  document.querySelectorAll('.zoomable').forEach(function (button) {
    var img = button.querySelector('img');
    var label = function () { return t('a11y.enlarge', 'Ampliar imagen') + ': ' + img.alt; };
    button.setAttribute('aria-label', label());
    document.addEventListener('languagechange', function () { button.setAttribute('aria-label', label()); });

    button.addEventListener('click', function () {
      if (typeof lightbox.showModal !== 'function') {
        window.open(button.getAttribute('data-full'), '_blank', 'noopener');
        return;
      }
      lightboxImg.src = button.getAttribute('data-full');
      lightboxImg.alt = img.alt;
      lightbox.showModal();
    });
  });

  document.getElementById('lightbox-close').addEventListener('click', function () { lightbox.close(); });
  // Cerrar al pulsar fuera de la imagen
  lightbox.addEventListener('click', function (e) { if (e.target === lightbox) lightbox.close(); });

  /* ---------- Formulario de contacto (abre el correo del visitante) ---------- */
  var form = document.getElementById('contact-form');
  var notice = document.getElementById('contact-notice');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var name = form.elements.name.value.trim();
    var email = form.elements.email.value.trim();
    var message = form.elements.message.value.trim();

    var subject = t('form.subject', 'Contacto desde el portfolio') + ' — ' + name;
    var body = message + '\n\n— ' + name + ' (' + email + ')';

    window.location.href = 'mailto:polgonzarri@gmail.com'
      + '?subject=' + encodeURIComponent(subject)
      + '&body=' + encodeURIComponent(body);
    notice.hidden = false;
  });

  /* ---------- Año del pie ---------- */
  document.getElementById('year').textContent = new Date().getFullYear();
})();
