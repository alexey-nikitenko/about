// Shared site chrome: loads header.html / footer.html into placeholder divs,
// marks the current page active in both navs, wires the mobile menu, sets the year.
(function () {
    function currentPage() {
        var path = location.pathname.split('/').pop() || 'index.html';
        return path.split('?')[0].split('#')[0] || 'index.html';
    }

    function markActive(root) {
        var page = currentPage();
        root.querySelectorAll('[data-nav] a[href]').forEach(function (a) {
            var target = a.getAttribute('href');
            if (target !== page) return;
            if (a.closest('[data-nav="desktop"]')) {
                a.className = 'text-blue-400 hover:text-white px-3 py-2';
            } else {
                a.className = 'block bg-gray-700 px-4 py-3 rounded-lg';
            }
        });
    }

    function initMobileMenu(container) {
        var btn = container.querySelector('#mobile-menu-btn');
        var menu = container.querySelector('#mobile-menu');
        if (!btn || !menu) return;
        btn.addEventListener('click', function () { menu.classList.toggle('hidden'); });
        menu.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () { menu.classList.add('hidden'); });
        });
    }

    function loadComponent(elementId, filePath, after) {
        fetch(filePath)
            .then(function (r) {
                if (!r.ok) throw new Error(r.status + ' ' + r.statusText);
                return r.text();
            })
            .then(function (html) {
                var host = document.getElementById(elementId);
                if (!host) return;
                host.innerHTML = html;
                markActive(host);
                initMobileMenu(host);
                if (elementId === 'footer-placeholder' && window.lucide) {
                    lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
                }
                if (after) after(host);
            })
            .catch(function (err) { console.error('Error loading ' + filePath + ':', err); });
    }

    document.addEventListener('DOMContentLoaded', function () {
        loadComponent('header-placeholder', 'header.html');
        loadComponent('footer-placeholder', 'footer.html', function (host) {
            var yearEl = host.querySelector('#currentYear');
            if (yearEl) yearEl.textContent = new Date().getFullYear();
        });
    });
})();
