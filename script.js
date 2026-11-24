/* =========================================================
   ريم الناخبي — معرض أعمال الأمن السيبراني
   ملف JavaScript الوحيد: البيانات + كل التفاعلات
   ========================================================= */

'use strict';

/* ---------------------------------------------------------
   1) إعدادات عامة سهلة التعديل
   --------------------------------------------------------- */
const SITE_CONFIG = {
  email: 'reeeme19978@gmail.com',
  // ضعي هنا رابط Formspree مثل: https://formspree.io/f/xxxxxxxx
  // وسيُرسل النموذج عبره، وإن تركته فارغاً سيفتح برنامج البريد (mailto).
  formspreeEndpoint: '',
  linkedin: '', // ضعي رابط حساب LinkedIn
  github: '',   // ضعي رابط حساب GitHub
  cvPath: 'assets/files/reem-cv.pdf'
};

/* ---------------------------------------------------------
   2) مصفوفة الأعمال — المكان الوحيد لإضافة مشروع جديد
   الحقول المطلوبة: title, type, description, image, tags, link/file
  الحقول الإضافية اختيارية لتفاصيل النافذة المنبثقة.
   --------------------------------------------------------- */
const projects = [
  {
    id: 'veyra',
    title: 'VEYRA — متجر حقائب جلد فاخرة',
    type: 'تجارة إلكترونية',
    description: 'موقع تجارة إلكترونية (Riyadh, 2026) لحقائب جلد فاخرة بتجربة شراء عربية راقية وتصاميم محدودة.',
    longDescription: 'مشروع ويب فعلي: متجر إلكتروني كامل (Veyra) يعرض مجموعات الحقائب (وصل حديثاً، الأكثر مبيعاً، مجموعة التوقيع) مع صفحات منتجات، سلة، FAQ، سياسات، وتجربة مستخدم متجاوبة. أُنجز بـ HTML5/CSS3/JavaScript ونشر على Cloudflare Workers.',
    image: 'assets/images/project-1.svg',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'E-commerce', 'Responsive'],
    link: 'https://veyra.reeeme19978.workers.dev',
    file: '',
    year: '2026',
    role: 'تصميم وتطوير',
    highlights: ['تجربة شراء عربية RTL', 'صفحات منتجات وسلة', 'نشر على Cloudflare Workers']
  },
  {
    id: 'cv-interactive',
    title: 'سيرة ذاتية تفاعلية — ريم الناخبي',
    type: 'تطوير ويب',
    description: 'صفحة سيرة ذاتية تفاعلية (2026) تُعرِض المهارات والتعليم والمشاريع بتنظيم واضح وسهولة تصفح.',
    longDescription: 'مشروع ويب فعلي: سيرة ذاتية تفاعلية (cv.reeeme19978.workers.dev) تُبرز المهارات التقنية (الأمن السيبراني، Java OOP، SQL، HTML5) والتعليم والمشاريع، مع إمكانية طباعة/حفظ PDF والتواصل عبر WhatsApp. نُشرت على Cloudflare Workers.',
    image: 'assets/images/project-2.svg',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'UI', 'CV'],
    link: 'https://cv.reeeme19978.workers.dev',
    file: '',
    year: '2026',
    role: 'تصميم وتطوير',
    highlights: ['عرض المهارات والتعليم', 'طباعة/حفظ PDF', 'متجاوب على الجوال']
  },
  {
    id: 'raem',
    title: 'RAËM — عبايات نسائية راقية',
    type: 'تجارة إلكترونية',
    description: 'براند عبايات نسائية (2026) بموقع عرض مجموعات وقصّات وتفاصيل، موجّه للسوق السعودي.',
    longDescription: 'مشروع ويب فعلي: موقع RAËM (ureemz.github.io/raem-abaya) لبراند عبايات نسائية، يعرض المجموعة، "لماذا RAËM"، تسوّق حسب اللون، آراء العملاء، وسياسات المتجر، مع تصميم عربي راقٍ متجاوب. نُشر على GitHub Pages.',
    image: 'assets/images/project-3.svg',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'E-commerce', 'GitHub Pages'],
    link: 'https://ureemz.github.io/raem-abaya/',
    file: '',
    year: '2026',
    role: 'تصميم وتطوير',
    highlights: ['عرض المجموعات والقصّات', 'تصميم عربي RTL', 'نشر على GitHub Pages']
  },
  {
    id: 'sight',
    title: 'Sight | سايت — نظارات فاخرة',
    type: 'تطوير ويب',
    description: 'موقع (2026) لبراند نظارات (Sight) بتجربة أنيقة، دليل ملاءمة، وقصة براند.',
    longDescription: 'مشروع ويب فعلي: موقع Sight (ureemz.github.io/sight) لبراند نظارات، يتضمن صفحات "قصتنا"، "دليل الأناقة"، "التقييمات"، "تواصل"، وتجربة شراء متعددة الأقسام (نسائي/رجالي/للجميع) مع دعم عملات متعددة. نُشر على GitHub Pages.',
    image: 'assets/images/project-4.svg',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'UI/UX', 'GitHub Pages'],
    link: 'https://ureemz.github.io/sight/',
    file: '',
    year: '2026',
    role: 'تصميم وتطوير',
    highlights: ['تجربة متعددة الأقسام', 'دليل ملاءمة الإطارات', 'نشر على GitHub Pages']
  }
];

