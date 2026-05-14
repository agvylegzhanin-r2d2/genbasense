(function () {
    var STORAGE_KEY = 'genbasense-lang';
    var currentLang = localStorage.getItem(STORAGE_KEY) || 'en';

    var t = {
        en: {
            page_title: 'GenbaSense – Digital safety sense for all workers on site',
            lang_btn_to_ja: '🇯🇵 日本語',
            lang_btn_to_en: '🇺🇸 English',
            nav_home: 'Home',
            nav_customers: 'Our customers',
            nav_solutions: 'Solution',
            nav_usecases: 'Use cases',
            nav_team: 'Team',
            nav_product: 'Product',
            nav_contact: 'Contact',
            info_tag: 'UWB Safety Solution',
            info_headline: 'Visualize invisible risks.',
            info_subheadline: 'Real-time collision prevention and surveillance for safer industrial operations. Save on insurance, compensations and work stoppage costs.',
            info_sub: 'Next-generation site safety powered by UWB and haptics.',
            hero_title: 'Site Safety to Prevent Machinery Collisions',
            hero_tagline: 'For general contractors, subcontractors, and site managers, GenbaSense uses real-time UWB positioning and instant haptic alerts so workers stay aware of moving equipment—even in noise and low visibility.',
            hero_stat_label: 'Non-fatal construction injury cases per year in Japan—vehicle and machinery accidents are the most common.',
            btn_contact: 'Get in touch',
            btn_book_demo: 'Book a demo',
            pillar1_title: 'Real-Time Proximity Visibility',
            pillar1_text: 'See where workers and moving machinery are in real time with UWB anchors (1\u00a0cm–50\u00a0m), so safety decisions are based on data—not guesswork.',
            pillar2_title: 'AI-Driven Collision Prevention',
            pillar2_text: 'AI tracks positions and triggers instant haptic feedback when a worker enters a danger zone—reducing collision risk without relying on sight or sound.',
            pillar3_title: 'Works Without Network',
            pillar3_text: 'Operates offline on site. Haptic alerts work in noisy environments and low-visibility conditions where alarms and radios fail.',
            serve_eyebrow: 'Target customers',
            serve_title: 'Who We Serve',
            serve_lead: 'GenbaSense helps site operation companies reduce accidents, insurance costs, and downtime',
            serve1_title: 'Construction sites',
            serve2_title: 'Warehouse operators',
            serve3_title: 'Logistics centers',
            serve4_title: 'Heavy machinery production',
            challenge_eyebrow: 'Site safety challenges',
            challenge_title: 'Real-World Challenges',
            challenge_lead: 'GenbaSense addresses the structural risks that make construction sites dangerous and expensive—by making proximity measurable, alerting instantly, and turning movement into actionable data.',
            ch1_title: 'Machinery collisions are invisible until too late',
            ch1_text: 'Workers in blind spots around forklifts, cranes, and bulldozers often cannot see or hear approaching equipment in time.',
            ch2_title: 'Noise blocks auditory warnings',
            ch2_text: 'Alarms and radios fail on loud sites. Safety signals must reach workers through another channel—haptic feedback.',
            ch3_title: 'Low visibility conditions',
            ch3_text: 'Dust, weather, and night work reduce visual awareness. Traditional PPE does not close the awareness gap.',
            ch4_title: 'Accidents carry heavy financial cost',
            ch4_text: 'Lost workdays, rising insurance premiums, compensation (¥1M–¥10M), and work stoppages drain project budgets.',
            ch5_title: 'Safety data is not collected systematically',
            ch5_text: 'Hot zones and worker movement patterns are rarely measured, making proactive risk management difficult.',
            ch6_title: 'Compliance pressure is increasing',
            ch6_text: 'ISO\u00a045001 and internal safety reviews demand evidence of proactive hazard control—not reactive reporting.',
            challenge_highlight: 'Accidents are a financial risk—not just a safety issue.',
            sol_eyebrow: 'Our approach',
            sol_title: 'How Our Technology Works',
            sol_lead: 'GenbaSense turns site movement into real-time safety—by detecting proximity, alerting with haptics, and analyzing patterns for continuous improvement.',
            step1_title: 'Detect proximity with UWB',
            step1_text: 'UWB anchors track worker and equipment positions in real time—without network connectivity.',
            step1_text2: 'UWB distance detection works from a few cm to 50 meters.',
            step2_title: 'Alert instantly with haptics',
            step2_text: 'Identifiable haptic patterns warn workers the moment they enter a danger zone—works in noise and low visibility.',
            step3_title: 'Analyze hot zones',
            step3_text: 'Movement and zone data feed analytics for safety meetings, compliance evidence, and site layout optimization.',
            stats_eyebrow: 'Why GenbaSense',
            stats_title: 'Construction Safety by the Numbers',
            stats_lead: 'Structural risks on site are measurable—and they compound without new approaches to worker awareness.',
            stat1_label: 'Non-fatal injury cases per year on construction sites and warehouses',
            stat2_label: 'Of daily wages paid for lost workdays after accidents',
            stat3_label: 'Compensation range for serious injuries',
            stat5_label: 'Fatal cases in 2025',
            stat6_label: 'Average days of lost work per injury',
            cases_eyebrow: 'Customer cases',
            cases_title: 'Use Cases',
            cases_lead: 'Real-world construction scenarios where proximity visibility and haptic alerts make an impact.',
            case1_title: 'Cost reduction',
            case1_text: 'Save on insurance and compensation through fewer accidents. Prevent delays and work stoppages on site.',
            case2_title: 'Data & compliance',
            case2_text: 'Hot-zone data for ISO\u00a045001 evidence, proactive risk management, and internal safety meetings.',
            product_title: 'Hardware and Software',
            hw1: '• Precise positioning',
            hw2: '• Identifiable haptic stimuli and multiple haptic patterns',
            hw3: '• Human subject research completed',
            hw4: '• Patent application filed',
            hw5: '• Beta MVP planned for March',
            team_title: 'Team',
            team_alex_description: 'Head of Customer Relations',
            team_sergey_description: 'Head of R&D',
            team_chris_description: 'Head of Technology',
            backed_by_title: 'Backed by OIST',
            funding_title: 'Funding',
            funding_lead: 'Past funding: $150K grant from OIST Innovation.<br>Raising a $400K pre-seed round via J-KISS (Japan SAFE) at a $2.5M post-money valuation. Allocation: product development, operations, and marketing.',
            contact_eyebrow: 'Get in touch',
            contact_title: 'Contact Us Today',
            contact_lead: "Have questions about GenbaSense? Reach out to our team and let's discuss how we can improve safety on your site.",
            contact_title_demo: 'Book a Demo',
            contact_lead_demo: 'Schedule a GenbaSense demo with our team. Tell us about your site and we will show you how real-time proximity alerts work in the field.',
            back_link: '← Back to product choice',
            back_to_genba: '← Back to GenbaSense',
            btn_contact_nav: 'Contact',
            form_name: 'Full Name',
            form_email: 'Email',
            form_phone: 'Phone Number',
            form_company: 'Company',
            form_site_type: 'Type of site',
            form_site_type_ph: 'Select site type (construction, warehouse, etc.)',
            site_type_construction: 'Construction',
            site_type_warehouse: 'Warehouse',
            site_type_manufacturing: 'Manufacturing',
            site_type_logistics: 'Logistics',
            site_type_other: 'Other',
            form_message: 'Message',
            form_message_ph: 'Tell us about your site and safety needs...',
            form_submit: 'Send message',
            form_submit_demo: 'Request demo',
            form_submitting: 'Submitting...',
            form_success: "Thank you! We'll contact you soon.",
            form_error: 'Something went wrong. Please try again.'
        },
        ja: {
            page_title: 'GenbaSense – 現場のすべての作業員のためのデジタル安全センス',
            lang_btn_to_ja: '🇯🇵 日本語',
            lang_btn_to_en: '🇺🇸 English',
            nav_home: 'ホーム',
            nav_customers: 'お客様',
            nav_solutions: 'ソリューション',
            nav_usecases: 'ユースケース',
            nav_team: 'チーム',
            nav_product: '製品',
            nav_contact: 'お問い合わせ',
            info_tag: 'UWB安全ソリューション',
            info_headline: '見えないリスクを、可視化する。',
            info_subheadline: 'リアルタイムの衝突防止と監視で、より安全な産業現場を実現。',
            info_sub: 'UWBとハプティクスが実現する、次世代の現場安全。',
            hero_title: '現場安全で、重機衝突を防ぐ',
            hero_tagline: 'ゼネコン、下請け、現場管理者のために、GenbaSenseはリアルタイムUWB測位と即時ハプティック警報により、騒音や視界不良の中でも作業員が移動機械の存在を把握できるようにします。',
            hero_stat_label: '日本では年間1万〜1.7万件の建設業非致死傷害—車両・重機事故が最多です。',
            btn_contact: 'お問い合わせ',
            btn_book_demo: 'デモを予約',
            pillar1_title: 'リアルタイム接近可視化',
            pillar1_text: 'UWBアンカー（1cm〜50m）で作業員と移動機械の位置をリアルタイム把握。推測ではなくデータに基づく安全判断を実現します。',
            pillar2_title: 'AIによる衝突防止',
            pillar2_text: 'AIが位置を追跡し、危険ゾーン進入時に即時ハプティックフィードバック。視覚や聴覚に頼らず衝突リスクを低減します。',
            pillar3_title: 'ネットワーク不要',
            pillar3_text: '現場でオフライン動作。警報や無線が機能しない騒音・低視界環境でもハプティック警報が有効です。',
            serve_eyebrow: '対象顧客',
            serve_title: 'サービス対象',
            serve_lead: 'GenbaSenseは、現場運営企業の事故・保険コスト・ダウンタイム削減を支援します。',
            serve1_title: '建設現場',
            serve2_title: '倉庫事業者',
            serve3_title: '物流センター',
            serve4_title: '重機製造',
            challenge_eyebrow: '現場安全の課題',
            challenge_title: '現実世界の課題',
            challenge_lead: 'GenbaSenseは、接近を可視化し、即時警報し、動きを実用的なデータに変えることで、建設現場を危険かつ高コストにする構造的リスクに対処します。',
            ch1_title: '重機衝突は手遅れになるまで見えない',
            ch1_text: 'フォークリフト、クレーン、ブルドーザーの死角では、作業員は接近する機械を見えず聞こえないことが多い。',
            ch2_title: '騒音が聴覚警告を遮る',
            ch2_text: '騒がしい現場では警報や無線が機能しない。別のチャネル—ハプティック—で安全信号を届ける必要がある。',
            ch3_title: '低視界条件',
            ch3_text: '粉塵、天候、夜間作業が視覚認識を低下。従来のPPEでは認識ギャップを埋められない。',
            ch4_title: '事故は大きな経済的コストを伴う',
            ch4_text: '休業日、保険料上昇、賠償（100万〜1000万円）、作業停止がプロジェクト予算を圧迫。',
            ch5_title: '安全データが体系的に収集されない',
            ch5_text: 'ホットゾーンと作業員の動線はほとんど測定されず、能動的リスク管理が困難。',
            ch6_title: 'コンプライアンス圧力の増大',
            ch6_text: 'ISO 45001と社内安全レビューは、事後報告ではなく能動的危険管理の証拠を求める。',
            challenge_highlight: '事故は安全問題だけでなく、財務リスクでもある。',
            sol_eyebrow: '私たちのアプローチ',
            sol_title: '技術の仕組み',
            sol_lead: 'GenbaSenseは接近検知、ハプティック警報、パターン分析により、現場の動きをリアルタイム安全に変換します。',
            step1_title: 'UWBで接近を検知',
            step1_text: 'UWBアンカーがネットワーク不要で作業員と機械の位置をリアルタイム追跡。',
            step1_text2: 'UWB距離検出は数cmから50mまで対応。',
            step2_title: 'ハプティックで即時警報',
            step2_text: '識別可能なハプティックパターンが危険ゾーン進入の瞬間に作業員へ警告—騒音・低視界でも有効。',
            step3_title: 'ホットゾーンを分析',
            step3_text: '動線・ゾーンデータが安全会議、コンプライアンス証拠、現場レイアウト最適化に活用。',
            stats_eyebrow: 'GenbaSenseを選ぶ理由',
            stats_title: '数字で見る建設安全',
            stats_lead: '現場の構造的リスクは測定可能—新しい作業員認識アプローチなしには悪化し続けます。',
            stat1_label: '建設現場と倉庫における年間非致死傷害件数',
            stat2_label: '事故後の休業日に支払われる日給の割合',
            stat3_label: '重傷時の賠償額の範囲',
            stat5_label: '2025年の死亡事故件数',
            stat6_label: '傷害1件あたりの平均休業日数',
            cases_eyebrow: '導入事例',
            cases_title: 'ユースケース',
            cases_lead: '接近可視化とハプティック警報が効果を発揮する実際の建設シナリオ。',
            case1_title: 'コスト削減',
            case1_text: '事故削減による保険・賠償の節約。現場の遅延と作業停止を防止。',
            case2_title: 'データとコンプライアンス',
            case2_text: 'ISO 45001証拠、能動的リスク管理、社内安全会議向けのホットゾーンデータ。',
            product_title: 'ハードウェアとソフトウェア',
            hw1: '• 高精度測位',
            hw2: '• 識別可能なハプティック刺激と複数パターン',
            hw3: '• 被験者実験完了',
            hw4: '• 特許出願済み',
            hw5: '• 3月ベータMVP予定',
            team_title: 'チーム',
            team_alex_description: '顧客関係責任者',
            team_sergey_description: '研究開発責任者',
            team_chris_description: 'テクノロジー責任者',
            backed_by_title: 'OISTの支援',
            funding_title: '資金調達',
            funding_lead: '過去の資金：OIST Innovationから15万ドルの助成金。<br>J-KISS（Japan SAFE）で250万ドルポストマネー評価額の40万ドルプレシード調達中。配分：製品開発、運営、マーケティング。',
            contact_eyebrow: 'お問い合わせ',
            contact_title: 'お問い合わせ',
            contact_lead: 'GenbaSenseについてご質問がありますか？チームまでご連絡ください。現場の安全向上についてご相談ください。',
            contact_title_demo: 'デモを予約',
            contact_lead_demo: 'GenbaSenseのデモをご予約ください。現場の状況をお聞かせいただき、リアルタイム接近警報の仕組みをご紹介します。',
            back_link: '← 製品選択に戻る',
            back_to_genba: '← GenbaSenseに戻る',
            btn_contact_nav: 'お問い合わせ',
            form_name: 'お名前',
            form_email: 'メールアドレス',
            form_phone: '電話番号',
            form_company: '会社名',
            form_site_type: '現場の種類',
            form_site_type_ph: '現場の種類を選択（建設、倉庫など）',
            site_type_construction: '建設現場',
            site_type_warehouse: '倉庫',
            site_type_manufacturing: '製造',
            site_type_logistics: '物流',
            site_type_other: 'その他',
            form_message: 'メッセージ',
            form_message_ph: '現場の状況や安全ニーズについてお聞かせください...',
            form_submit: '送信する',
            form_submit_demo: 'デモを申し込む',
            form_submitting: '送信中...',
            form_success: 'ありがとうございます。近日中にご連絡いたします。',
            form_error: 'エラーが発生しました。もう一度お試しください。'
        }
    };

    window.GS_I18N = t;
    window.GS_getLang = function () { return currentLang; };

    function applyLang(lang) {
        currentLang = lang;
        localStorage.setItem(STORAGE_KEY, lang);
        document.documentElement.lang = lang === 'ja' ? 'ja' : 'en';
        document.title = t[lang].page_title;

        document.querySelectorAll('[data-i18n]').forEach(function (el) {
            var key = el.getAttribute('data-i18n');
            if (!t[lang][key]) return;
            if (el.getAttribute('data-i18n-html') === 'true') {
                el.innerHTML = t[lang][key];
            } else {
                el.textContent = t[lang][key];
            }
        });

        document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
            var key = el.getAttribute('data-i18n-placeholder');
            if (t[lang][key]) el.placeholder = t[lang][key];
        });

        var submitBtn = document.querySelector('#gsContactForm .submit-btn');
        if (submitBtn && !submitBtn.disabled) {
            var inquiryType = window.GS_getInquiryType ? window.GS_getInquiryType() : 'contact';
            submitBtn.setAttribute('data-i18n', inquiryType === 'demo' ? 'form_submit_demo' : 'form_submit');
        }

        if (window.GS_applyInquiryCopy) window.GS_applyInquiryCopy();

        var btnEn = document.querySelector('.gs-lang-en');
        var btnJa = document.querySelector('.gs-lang-ja');
        if (btnEn && btnJa) {
            btnEn.style.display = lang === 'en' ? 'inline' : 'none';
            btnJa.style.display = lang === 'ja' ? 'inline' : 'none';
        }
    }

    document.getElementById('gs-lang-toggle')?.addEventListener('click', function () {
        applyLang(currentLang === 'en' ? 'ja' : 'en');
    });

    applyLang(currentLang);
})();
