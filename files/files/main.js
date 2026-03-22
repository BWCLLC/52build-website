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
