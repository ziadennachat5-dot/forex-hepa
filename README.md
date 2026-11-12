# Forex Hepa - Landing Page (صفحة الهبوط الرسمية لمجتمع Forex Hepa)

صفحة هبوط فائقة السرعة وعالية التحويل (High-Converting Landing Page) مخصصة لحملات إعلانات إنستغرام وميتا (Meta / Instagram Ads) بنسبة 95% زيارات من الهاتف المحمول، وموجهة لهدف واحد مباشر: **تحويل الزائر للنقر على زر الانضمام لقناة تيليغرام مجاناً بدون أي تشتيت**.

---

## 🎨 الهوية البصرية ونظام الألوان (Minimalist Black & White Design System)

- **اللون الأساسي والخلفية:** أسود عميق فخم (`#050505` إلى `#0B0B0B`) مع بطاقات رمادية داكنة أنيقة (`#111111` إلى `#1A1A1A`) وحدود رفيعة شبه شفافة (`rgba(255, 255, 255, 0.08-0.15)`).
- **النصوص:** أبيض ناصع (`#FFFFFF`) للعناوين الرئيسية، ورمادي ناعم مقروء (`#A3A3A3`) للنصوص الفرعية والوصف.
- **الزر الرئيسي الموحد (Main CTA Button):** لون أبيض ناصع صلب (Solid White) مع كتابة سوداء داكنة (`#0A0A0A`)، توهج أبيض ناعم، ومؤثر نبض دوري أنيق. الزر موحد في كل أقسام الصفحة وفي شريط الهاتف العائم (Sticky Bottom Bar).
- **الأحمر والأخضر:** مقتصران حصرياً على عناصر التداول والرسوم البيانية (شموع الشارت، نسبة الصعود/الهبوط للعملات، ونقطة البث المباشر `🟢`). تم إزالة اللون الأصفر/الذهبي بالكامل من التصميم.
- **قسم التباين والإيقاع البصري:** قسم "كيفاش تنضم فـ 3 خطوات" مصمم بخلفية بيضاء فاتحة متباينة (`#F5F5F7`) ونصوص داكنة لكسر الرتابة ولفت انتباه الزائر.

---

## 🔗 الروابط الرسمية المعتمدة (Official Links)

- **رابط الانضمام الرئيسي (Telegram Group):** `https://t.me/+mGrv4sLYRjkwMmM0`
- **رابط الدعم الفني (Telegram Support):** `https://t.me/forexhepa_support`
- **حساب إنستغرام المؤسس (Instagram):** `https://www.instagram.com/adamou__1/`
- جميع الروابط تفتح في تبويب جديد (`target="_blank" rel="noopener noreferrer"`).

---

## 🎥 فيديوهات شهادات الأعضاء الحقيقية (Real Member Video Testimonials)

تم تضمين فيديوهات حقيقية لأعضاء المجتمع يتحدثون عن تجربتهم مع Forex Hepa:
- **المسار:** `assets/videos/member-01.mp4` إلى `member-05.mp4` (مضغوطة بصيغة H.264 MP4 ومحسنة للهاتف بسرعة تحميل فورية بفضل راية `faststart`)، مع حفظ النسخ الأصلية كاملة في `assets/videos/originals/`.
- **صور المعاينة (WebP Posters):** تم استخراج صور غلاف حقيقية بجودة عالية لكل فيديو في `assets/videos/posters/poster-01.webp` إلى `poster-05.webp`.
- **الفيديو المميز (Featured Video):** بطاقة فيديو عمودية رئيسية بأبعاد 9:16 مع إمكانية تحديد أي فيديو كمميز عبر خاصية `featured: true` في الإعدادات.
- **كاروسيل سحب أفقي (Horizontal Swipe Carousel):** استعراض بقية فيديوهات الأعضاء ببطاقات عمودية أنيقة بنظام snap scrolling متوافق تماماً مع اتجاه RTL.
- **تجربة تشغيل فائقة السلاسة:**
  - التحميل الكسول الذكي (`preload="none"`): لا يتم تحميل ملف الفيديو إلا بعد نقر الزائر على زر التشغيل.
  - تشغيل الصوت فوراً عند النقر بدون كتم (`sound on after tap`)، مع زر للتحكم في كتم/تشغيل الصوت.
  - إيقاف تلقائي لأي فيديو آخر عند تشغيل فيديو جديد.
  - إيقاف مؤقت ذكي تلقائي عند خروج الفيديو من شاشة الزائر أثناء التمرير (`IntersectionObserver`).
  - تتبع تلقائي لحدث المشاهدة `VideoPlay` في Meta Pixel.