/* ---------------------------------------------------------
   3) أدوات مساعدة
   --------------------------------------------------------- */
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

// منع أي نص من التحوّل إلى HTML عند بناء البطاقات
function escapeHTML(value) {
  return String(value ?? '').replace(/[&<>"']/g, (char) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[char]);
}

// أيقونة SVG داخلية جاهزة للإدراج
function icon(name, extraClass = '') {
  return `<svg${extraClass ? ` class="${extraClass}"` : ''} viewBox="0 0 24 24" aria-hidden="true"><use href="#i-${name}"></use></svg>`;
}

let toastTimer;
function showToast(message) {
  const toast = $('#toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('is-show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('is-show'), 3000);
}

/* ---------------------------------------------------------
   4) الوضع الفاتح / الداكن
   --------------------------------------------------------- */
function initTheme() {
  const toggle = $('#themeToggle');
  if (!toggle) return;

  function apply(theme) {
    document.documentElement.dataset.theme = theme;
    const isLight = theme === 'light';
    toggle.setAttribute('aria-pressed', String(isLight));
    toggle.setAttribute('aria-label', isLight ? 'التبديل إلى الوضع الداكن' : 'التبديل إلى الوضع الفاتح');
  }

  apply(document.documentElement.dataset.theme || 'dark');

  toggle.addEventListener('click', () => {
    const next = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
    apply(next);
    try { localStorage.setItem('reem-theme', next); } catch (e) { /* تخزين غير متاح */ }
  });
}

/* ---------------------------------------------------------
   5) القائمة على الجوال
   --------------------------------------------------------- */
function initNavigation() {
  const nav = $('#mainNav');
  const toggle = $('#menuToggle');
  if (!nav || !toggle) return;

  function close() {
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'فتح القائمة');
  }

  toggle.addEventListener('click', () => {
    const open = !nav.classList.contains('is-open');
    nav.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'إغلاق القائمة' : 'فتح القائمة');
  });

  nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', close));
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape') close(); });
  window.addEventListener('resize', () => { if (window.innerWidth > 1100) close(); });

  // تمييز الرابط النشط أثناء التمرير
  const links = $$('.nav-link');
  const sections = $$('main section[id]');
  function setActive(id) {
    links.forEach((link) => link.classList.toggle('is-active', link.getAttribute('href') === `#${id}`));
  }
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) setActive(entry.target.id); });
    }, { rootMargin: '-35% 0px -55% 0px', threshold: 0 });
    sections.forEach((section) => observer.observe(section));
  }
}

