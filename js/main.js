/**
 * ==============================================================================
 * FOREX HEPA - CORE JAVASCRIPT
 * Theme: Minimalist Black & White with Red/Green Trading Accents
 * High-Converting Mobile-First Engine
 * Features: Ad Tracking (Lead Events), UTM Preservation, Dynamic Sync,
 *           Red & Green Canvas Candlesticks with Crisp White Trendline,
 *           Dynamic Real Screenshots Masonry Grid, Lightbox with Touch Swipe,
 *           FAQ Accordions, Video Player, Sticky Mobile Solid White CTA.
 * ==============================================================================
 */

(function () {
  'use strict';

  // --------------------------------------------------------------------------
  // 1. CONFIG & CONTACT CONSTANTS
  // --------------------------------------------------------------------------
  const TELEGRAM_GROUP_INVITE = (window.SITE_CONFIG && window.SITE_CONFIG.telegramGroupInvite) || "mGrv4sLYRjkwMmM0";
  const TELEGRAM_SUPPORT_USERNAME = (window.SITE_CONFIG && window.SITE_CONFIG.telegramSupportUsername) || "forexhepa_support";
  const WHATSAPP_NUMBER = (window.SITE_CONFIG && window.SITE_CONFIG.whatsappNumber) || "212727846454";
  const WHATSAPP_MESSAGE = (window.SITE_CONFIG && window.SITE_CONFIG.whatsappMessage) || "سلام، بغيت معلومات على مجموعة Forex Hepa";

  const STORE_LINKS = (window.SITE_CONFIG && window.SITE_CONFIG.storeLinks) || {
    ios: "https://apps.apple.com/app/telegram-messenger/id686449807",
    android: "https://play.google.com/store/apps/details?id=org.telegram.messenger",
    desktop: "https://telegram.org/apps"
  };

  const config = window.SITE_CONFIG || {
    telegramGroupInvite: TELEGRAM_GROUP_INVITE,
    telegramSupportUsername: TELEGRAM_SUPPORT_USERNAME,
    telegramGroupUrl: "https://t.me/+" + TELEGRAM_GROUP_INVITE,
    telegramSupportUrl: "https://t.me/" + TELEGRAM_SUPPORT_USERNAME,
    whatsappNumber: WHATSAPP_NUMBER,
    whatsappMessage: WHATSAPP_MESSAGE,
    storeLinks: STORE_LINKS,
    instagramUrl: "https://www.instagram.com/adamou__1/",
    membersCount: "5,000+",
    onlineMembers: "438",
    screenshots: []
  };

  /**
   * Device and platform detection
   */
  function isIOS() {
    const ua = navigator.userAgent || navigator.vendor || window.opera || '';
    const platform = navigator.platform || '';
    const isAppleDevice = /iPad|iPhone|iPod/i.test(ua);
    const isIPadOS = (/Macintosh/i.test(ua) || platform === 'MacIntel') && (navigator.maxTouchPoints > 1);
    return isAppleDevice || isIPadOS;
  }

  function isAndroid() {
    const ua = navigator.userAgent || navigator.vendor || window.opera || '';
    return /Android/i.test(ua);
  }

  function isMobileDevice() {
    return isIOS() || isAndroid();
  }

  function isInAppBrowser() {
    const ua = navigator.userAgent || navigator.vendor || window.opera || '';
    return /Instagram|FBAN|FBAV|Snapchat|TikTok/i.test(ua);
  }

  function getStoreUrl() {
    if (isIOS()) return (config.storeLinks && config.storeLinks.ios) || STORE_LINKS.ios;
    if (isAndroid()) return (config.storeLinks && config.storeLinks.android) || STORE_LINKS.android;
    return (config.storeLinks && config.storeLinks.desktop) || STORE_LINKS.desktop;
  }

  function getWhatsAppUrl() {
    const cleanNum = (config.whatsappNumber || WHATSAPP_NUMBER).replace(/[^0-9]/g, '');
    const encodedMsg = encodeURIComponent(config.whatsappMessage || WHATSAPP_MESSAGE);
    return `https://wa.me/${cleanNum}?text=${encodedMsg}`;
  }

  /**
   * Extract incoming UTM and tracking query parameters
   */
  function getQueryParams() {
    const params = {};
    try {
      const search = window.location.search.substring(1);
      if (search) {
        const pairs = search.split('&');
        for (let i = 0; i < pairs.length; i++) {
          const pair = pairs[i].split('=');
          const key = decodeURIComponent(pair[0]);
          const value = decodeURIComponent(pair[1] || '');
          if (key) params[key] = value;
        }
      }
    } catch (e) {
      console.warn('Error parsing URL params', e);
    }
    return params;
  }

  const queryParams = getQueryParams();

  // Save UTMs to sessionStorage for persistence across page actions
  try {
    if (Object.keys(queryParams).length > 0) {
      sessionStorage.setItem('forex_hepa_utm', JSON.stringify(queryParams));
    }
  } catch (e) {}

  // --------------------------------------------------------------------------
  // 2. AD TRACKING HANDLERS (META PIXEL & GOOGLE TAG)
  // --------------------------------------------------------------------------
  function trackJoinLead(locationName) {
    const storedUtm = (() => {
      try {
        return JSON.parse(sessionStorage.getItem('forex_hepa_utm') || '{}');
      } catch (e) {
        return {};
      }
    })();

    const eventPayload = {
      content_name: 'Forex Hepa Telegram Join',
      content_category: 'Forex Community',
      button_location: locationName,
      source_platform: 'Meta Ads',
      ...storedUtm,
      ...queryParams
    };

    // 1. Meta Pixel Lead Event
    if (typeof window.fbq === 'function') {
      try {
        window.fbq('track', 'Lead', eventPayload);
        console.log('[Tracking] Meta Pixel Lead event fired from:', locationName);
      } catch (err) {
        console.warn('[Tracking] Meta Pixel error:', err);
      }
    }

    // 2. Google Analytics / Google Ads Event
    if (typeof window.gtag === 'function') {
      try {
        window.gtag('event', 'generate_lead', {
          event_category: 'Community',
          event_label: locationName,
          value: 1
        });
        console.log('[Tracking] Google Tag Lead event fired from:', locationName);
      } catch (err) {
        console.warn('[Tracking] Google Tag error:', err);
      }
    }
  }

  function trackWhatsAppContact() {
    const storedUtm = (() => {
      try {
        return JSON.parse(sessionStorage.getItem('forex_hepa_utm') || '{}');
      } catch (e) {
        return {};
      }
    })();

    const eventPayload = {
      content_name: 'Forex Hepa WhatsApp Contact',
      content_category: 'Contact',
      contact_channel: 'WhatsApp',
      source_platform: 'Meta Ads',
      ...storedUtm,
      ...queryParams
    };

    // 1. Meta Pixel Contact Event
    if (typeof window.fbq === 'function') {
      try {
        window.fbq('track', 'Contact', eventPayload);
        console.log('[Tracking] Meta Pixel Contact event fired');
      } catch (err) {
        console.warn('[Tracking] Meta Pixel error:', err);
      }
    }

    // 2. Google Analytics Event
    if (typeof window.gtag === 'function') {
      try {
        window.gtag('event', 'contact', {
          event_category: 'Contact',
          event_label: 'WhatsApp',
          value: 1
        });
        console.log('[Tracking] Google Tag Contact event fired');
      } catch (err) {
        console.warn('[Tracking] Google Tag error:', err);
      }
    }
  }

  // --------------------------------------------------------------------------
  // 3. TELEGRAM MOBILE DEEP LINKING & FALLBACK HANDLER
  // --------------------------------------------------------------------------
  let isTelegramCheckInProgress = false;
  let checkTimeoutId = null;
  let autoOpenTimeoutId = null;
  let visibilityListener = null;
  let pageHideListener = null;
  let blurListener = null;
  let activePromptElement = null;
  let hasUserInteracted = false;

  function cleanupTelegramCheck() {
    if (checkTimeoutId) {
      clearTimeout(checkTimeoutId);
      checkTimeoutId = null;
    }
    if (autoOpenTimeoutId) {
      clearTimeout(autoOpenTimeoutId);
      autoOpenTimeoutId = null;
    }
    if (visibilityListener) {
      document.removeEventListener('visibilitychange', visibilityListener);
      visibilityListener = null;
    }
    if (pageHideListener) {
      window.removeEventListener('pagehide', pageHideListener);
      pageHideListener = null;
    }
    if (blurListener) {
      window.removeEventListener('blur', blurListener);
      blurListener = null;
    }
    isTelegramCheckInProgress = false;
  }

  function removeActivePrompt() {
    if (activePromptElement && activePromptElement.parentNode) {
      activePromptElement.parentNode.removeChild(activePromptElement);
    }
    activePromptElement = null;
  }

  function renderTelegramInstallPrompt(button, storeUrl) {
    removeActivePrompt();

    const prompt = document.createElement('div');
    const isSticky = !!button.closest('.sticky-cta-bar');
    prompt.className = 'telegram-install-prompt' + (isSticky ? ' telegram-install-prompt--sticky' : '');
    prompt.setAttribute('role', 'alert');
    prompt.innerHTML = `
      <div class="telegram-install-prompt__inner">
        <a href="${storeUrl}" target="_blank" rel="noopener noreferrer" class="btn-store-download">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="16" height="16" aria-hidden="true">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          <span>حمّل تيليغرام</span>
        </a>
        <p class="telegram-install-msg">بعد ما تحمّل تيليغرام، رجع لهاد الصفحة وكليكي على الزر مرة أخرى.</p>
        <button type="button" class="telegram-install-close" aria-label="إغلاق التنبيه">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="13" height="13">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
      </div>
    `;

    if (isSticky) {
      document.body.appendChild(prompt);
    } else {
      button.insertAdjacentElement('afterend', prompt);
    }

    activePromptElement = prompt;

    // Interaction handling to cancel auto-open
    const markInteracted = () => {
      hasUserInteracted = true;
      if (autoOpenTimeoutId) {
        clearTimeout(autoOpenTimeoutId);
        autoOpenTimeoutId = null;
      }
    };

    const storeBtn = prompt.querySelector('.btn-store-download');
    if (storeBtn) {
      storeBtn.addEventListener('click', markInteracted);
    }

    const closeBtn = prompt.querySelector('.telegram-install-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', (ev) => {
        ev.stopPropagation();
        markInteracted();
        removeActivePrompt();
      });
    }

    prompt.addEventListener('pointerdown', markInteracted);
    window.addEventListener('scroll', markInteracted, { passive: true, once: true });
    window.addEventListener('pointerdown', function onPageTap(ev) {
      if (!prompt.contains(ev.target) && ev.target !== button) {
        markInteracted();
      }
    }, { once: true });
  }

  function handleTelegramClick(e, button) {
    const loc = button.getAttribute('data-cta-location') || 'unknown';
    const explicitType = button.getAttribute('data-cta-type');
    const href = button.getAttribute('href') || '';
    const type = explicitType || (
      (href.includes('support') || href.includes(TELEGRAM_SUPPORT_USERNAME)) ? 'support' :
      (loc.includes('support') ? 'support' : 'group')
    );
    const fallbackUrl = (type === 'support')
      ? (config.telegramSupportUrl || `https://t.me/${TELEGRAM_SUPPORT_USERNAME}`)
      : (config.telegramGroupUrl || `https://t.me/+${TELEGRAM_GROUP_INVITE}`);

    // Ensure the link href is always set to the clean fallback link
    button.setAttribute('href', fallbackUrl);

    // Always fire Lead tracking event first (Meta Pixel + Google Tag)
    trackJoinLead(loc);

    // 1) iOS Fix: On iOS (iPhone/iPad/iPod, including iPadOS reporting as Macintosh with touch),
    // do NOT use tg:// at all. The Telegram buttons must be plain links to https://t.me/...
    // opened normally with no preventDefault and no setTimeout redirect.
    if (isIOS()) {
      return; // Allow native navigation to plain fallbackUrl (0 tg:// calls)
    }

    // On Desktop / non-mobile: no tg:// logic, open normal https://t.me link
    if (!isAndroid()) {
      return; // Allow default link behavior (opens target="_blank")
    }

    // Inside In-App Browser (Instagram, FBAN, FBAV, TikTok, Snapchat):
    // Skip tg:// attempt and open plain https://t.me link, show dismissible top bar
    if (isInAppBrowser()) {
      showInAppBrowserNotice();
      return; // Allow default link behavior (opens target="_blank")
    }

    // 2) Keep the tg:// + 1500 ms visibility fallback logic on Android only:
    e.preventDefault();

    // Ignore taps while check is in progress
    if (isTelegramCheckInProgress) {
      return;
    }

    cleanupTelegramCheck();
    removeActivePrompt();

    isTelegramCheckInProgress = true;
    hasUserInteracted = false;

    const groupInvite = config.telegramGroupInvite || TELEGRAM_GROUP_INVITE;
    const supportUsername = config.telegramSupportUsername || TELEGRAM_SUPPORT_USERNAME;
    const deepLink = (type === 'support')
      ? `tg://resolve?domain=${supportUsername}`
      : `tg://join?invite=${groupInvite}`;

    const storeUrl = getStoreUrl();
    let appOpened = false;

    function handleAppDetected() {
      appOpened = true;
      cleanupTelegramCheck();
      removeActivePrompt();
    }

    visibilityListener = function () {
      if (document.hidden) {
        handleAppDetected();
      }
    };
    pageHideListener = function () {
      handleAppDetected();
    };
    blurListener = function () {
      handleAppDetected();
    };

    document.addEventListener('visibilitychange', visibilityListener);
    window.addEventListener('pagehide', pageHideListener);
    window.addEventListener('blur', blurListener);

    // Set window.location to deep link
    window.location.href = deepLink;

    // Check after 1500 ms with Page Visibility API
    checkTimeoutId = setTimeout(() => {
      // If app opened or page hidden, do nothing
      if (appOpened || document.hidden) {
        cleanupTelegramCheck();
        return;
      }

      // Cleanup visibility listeners
      if (visibilityListener) {
        document.removeEventListener('visibilitychange', visibilityListener);
        visibilityListener = null;
      }
      if (pageHideListener) {
        window.removeEventListener('pagehide', pageHideListener);
        pageHideListener = null;
      }
      if (blurListener) {
        window.removeEventListener('blur', blurListener);
        blurListener = null;
      }
      isTelegramCheckInProgress = false;

      // Show message and store button under tapped button
      renderTelegramInstallPrompt(button, storeUrl);

      // Auto-open store after 1 more second only if person did not tap anything
      autoOpenTimeoutId = setTimeout(() => {
        if (!hasUserInteracted && !document.hidden && activePromptElement) {
          window.location.href = storeUrl;
        }
      }, 1000);
    }, 1500);
  }

  // --------------------------------------------------------------------------
  // 4. SYNC CONFIG WITH DOM ELEMENTS
  // --------------------------------------------------------------------------
  function syncDomWithConfig() {
    // Member counts
    const heroMemberCount = document.getElementById('member-count-hero');
    if (heroMemberCount && config.membersCount) {
      heroMemberCount.textContent = '+' + config.membersCount.replace('+', '');
    }

    const finalMemberCount = document.getElementById('member-count-final');
    if (finalMemberCount && config.membersCount) {
      finalMemberCount.textContent = config.membersCount;
    }

    const trustBarCount = document.getElementById('trust-bar-count');
    if (trustBarCount && config.membersCount) {
      trustBarCount.textContent = config.membersCount;
    }

    const heroOnlineCount = document.getElementById('online-count-hero');
    if (heroOnlineCount && config.onlineMembers) {
      heroOnlineCount.textContent = config.onlineMembers;
    }

    // All Telegram CTA links (Group & Support)
    const ctaButtons = document.querySelectorAll('a[data-cta-location]');
    ctaButtons.forEach(btn => {
      const loc = btn.getAttribute('data-cta-location') || 'unknown';
      const explicitType = btn.getAttribute('data-cta-type');
      const href = btn.getAttribute('href') || '';
      const type = explicitType || (
        (href.includes('support') || href.includes(TELEGRAM_SUPPORT_USERNAME)) ? 'support' :
        (loc.includes('support') ? 'support' : 'group')
      );
      const fallbackUrl = (type === 'support')
        ? (config.telegramSupportUrl || `https://t.me/${TELEGRAM_SUPPORT_USERNAME}`)
        : (config.telegramGroupUrl || `https://t.me/+${TELEGRAM_GROUP_INVITE}`);

      btn.setAttribute('href', fallbackUrl);
      btn.setAttribute('target', '_blank');
      btn.setAttribute('rel', 'noopener noreferrer');

      btn.addEventListener('click', function (e) {
        handleTelegramClick(e, btn);
      });
    });

    // Support links
    const supportLinks = [
      document.getElementById('faq-support-link'),
      document.getElementById('footer-support-link')
    ];
    supportLinks.forEach(link => {
      if (link && config.telegramSupportUrl) {
        link.setAttribute('href', config.telegramSupportUrl);
      }
    });

    // Secondary WhatsApp buttons (Support area only)
    const waButtons = document.querySelectorAll('[data-whatsapp-btn]');
    const waUrl = getWhatsAppUrl();
    waButtons.forEach(btn => {
      btn.setAttribute('href', waUrl);
      btn.setAttribute('target', '_blank');
      btn.setAttribute('rel', 'noopener noreferrer');
      btn.addEventListener('click', function () {
        trackWhatsAppContact();
      });
    });

    // Instagram link
    const igLink = document.getElementById('footer-instagram-link');
    if (igLink && config.instagramUrl) {
      igLink.setAttribute('href', config.instagramUrl);
    }
  }

  // --------------------------------------------------------------------------
  // 4. ANIMATED CANVAS CHART IN HERO (BLACK & WHITE WITH RED/GREEN CANDLES)
  // --------------------------------------------------------------------------
  function initHeroChartCanvas() {
    const canvas = document.getElementById('hero-chart-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let isVisible = true;

    function resizeCanvas() {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    }

    window.addEventListener('resize', resizeCanvas, { passive: true });
    resizeCanvas();

    // Candlestick models
    const candles = [];
    const candleCount = window.innerWidth < 600 ? 12 : 24;
    let basePrice = 2320;

    for (let i = 0; i < candleCount; i++) {
      const open = basePrice + (Math.random() - 0.42) * 12;
      const close = open + (Math.random() - 0.38) * 16;
      const high = Math.max(open, close) + Math.random() * 8;
      const low = Math.min(open, close) - Math.random() * 8;
      basePrice = close;

      candles.push({
        open,
        close,
        high,
        low,
        isBullish: close >= open,
        phase: Math.random() * Math.PI * 2
      });
    }

    let time = 0;

    function drawChart() {
      if (!isVisible) return;

      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;
      ctx.clearRect(0, 0, width, height);

      time += 0.018;

      // Draw clean rising white trend line
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.45)';
      ctx.lineWidth = 2.5;
      
      const stepX = width / (candles.length + 1);
      const points = [];

      for (let i = 0; i < candles.length; i++) {
        const c = candles[i];
        const x = stepX * (i + 1);
        const floatOffset = Math.sin(time + c.phase) * 5;
        const progress = i / candles.length;
        const trendY = height * 0.72 - (progress * height * 0.42);
        const y = trendY + floatOffset;
        points.push({ x, y });

        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          const prev = points[i - 1];
          const cx = (prev.x + x) / 2;
          const cy = (prev.y + y) / 2;
          ctx.quadraticCurveTo(prev.x, prev.y, cx, cy);
        }
      }
      ctx.stroke();

      // Draw Candlesticks along points (Green for Bullish, Red for Bearish)
      const candleWidth = Math.min(10, Math.max(4, stepX * 0.35));

      for (let i = 0; i < candles.length; i++) {
        const c = candles[i];
        const pt = points[i];
        const x = pt.x;
        const y = pt.y;
        const bodyHeight = 12 + Math.sin(time * 1.5 + c.phase) * 4;
        const wickHeight = 26;

        if (c.isBullish) {
          // Pure Green
          ctx.strokeStyle = 'rgba(16, 185, 129, 0.75)';
          ctx.fillStyle = 'rgba(16, 185, 129, 0.5)';
        } else {
          // Pure Red
          ctx.strokeStyle = 'rgba(239, 68, 68, 0.75)';
          ctx.fillStyle = 'rgba(239, 68, 68, 0.5)';
        }
        ctx.lineWidth = 1.5;

        // Wick
        ctx.beginPath();
        ctx.moveTo(x, y - wickHeight / 2);
        ctx.lineTo(x, y + wickHeight / 2);
        ctx.stroke();

        // Candle Body
        ctx.fillRect(x - candleWidth / 2, y - bodyHeight / 2, candleWidth, bodyHeight);
      }

      animationFrameId = requestAnimationFrame(drawChart);
    }

    // Pause rendering when hero is off-screen for battery & performance
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            isVisible = true;
            cancelAnimationFrame(animationFrameId);
            drawChart();
          } else {
            isVisible = false;
            cancelAnimationFrame(animationFrameId);
          }
        });
      }, { threshold: 0.05 });
      observer.observe(canvas);
    } else {
      drawChart();
    }
  }

  // --------------------------------------------------------------------------
  // 5. REAL MEMBER TESTIMONIAL VIDEOS & REELS CAROUSEL (Ultra-Smooth Single-Decoder)
  // --------------------------------------------------------------------------
  function initVideoPlayer() {
    const configVideos = (config.videos && config.videos.length > 0)
      ? config.videos
      : [];

    if (configVideos.length === 0) return;

    // Determine featured video (first with featured: true, or index 0)
    let featuredIndex = configVideos.findIndex(v => v.featured === true);
    if (featuredIndex === -1) featuredIndex = 0;

    const featuredVideo = configVideos[featuredIndex];
    const carouselVideos = configVideos.filter((_, i) => i !== featuredIndex);

    // Track single active video across the page
    let activeVideo = null;
    let activeContainer = null;
    const playedVideos = new Set();

    function fireVideoPlayEvent(vidId) {
      if (!vidId) return;
      if (!playedVideos.has(vidId)) {
        playedVideos.add(vidId);
        if (window.fbq) {
          try {
            window.fbq('trackCustom', 'VideoPlay', {
              video_id: vidId,
              content_name: 'Member Testimonial Video'
            });
          } catch (e) {}
        }
      }
    }

    // Completely unload a video element to free GPU decoding buffers
    function stopAndUnload(video, container) {
      if (!video || !container) return;
      try {
        video.pause();
      } catch (e) {}
      video.removeAttribute('src');
      video.load(); // Forces browser to free hardware decoding context
      container.classList.remove('is-playing', 'is-paused', 'is-buffering');
      const poster = container.querySelector('.video-poster, .reel-poster-overlay');
      if (poster) {
        poster.style.display = 'block';
      }
      // If it's a dynamic carousel video, remove it from DOM
      if (container !== featuredWrapper && video.parentNode === container) {
        container.removeChild(video);
      }
    }

    function bindEvents(container, video) {
      // Prevent browser context menu completely
      container.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        return false;
      });
      video.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        return false;
      });

      // Tap playing video to toggle Play / Pause
      video.addEventListener('click', (e) => {
        e.stopPropagation();
        if (video.paused) {
          video.play().catch(() => {});
          container.classList.remove('is-paused');
        } else {
          video.pause();
          container.classList.add('is-paused');
        }
      });

      // Progress bar updates
      video.addEventListener('timeupdate', () => {
        const fill = container.querySelector('.video-progress-fill');
        if (fill && video.duration) {
          fill.style.width = ((video.currentTime / video.duration) * 100) + '%';
        }
      });

      // Loading spinner triggers
      video.addEventListener('waiting', () => {
        container.classList.add('is-buffering');
      });
      video.addEventListener('playing', () => {
        container.classList.remove('is-buffering');
        container.classList.add('is-playing');
      });
      video.addEventListener('pause', () => {
        if (container.classList.contains('is-playing')) {
          container.classList.add('is-paused');
        }
      });
    }

    function loadAndPlay(container, video, poster, srcUrl, vidId) {
      // 1. Unload any other active video to guarantee only 1 decoding context
      if (activeVideo && activeVideo !== video) {
        stopAndUnload(activeVideo, activeContainer);
      }

      activeVideo = video;
      activeContainer = container;

      // 2. Show buffering state
      container.classList.add('is-buffering');
      container.classList.remove('is-paused');

      video.preload = 'metadata';
      video.loop = true;
      video.controls = false;
      video.muted = false; // Sound ON for testimonials

      if (video.getAttribute('src') !== srcUrl) {
        video.src = srcUrl;
      }

      // 3. Play ONLY after 'canplay' event so no buffering stutter occurs
      let playStarted = false;
      function onCanPlay() {
        if (playStarted) return;
        playStarted = true;
        video.removeEventListener('canplay', onCanPlay);
        if (poster) poster.style.display = 'none';
        container.classList.remove('is-buffering');
        container.classList.add('is-playing');
        video.play().catch(err => {
          console.warn('Playback note:', err);
        });
      }

      video.addEventListener('canplay', onCanPlay, { once: true });
      fireVideoPlayEvent(vidId);
    }

    // 1. Setup Featured Video
    const featuredContainer = document.getElementById('featured-video-container');
    const featuredWrapper = document.getElementById('featured-player-wrapper');
    const featuredPosterImg = document.querySelector('#featured-poster .poster-img');
    const featuredDuration = document.getElementById('featured-video-duration');
    const featuredPlayBtn = document.getElementById('featured-play-btn');
    const featuredPoster = document.getElementById('featured-poster');
    const featuredVideoEl = document.getElementById('featured-video-element');
    const featuredAudioToggle = document.getElementById('featured-audio-toggle');

    if (featuredPosterImg && featuredVideo.poster) {
      featuredPosterImg.src = featuredVideo.poster;
      featuredPosterImg.alt = featuredVideo.title || 'رأي عضو في مجتمع Forex Hepa';
    }
    if (featuredDuration && featuredVideo.duration) {
      featuredDuration.textContent = featuredVideo.duration;
    }

    if (featuredPoster && featuredVideoEl && featuredWrapper) {
      bindEvents(featuredWrapper, featuredVideoEl);

      featuredPoster.addEventListener('click', () => {
        loadAndPlay(featuredWrapper, featuredVideoEl, featuredPoster, featuredVideo.src, featuredVideo.id);
      });
      if (featuredPlayBtn) {
        featuredPlayBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          loadAndPlay(featuredWrapper, featuredVideoEl, featuredPoster, featuredVideo.src, featuredVideo.id);
        });
      }
      if (featuredAudioToggle) {
        featuredAudioToggle.addEventListener('click', (e) => {
          e.stopPropagation();
          featuredVideoEl.muted = !featuredVideoEl.muted;
          const unmutedIcon = featuredAudioToggle.querySelector('.icon-unmuted');
          const mutedIcon = featuredAudioToggle.querySelector('.icon-muted');
          if (unmutedIcon) unmutedIcon.style.display = featuredVideoEl.muted ? 'none' : 'block';
          if (mutedIcon) mutedIcon.style.display = featuredVideoEl.muted ? 'block' : 'none';
        });
      }
    }

    // 2. Render Carousel of remaining videos into #reels-track (Poster only until tapped)
    const reelsTrack = document.getElementById('reels-track');
    if (reelsTrack && carouselVideos.length > 0) {
      reelsTrack.innerHTML = '';
      const fragment = document.createDocumentFragment();

      carouselVideos.forEach(v => {
        const card = document.createElement('div');
        card.className = 'reel-card';
        card.setAttribute('data-id', v.id);
        card.setAttribute('role', 'region');
        card.setAttribute('aria-label', v.title || 'رأي عضو');

        card.innerHTML = `
          <div class="reel-media">
            <div class="reel-poster-overlay">
              <img src="${v.poster}" alt="${v.title || 'رأي عضو'}" class="reel-poster" loading="lazy" decoding="async">
              <button type="button" class="reel-play-btn" aria-label="تشغيل فيديو رأي العضو">
                <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                  <polygon points="6 4 20 12 6 20 6 4"/>
                </svg>
              </button>
              <div class="reel-overlay-top">
                <span class="reel-badge">${v.badge || 'رأي عضو'}</span>
              </div>
              <div class="reel-overlay-bottom">
                <span class="reel-duration">${v.duration || '0:30'}</span>
              </div>
            </div>
            <!-- Buffering Spinner -->
            <div class="video-spinner" aria-hidden="true"></div>
            <!-- Pause Indicator Overlay (Shown on Tap to Pause) -->
            <div class="video-pause-indicator" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                <polygon points="6 4 20 12 6 20 6 4"/>
              </svg>
            </div>
            <!-- Hairline Progress Bar -->
            <div class="video-progress-bar"><div class="video-progress-fill"></div></div>
            <button type="button" class="video-audio-toggle" aria-label="كتم / تشغيل الصوت" title="الصوت">
              <svg class="icon-unmuted" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
              </svg>
              <svg class="icon-muted" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16" style="display:none;">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                <line x1="23" y1="9" x2="17" y2="15"></line>
                <line x1="17" y1="9" x2="23" y2="15"></line>
              </svg>
            </button>
          </div>
        `;

        const media = card.querySelector('.reel-media');
        const posterOverlay = card.querySelector('.reel-poster-overlay');
        const audioBtn = card.querySelector('.video-audio-toggle');

        function startReel() {
          let vid = media.querySelector('video');
          if (!vid) {
            vid = document.createElement('video');
            vid.className = 'video-element reel-video';
            vid.setAttribute('playsinline', '');
            vid.setAttribute('webkit-playsinline', '');
            vid.setAttribute('disablepictureinpicture', '');
            vid.setAttribute('disableremoteplayback', '');
            vid.setAttribute('controlslist', 'nodownload nofullscreen noremoteplayback');
            vid.setAttribute('oncontextmenu', 'return false;');
            media.insertBefore(vid, media.querySelector('.video-spinner'));
            bindEvents(media, vid);
          }
          loadAndPlay(media, vid, posterOverlay, v.src, v.id);
        }

        if (posterOverlay) {
          posterOverlay.addEventListener('click', startReel);
        }

        if (audioBtn) {
          audioBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const vid = media.querySelector('video');
            if (!vid) return;
            vid.muted = !vid.muted;
            const unmutedIcon = audioBtn.querySelector('.icon-unmuted');
            const mutedIcon = audioBtn.querySelector('.icon-muted');
            if (unmutedIcon) unmutedIcon.style.display = vid.muted ? 'none' : 'block';
            if (mutedIcon) mutedIcon.style.display = vid.muted ? 'block' : 'none';
          });
        }

        fragment.appendChild(card);
      });

      reelsTrack.appendChild(fragment);
    }

    // Setup Swipe / Scroll Button ("اسحب للمزيد")
    const swipeBtn = document.getElementById('reels-swipe-btn');
    if (swipeBtn && reelsTrack) {
      swipeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const cards = reelsTrack.querySelectorAll('.reel-card');
        if (!cards || cards.length === 0) return;

        const cardWidth = (cards[0].offsetWidth || 160) + 14;
        const maxScroll = reelsTrack.scrollWidth - reelsTrack.clientWidth;
        const currentScroll = Math.abs(reelsTrack.scrollLeft);

        if (currentScroll >= maxScroll - 20) {
          reelsTrack.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          reelsTrack.scrollBy({ left: -cardWidth, behavior: 'smooth' });
        }
      });
    }

    // 4. Auto-pause with IntersectionObserver (threshold 0.5, 150ms debounce)
    if ('IntersectionObserver' in window) {
      let debounceTimer = null;
      const videoObserver = new IntersectionObserver((entries) => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
          entries.forEach(entry => {
            if (!entry.isIntersecting && activeVideo && !activeVideo.paused) {
              if (entry.target === activeContainer || entry.target.contains(activeContainer)) {
                activeVideo.pause();
                activeContainer.classList.add('is-paused');
              }
            }
          });
        }, 150);
      }, { threshold: 0.5 });

      if (featuredContainer) videoObserver.observe(featuredContainer);
      const allCards = document.querySelectorAll('.reel-card');
      allCards.forEach(card => videoObserver.observe(card));
    }
  }

  // --------------------------------------------------------------------------
  // 6. RENDER REAL SCREENSHOTS MASONRY GRID & LIGHTBOX
  // --------------------------------------------------------------------------
  function initScreenshotsAndLightbox() {
    const grid = document.getElementById('proofs-grid');
    const modal = document.getElementById('lightbox-modal');
    const backdrop = document.getElementById('lightbox-backdrop');
    const closeBtn = document.getElementById('lightbox-close');
    const prevBtn = document.getElementById('lightbox-prev');
    const nextBtn = document.getElementById('lightbox-next');
    const modalImg = document.getElementById('lightbox-img');
    const counterEl = document.getElementById('lightbox-counter');

    if (!grid || !modal || !modalImg) return;

    const screenshots = (config.screenshots && config.screenshots.length > 0)
      ? config.screenshots
      : [];

    // Dynamically render all screenshots from config so user can add/remove in config.js
    grid.innerHTML = '';
    const fragment = document.createDocumentFragment();

    screenshots.forEach((item, index) => {
      const card = document.createElement('div');
      card.className = 'proof-card';
      card.setAttribute('data-index', index);
      card.setAttribute('role', 'button');
      card.setAttribute('tabindex', '0');
      card.setAttribute('aria-label', item.alt || `تكبير رأي العضو رقم ${index + 1}`);

      card.innerHTML = `
        <div class="proof-card__inner">
          <img 
            src="${item.src}" 
            width="${item.width || 720}" 
            height="${item.height || 960}" 
            alt="${item.alt || 'رأي أحد أعضاء مجتمع Forex Hepa'}" 
            class="proof-img" 
            loading="lazy" 
            decoding="async">
          <div class="proof-overlay">
            <span class="proof-zoom-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="16" height="16">
                <circle cx="11" cy="11" r="8"/>
                <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                <line x1="11" y1="8" x2="11" y2="14"/>
                <line x1="8" y1="11" x2="14" y2="11"/>
              </svg>
            </span>
          </div>
        </div>
      `;

      card.addEventListener('click', () => openLightbox(index));
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openLightbox(index);
        }
      });

      fragment.appendChild(card);
    });

    grid.appendChild(fragment);

    let currentIndex = 0;
    const totalProofs = screenshots.length;

    function openLightbox(index) {
      if (totalProofs === 0) return;
      currentIndex = (index + totalProofs) % totalProofs;
      const item = screenshots[currentIndex];

      modalImg.src = item.src;
      modalImg.alt = item.alt || '';

      if (counterEl) {
        counterEl.textContent = `${currentIndex + 1} / ${totalProofs}`;
      }

      modal.classList.add('is-open');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
      modal.classList.remove('is-open');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }

    function nextProof() {
      openLightbox(currentIndex + 1);
    }

    function prevProof() {
      openLightbox(currentIndex - 1);
    }

    if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
    if (backdrop) backdrop.addEventListener('click', closeLightbox);
    if (nextBtn) nextBtn.addEventListener('click', nextProof);
    if (prevBtn) prevBtn.addEventListener('click', prevProof);

    // Keyboard navigation
    window.addEventListener('keydown', (e) => {
      if (!modal.classList.contains('is-open')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') prevProof(); // RTL: Right is previous
      if (e.key === 'ArrowLeft') nextProof();  // RTL: Left is next
    });

    // Mobile Touch Swipe Handling
    let touchStartX = 0;
    let touchEndX = 0;

    modal.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    modal.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }, { passive: true });

    function handleSwipe() {
      const deltaX = touchEndX - touchStartX;
      if (Math.abs(deltaX) > 40) {
        if (deltaX > 0) {
          prevProof(); // Swiped Right -> Previous in RTL
        } else {
          nextProof(); // Swiped Left -> Next in RTL
        }
      }
    }
  }

  // --------------------------------------------------------------------------
  // 7. FAQ ACCORDION INTERACTION
  // --------------------------------------------------------------------------
  function initFaqAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
      const btn = item.querySelector('.faq-question');
      const answer = item.querySelector('.faq-answer');

      if (!btn || !answer) return;

      btn.addEventListener('click', () => {
        const isOpen = item.classList.contains('is-open');

        faqItems.forEach(other => {
          if (other !== item && other.classList.contains('is-open')) {
            other.classList.remove('is-open');
            const otherBtn = other.querySelector('.faq-question');
            const otherAns = other.querySelector('.faq-answer');
            if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
            if (otherAns) otherAns.style.maxHeight = null;
          }
        });

        if (isOpen) {
          item.classList.remove('is-open');
          btn.setAttribute('aria-expanded', 'false');
          answer.style.maxHeight = null;
        } else {
          item.classList.add('is-open');
          btn.setAttribute('aria-expanded', 'true');
          answer.style.maxHeight = answer.scrollHeight + 'px';
        }
      });
    });
  }

  // --------------------------------------------------------------------------
  // 8. HERO TRADING CHART LIVE TICKING & PRICE UPDATE
  // --------------------------------------------------------------------------
  function initHeroLiveChart() {
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const priceHeader = document.getElementById('hero-chart-price');
    const priceTagText = document.getElementById('hero-price-tag-text');
    const priceTagFlag = document.getElementById('hero-price-tag-flag');
    const dashedLine = document.getElementById('hero-dashed-price-line');
    const lastBody = document.getElementById('hero-last-body');
    const lastWick = document.getElementById('hero-last-wick');

    if (!priceHeader || !lastBody || !lastWick) return;

    let currentPrice = 2384.50;
    const candleOpen = 2383.80;
    const candleLow = 2383.20;

    function priceToY(p) {
      return 12 + (2394 - p) / 17 * 143;
    }

    // Start subtle ticking after load animations complete
    setTimeout(() => {
      setInterval(() => {
        // Very subtle natural price fluctuation between 2384.15 and 2384.85
        const delta = (Math.random() - 0.48) * 0.35;
        currentPrice = Math.min(2384.95, Math.max(2384.15, currentPrice + delta));

        const formatted = currentPrice.toLocaleString('en-US', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        });

        priceHeader.textContent = formatted;
        if (priceTagText) priceTagText.textContent = formatted;

        const newCloseY = priceToY(currentPrice);
        const newOpenY = priceToY(candleOpen);
        const newHigh = Math.max(2385.30, currentPrice + 0.20);
        const newHighY = priceToY(newHigh);
        const newLowY = priceToY(candleLow);

        const topY = Math.min(newOpenY, newCloseY);
        const bodyH = Math.max(2.5, Math.abs(newCloseY - newOpenY));
        const isUp = currentPrice >= candleOpen;
        const color = isUp ? '#10B981' : '#EF4444';

        lastBody.setAttribute('y', topY.toFixed(1));
        lastBody.setAttribute('height', bodyH.toFixed(1));
        lastBody.setAttribute('fill', color);

        lastWick.setAttribute('y1', newHighY.toFixed(1));
        lastWick.setAttribute('y2', newLowY.toFixed(1));
        lastWick.setAttribute('stroke', color);

        if (dashedLine) {
          dashedLine.setAttribute('y1', newCloseY.toFixed(1));
          dashedLine.setAttribute('y2', newCloseY.toFixed(1));
        }

        if (priceTagFlag) {
          priceTagFlag.setAttribute('transform', `translate(324, ${(newCloseY - 8.5).toFixed(1)})`);
        }
      }, 1600);
    }, 1800);
  }

  // --------------------------------------------------------------------------
  // 9. SMART STICKY CTA VISIBILITY
  // --------------------------------------------------------------------------
  function initStickyCta() {
    const stickyBar = document.getElementById('sticky-cta-bar');
    const hero = document.getElementById('hero');

    if (!stickyBar || !hero) return;

    function updateStickyVisibility() {
      const heroBottom = hero.getBoundingClientRect().bottom;
      if (heroBottom < 120) {
        stickyBar.style.transform = 'translateY(0)';
      } else {
        stickyBar.style.transform = 'translateY(100%)';
      }
    }

    window.addEventListener('scroll', updateStickyVisibility, { passive: true });
    updateStickyVisibility();
  }

  // --------------------------------------------------------------------------
  // 9. TELEGRAM APP DOWNLOAD LINKS (DEVICE DETECTION)
  // --------------------------------------------------------------------------
  function setupTelegramDownloadLinks() {
    const downloadUrl = getStoreUrl();
    const elements = document.querySelectorAll('.telegram-download-link, .btn-store-secondary, [data-store-btn], [data-store-link]');
    elements.forEach(el => {
      el.setAttribute('href', downloadUrl);
      el.setAttribute('target', '_blank');
      el.setAttribute('rel', 'noopener noreferrer');
    });
  }

  // --------------------------------------------------------------------------
  // 10. IN-APP BROWSER DETECTION (Instagram, FBAN, FBAV, TikTok, Snapchat)
  // --------------------------------------------------------------------------
  function showInAppBrowserNotice() {
    const inAppBar = document.getElementById('in-app-bar');
    if (!inAppBar) return;
    try {
      if (sessionStorage.getItem('forex_hepa_inapp_dismissed') === '1') {
        return;
      }
    } catch (e) {}
    inAppBar.removeAttribute('hidden');
    inAppBar.classList.add('in-app-bar--visible');
  }

  function setupInAppBrowserNotice() {
    const inAppBar = document.getElementById('in-app-bar');
    const closeBtn = document.getElementById('in-app-bar-close');
    if (!inAppBar) return;

    if (closeBtn) {
      closeBtn.addEventListener('click', function () {
        inAppBar.style.display = 'none';
        inAppBar.setAttribute('hidden', '');
        try {
          sessionStorage.setItem('forex_hepa_inapp_dismissed', '1');
        } catch (e) {}
      });
    }

    if (isInAppBrowser()) {
      showInAppBrowserNotice();
    }
  }

  // --------------------------------------------------------------------------
  // 11. INITIALIZE ON DOM READY
  // --------------------------------------------------------------------------
  function onReady() {
    setupInAppBrowserNotice();
    setupTelegramDownloadLinks();
    syncDomWithConfig();
    initHeroChartCanvas();
    initHeroLiveChart();
    initVideoPlayer();
    initScreenshotsAndLightbox();
    initFaqAccordion();
    initStickyCta();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', onReady);
  } else {
    onReady();
  }
})();
