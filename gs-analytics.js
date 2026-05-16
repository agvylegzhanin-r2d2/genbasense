(function () {
    function getVisitorId() {
        var key = 'gs_visitor_id';
        try {
            var id = localStorage.getItem(key);
            if (!id) {
                id =
                    'v_' +
                    (typeof crypto !== 'undefined' && crypto.randomUUID
                        ? crypto.randomUUID()
                        : Math.random().toString(36).slice(2) + Date.now().toString(36));
                localStorage.setItem(key, id);
            }
            return id;
        } catch (e) {
            return 'v_session_' + Date.now();
        }
    }

    function trackPageView() {
        var base = window.GS_ANALYTICS_URL;
        if (!base || typeof base !== 'string') return;

        var page = location.pathname.split('/').pop() || 'index.html';
        var params = new URLSearchParams({
            visitor: getVisitorId(),
            page: page,
            ref: document.referrer ? document.referrer.slice(0, 500) : '',
            lang: document.documentElement.lang || navigator.language || 'en',
            site: 'GenbaSense',
        });

        var sep = base.indexOf('?') >= 0 ? '&' : '?';
        var url = base + sep + params.toString();
        var img = new Image();
        img.referrerPolicy = 'no-referrer-when-downgrade';
        img.src = url;
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', trackPageView);
    } else {
        trackPageView();
    }
})();