/* ---------------------------------------------------------
   6) حركات الظهور عند التمرير + العدّاد السريع
   --------------------------------------------------------- */
let revealObserver = null;

function observeReveals() {
  const elements = $$('.reveal:not(.is-visible)');
  if (!('IntersectionObserver' in window)) {
    elements.forEach((element) => element.classList.add('is-visible'));
    return;
  }
  if (!revealObserver) {
    revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  }
  elements.forEach((element) => revealObserver.observe(element));
}

function initCounters() {
  const counters = $$('[data-count]');
  if (!counters.length) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function run() {
    counters.forEach((el) => {
      const target = Number(el.dataset.count) || 0;
      if (reduceMotion) { el.textContent = target; return; }
      const start = performance.now();
      const duration = 1200;
      function step(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(target * eased);
        if (progress < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    });
  }

  const stats = $('.stats-grid');
  if (!stats || !('IntersectionObserver' in window)) { run(); return; }
  const observer = new IntersectionObserver((entries) => {
    if (entries.some((entry) => entry.isIntersecting)) { run(); observer.disconnect(); }
  }, { threshold: 0.3 });
  observer.observe(stats);
}

/* ---------------------------------------------------------
   7) شريط التقدّم، تمرير الصفحة، زر العودة للأعلى
   --------------------------------------------------------- */
function initScrollUI() {
  const header = $('#siteHeader');
  const progress = $('#scrollProgressBar');
  const toTop = $('#toTop');
  let ticking = false;

  function update() {
    const y = window.scrollY || document.documentElement.scrollTop;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    if (header) header.classList.toggle('is-scrolled', y > 20);
    if (toTop) toTop.classList.toggle('is-visible', y > 600);
    if (progress) progress.style.width = `${max > 0 ? Math.min((y / max) * 100, 100) : 0}%`;
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) { requestAnimationFrame(update); ticking = true; }
  }, { passive: true });
  update();

  if (toTop) toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ---------------------------------------------------------
   8) بناء بطاقات المشاريع والفلترة
   --------------------------------------------------------- */
function renderProjects() {
  const grid = $('#projectsGrid');
  const filters = $('#filterBar');
  const empty = $('#projectsEmpty');
  if (!grid || !filters) return;

  const types = ['الكل', ...new Set(projects.map((project) => project.type))];

  filters.innerHTML = types.map((type) => {
    const count = type === 'الكل' ? projects.length : projects.filter((p) => p.type === type).length;
    return `<button class="filter-btn" type="button" data-filter="${escapeHTML(type)}" aria-pressed="${type === 'الكل'}">
      ${escapeHTML(type)} <span class="filter-count">${count}</span>
    </button>`;
  }).join('');

  grid.innerHTML = projects.map((project, index) => `
    <article class="project-card reveal" data-type="${escapeHTML(project.type)}">
      <div class="card-media">
        <img src="${escapeHTML(project.image)}" alt="صورة توضيحية لمشروع: ${escapeHTML(project.title)}" loading="lazy" decoding="async">
        <span class="card-index">${String(index + 1).padStart(2, '0')}</span>
        <span class="card-type">${escapeHTML(project.type)}</span>
      </div>
      <div class="card-body">
        <h3>${escapeHTML(project.title)}</h3>
        <p>${escapeHTML(project.description)}</p>
        <div class="card-tags">${(project.tags || []).map((tag) => `<span>${escapeHTML(tag)}</span>`).join('')}</div>
        <span class="card-open">عرض التفاصيل ${icon('arrow')}</span>
      </div>
      <button class="card-hit" type="button" data-open="${index}" aria-label="عرض تفاصيل مشروع ${escapeHTML(project.title)}"></button>
    </article>
  `).join('');

  filters.addEventListener('click', (event) => {
    const button = event.target.closest('.filter-btn');
    if (!button) return;
    const selected = button.dataset.filter;
    filters.querySelectorAll('.filter-btn').forEach((btn) => btn.setAttribute('aria-pressed', String(btn === button)));
    let visible = 0;
    grid.querySelectorAll('.project-card').forEach((card) => {
      const show = selected === 'الكل' || card.dataset.type === selected;
      card.hidden = !show;
      if (show) visible += 1;
    });
    if (empty) empty.hidden = visible !== 0;
  });

  grid.addEventListener('click', (event) => {
    const button = event.target.closest('[data-open]');
    if (button) openProject(Number(button.dataset.open));
  });

  observeReveals();
}

