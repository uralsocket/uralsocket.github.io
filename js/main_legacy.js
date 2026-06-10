document.addEventListener("DOMContentLoaded", () => {

    // ============================================================
    // LANG SWITCH — i18n система
    // ============================================================
    const translations = {
        en: {
            'nav.logo':      'Gleb Karavaev',
            'hero.line1':    'Full-cycle post-production',
            'hero.line2':    'Powered by AI',
            'hero.desc':     "I take full control of your project's post-production. From saving poor source footage to generating cinematic assets from scratch. Predictable results, tight deadlines, zero headache",
            'hero.btn1':     'See solutions',
            'hero.btn2':     'Get in touch',
            'pipeline.h2':   'Workflow redefined.<br>Every step covered',
            'pipeline.p':    'No more bouncing between freelancers. I close the entire pipeline inside one predictable ecosystem',
            'bento1.label':  'Video / No Source',
            'bento1.h3':     'Dead end? Not really',
            'bento1.p':      'I generate cinematic b-rolls and build the narrative using AI and stock libraries',
            'bento2.label':  'Audio / Sound Design',
            'bento2.h3':     'Immersion matters',
            'bento2.p':      'Cleaning audio, layering Foley, and integrating AI voiceovers',
            'bento3.label':  'Motion Graphics',
            'bento3.h3':     'Information is beautiful',
            'bento3.p':      'Clean typography and 3D motion graphics',
            'bento4.label':  'Master / Deadlines',
            'bento4.h3':     'Predictable delivery',
            'bento4.p':      "10 years of experience. I don't miss deadlines",
            'nodes.h2':      'Prompt to Reality',
            'nodes.p':       "Visualizing ideas that haven't been filmed yet using cutting-edge AI",
            'node0.h4':      'Idea / Script',
            'node0.p':       'Raw concept',
            'node1.h4':      'AI Voice',
            'node1.p':       'Human-like V/O',
            'node2.h4':      'Generation',
            'node2.p':       'Midjourney / Veo',
            'node3.h4':      'Final Render',
            'portfolio.h2':  'The Showcase',
            'portfolio.p':   'Selected works. Aesthetic and rhythm in every frame',
            'personal.h2':   'Behind the work',
            'personal.p':    'A decade of experience distilled into a single, reliable partner',
            'hud.top.h3':    'Zero Headache',
            'hud.top.p':     'You review and approve. I handle everything else',
            'hud.lt.h3':     '10 Years',
            'hud.lt.p':      'Extensive experience on global commercial projects',
            'hud.lb.h3':     'Always Online',
            'hud.lb.p':      'Fast feedback loop and transparent communication',
            'hud.rt.h3':     'Predictable',
            'hud.rt.p':      'No missed deadlines, guaranteed result every time',
            'hud.rb.h3':     'AI Native',
            'hud.rb.p':      'Fluent in every major AI generation pipeline',
            'footer.cta':    'Ready to start?',
            'footer.copy':   '© 2025 Gleb Karavaev. All rights reserved',
        },
        ru: {
            'nav.logo':      'Глеб Караваев – Режиссёр монтажа полного цикла',
            'hero.line1':    'Глеб Караваев',
            'hero.line2':    'Режиссёр монтажа полного цикла',
            'hero.desc':     'Беру на себя финальную сборку проекта: монтаж, графику, саунд-дизайн и цвет. Вы передаете материал — я отдаю готовый ролик. Работаю с продакшнами и операторами, экономя ваше время и нервы.',
            'hero.btn1':     'Смотреть проекты',
            'hero.btn2':     'Обсудить проект',
            
            'pipeline.h2':   'Понятный процесс.<br>Каждый этап под контролем.',
            'pipeline.p':    'Снимаю с вас задачу собирать проект по частям. Весь пайплайн реализован внутри одной экосистемы.',
            
            'bento1.label':  'Монтаж / Нарратив',
            'bento1.h3':     'Всё лучшее — в кадре.',
            'bento1.p':      'Самостоятельно отсматриваю материал, отбираю лучшие дубли и выстраиваю историю. Если исходников не хватает — нахожу стоки или генерирую ассеты.',
            
            'bento2.label':  'Звук / Саунд-дизайн',
            'bento2.h3':     'Атмосфера и плотность.',
            'bento2.p':      'Чистка аудио, подбор музыки, базовая интершумовка (Foley) и саунд-дизайн. Опционально — запись диктора или ИИ-генерация голоса.',
            
            'bento3.label':  'Графика / Цвет',
            'bento3.h3':     'Единый визуальный стиль.',
            'bento3.p':      'Проявка log-исходников и базовая цветокоррекция. Интеграция инфографики, плашек и 2D/3D элементов под задачи проекта.',
            
            'bento4.label':  'Процесс / Дедлайны',
            'bento4.h3':     'Автономность и фокус.',
            'bento4.p':      'Узкая специализация на пост-продакшне. Забираю сборку на себя, позволяя съемочной команде переключиться на следующие задачи. Соблюдаю заявленные сроки.',
            
            'nodes.h2':      'Современный инструментарий.',
            'nodes.p':       'Интегрирую нейросети для расширения визуальных границ проекта и оптимизации рутинных процессов.',
            'node0.h4':      'Идея / ТЗ',
            'node0.p':       'Анализ задачи',
            'node1.h4':      'Генерация',
            'node1.p':       'Ассеты / Midjourney',
            'node2.h4':      'Аудио',
            'node2.p':       'Синтез голоса',
            'node3.h4':      'Мастер',
            'node3.p':       'Готовый рендер',
            
            'portfolio.h2':  'Избранные проекты.',
            'portfolio.p':   'Эстетика, ритм и решение задач бизнеса в каждом кадре.',
            
            'personal.h2':   'Подход к работе.',
            'personal.p':    'Принципы, которые делают сотрудничество предсказуемым.',
            
            'hud.top.h3':    'Проактивность',
            'hud.top.p':     'Если на проекте возникает проблема с исходниками или ТЗ, я прихожу с готовыми вариантами её решения.',
            'hud.lt.h3':     'Экономия времени',
            'hud.lt.p':      'Беру на себя черновую работу — вам не нужно отсматривать терабайты сырого материала.',
            'hud.lb.h3':     'Развитие',
            'hud.lb.p':      'Регулярно тестирую новые инструменты индустрии, чтобы повышать техническое качество проектов.',
            'hud.rt.h3':     'Стрессоустойчивость',
            'hud.rt.p':      'Конструктивно воспринимаю правки, аргументирую решения и сохраняю спокойствие на сложных проектах.',
            'hud.rb.h3':     'AI-интеграция',
            'hud.rb.p':      'Использую ИИ, чтобы восстановить неудачный кадр, расширить фон или оптимизировать бюджет.',
            
            'footer.cta':    'Обсудить проект',
            'footer.copy':   '© 2025 Глеб Каравaев. Все права защищены.',
        }
    };

    const savedLang = localStorage.getItem('lang');
    const browserLang = navigator.language?.startsWith('ru') ? 'ru' : 'en';
    let currentLang = savedLang || browserLang;

    function applyLang(lang) {
        const t = translations[lang];
        if (!t) return;
        const titleEl = document.querySelector('title');
        if (titleEl) titleEl.textContent = titleEl.getAttribute(`data-i18n-title-${lang}`) || titleEl.textContent;
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.dataset.i18n;
            if (t[key] !== undefined) el.textContent = t[key];
        });
        document.querySelectorAll('[data-i18n-html]').forEach(el => {
            const key = el.dataset.i18nHtml;
            if (t[key] !== undefined) el.innerHTML = t[key];
        });
        document.querySelectorAll('.hero-line-content').forEach(el => {
            const key = el.dataset.i18n;
            if (t[key] !== undefined) el.textContent = t[key];
            if (el.style.clipPath && el.style.clipPath !== 'inset(0 100% 0 0)') {
                el.style.clipPath = 'inset(0 0% 0 0)';
            }
        });
        document.querySelectorAll('.lang-opt').forEach(opt => {
            opt.classList.toggle('active', opt.dataset.lang === lang);
        });
        document.documentElement.lang = lang;
        currentLang = lang;
        localStorage.setItem('lang', lang);
    }

    applyLang(currentLang);

    document.getElementById('lang-switch')?.querySelectorAll('.lang-opt').forEach(opt => {
        opt.addEventListener('click', () => {
            if (opt.dataset.lang !== currentLang) applyLang(opt.dataset.lang);
        });
    });

    // ============================================================
    // CUSTOM CURSOR
    // ============================================================
    const cursorDot  = document.querySelector('.cursor-dot');
    const cursorRing = document.querySelector('.cursor-ring');
    const isTouch = window.matchMedia('(hover: none)').matches;

    let ringX = -200, ringY = -200;
    let rawMouseX = -200, rawMouseY = -200;

    const CURSOR_HOVER_SEL = 'a, button, .magnetic-btn, .ai-node, .masonry-item, .hud-block, .lang-opt, .resizer-handle, .playhead-needle, .cinema-close, [data-cursor-hover]';

    if (!isTouch) {
        document.addEventListener('mousemove', e => {
            rawMouseX = e.clientX;
            rawMouseY = e.clientY;
            document.body.classList.remove('cursor-out');
        }, { passive: true });
        document.addEventListener('mouseleave', () => document.body.classList.add('cursor-out'));
        document.addEventListener('mouseenter', () => document.body.classList.remove('cursor-out'));
        document.addEventListener('mousedown', () => document.body.classList.add('cursor-click'));
        document.addEventListener('mouseup',   () => document.body.classList.remove('cursor-click'));
    }

    let pageScrolling = false, pageScrollTimer;
    let mouseX = -2000, mouseY = -2000;

    document.addEventListener('mousemove', e => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        rawMouseX = mouseX; rawMouseY = mouseY;
    }, { passive: true });

    window.addEventListener('scroll', () => {
        pageScrolling = true;
        clearTimeout(pageScrollTimer);
        pageScrollTimer = setTimeout(() => { pageScrolling = false; }, 80);
        if (nodesWrapper) cachedWRect = nodesWrapper.getBoundingClientRect();
    }, { passive: true });

    document.addEventListener('selectstart', e => e.preventDefault());

    // Все элементы текста со свечением
    const glowEls = Array.from(document.querySelectorAll('.glow-text, .hero-line-content, .body-text, .bento-label'));

    // --- Observer проявления ---
    const revealObs = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('revealed');
            obs.unobserve(entry.target);
        });
    }, { threshold: 0.12 });

    document.querySelectorAll('.fade-in-desc, .reveal').forEach(el => {
        if (!el.closest('.hero')) revealObs.observe(el);
    });

    // --- Hero Анимация ---
    function revealHeroDesc() {
        document.querySelectorAll('.hero .fade-in-desc').forEach(el => el.classList.add('revealed'));
    }

    const typeContainer = document.querySelector('.type-animate');
    if (typeContainer) {
        requestAnimationFrame(() => requestAnimationFrame(runTyping));
    } else {
        revealHeroDesc();
    }

    async function runTyping() {
        const tc = document.querySelector('.type-animate');
        if (!tc) { revealHeroDesc(); return; }
        const cursor = tc.querySelector('.type-cursor');
        const lines = Array.from(tc.querySelectorAll('.hero-line-wrapper'));
        if (!lines.length) { revealHeroDesc(); return; }

        await delay(300);

        cursor.style.display = 'block';
        cursor.style.top = `${lines[0].offsetTop}px`;
        cursor.style.left = `${lines[0].offsetLeft}px`;
        cursor.style.height = `${lines[0].offsetHeight}px`;

        await animEl(cursor, [
            { opacity: 0, transform: 'scaleY(0.08)', borderRadius: '50%' },
            { opacity: 1, transform: 'scaleY(0.08)', borderRadius: '50%' },
            { opacity: 1, transform: 'scaleY(0.88)', borderRadius: '2px' }
        ], 280, 'ease-out');

        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            const content = line.querySelector('.hero-line-content');
            const lineW = content.offsetWidth;
            const dur = Math.max(520, lineW * 1.2);

            await Promise.all([
                animEl(content, [{ clipPath: 'inset(0 100% 0 0)' }, { clipPath: 'inset(0 0% 0 0)' }], dur, 'ease-in-out'),
                animEl(cursor, [{ transform: 'translateX(0px) scaleY(0.88)' }, { transform: `translateX(${lineW}px) scaleY(0.88)` }], dur, 'ease-in-out')
            ]);

            if (i < lines.length - 1) {
                await animEl(cursor, [
                    { transform: `translateX(${lineW}px) scaleY(0.88)`, borderRadius: '2px' },
                    { transform: `translateX(${lineW}px) scaleY(0.08)`, borderRadius: '50%' }
                ], 150, 'ease-in');

                const nxt = lines[i + 1];
                const offX = (line.offsetLeft + lineW) - nxt.offsetLeft;
                const offY = line.offsetTop - nxt.offsetTop;

                cursor.style.top = `${nxt.offsetTop}px`;
                cursor.style.left = `${nxt.offsetLeft}px`;
                cursor.style.height = `${nxt.offsetHeight}px`;

                await animEl(cursor, [
                    { transform: `translate(${offX}px, ${offY}px) scaleY(0.08)`, borderRadius: '50%' },
                    { transform: 'translate(0px, 0px) scaleY(0.08)', borderRadius: '50%' }
                ], 300, 'cubic-bezier(0.22,1,0.36,1)');

                await animEl(cursor, [
                    { transform: 'translateX(0px) scaleY(0.08)', borderRadius: '50%' },
                    { transform: 'translateX(0px) scaleY(0.88)', borderRadius: '2px' }
                ], 150, 'ease-out');
            }
        }

        const lastW = lines[lines.length - 1].querySelector('.hero-line-content').offsetWidth;
        await animEl(cursor, [
            { transform: `translateX(${lastW}px) scaleY(0.88)`, opacity: 1, borderRadius: '2px' },
            { transform: `translateX(${lastW}px) scaleY(0.08)`, opacity: 1, borderRadius: '50%', offset: 0.5 },
            { transform: `translateX(${lastW}px) scaleY(0.08)`, opacity: 0, borderRadius: '50%' }
        ], 280, 'ease-in');

        cursor.style.display = 'none';
        revealHeroDesc();
    }

    function animEl(el, kf, dur, easing) {
        return el.animate(kf, { duration: dur, fill: 'forwards', easing }).finished;
    }
    function delay(ms) { return new Promise(r => setTimeout(r, ms)); }

    // --- Bento Grid ---
    const bentoCont = document.querySelector('.bento-container');
    const playNeedle = document.querySelector('.playhead-needle');
    const playTrack = document.querySelector('.playhead-track');
    const timecodeEl = document.querySelector('.timecode');
    const leftFade = document.querySelector('.bento-fade.left');
    const rightFade = document.querySelector('.bento-fade.right');

    let isDraggingPlay = false, targetBentoScroll = 0;
    let bentoScrolling = false, bentoScrollTimer;
    let timecodeVis = false, timecodeHideTimer;
    let isResizing = false, activeCard = null;
    let resizeStartX = 0, resizeBaseW = 0, resizeTargetW = 0;

    if (bentoCont) {
        leftFade.classList.add('hidden');
        bentoCont.addEventListener('scroll', () => {
            bentoScrolling = true;
            clearTimeout(bentoScrollTimer);
            bentoScrollTimer = setTimeout(() => { bentoScrolling = false; }, 120);
        }, { passive: true });
        
        playNeedle.addEventListener('mousedown', e => {
            isDraggingPlay = true;
            targetBentoScroll = bentoCont.scrollLeft;
            playNeedle.classList.add('is-dragging');
            document.body.style.cursor = 'grabbing';
            e.preventDefault();
        });
        
        document.querySelectorAll('.resizer-handle').forEach(handle => {
            handle.addEventListener('mousedown', e => {
                isResizing = true;
                activeCard = handle.closest('.bento-card');
                resizeStartX = e.clientX;
                resizeBaseW = activeCard.offsetWidth;
                resizeTargetW = resizeBaseW;
                activeCard.classList.add('is-resizing');
                document.body.style.cursor = 'col-resize';
                e.preventDefault();
            });
        });
    }

    // --- AI Ноды (Исправлено отлетание и добавлен Math.tanh) ---
    const nodesWrapper = document.querySelector('.nodes-wrapper');
    const svgLines = [document.getElementById('line-1'), document.getElementById('line-2'), document.getElementById('line-3')];
    const nodeEls = Array.from(document.querySelectorAll('.ai-node'));

    let activeAiNode = null;
    let nodeGrabOffX = 0, nodeGrabOffY = 0;
    let cachedWRect = null;

    const nodeState = nodeEls.map(el => ({
        el, idx: parseInt(el.dataset.chainIndex ?? '0', 10),
        baseX: 0, baseY: 0, x: 0, y: 0, vx: 0, vy: 0, initialized: false
    }));
    nodeState.sort((a, b) => a.idx - b.idx);

    function computeChainBases(W, H) {
        const isPortrait = H > W * 0.9;
        if (isPortrait) {
            const xC = W / 2; const step = H / 4;
            return nodeState.map((_, i) => ({ x: xC, y: step * (i + 0.5) }));
        } else {
            const positions = [
                { x: W * 0.25, y: H * 0.27 },
                { x: W * 0.75, y: H * 0.27 },
                { x: W * 0.75, y: H * 0.73 },
                { x: W * 0.25, y: H * 0.73 }
            ];
            return nodeState.map((_, i) => positions[i] ?? positions[0]);
        }
    }

    function initNodes() {
        if (!nodesWrapper) return;
        cachedWRect = nodesWrapper.getBoundingClientRect();
        if (cachedWRect.width === 0) return;
        const bases = computeChainBases(cachedWRect.width, cachedWRect.height);
        nodeState.forEach((st, i) => {
            st.baseX = bases[i].x; st.baseY = bases[i].y;
            if (!st.initialized) { st.x = st.baseX; st.y = st.baseY; st.initialized = true; }
            st.vx = 0; st.vy = 0;
        });
    }

    if (nodesWrapper) {
        initNodes();
        new ResizeObserver(initNodes).observe(nodesWrapper);
        nodeEls.forEach((el, _) => {
            const st = nodeState.find(s => s.el === el);
            if (!st) return;
            el.addEventListener('mousedown', e => {
                cachedWRect = nodesWrapper.getBoundingClientRect();
                const wr = cachedWRect;
                activeAiNode = st;
                // Смещение хвата от центра ноды
                nodeGrabOffX = (e.clientX - wr.left) - st.x;
                nodeGrabOffY = (e.clientY - wr.top) - st.y;
                st.vx = 0; st.vy = 0;
                document.body.style.cursor = 'grabbing';
                e.preventDefault();
            });
        });
    }

    function edgePoint(cx, cy, tx, ty, hw, hh) {
        const dx = tx - cx, dy = ty - cy;
        if (Math.hypot(dx, dy) < 1) return { x: cx, y: cy };
        const tx1 = dx !== 0 ? hw / Math.abs(dx) : Infinity;
        const ty1 = dy !== 0 ? hh / Math.abs(dy) : Infinity;
        const t = Math.min(tx1, ty1);
        return { x: cx + dx * t, y: cy + dy * t };
    }

    // --- Masonry ---
    const masonryItems = Array.from(document.querySelectorAll('.masonry-item'));
    const masonryStates = masonryItems.map(() => ({ cx: 0, cy: 0 }));

    // --- Magnetic Buttons cache ---
    const magneticBtns = Array.from(document.querySelectorAll('.magnetic-btn'));
    const btnMagState = magneticBtns.map(() => ({ cx: 0, cy: 0, clicked: false }));

    // --- HUD ---
    const portraitContainer = document.getElementById('portrait-container');
    const hudBlocks = Array.from(document.querySelectorAll('.hud-block'));
    
    const hudStates = hudBlocks.map(() => ({
        levPhaseX: Math.random() * Math.PI * 2, levPhaseY: Math.random() * Math.PI * 2 + Math.PI,
        levFreqX: 0.50 + Math.random() * 0.30, levFreqY: 0.42 + Math.random() * 0.28,
        levAmpX: 5 + Math.random() * 5, levAmpY: 4 + Math.random() * 5,
        curLevX: 0, curLevY: 0, curMagX: 0, curMagY: 0, curScale: 1, isHovered: false,
    }));

    let portMagX = 0, portMagY = 0;

    hudBlocks.forEach((block, i) => {
        block.addEventListener('mouseenter', () => hudStates[i].isHovered = true);
        block.addEventListener('mouseleave', () => hudStates[i].isHovered = false);
    });

    // --- Cinema Modal ---
    const cinemaOverlay = document.querySelector('.cinema-overlay');
    const cinemaClose = document.querySelector('.cinema-close');
    masonryItems.forEach(item => item.addEventListener('click', () => cinemaOverlay?.classList.add('active')));
    cinemaClose?.addEventListener('click', () => cinemaOverlay.classList.remove('active'));
    cinemaOverlay?.addEventListener('click', e => { if (e.target === cinemaOverlay) cinemaOverlay.classList.remove('active'); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') cinemaOverlay?.classList.remove('active'); });

    // --- Глобальные Listeners для Мыши ---
    window.addEventListener('mousemove', e => {
        if (isDraggingPlay && bentoCont) {
            const tr = playTrack.getBoundingClientRect();
            const lx = Math.max(0, Math.min(e.clientX - tr.left, tr.width));
            targetBentoScroll = (lx / tr.width) * Math.max(1, bentoCont.scrollWidth - bentoCont.clientWidth);
        }
        if (isResizing && activeCard) {
            resizeTargetW = Math.max(resizeBaseW * 0.75, Math.min(resizeBaseW * 1.25, resizeBaseW + (e.clientX - resizeStartX)));
        }
    });

    window.addEventListener('mouseup', () => {
        if (isDraggingPlay) {
            isDraggingPlay = false; playNeedle?.classList.remove('is-dragging'); document.body.style.cursor = '';
        }
        if (isResizing && activeCard) {
            activeCard.classList.remove('is-resizing'); activeCard.style.flexBasis = ''; isResizing = false; activeCard = null; document.body.style.cursor = '';
        }
        if (activeAiNode) { activeAiNode = null; document.body.style.cursor = ''; }
    });

    magneticBtns.forEach((btn, i) => {
        btn.addEventListener('mousedown', () => { btnMagState[i].clicked = true; });
        btn.addEventListener('mouseup',   () => setTimeout(() => { btnMagState[i].clicked = false; }, 70));
        btn.addEventListener('mouseleave',() => setTimeout(() => { btnMagState[i].clicked = false; }, 70));
    });

    function renderLoop(now) {
        const t = now * 0.001;  
        const isPortraitMode = window.innerHeight > window.innerWidth * 0.9;

        // ---- Custom Cursor ----
        if (!isTouch && cursorDot && cursorRing) {
            cursorDot.style.transform = `translate(calc(${rawMouseX}px - 50%), calc(${rawMouseY}px - 50%))`;
            ringX += (rawMouseX - ringX) * 0.13;
            ringY += (rawMouseY - ringY) * 0.13;
            cursorRing.style.transform = `translate(calc(${ringX.toFixed(2)}px - 50%), calc(${ringY.toFixed(2)}px - 50%))`;
            const hovered = document.elementFromPoint(rawMouseX, rawMouseY);
            const isHovering = hovered ? hovered.closest(CURSOR_HOVER_SEL) !== null : false;
            document.body.classList.toggle('cursor-hover', isHovering);
        }

        // Halation Update
        if (!pageScrolling) {
            glowEls.forEach(el => {
                const r = el.getBoundingClientRect();
                el.style.setProperty('--mouse-x', `${mouseX - r.left}px`);
                el.style.setProperty('--mouse-y', `${mouseY - r.top}px`);
            });
        }

        // Magnetic Buttons — physics lerp
        magneticBtns.forEach((btn, i) => {
            const st = btnMagState[i];
            const r = btn.getBoundingClientRect();
            const inside = mouseX >= r.left && mouseX <= r.right && mouseY >= r.top && mouseY <= r.bottom;
            let tgtX = 0, tgtY = 0;
            if (inside && !pageScrolling) {
                tgtX = (mouseX - (r.left + r.width  / 2)) * 0.15;
                tgtY = (mouseY - (r.top  + r.height / 2)) * 0.15;
            }
            st.cx += (tgtX - st.cx) * (inside ? 0.14 : 0.07);
            st.cy += (tgtY - st.cy) * (inside ? 0.14 : 0.07);
            const scale = st.clicked ? 0.93 : 1;
            btn.style.transform = `translate3d(${st.cx.toFixed(2)}px, ${st.cy.toFixed(2)}px, 0)${scale !== 1 ? ' scale(0.93)' : ''}`;
        });

        // Bento Resizer Apply
        if (isResizing && activeCard) activeCard.style.flexBasis = `${resizeTargetW}px`;

        // Bento Playhead Sync
        if (bentoCont) {
            if (isDraggingPlay) bentoCont.scrollLeft += (targetBentoScroll - bentoCont.scrollLeft) * 0.22;
            
            const maxScroll = Math.max(1, bentoCont.scrollWidth - bentoCont.clientWidth);
            const pct = Math.max(0, Math.min(1, bentoCont.scrollLeft / maxScroll));
            const trackW = playTrack.clientWidth;
            playNeedle.style.transform = `translateX(${pct * trackW}px)`;

            const tf = Math.floor(pct * 7200);
            timecodeEl.textContent = `00:${String(Math.floor(tf/24/60)).padStart(2,'0')}:${String(Math.floor(tf/24)%60).padStart(2,'0')}:${String(tf%24).padStart(2,'0')}`;

            const showTC = bentoScrolling || isDraggingPlay;
            if (showTC && !timecodeVis) {
                clearTimeout(timecodeHideTimer); timecodeEl.classList.add('visible'); timecodeVis = true;
            } else if (!showTC && timecodeVis) {
                timecodeVis = false; timecodeHideTimer = setTimeout(() => timecodeEl.classList.remove('visible'), 900);
            }
            leftFade.classList.toggle('hidden', bentoCont.scrollLeft < 20);
            rightFade.classList.toggle('hidden', bentoCont.scrollLeft >= maxScroll - 20);
        }

        // AI Nodes Physics (Math.tanh restored)
        if (nodesWrapper && cachedWRect) {
            const wr = cachedWRect;

            nodeState.forEach(state => {
                if (state === activeAiNode) {
                    // Резиновое сопротивление при перетаскивании
                    const rawDx = (mouseX - wr.left) - nodeGrabOffX - state.baseX;
                    const rawDy = (mouseY - wr.top) - nodeGrabOffY - state.baseY;
                    const limit = wr.width * 0.15; // Дальность резинки

                    let targetX = state.baseX + limit * Math.tanh(rawDx / limit);
                    let targetY = state.baseY + limit * Math.tanh(rawDy / limit);

                    state.x += (targetX - state.x) * 0.30;
                    state.y += (targetY - state.y) * 0.30;
                } else {
                    let ax = (state.baseX - state.x) * 0.055;
                    let ay = (state.baseY - state.y) * 0.055;

                    nodeState.forEach(other => {
                        if (other === state) return;
                        const dx = state.x - other.x;
                        const dy = state.y - other.y;
                        const safeX = (state.el.offsetWidth + other.el.offsetWidth) / 2 + 20;
                        const safeY = (state.el.offsetHeight + other.el.offsetHeight) / 2 + 20;
                        const ovX = safeX - Math.abs(dx);
                        const ovY = safeY - Math.abs(dy);
                        if (ovX > 0 && ovY > 0) {
                            if (ovX <= ovY) ax += Math.sign(dx) * ovX * 0.07;
                            else ay += Math.sign(dy) * ovY * 0.07;
                        }
                    });

                    state.vx = (state.vx + ax) * 0.78;
                    state.vy = (state.vy + ay) * 0.78;
                    state.x += state.vx;
                    state.y += state.vy;
                }
                state.el.style.transform = `translate3d(calc(${state.x}px - 50%), calc(${state.y}px - 50%), 0)`;
            });

            for (let i = 0; i < svgLines.length; i++) {
                if (!svgLines[i]) continue;
                const src = nodeState[i];
                const dst = nodeState[i + 1];
                if (!dst) continue;
                const p1 = edgePoint(src.x, src.y, dst.x, dst.y, src.el.offsetWidth/2, src.el.offsetHeight/2);
                const p2 = edgePoint(dst.x, dst.y, src.x, src.y, dst.el.offsetWidth/2, dst.el.offsetHeight/2);
                svgLines[i].setAttribute('d', `M${p1.x},${p1.y} L${p2.x},${p2.y}`);
            }
        }

        // Masonry — physics lerp
        {
            masonryItems.forEach((item, i) => {
                const st = masonryStates[i];
                const r = item.getBoundingClientRect();
                const inside = mouseX >= r.left && mouseX <= r.right && mouseY >= r.top && mouseY <= r.bottom;
                let tgtX = 0, tgtY = 0;
                if (inside && !pageScrolling) {
                    tgtX = (mouseX - (r.left + r.width  / 2)) * 0.07;
                    tgtY = (mouseY - (r.top  + r.height / 2)) * 0.07;
                }
                st.cx += (tgtX - st.cx) * (inside ? 0.10 : 0.07);
                st.cy += (tgtY - st.cy) * (inside ? 0.10 : 0.07);
                item.style.zIndex = inside ? '10' : '';
                item.style.transform = `translate3d(${st.cx.toFixed(2)}px, ${st.cy.toFixed(2)}px, 0)`;
            });
        }

        // HUD Physics
        if (!isPortraitMode) {
            if (portraitContainer && !pageScrolling) {
                const pr = portraitContainer.getBoundingClientRect();
                const inside = mouseX >= pr.left && mouseX <= pr.right && mouseY >= pr.top && mouseY <= pr.bottom;
                const tgtX = inside ? (mouseX - (pr.left + pr.width / 2)) * 0.06 : 0;
                const tgtY = inside ? (mouseY - (pr.top + pr.height / 2)) * 0.06 : 0;
                portMagX += (tgtX - portMagX) * 0.07;
                portMagY += (tgtY - portMagY) * 0.07;
                portraitContainer.style.transform = `translate3d(${portMagX}px, ${portMagY}px, 0)`;
            }

            hudBlocks.forEach((block, i) => {
                const st = hudStates[i];
                const tgtLevX = st.isHovered ? 0 : Math.sin(t * st.levFreqX * Math.PI * 2 + st.levPhaseX) * st.levAmpX;
                const tgtLevY = st.isHovered ? 0 : Math.sin(t * st.levFreqY * Math.PI * 2 + st.levPhaseY) * st.levAmpY;
                const lf = st.isHovered ? 0.06 : 0.016;
                
                st.curLevX += (tgtLevX - st.curLevX) * lf;
                st.curLevY += (tgtLevY - st.curLevY) * lf;

                let tgtMX = 0, tgtMY = 0;
                if (st.isHovered && !pageScrolling) {
                    const r = block.getBoundingClientRect();
                    tgtMX = (mouseX - (r.left + r.width / 2)) * 0.09;
                    tgtMY = (mouseY - (r.top + r.height / 2)) * 0.09;
                }
                st.curMagX += (tgtMX - st.curMagX) * 0.09;
                st.curMagY += (tgtMY - st.curMagY) * 0.09;

                const tgtScale = st.isHovered ? 1.4 : 1.0;
                st.curScale += (tgtScale - st.curScale) * 0.06;

                const tx = st.curLevX + st.curMagX;
                const ty = st.curLevY + st.curMagY;
                block.style.transform = `translate3d(${tx}px, ${ty}px, 0) scale(${st.curScale.toFixed(4)})`;
            });
        } else {
            if (portraitContainer) portraitContainer.style.transform = 'none';
        }

        requestAnimationFrame(renderLoop);
    }

    requestAnimationFrame(renderLoop);
});