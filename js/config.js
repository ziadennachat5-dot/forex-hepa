/**
 * ==============================================================================
 * FOREX HEPA - CONFIGURATION FILE (إعدادات الموقع)
 * ==============================================================================
 * Theme: Minimalist Black & White with Red/Green Trading Accents
 * All links, numbers, videos, and screenshots are configured right here.
 */

window.SITE_CONFIG = {
  // ----------------------------------------------------------------------------
  // 1. CORE LINKS (روابط الانضمام والدعم)
  // ----------------------------------------------------------------------------
  // Main Telegram Community link
  telegramGroupUrl: "https://t.me/+mGrv4sLYRjkwMmM0",

  // Support Telegram link
  telegramSupportUrl: "https://t.me/forexhepa_support",

  // Founder Instagram profile link
  instagramUrl: "https://www.instagram.com/adamou__1/",

  // ----------------------------------------------------------------------------
  // 2. SOCIAL PROOF & STATS (أرقام وإحصائيات المجتمع)
  // ----------------------------------------------------------------------------
  membersCount: "5,000+",      // عدد الأعضاء الظاهر في الهيدر والبادج
  onlineMembers: "438",       // عدد المتصلين الآن
  satisfactionRate: "99%",    // نسبة رضا الأعضاء

  // ----------------------------------------------------------------------------
  // 3. TRACKING PIXELS (معرفات التتبع للإعلانات)
  // ----------------------------------------------------------------------------
  // Paste your Meta Pixel ID here (e.g., "987654321098765")
  metaPixelId: "",

  // Paste your Google Analytics / Ads ID here (e.g., "G-XXXXXXXXXX")
  googleTagId: "",

  // ----------------------------------------------------------------------------
  // 4. REAL MEMBER TESTIMONIAL VIDEOS (فيديوهات آراء الأعضاء الحقيقية)
  // ----------------------------------------------------------------------------
  // Set featured: true on any video to choose it as the large main featured player.
  // Otherwise, the first video in the array is automatically featured.
  // All remaining videos are rendered in the horizontal swipe carousel.
  videos: [
    {
      id: "video-01",
      title: "رأي عضو في مجتمع Forex Hepa (01)",
      badge: "رأي عضو",
      duration: "0:31",
      src: "assets/videos/member-01.mp4",
      poster: "assets/videos/posters/poster-01.webp",
      featured: true
    },
    {
      id: "video-02",
      title: "رأي عضو في مجتمع Forex Hepa (02)",
      badge: "رأي عضو",
      duration: "1:00",
      src: "assets/videos/member-02.mp4",
      poster: "assets/videos/posters/poster-02.webp",
      featured: false
    },
    {
      id: "video-03",
      title: "رأي عضو في مجتمع Forex Hepa (03)",
      badge: "رأي عضو",
      duration: "0:26",
      src: "assets/videos/member-03.mp4",
      poster: "assets/videos/posters/poster-03.webp",
      featured: false
    },
    {
      id: "video-04",
      title: "رأي عضو في مجتمع Forex Hepa (04)",
      badge: "رأي عضو",
      duration: "0:20",
      src: "assets/videos/member-04.mp4",
      poster: "assets/videos/posters/poster-04.webp",
      featured: false
    },
    {
      id: "video-05",
      title: "رأي عضو في مجتمع Forex Hepa (05)",
      badge: "رأي عضو",
      duration: "0:39",
      src: "assets/videos/member-05.mp4",
      poster: "assets/videos/posters/poster-05.webp",
      featured: false
    }
  ],

  // ----------------------------------------------------------------------------
  // 6. REAL MEMBER SCREENSHOTS & PROOF (آراء وسكرين شوتات الأعضاء الحقيقية)
  // ----------------------------------------------------------------------------
  // Automatically loaded. Add or remove any image objects below to update the grid:
  screenshots: [
    { id: "proof-01", src: "assets/screenshots/proof-01.webp", width: 720, height: 997, alt: "رأي أحد أعضاء مجتمع Forex Hepa (01)" },
    { id: "proof-02", src: "assets/screenshots/proof-02.webp", width: 720, height: 809, alt: "رأي أحد أعضاء مجتمع Forex Hepa (02)" },
    { id: "proof-03", src: "assets/screenshots/proof-03.webp", width: 720, height: 544, alt: "رأي أحد أعضاء مجتمع Forex Hepa (03)" },
    { id: "proof-04", src: "assets/screenshots/proof-04.webp", width: 720, height: 1159, alt: "رأي أحد أعضاء مجتمع Forex Hepa (04)" },
    { id: "proof-05", src: "assets/screenshots/proof-05.webp", width: 720, height: 925, alt: "رأي أحد أعضاء مجتمع Forex Hepa (05)" },
    { id: "proof-06", src: "assets/screenshots/proof-06.webp", width: 720, height: 626, alt: "رأي أحد أعضاء مجتمع Forex Hepa (06)" },
    { id: "proof-07", src: "assets/screenshots/proof-07.webp", width: 720, height: 433, alt: "رأي أحد أعضاء مجتمع Forex Hepa (07)" },
    { id: "proof-08", src: "assets/screenshots/proof-08.webp", width: 720, height: 914, alt: "رأي أحد أعضاء مجتمع Forex Hepa (08)" },
    { id: "proof-09", src: "assets/screenshots/proof-09.webp", width: 720, height: 829, alt: "رأي أحد أعضاء مجتمع Forex Hepa (09)" },
    { id: "proof-10", src: "assets/screenshots/proof-10.webp", width: 720, height: 1049, alt: "رأي أحد أعضاء مجتمع Forex Hepa (10)" },
    { id: "proof-11", src: "assets/screenshots/proof-11.webp", width: 720, height: 904, alt: "رأي أحد أعضاء مجتمع Forex Hepa (11)" },
    { id: "proof-12", src: "assets/screenshots/proof-12.webp", width: 720, height: 906, alt: "رأي أحد أعضاء مجتمع Forex Hepa (12)" },
    { id: "proof-13", src: "assets/screenshots/proof-13.webp", width: 720, height: 897, alt: "رأي أحد أعضاء مجتمع Forex Hepa (13)" },
    { id: "proof-14", src: "assets/screenshots/proof-14.webp", width: 720, height: 1244, alt: "رأي أحد أعضاء مجتمع Forex Hepa (14)" },
    { id: "proof-15", src: "assets/screenshots/proof-15.webp", width: 720, height: 926, alt: "رأي أحد أعضاء مجتمع Forex Hepa (15)" },
    { id: "proof-16", src: "assets/screenshots/proof-16.webp", width: 720, height: 433, alt: "رأي أحد أعضاء مجتمع Forex Hepa (16)" },
    { id: "proof-17", src: "assets/screenshots/proof-17.webp", width: 720, height: 909, alt: "رأي أحد أعضاء مجتمع Forex Hepa (17)" },
    { id: "proof-18", src: "assets/screenshots/proof-18.webp", width: 720, height: 949, alt: "رأي أحد أعضاء مجتمع Forex Hepa (18)" },
    { id: "proof-19", src: "assets/screenshots/proof-19.webp", width: 720, height: 1014, alt: "رأي أحد أعضاء مجتمع Forex Hepa (19)" },
    { id: "proof-20", src: "assets/screenshots/proof-20.webp", width: 720, height: 986, alt: "رأي أحد أعضاء مجتمع Forex Hepa (20)" },
    { id: "proof-21", src: "assets/screenshots/proof-21.webp", width: 720, height: 760, alt: "رأي أحد أعضاء مجتمع Forex Hepa (21)" },
    { id: "proof-22", src: "assets/screenshots/proof-22.webp", width: 720, height: 897, alt: "رأي أحد أعضاء مجتمع Forex Hepa (22)" },
    { id: "proof-23", src: "assets/screenshots/proof-23.webp", width: 720, height: 904, alt: "رأي أحد أعضاء مجتمع Forex Hepa (23)" },
    { id: "proof-24", src: "assets/screenshots/proof-24.webp", width: 720, height: 702, alt: "رأي أحد أعضاء مجتمع Forex Hepa (24)" },
    { id: "proof-25", src: "assets/screenshots/proof-25.webp", width: 720, height: 1171, alt: "رأي أحد أعضاء مجتمع Forex Hepa (25)" },
    { id: "proof-26", src: "assets/screenshots/proof-26.webp", width: 720, height: 889, alt: "رأي أحد أعضاء مجتمع Forex Hepa (26)" },
    { id: "proof-27", src: "assets/screenshots/proof-27.webp", width: 720, height: 767, alt: "رأي أحد أعضاء مجتمع Forex Hepa (27)" },
    { id: "proof-28", src: "assets/screenshots/proof-28.webp", width: 720, height: 889, alt: "رأي أحد أعضاء مجتمع Forex Hepa (28)" },
    { id: "proof-29", src: "assets/screenshots/proof-29.webp", width: 720, height: 668, alt: "رأي أحد أعضاء مجتمع Forex Hepa (29)" },
    { id: "proof-30", src: "assets/screenshots/proof-30.webp", width: 720, height: 1208, alt: "رأي أحد أعضاء مجتمع Forex Hepa (30)" }
  ]
};