/* ---------------------------------------------------------
   9) نافذة تفاصيل المشروع
   --------------------------------------------------------- */
function openProject(index) {
  const project = projects[index];
  const dialog = $('#projectDialog');
  if (!project || !dialog || typeof dialog.showModal !== 'function') return;

  $('#dialogImage').src = project.image || '';
  $('#dialogImage').alt = `صورة توضيحية لمشروع: ${project.title}`;
  $('#dialogType').textContent = project.type;
  $('#dialogTitle').textContent = project.title;
  $('#dialogDescription').textContent = project.longDescription || project.description;

  $('#dialogHighlights').innerHTML = (project.highlights || [])
    .map((item) => `<li>${escapeHTML(item)}</li>`).join('');

  $('#dialogTags').innerHTML = (project.tags || [])
    .map((tag) => `<span>${escapeHTML(tag)}</span>`).join('');

  $('#dialogMeta').innerHTML = `
    <span>السنة: <b>${escapeHTML(project.year || '—')}</b></span>
    <span>الدور: <b>${escapeHTML(project.role || '—')}</b></span>
    <span>النوع: <b>${escapeHTML(project.type)}</b></span>
  `;

  const actions = [];
  if (project.link) {
    actions.push(`<a class="btn btn-primary" href="${escapeHTML(project.link)}" target="_blank" rel="noopener">${icon('external')} زيارة المشروع</a>`);
  }
  if (project.file) {
    actions.push(`<a class="btn btn-ghost" href="${escapeHTML(project.file)}" target="_blank" rel="noopener">${icon('file')} فتح الملف</a>`);
  }
  if (!project.link && !project.file) {
    const subject = encodeURIComponent(`الاستفسار عن مشروع: ${project.title}`);
    actions.push(`<a class="btn btn-ghost" href="mailto:${SITE_CONFIG.email}?subject=${subject}">${icon('mail')} اطلب تفاصيل المشروع</a>`);
  }
  $('#dialogActions').innerHTML = actions.join('');

  dialog.showModal();
  document.body.classList.add('dialog-open');
}

function initDialog() {
  const dialog = $('#projectDialog');
  if (!dialog) return;
  const close = $('#dialogClose');
  if (close) close.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (event) => { if (event.target === dialog) dialog.close(); });
  dialog.addEventListener('close', () => document.body.classList.remove('dialog-open'));
}

/* ---------------------------------------------------------
   10) نموذج التواصل والتحقق من الحقول
   --------------------------------------------------------- */
