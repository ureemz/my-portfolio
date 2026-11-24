# معرض أعمال — ريم الناخبي (الأمن السيبراني)

موقع عربي RTL احترافي وجاهز للنشر، مبني بـ HTML5 وCSS3 وJavaScript فقط، بدون مكتبات ثقيلة أو خطوات بناء.

## 1) هيكل المشروع

```text
reem-portfolio/
├── index.html              # أقسام الصفحة العشرة + أيقونات SVG داخلية + SEO
├── style.css               # الهوية البصرية كاملة (داكن/فاتح + تجاوب)
├── script.js               # إعدادات الموقع + مصفوفة الأعمال + التفاعلات
├── README.md               # هذا الملف
└── assets/
    ├── images/             # صورة تجريبية + 6 صور مشاريع (SVG قابلة للاستبدال)
    │   ├── profile.svg
    │   └── project-1.svg … project-4.svg
    ├── files/              # ضعي هنا السيرة الذاتية وملفات الأعمال
    │   └── .gitkeep
    └── icons/
        └── favicon.svg
```

> كل أكواد CSS وJavaScript داخل الملفين `style.css` و`script.js` فقط. ملفات SVG في `assets` مجرد أصول بصرية قابلة للتبديل.

## 2) تشغيل الموقع محلياً

افتح `index.html` مباشرة في المتصفح، أو لتجربة أقرب للنشر:

```bash
cd reem-portfolio
python -m http.server 8000
```

ثم افتح `http://localhost:8000`.

## 3) إضافة مشروع جديد

افتح `script.js` وأضف عنصراً داخل مصفوفة `projects` (في أعلى الملف):

```js
{
  id: 'my-new-project',
  title: 'عنوان المشروع',
  type: 'أمن الشبكات',          // يُستخدم لإنشاء زر الفلترة تلقائياً
  description: 'وصف مختصر يظهر على البطاقة.',
  longDescription: 'شرح أطول يظهر داخل نافذة التفاصيل.',
  image: 'assets/images/project-7.svg', // أو ضع صورة حقيقية في assets/images
  tags: ['Python', 'Wireshark'],
  link: 'https://example.com',  // اتركه '' إذا لا يوجد رابط
  file: 'assets/files/my-work.pdf', // اتركه '' إذا لا يوجد ملف
  year: '2026',
  role: 'دوري في المشروع',
  highlights: ['نقطة مهمة 1', 'نقطة مهمة 2']
}
```

بمجرد حفظ الملف تظهر البطاقة تلقائياً، ويُنشأ زر فلترة جديد إذا كان النوع `type` جديداً. للصور: ضع ملفك في `assets/images/` واكتب مساره في `image`، ويفضّل أن يكون تناسب الصورة 16:10 وبعرض 1200px تقريباً. الصور الحالية نماذج SVG احتفظتُ بها ليعمل الموقع فوراً قبل إضافة صورك.

## 4) تعديل الألوان والهوية

في أعلى `style.css` ستجد `:root` (الوضع الداكن) و`html[data-theme="light"]` (الوضع الفاتح):

```css
--accent: #3ddcc0;   /* اللون المميز: التركوازي */
--bg: #070b14;       /* لون الخلفية */
--text: #eaf1f8;     /* لون النص */
--font-ar: "IBM Plex Sans Arabic", ...;
```

غيّر `--accent` في الموضعين إلى لون واحد جديد (مثلاً بنفسجي `#a78bfa`) وسيتبعه بقية التصميم: الأزرار، الحدود، الروابط، الرسوم، والتوهج. لتغيير الخط عدّل رابط Google Fonts في `index.html` ثم `--font-ar`.

## 5) الروابط والنموذج والسيرة الذاتية

- **البريد والروابط الاجتماعية:** داخل `SITE_CONFIG` في أعلى `script.js`. ضعي `linkedin` و`github`، والبريد `reeeme19978@gmail.com` جاهز.
- **نموذج التواصل:** يعمل افتراضياً عبر `mailto` (يفتح برنامج البريد بمحتوى الرسالة). إذا أردت استقبال مباشر عبر الموقع، أنشئ نموذجاً مجانياً على [Formspree](https://formspree.io) وضع رابطه في `formspreeEndpoint`.
- **السيرة الذاتية:** ضعي ملفك باسم `reem-cv.pdf` داخل `assets/files/`؛ سيعمل زر التحميل والمعاينة تلقائياً. إن أردت اسماً آخر عدّل المسار في `index.html` و`SITE_CONFIG.cvPath`.
- **بياناتك الشخصية والنصوص التجريبية:** النبذة، الشهادات، والتعليم نصوص واضحة قابلة للتعديل داخل `index.html` (ابحثي عن ملاحظة «نموذج قابل للتعديل» أو `editable-note`).

## 6) النشر المجاني

### GitHub Pages (الأسهل)
1. أنشئ مستودعاً جديداً باسم `reem-portfolio` وارفع كل ملفات المجلد بداخله (بما فيها مجلد `assets`).
2. من المستودع: **Settings → Pages → Build and deployment → Source: Deploy from a branch**.
3. اختر `main` و`/ (root)` ثم **Save**.
4. بعد دقائق يصبح الرابط: `https://<اسم-المستخدم>.github.io/reem-portfolio/`.
5. لتحديث الموقع لاحقاً: `git add .` ثم `git commit -m "update"` ثم `git push`.

### Netlify
اسحب مجلد `reem-portfolio` كاملاً إلى [app.netlify.com/drop](https://app.netlify.com/drop) وينشر فوراً. للربط بـ GitHub: **Add new site → Import from Git** دون أي إعدادات بناء.

### Vercel
من [vercel.com/new](https://vercel.com/new) استورد المستودع؛ يكتشف Vercel أن الموقع ثابت (Static) وينشره مباشرة.

> ملاحظة: بعد النشر حدّث `og:image` في `index.html` ليشير إلى رابطك الكامل إذا أردت معاينة مشاركة مثالية على وسائل التواصل.

## 7) قائمة تحقق قبل التسليم

- [ ] استبدال `profile.svg` وصور `project-*.svg` بصور حقيقية.
- [ ] إضافة `assets/files/reem-cv.pdf`.
- [ ] إضافة/تحديث مشاريعك في مصفوفة `projects` (حالياً: Veyra, CV, RAËM, Sight).
- [ ] تعديل الشهادات والتعليم والنبذة بنصوصك الحقيقية.
- [ ] إضافة روابط LinkedIn وGitHub داخل `SITE_CONFIG`.
- [ ] تجربة الوضع الفاتح/الداكن والنموذج على الجوال قبل النشر.
