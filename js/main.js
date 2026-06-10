document.addEventListener("DOMContentLoaded", () => {

    // ============================================================
    // LANG SWITCH — i18n система
    // ============================================================
    const translations = {
        en: {
            'nav.logo':      'Gleb Karavaev.',
            'hero.line1':    'Gleb Karavaev.',
            'hero.line2':    'Full-cycle video editor.',
            'hero.desc':     'I take on the entire project assembly: editing, motion graphics, sound design, and color grading. You provide the footage and vision—I deliver the final product. I work with production teams and clients, saving you from sleepless nights.',
            'hero.btn1':     'Overview',
            'hero.btn2':     'Discuss project',
            
            'pipeline.h2':   'My core advantage<br>as a specialist',
            'pipeline.p':    'I create an environment where you never have to worry about the final cut.',
            
            'bento1.label':  'Deep Dive',
            'bento1.h3':     'Deep focus on the task',
            'bento1.p':      'I don’t do assembly-line editing. I quickly dive into the project, build complete stories, and meticulously follow your references.',
            
            'bento2.label':  'Problem Solving',
            'bento2.h3':     'Emergency toolkit',
            'bento2.p':      'A failed shoot is not the end. I source stock footage and generate missing frames or audio. I do it seamlessly, without AI slop or clichés.',
            
            'bento3.label':  'Peace of Mind',
            'bento3.h3':     'One specialist — one variable',
            'bento3.p':      'No endless approval loops. We discuss the task once, and you get a predictable, high-quality result.',
            
            'bento4.label':  'Freedom',
            'bento4.h3':     'A well-rested team',
            'bento4.p':      'I cover the entire post-production process, giving you the freedom to focus on what matters and not worry about the final delivery.',
            
            'nodes.h2':      'What about AI?',
            'nodes.p':       'I integrate AI to expand visual boundaries and speed up routine tasks. No fanaticism, no artificial feel.',
            'node0.h4':      'Script enhancement',
            'node0.p':       'Brainstorming with LLMs to find the best ways to realize your ideas.',
            'node1.h4':      'Footage refinement',
            'node1.p':       'Generating missing takes and seamlessly integrating them into the cut.',
            'node2.h4':      'Audio processing',
            'node2.p':       'Synthesizing voiceovers or fixing speaker flubs from the source audio.',
            'node3.h4':      'Final product',
            'node3.p':       'A clean render with no uncanny valley, artifacts, or AI slop.',
            
            'portfolio.h2':  'Selected projects',
            'portfolio.p':   'My aesthetics, rhythm, and vision showcased in four works.',
            
            'personal.h2':   'My approach',
            'personal.p':    'Facts that make our collaboration reliable.',
            
            'hud.top.h3':    '10 years of experience',
            'hud.top.p':     '10 years in video production. I evolved from a camera operator to an editor—I know the entire pipeline from the inside out.',
            'hud.lt.h3':     'AI Integration',
            'hud.lt.p':      'Implementing AI since 2022. I use up-to-date models and know exactly which tool fits a specific situation.',
            'hud.lb.h3':     'Background',
            'hud.lb.p':      'No traditional film school. I grew through self-education, on-set experience, and working with strong teams. I apply new knowledge immediately.',
            'hud.rt.h3':     'Handling feedback',
            'hud.rt.p':      'I take feedback constructively, argue my creative choices, and keep calm on complex projects.',
            'hud.rb.h3':     'Zero burnout',
            'hud.rb.p':      'I live a real life, recharge between projects, and don\'t go crazy over work. My presence guarantees 100% dedication.',
            
            'footer.cta':    'Discuss project',
            'footer.copy':   '© 2026 Gleb Karavaev. All rights reserved.',
        },
        ru: {
            'nav.logo':      'Глеб Караваев.',
            'hero.line1':    'Глеб Караваев.',
            'hero.line2':    'Режиссёр монтажа полного цикла.',
            'hero.desc':     'Беру на себя всю сборку проекта: монтаж, графику, саунд-дизайн и цвет. С вас исходники и видение — с меня готовый продукт. Работаю с коллегами и клиентами, избавляя вас от бессонных ночей.',
            'hero.btn1':     'Главное',
            'hero.btn2':     'Обсудить проект',
            
            'pipeline.h2':   'В чем моя главная фишка<br>как специалиста',
            'pipeline.p':    'Создаю условия, при которых вам не нужно переживать за финальную сборку.',
            
            'bento1.label':  'Погружение',
            'bento1.h3':     'Глубокий фокус на задаче',
            'bento1.p':      'Я не монтирую конвейерные ролики. Быстро вникаю в проект, собираю полноценные истории и учитываю все ваши референсы.',
            
            'bento2.label':  'Забота',
            'bento2.h3':     'Инструменты спасения',
            'bento2.p':      'Провал на съемках — не приговор. Подбираю стоки, генерирую недостающие кадры и звук. Делаю это лаконично, без нейрослопа и клише.',
            
            'bento3.label':  'Спокойствие',
            'bento3.h3':     'Один специалист — одна переменная',
            'bento3.p':      'Не пложу лишние этапы согласований. Достаточно один раз обсудить задачу, чтобы на выходе получить предсказуемый результат.',
            
            'bento4.label':  'Свобода',
            'bento4.h3':     'Крепкий сон команды',
            'bento4.p':      'Закрываю собой весь пост-продакшн, давая вам возможность сфокусироваться на главном и не переживать за финальный результат.',
            
            'nodes.h2':      'Что по ИИ и нейросетям?',
            'nodes.p':       'Интегрирую нейросети для расширения визуальных границ и ускорения рутины. Без фанатизма и искусственности.',
            'node0.h4':      'Усиление сценария',
            'node0.p':       'Брейншторм с LLM и поиск вариантов реализации ваших идей',
            'node1.h4':      'Доработка исходников',
            'node1.p':       'Генерирую недостающие дубли и бесшовно встраиваю их в проект',
            'node2.h4':      'Работа со звуком',
            'node2.p':       'Синтезирую диктора или исправляю оговорки спикера из исходников',
            'node3.h4':      'Финальный продукт',
            'node3.p':       'Чистый рендер без эффекта зловещей долины, артефактов и нейрослопа',
            
            'portfolio.h2':  'Избранные проекты',
            'portfolio.p':   'Моя эстетика, ритм и видение на примере четырех работ.',
            
            'personal.h2':   'Подход к работе',
            'personal.p':    'Факты, которые делают сотрудничество надежным.',
            
            'hud.top.h3':    '10 лет опыта',
            'hud.top.p':     'Работаю в производстве видео 10 лет. Вырос из оператора и ушел в монтаж — отлично знаю весь пайплайн изнутри.',
            'hud.lt.h3':     'AI Integration',
            'hud.lt.p':      'Внедряю ИИ в работу с 2022 года. Использую актуальные модели и точно понимаю, какой инструмент уместен в конкретной ситуации.',
            'hud.lb.h3':     'Бэкграунд',
            'hud.lb.p':      'Не заканчивал ВГИК. Вырос на самообучении, опыте площадки и работе с сильными командами. Сразу применяю новые знания на практике.',
            'hud.rt.h3':     'Работа с правками',
            'hud.rt.p':      'Конструктивно воспринимаю комментарии, аргументирую свои решения и сохраняю спокойствие на сложных проектах.',
            'hud.rb.h3':     'Без выгорания',
            'hud.rb.p':      'Живу жизнь, умею перезагружаться между проектами и не схожу с ума от работы. Мое участие в проекте гарантирует 100% отдачу.',
            
            'footer.cta':    'Обсудить проект',
            'footer.copy':   '© 2026 Глеб Каравaев. Все права защищены.',
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
    let isDraggingBento = false, bentoDragStartX = 0, bentoDragScrollLeft = 0;

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
        
        bentoCont.addEventListener('mousedown', e => {
            if (e.target.closest('.resizer-handle')) return;
            isDraggingBento = true;
            bentoDragStartX = e.clientX;
            bentoDragScrollLeft = bentoCont.scrollLeft;
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
        if (isDraggingBento && bentoCont) {
            const dx = e.clientX - bentoDragStartX;
            bentoCont.scrollLeft = bentoDragScrollLeft - dx;
        }
        if (isResizing && activeCard) {
            resizeTargetW = Math.max(resizeBaseW * 0.75, Math.min(resizeBaseW * 1.25, resizeBaseW + (e.clientX - resizeStartX)));
        }
    });

    window.addEventListener('mouseup', () => {
        if (isDraggingPlay) {
            isDraggingPlay = false; playNeedle?.classList.remove('is-dragging'); document.body.style.cursor = '';
        }
        if (isDraggingBento) {
            isDraggingBento = false; document.body.style.cursor = '';
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