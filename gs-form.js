(function () {
    window.GS_GOOGLE_SCRIPT_URL =
        'https://script.google.com/macros/s/AKfycbw9GETXoKpXtsfgCeZ3t1dVdd2oxyDqq8ii_hhhhvmgz47NCGc9FWuvtiuirUeaGTui/exec';

    window.GS_getInquiryType = function () {
        var type = new URLSearchParams(window.location.search).get('inquiry');
        return type === 'demo' ? 'demo' : 'contact';
    };

    window.GS_setupSheetForm = function (options) {
        var form = document.getElementById(options.formId);
        if (!form) return;

        form.action = window.GS_GOOGLE_SCRIPT_URL;
        form.method = 'POST';
        if (options.iframeName) form.target = options.iframeName;

        var successEl = document.getElementById(options.successId);
        var errorEl = document.getElementById(options.errorId);
        var submitBtn = form.querySelector('.submit-btn');
        var inquiryType = options.inquiryType || window.GS_getInquiryType();

        form.addEventListener('submit', function () {
            var timestampEl = document.getElementById(options.timestampId);
            if (timestampEl) timestampEl.value = new Date().toISOString();

            var companyEl = document.getElementById(options.companyId);
            var countryEl = document.getElementById(options.countryId);
            if (companyEl && countryEl) countryEl.value = companyEl.value;

            var siteTypeEl = document.getElementById(options.siteTypeId);
            var interestEl = document.getElementById(options.interestId);
            if (interestEl) {
                var label = inquiryType === 'demo' ? 'GenbaSense Demo' : 'GenbaSense Contact';
                var siteType = siteTypeEl && siteTypeEl.value ? siteTypeEl.value : '';
                interestEl.value = siteType ? label + ' | ' + siteType : label;
            }

            var messageEl = document.getElementById(options.messageId);
            if (messageEl && siteTypeEl && siteTypeEl.value) {
                var body = messageEl.value.trim();
                var prefix = 'Site type: ' + siteTypeEl.value;
                messageEl.value = body ? prefix + '\n\n' + body : prefix;
            }

            var lang = window.GS_getLang ? window.GS_getLang() : 'en';
            var strings = window.GS_I18N && window.GS_I18N[lang];
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.textContent = (strings && strings.form_submitting) || 'Submitting...';
            }

            setTimeout(function () {
                if (successEl) successEl.style.display = 'block';
                if (errorEl) errorEl.style.display = 'none';
                form.reset();
                if (submitBtn) {
                    submitBtn.disabled = false;
                    var submitKey = inquiryType === 'demo' ? 'form_submit_demo' : 'form_submit';
                    submitBtn.textContent = (strings && strings[submitKey]) || 'Send message';
                }
            }, 1000);
        });
    };

    window.GS_applyInquiryCopy = function () {
        var inquiryType = window.GS_getInquiryType();
        if (inquiryType !== 'demo') return;

        var title = document.querySelector('[data-inquiry-title]');
        var lead = document.querySelector('[data-inquiry-lead]');
        var submit = document.querySelector('[data-inquiry-submit]');
        var lang = window.GS_getLang ? window.GS_getLang() : 'en';
        var strings = window.GS_I18N && window.GS_I18N[lang];
        if (!strings) return;

        if (title) title.textContent = strings.contact_title_demo || strings.contact_title;
        if (lead) lead.textContent = strings.contact_lead_demo || strings.contact_lead;
        if (submit) submit.textContent = strings.form_submit_demo || strings.form_submit;
    };
})();