---

## 📸 آراء وسكرين شوتات الأعضاء الحقيقية (30 Real Screenshots)

تم تضمين وتنسيق كافة سكرين شوتات محادثات وأرباح الأعضاء الحقيقية (30 صورة):
- **المسار:** `assets/screenshots/proof-01.webp` إلى `proof-30.webp` بصيغة WebP فائقة الخفة والسرعة مع حفظ النسخ الأصلية في `assets/screenshots/originals/`.
- **شبكة ماسونري غير مقتصة (2-Column Masonry):** مصفوفة عمودين على شاشات الهاتف المحمول دون أي اقتصاص للنصوص أو الأرقام.
- **لايت بوكس تفاعلي (Interactive Lightbox):** النقر على أي سكرين شوت يفتحها بحجم كامل مع عداد واضح (`1 / 30`)، إمكانية السحب يميناً ويساراً باللمس (Touch Swipe)، وأزرار التنقل والإغلاق.

---

## ⚙️ التعديل السريع (Configuration File)

جميع الإعدادات والروابط ومصفوفة الصور وأرقام الأعضاء موجودة في ملف واحد سهل التعديل:
👉 **[`js/config.js`](file:///c:/Users/Mac/adam/js/config.js)**

```javascript
window.SITE_CONFIG = {
  // 1. الروابط الأساسية
  telegramGroupUrl: "https://t.me/+mGrv4sLYRjkwMmM0",
  telegramSupportUrl: "https://t.me/forexhepa_support",
  instagramUrl: "https://www.instagram.com/adamou__1/",

  // 2. أرقام المجتمع القابلة للتعديل
  membersCount: "5,000+",
  onlineMembers: "438",

  // 3. بيكسل التتبع للإعلانات (Meta Pixel & Google Tag)
  metaPixelId: "YOUR_PIXEL_ID",
  googleTagId: "G-XXXXXXXXXX",

  // 4. فيديوهات شهادات الأعضاء (إضافة / حذف / تحديد المميز)
  videos: [
    { id: "member-01", src: "assets/videos/member-01.mp4", poster: "assets/videos/posters/poster-01.webp", duration: "0:31", tag: "رأي عضو", featured: true },
    { id: "member-02", src: "assets/videos/member-02.mp4", poster: "assets/videos/posters/poster-02.webp", duration: "1:00", tag: "رأي عضو" },
    ...
  ],

  // 5. السكرين شوتات (إضافة / حذف بكل سهولة)
  screenshots: [
    { id: "proof-01", src: "assets/screenshots/proof-01.webp", width: 720, height: 997, alt: "رأي أحد أعضاء مجتمع Forex Hepa (01)" },
    ...
  ]
};
```

---

## 📊 تتبع الإعلانات والتحويلات (Meta Pixel & Google Tag)

- عند نقر الزائر على أي زر CTA، يتم إرسال حدث **`Lead`** تلقائياً إلى Meta Pixel و Google Tag مع تحديد موقع الزر المضغوط (`hero`, `video`, `proofs`, `steps`, `final-cta`, `sticky-bottom`).

---

## 📱 اختبار التجاوب للهواتف (Mobile 360px Tested)

- تم اختبار الصفحة على أصغر شاشات الهواتف (عرض 360px) بنجاح:
  - لا يوجد أي تجاوز أفقي للمحتوى (`scrollWidth === 360`).
  - هوامش أمان سفلية مخصصة تمنع أي تداخل بين زر التثبيت العائم (Sticky Dock) ونصوص إخلاء المسؤولية.
  - دعم كامل للغة العربية واتجاه اليمين لليسار (`dir="rtl" lang="ar"`).
