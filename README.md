# موقع ثابت جاهز للانطلاق

موقع بسيط متعدد الصفحات (HTML/CSS/JS) باللغة العربية وبدعم اتجاه RTL، مع أساسيات SEO وملفات مساعدة للتشغيل محليًا.

## الميزات
- تصميم متجاوب وبسيط
- صفحات: الرئيسية، من نحن، اتصل بنا
- أساسيات SEO: `robots.txt`, `sitemap.xml`, و`manifest.webmanifest`
- أيقونة موقع `favicon.svg`
- سكربت تشغيل محلي: `scripts/serve.sh`
- تنسيق موحد عبر `.editorconfig` و`.gitignore`

## هيكل المجلدات
```
/
├─ index.html
├─ pages/
│  ├─ about.html
│  └─ contact.html
├─ assets/
│  ├─ css/styles.css
│  ├─ js/main.js
│  └─ img/favicon.svg
├─ robots.txt
├─ sitemap.xml (استبدل example.com بنطاقك)
├─ manifest.webmanifest
├─ scripts/serve.sh
├─ .editorconfig
├─ .gitignore
└─ LICENSE
```

## التشغيل محليًا
- عبر Python:
  ```bash
  bash scripts/serve.sh
  # أو
  PORT=8080 bash scripts/serve.sh
  ```
- ثم افتح المتصفح على `http://localhost:8000` (أو المنفذ الذي اخترته).

## النشر السريع
- GitHub Pages: ادفع هذا المجلد إلى الفرع `main`، وفعّل Pages من إعدادات المستودع لاستخدام الجذر `/`.
- أي استضافة ملفات ثابتة (Netlify، Vercel، Cloudflare Pages) تعمل مباشرة بدون بناء.

## تخصيص
- حدّث النصوص والألوان في `assets/css/styles.css`.
- أضف صفحات جديدة ضمن `pages/` وتذكّر ربطها في شريط التنقل وتحديث `sitemap.xml`.
- استبدل `https://example.com` في `sitemap.xml` و`og:url` في `index.html` بنطاقك.

## الترخيص
مرخّص تحت MIT (راجع ملف `LICENSE`).