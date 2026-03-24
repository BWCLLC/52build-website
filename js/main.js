document.addEventListener('DOMContentLoaded', function() {

    // ─── Mobile Nav Toggle ───
    var t = document.getElementById('mobileToggle'),
        l = document.getElementById('navLinks');
    if (t && l) {
        t.addEventListener('click', function() { l.classList.toggle('open'); });
        l.querySelectorAll('a').forEach(function(a) {
            a.addEventListener('click', function() { l.classList.remove('open'); });
        });
    }

    // ─── Gallery Tabs ───
    document.querySelectorAll('.gallery-tab').forEach(function(tab) {
        tab.addEventListener('click', function() {
            document.querySelectorAll('.gallery-tab').forEach(function(t) { t.classList.remove('active'); });
            document.querySelectorAll('.gallery-panel').forEach(function(p) { p.classList.remove('active'); });
            tab.classList.add('active');
            var panel = document.getElementById(tab.dataset.panel);
            if (panel) panel.classList.add('active');
        });
    });

    // ─── Dark/Light Theme Toggle ───
    var saved = localStorage.getItem('52build-theme');
    if (saved === 'light') {
        document.body.classList.add('light');
    }

    var toggle = document.getElementById('themeToggle');
    if (toggle) {
        toggle.addEventListener('click', function() {
            document.body.classList.toggle('light');
            var isLight = document.body.classList.contains('light');
            localStorage.setItem('52build-theme', isLight ? 'light' : 'dark');
        });
    }

});

// ============================================
// APP LINK OVERRIDE — Remove when app is ready
// ============================================
document.querySelectorAll('.nav-cta').forEach(el => {
  el.href = '#';
  el.removeAttribute('target');
  el.innerHTML = el.innerHTML.replace(/Open App/i, 'Coming Soon');
  el.style.opacity = '0.5';
  el.style.pointerEvents = 'none';
  el.style.cursor = 'default';
});

var mobileBar = document.querySelector('.mobile-app-bar');
if (mobileBar) mobileBar.style.display = 'none';

document.querySelectorAll('a[href*="app.52-build.com"]').forEach(el => {
  if (el.closest('.footer-links')) return;
  el.href = '#';
  el.removeAttribute('target');
  if (el.textContent.includes('Track Your Project')) el.textContent = 'App Coming Soon';
  if (el.textContent.includes('Open the App')) el.textContent = 'App Coming Soon';
  el.style.opacity = '0.5';
  el.style.pointerEvents = 'none';
});
// ============================================