function initContactForm() {
  const form = $('#contactForm');
  if (!form) return;

  const status = $('#formStatus');
  const rules = {
    fullName: (value) => value.trim().length >= 2 ? '' : 'يرجى إدخال الاسم الكامل (حرفان على الأقل).',
    email: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim()) ? '' : 'يرجى إدخال بريد إلكتروني صحيح.',
    message: (value) => value.trim().length >= 10 ? '' : 'يرجى كتابة رسالة من 10 أحرف على الأقل.'
  };

  function validate(input) {
    const message = rules[input.id] ? rules[input.id](input.value) : '';
    const error = document.getElementById(input.getAttribute('aria-describedby'));
    if (error) error.textContent = message;
    input.classList.toggle('is-invalid', Boolean(message));
    input.setAttribute('aria-invalid', String(Boolean(message)));
    return !message;
  }

  Object.keys(rules).forEach((id) => {
    const input = document.getElementById(id);
    if (!input) return;
    input.addEventListener('blur', () => validate(input));
    input.addEventListener('input', () => { if (input.classList.contains('is-invalid')) validate(input); });
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const fields = Object.keys(rules).map((id) => document.getElementById(id)).filter(Boolean);
    const valid = fields.map(validate).every(Boolean);

    if (!valid) {
      if (status) { status.textContent = 'يرجى تصحيح الحقول المشار إليها.'; status.style.color = 'var(--danger)'; }
      const firstInvalid = fields.find((field) => field.classList.contains('is-invalid'));
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    const name = $('#fullName').value.trim();
    const email = $('#email').value.trim();
    const subjectText = $('#subject').value.trim() || 'رسالة من معرض الأعمال';
    const message = $('#message').value.trim();

    if (SITE_CONFIG.formspreeEndpoint) {
      if (status) { status.textContent = 'جارٍ إرسال الرسالة...'; status.style.color = 'var(--accent)'; }
      fetch(SITE_CONFIG.formspreeEndpoint, {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, subject: subjectText, message })
      }).then((response) => {
        if (!response.ok) throw new Error('فشل الإرسال');
        if (status) status.textContent = 'تم إرسال رسالتك بنجاح، شكراً لتواصلك!';
        form.reset();
      }).catch(() => {
        if (status) { status.textContent = 'تعذّر الإرسال حالياً. جرّبي مرة أخرى أو راسلي البريد مباشرة.'; status.style.color = 'var(--danger)'; }
      });
    } else {
      const body = `الاسم: ${name}\nالبريد الإلكتروني: ${email}\n\nالرسالة:\n${message}`;
      window.location.href = `mailto:${SITE_CONFIG.email}?subject=${encodeURIComponent(subjectText)}&body=${encodeURIComponent(body)}`;
      if (status) { status.textContent = 'سيتم فتح تطبيق البريد لإكمال إرسال الرسالة.'; status.style.color = 'var(--accent)'; }
    }
  });
}

/* ---------------------------------------------------------
   11) نسخ البريد والروابط النائبة والسنة
   --------------------------------------------------------- */
async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (e) {
    const helper = document.createElement('textarea');
    helper.value = text;
    helper.style.position = 'fixed';
    helper.style.opacity = '0';
    document.body.appendChild(helper);
    helper.select();
    let copied = false;
    try { copied = document.execCommand('copy'); } catch (err) { copied = false; }
    helper.remove();
    return copied;
  }
}

function initMisc() {
  const copyButton = $('#copyEmail');
  if (copyButton) {
    copyButton.addEventListener('click', async () => {
      const copied = await copyText(SITE_CONFIG.email);
      showToast(copied ? 'تم نسخ البريد الإلكتروني ✓' : `البريد الإلكتروني: ${SITE_CONFIG.email}`);
    });
  }

  $$('[data-placeholder]').forEach((link) => {
    const key = link.dataset.placeholder;
    const url = SITE_CONFIG[key];
    if (url) {
      link.href = url;
      link.target = '_blank';
      link.rel = 'noopener';
      link.removeAttribute('data-placeholder');
    } else {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        showToast(`أضيفي رابط ${key === 'linkedin' ? 'LinkedIn' : 'GitHub'} من SITE_CONFIG في script.js`);
      });
    }
  });

  const year = $('#currentYear');
  if (year) year.textContent = new Date().getFullYear();
}

/* ---------------------------------------------------------
   12) التشغيل
   --------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavigation();
  initScrollUI();
  initCounters();
  renderProjects();
  initDialog();
  initContactForm();
  initMisc();
  observeReveals();
});
