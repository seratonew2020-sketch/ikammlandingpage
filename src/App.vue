<script setup>
import { ref, computed } from "vue";
import { languages, locale, t, setLocale } from "./i18n.js";

/* ---------- Contact (real IKAMM details) ---------- */
const contact = {
  lineLabel: "lin.ee/qom5XYM",
  lineHref: "https://lin.ee/qom5XYM",
  phones: [
    { label: "099-086-9712", href: "tel:+66990869712" },
    { label: "+63 90 855 78763", href: "tel:+639085578763" },
  ],
  email: "Service@ikammhomedecor.com",
  facebook: "https://www.facebook.com/profile.php?id=100093160863461",
  googleSheetId: "1mahzBMozB404RTzg4e0FybNVcKoQmrJ-e__iGEAHDF8",
  googleSheetUrl:
    "https://docs.google.com/spreadsheets/d/1mahzBMozB404RTzg4e0FybNVcKoQmrJ-e__iGEAHDF8/edit?usp=sharing",
  googleScriptUrl:
    import.meta.env.VITE_GOOGLE_SCRIPT_URL ||
    "https://script.google.com/macros/s/AKfycbzRlA8FolmyTU2feWU1AoroqYWpNRMEqyquTS9do6Ndi11QSmDwHlcQTLQ9NK4n2-cS/exec",
};

/* ---------- Images (local, in /public/images) ---------- */
const img = {
  heroBg: "/images/living/c6aeb4491ca19dcc2ad6f110be8396de.jpg",
  heroCard: "/images/0b1a23ba423381fe00960aa17f916771.jpg",
  bedroom1: "/images/bedroom/0771f4f2cd2bddd3c3804f27e283a1f1.jpg",
  bedroom2: "/images/bedroom/1589c953bcbdcdf4f2d6b21cd7e52acb.jpg",
  bedroom3: "/images/bedroom/2ea0719046ebac31dd6639bfa246ac37.jpg",
  bedroom4: "/images/bedroom/0b1a23ba423381fe00960aa17f916771.jpg",
  bedroom5: "/images/bedroom/3df0d015b8049599b95155d6f18cfbf8.jpg",
  bedroom6: "/images/bedroom/48038575684187710c4c35dbe1780671.jpg",
  bedroom7: "/images/bedroom/79d9e12a6ebd6fe0130e2df8d40e7e39.jpg",
  bedroom8: "/images/bedroom/99acb9f7d55699e7ea12e3a95c876c18.jpg",
  bedroom9: "/images/bedroom/9dde8f9ad1b3ce59e6da20c5ccd95fc0.jpg",
  bedroom10: "/images/bedroom/bd3da2e8801ce5a3e8e73bb48e5ef438.jpg",
  living1: "/images/living/664749fb23fb57434463e6031e7c25b9.jpg",
  living2: "/images/living/c6aeb4491ca19dcc2ad6f110be8396de.jpg",
  living3: "/images/living/1418fd5e8498e8fdd71362942aefc206.jpg",
  living4: "/images/living/6e2c7e7519baad0c9f186f0e378d1361.jpg",
  living5: "/images/living/6830b4146b4ac7326bbad08a306da6d2.jpg",
  living6: "/images/living/d8ad1ebc06f731f0ff168cacb158a8bf.jpg",
  kitchen1: "/images/kitchen/f62c4b023b1967789c5edb9127b84bee.jpg",
  kitchen2: "/images/kitchen/799229c0dfaed0822dcb96760c54322b.jpg",
  kitchen3: "/images/kitchen/63a5facba50f336625ecbc5d77dcdd91.jpg",
  kitchen4: "/images/kitchen/54f1647172ec03d27f9e86b2f72d5412.jpg",
  kitchen5: "/images/kitchen/f184f6f41e1e45bc4d82bfa7eed658c7.jpg",
  kitchen6: "/images/kitchen/4332a6472f1d75161ff233f6308c59a5.jpg",
  kitchen7: "/images/kitchen/b86f232f1d9dd325f9f9681e96298633.jpg",
  kitchen8: "/images/kitchen/26e294570ec0b9d5184ff9eef706f9d1.jpg",
  closet1: "/images/48038575684187710c4c35dbe1780671.jpg",
  closet2: "/images/3df0d015b8049599b95155d6f18cfbf8.jpg",
  serviceCafe: "/images/services/cafe.jpg",
  serviceRestaurant: "/images/services/restaurant.jpg",
  serviceRetail: "/images/services/retail.jpg",
  serviceClinic: "/images/services/clinic.jpg",
  serviceShowroom: "/images/services/showroom.jpg",
  serviceOffice: "/images/services/office.jpg",
  serviceSalon: "/images/services/salon.jpg",
  serviceHotel: "/images/services/hotel.jpg",
  servicePetshop: "/images/services/petshop.jpg",
  serviceStudio: "/images/services/studio.jpg",
};

function onImgError(e, label) {
  e.target.src = `https://placehold.co/800x600/123f32/FAF8F5?text=${encodeURIComponent(label)}`;
}

/* ---------- Navigation ---------- */
const navLinks = computed(() => [
  { href: "#hero", label: t.value.nav.home },
  { href: "#services", label: t.value.nav.services },
  { href: "#portfolio", label: t.value.nav.portfolio },
  { href: "https://ikammhome-c29m.vercel.app/", label: t.value.nav.catalog, external: true },
  { href: "#estimator", label: t.value.nav.estimator },
  { href: "#process", label: t.value.nav.process },
  { href: "#contact", label: t.value.nav.contact },
]);
const mobileMenu = ref(false);

/* ---------- Hero ---------- */
const trustBadgeIcons = ["fa-shield-halved", "fa-leaf", "fa-cubes"];
const trustBadges = computed(() =>
  t.value.hero.badges.map((b, idx) => ({
    icon: trustBadgeIcons[idx],
    title: b.title,
    desc: b.desc,
  })),
);

/* ---------- Services ---------- */
const serviceMedia = [
  { img: img.bedroom1, icon: "fa-bed" },
  { img: img.living1, icon: "fa-tv" },
  { img: img.kitchen1, icon: "fa-utensils" },
  { img: img.closet1, icon: "fa-shirt" },
  { img: img.serviceCafe, icon: "fa-mug-saucer" },
  { img: img.serviceShowroom, icon: "fa-store" },
  { img: img.serviceRestaurant, icon: "fa-wine-glass" },
  { img: img.serviceOffice, icon: "fa-building" },
  { img: img.serviceClinic, icon: "fa-house-medical" },
  { img: img.serviceSalon, icon: "fa-spa" },
  { img: img.serviceRetail, icon: "fa-shirt" },
  { img: img.serviceHotel, icon: "fa-hotel" },
  { img: img.servicePetshop, icon: "fa-paw" },
  { img: img.serviceStudio, icon: "fa-microphone-lines" },
  { img: img.living6, icon: "fa-laptop-file" },
  { img: img.living4, icon: "fa-door-open" },
  { img: img.living2, icon: "fa-film" },
  { img: img.kitchen6, icon: "fa-soap" },
];
const services = computed(() =>
  t.value.services.items.map((item, idx) => ({
    ...serviceMedia[idx],
    ...item,
  })),
);

/* ---------- Portfolio ---------- */
const portfolioFilterIds = ["all", "bedroom", "living", "kitchen", "closet"];
const portfolioFilters = computed(() =>
  portfolioFilterIds.map((id) => ({
    id,
    label: t.value.portfolio.filters[id],
  })),
);

const portfolioBase = [
  { id: 1, category: "bedroom", img: img.bedroom1 },
  { id: 2, category: "living", img: img.living1 },
  { id: 3, category: "kitchen", img: img.kitchen1 },
  { id: 4, category: "closet", img: img.closet1 },
  { id: 5, category: "bedroom", img: img.bedroom2 },
  { id: 6, category: "living", img: img.living2 },
  { id: 7, category: "kitchen", img: img.kitchen2 },
  { id: 8, category: "living", img: img.living3 },
  { id: 9, category: "closet", img: img.closet2 },
  { id: 10, category: "kitchen", img: img.kitchen3 },
  { id: 11, category: "kitchen", img: img.kitchen4 },
  { id: 12, category: "kitchen", img: img.kitchen5 },
  { id: 13, category: "kitchen", img: img.kitchen6 },
  { id: 14, category: "kitchen", img: img.kitchen7 },
  { id: 15, category: "kitchen", img: img.kitchen8 },
  { id: 16, category: "living", img: img.living4 },
  { id: 17, category: "living", img: img.living5 },
  { id: 18, category: "living", img: img.living6 },
  { id: 19, category: "bedroom", img: img.bedroom3 },
  { id: 20, category: "bedroom", img: img.bedroom4 },
  { id: 21, category: "bedroom", img: img.bedroom5 },
  { id: 22, category: "bedroom", img: img.bedroom6 },
  { id: 23, category: "bedroom", img: img.bedroom7 },
  { id: 24, category: "bedroom", img: img.bedroom8 },
  { id: 25, category: "bedroom", img: img.bedroom9 },
  { id: 26, category: "bedroom", img: img.bedroom10 },
];

const portfolioItems = computed(() =>
  portfolioBase.map((item) => ({
    ...item,
    title: t.value.portfolio.items[item.id].title,
    desc: t.value.portfolio.items[item.id].desc,
  })),
);

const activeFilter = ref("all");
const filteredItems = computed(() =>
  portfolioItems.value.filter((i) => activeFilter.value === "all" || i.category === activeFilter.value),
);

/* ---------- Lightbox ---------- */
const lightboxOpen = ref(false);
const lightboxId = ref(null);
const lightboxItem = computed(() => portfolioItems.value.find((i) => i.id === lightboxId.value) || null);
function openLightbox(item) {
  lightboxId.value = item.id;
  lightboxOpen.value = true;
}

/* ---------- Budget estimator ---------- */
const area = ref(35);
const styleOptions = [
  { name: "Modern Minimal", multiplier: 12000, icon: "fa-cube" },
  { name: "Japandi Warm", multiplier: 16000, icon: "fa-tree" },
  { name: "Luxury Classic", multiplier: 22000, icon: "fa-gem" },
];
const selectedMultiplier = ref(12000);
const scopeOptions = computed(() => [
  { value: "bedroom", label: t.value.estimator.scopes.bedroom, factor: 1.0 },
  { value: "living", label: t.value.estimator.scopes.living, factor: 0.8 },
]);
const selectedScopes = ref(["bedroom", "living"]);

const priceRange = computed(() => {
  let factor = scopeOptions.value
    .filter((s) => selectedScopes.value.includes(s.value))
    .reduce((sum, s) => sum + s.factor, 0);
  if (factor === 0) factor = 0.5;
  const base = area.value * selectedMultiplier.value * factor;
  return {
    min: Math.round(base * 0.95).toLocaleString(),
    max: Math.round(base * 1.25).toLocaleString(),
  };
});

/* ---------- Process steps ---------- */
const processSteps = computed(() =>
  t.value.process.steps.map((s, idx) => ({
    n: String(idx + 1).padStart(2, "0"),
    ...s,
  })),
);

/* ---------- Lead form ---------- */
const residenceTypes = computed(() =>
  t.value.contact.form.residenceTypes.map((label, idx) => ({
    title: label,
    value: idx,
  })),
);
const emptyLead = () => ({ name: "", phone: "", lineId: "", residence: 0, details: "" });
const lead = ref(emptyLead());
const leadForm = ref(null);
const required = (v) => !!(v && String(v).trim()) || t.value.contact.form.required;
const submitting = ref(false);
const toast = ref(false);

async function handleFormSubmit() {
  const { valid } = await leadForm.value.validate();
  if (!valid || submitting.value) return;

  submitting.value = true;
  const l = lead.value;
  const residenceLabel = t.value.contact.form.residenceTypes[l.residence] || "";
  const selectedStyle = styleOptions.find((s) => s.multiplier === selectedMultiplier.value)?.name || "Modern Minimal";
  const budgetText = `${priceRange.value.min} - ${priceRange.value.max} ${t.value.estimator.currency}`;

  const payload = {
    sheetId: contact.googleSheetId,
    sheetUrl: contact.googleSheetUrl,
    name: l.name,
    phone: l.phone,
    lineId: l.lineId || "-",
    residence: residenceLabel,
    details: l.details || "-",
    area: `${area.value} ${t.value.estimator.unit}`,
    style: selectedStyle,
    budget: budgetText,
    locale: locale.value,
  };

  try {
    if (contact.googleScriptUrl) {
      await fetch(contact.googleScriptUrl, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(payload),
      });
    } else {
      // บันทึกสำรองลงใน LocalStorage และเปิดลิงก์ Google Sheet กรณียังไม่ได้ใส่ Web App URL
      try {
        const savedLeads = JSON.parse(localStorage.getItem("ikamm-leads") || "[]");
        savedLeads.push({ ...payload, createdAt: new Date().toISOString() });
        localStorage.setItem("ikamm-leads", JSON.stringify(savedLeads));
      } catch {}
      console.info(
        "[IKAMM] ข้อมูลพร้อมส่งไปยัง Google Sheet (1mahzBMozB404RTzg4e0FybNVcKoQmrJ-e__iGEAHDF8):",
        payload,
      );
    }

    toast.value = true;
    lead.value = emptyLead();
    leadForm.value.resetValidation();
  } catch (err) {
    console.error("Failed to submit lead to Google Sheets:", err);
  } finally {
    submitting.value = false;
  }
}
</script>

<template>
  <v-app theme="ikammTheme">
    <!-- ================= Navigation ================= -->
    <header class="site-header">
      <div class="container header-bar">
        <a href="#hero" class="logo">
          <div class="logo-mark">I</div>
          <div class="logo-copy">
            <span class="logo-name">IKAMM</span>
            <span class="logo-sub">Home Decor</span>
          </div>
        </a>

        <nav class="nav" aria-label="Main Navigation">
          <a
            v-for="(link, i) in navLinks"
            :key="link.href"
            :href="link.href"
            :target="link.external ? '_blank' : undefined"
            :rel="link.external ? 'noopener' : undefined"
            :class="{ 'is-first': i === 0 }"
          >
            {{ link.label }}
            <i v-if="link.external" class="fa-solid fa-arrow-up-right-from-square" style="font-size: 10px; margin-left: 3px; opacity: 0.85;"></i>
          </a>
        </nav>

        <div class="header-right">
          <!-- Language Switcher (Desktop & Tablet) -->
          <div class="lang-switcher" role="group" :aria-label="t.language">
            <button
              v-for="lang in languages"
              :key="lang.code"
              type="button"
              :class="['lang-btn', { 'is-active': locale === lang.code }]"
              :aria-pressed="locale === lang.code"
              @click="setLocale(lang.code)"
            >
              {{ lang.label }}
            </button>
          </div>

          <a href="#estimator" class="gold-btn header-cta">
            <i class="fa-solid fa-calculator"></i>
            <span>{{ t.nav.cta }}</span>
          </a>

          <button class="menu-btn" :aria-label="t.nav.toggle" @click="mobileMenu = !mobileMenu">
            <i class="fa-solid fa-bars"></i>
          </button>
        </div>
      </div>
    </header>

    <!-- Mobile drawer -->
    <v-navigation-drawer
      v-model="mobileMenu"
      temporary
      location="right"
      width="300"
      color="#0e3328"
      class="mobile-drawer"
    >
      <div class="drawer-inner">
        <div class="drawer-head">
          <span class="logo-name">IKAMM</span>
          <button class="menu-btn is-visible" :aria-label="t.nav.close" @click="mobileMenu = false">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>

        <!-- Language Switcher in Mobile Drawer -->
        <div class="drawer-lang">
          <span class="drawer-lang-label"><i class="fa-solid fa-globe"></i> {{ t.language }}</span>
          <div class="lang-switcher lang-switcher--drawer">
            <button
              v-for="lang in languages"
              :key="lang.code"
              type="button"
              :class="['lang-btn', { 'is-active': locale === lang.code }]"
              @click="setLocale(lang.code)"
            >
              {{ lang.label }}
            </button>
          </div>
        </div>

        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          :target="link.external ? '_blank' : undefined"
          :rel="link.external ? 'noopener' : undefined"
          class="drawer-link"
          @click="mobileMenu = false"
        >
          {{ link.label }}
          <i v-if="link.external" class="fa-solid fa-arrow-up-right-from-square" style="font-size: 11px; margin-left: 4px; opacity: 0.85;"></i>
        </a>
        <a href="#estimator" class="gold-btn drawer-cta" @click="mobileMenu = false">
          <i class="fa-solid fa-calculator"></i> {{ t.nav.cta }}
        </a>
      </div>
    </v-navigation-drawer>

    <v-main class="main-reset">
      <!-- ================= Hero ================= -->
      <section id="hero" class="hero">
        <div class="hero-bg">
          <img :src="img.heroBg" alt="" @error="onImgError($event, 'IKAMM Luxury Interior')" />
          <div class="hero-bg-fade-x"></div>
          <div class="hero-bg-fade-y"></div>
        </div>

        <div class="container hero-grid">
          <div class="hero-left">
            <div class="hero-pill">
              <span class="pulse-dot"></span>
              <span>{{ t.hero.pill }}</span>
            </div>

            <h1 class="hero-title">
              {{ t.hero.title1 }} <br />
              <span class="gold-text">{{ t.hero.title2 }}</span> <br />
              {{ t.hero.title3 }}
            </h1>

            <p class="hero-desc">{{ t.hero.desc }}</p>

            <div class="hero-actions">
              <a :href="contact.lineHref" target="_blank" rel="noopener" class="gold-btn hero-btn-main">
                <i class="fa-brands fa-line"></i>
                <span>{{ t.hero.lineBtn }}</span>
              </a>
              <a href="#portfolio" class="ghost-btn">
                <span>{{ t.hero.viewWork }}</span>
                <i class="fa-solid fa-arrow-right"></i>
              </a>
            </div>

            <div class="trust-grid">
              <div v-for="b in trustBadges" :key="b.title" class="trust-item">
                <div class="trust-icon"><i :class="['fa-solid', b.icon]"></i></div>
                <div>
                  <h4>{{ b.title }}</h4>
                  <p>{{ b.desc }}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="hero-right">
            <div class="hero-card-wrap">
              <div class="hero-card">
                <img :src="img.heroCard" alt="IKAMM Custom Built-in" @error="onImgError($event, 'Luxury Walk-in Closet')" />
                <div class="hero-card-fade"></div>
                <div class="hero-card-info">
                  <div>
                    <p class="eyebrow-gold">{{ t.hero.cardEyebrow }}</p>
                    <h3>{{ t.hero.cardTitle }}</h3>
                    <p class="muted-light">{{ t.hero.cardDesc }}</p>
                  </div>
                  <span class="round-gold"><i class="fa-solid fa-arrow-up-right-from-square"></i></span>
                </div>
              </div>

              <div class="stat-card stat-card--tl">
                <div class="stat-num">10+</div>
                <div>
                  <p class="stat-label">{{ t.hero.stat1Label }}</p>
                  <p class="stat-value">{{ t.hero.stat1Value }}</p>
                </div>
              </div>
              <div class="stat-card stat-card--br">
                <div class="stat-num">500+</div>
                <div>
                  <p class="stat-label">{{ t.hero.stat2Label }}</p>
                  <p class="stat-value">{{ t.hero.stat2Value }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ================= Services ================= -->
      <section id="services" class="section bg-cream">
        <div class="container">
          <div class="section-head">
            <span class="badge">{{ t.services.badge }}</span>
            <h2>{{ t.services.title }}</h2>
            <p>{{ t.services.desc }}</p>
          </div>

          <div class="grid-4">
            <div v-for="s in services" :key="s.title" class="service-card">
              <div class="service-img">
                <img :src="s.img" :alt="s.title" loading="lazy" @error="onImgError($event, s.tag)" />
                <div class="service-tag"><i :class="['fa-solid', s.icon]"></i> {{ s.tag }}</div>
              </div>
              <div class="service-body">
                <h3>{{ s.title }}</h3>
                <p>{{ s.desc }}</p>
                <a href="#contact" class="text-link">
                  <span>{{ t.services.more }}</span>
                  <i class="fa-solid fa-chevron-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ================= Portfolio ================= -->
      <section id="portfolio" class="section bg-white">
        <div class="container">
          <div class="portfolio-head">
            <div>
              <span class="badge">{{ t.portfolio.badge }}</span>
              <h2 class="h2-dark">{{ t.portfolio.title }}</h2>
            </div>
            <div class="filter-row">
              <button
                v-for="f in portfolioFilters"
                :key="f.id"
                type="button"
                :class="['filter-btn', { 'is-active': activeFilter === f.id }]"
                @click="activeFilter = f.id"
              >
                {{ f.label }}
              </button>
            </div>
          </div>

          <TransitionGroup name="fade-grid" tag="div" class="grid-3">
            <div
              v-for="item in filteredItems"
              :key="item.id"
              class="portfolio-item"
              @click="openLightbox(item)"
            >
              <img :src="item.img" :alt="item.title" loading="lazy" @error="onImgError($event, item.title)" />
              <div class="portfolio-overlay">
                <span class="eyebrow-gold">{{ t.portfolio.categories[item.category] }}</span>
                <h4>{{ item.title }}</h4>
                <p>{{ item.desc }}</p>
              </div>
            </div>
          </TransitionGroup>
        </div>
      </section>

      <!-- ================= Budget Estimator ================= -->
      <section id="estimator" class="section bg-dark">
        <div class="container split-grid">
          <div class="split-left">
            <span class="badge badge--dark">{{ t.estimator.badge }}</span>
            <h2 class="h2-light">{{ t.estimator.title1 }} <br /><span class="gold-text">{{ t.estimator.title2 }}</span></h2>
            <p class="light-desc">{{ t.estimator.desc }}</p>
            <div class="note-box">
              <div v-for="note in t.estimator.notes" :key="note">
                <i class="fa-solid fa-circle-check"></i><span>{{ note }}</span>
              </div>
            </div>
          </div>

          <div class="split-right">
            <v-theme-provider theme="ikammDark">
              <div class="glass-panel">
                <!-- Step 1 -->
                <div class="calc-step">
                  <div class="calc-step-head">
                    <label>{{ t.estimator.step1 }}</label>
                    <span class="calc-area">{{ area }} {{ t.estimator.unit }}</span>
                  </div>
                  <v-slider
                    v-model="area"
                    :min="10"
                    :max="150"
                    :step="5"
                    color="#D4AF37"
                    track-color="#4b5563"
                    thumb-color="#D4AF37"
                    hide-details
                  />
                  <div class="calc-scale">
                    <span v-for="s in t.estimator.scale" :key="s">{{ s }}</span>
                  </div>
                </div>

                <!-- Step 2 -->
                <div class="calc-step">
                  <label class="calc-label">{{ t.estimator.step2 }}</label>
                  <div class="style-grid">
                    <button
                      v-for="opt in styleOptions"
                      :key="opt.name"
                      type="button"
                      :class="['style-option', { 'is-active': selectedMultiplier === opt.multiplier }]"
                      @click="selectedMultiplier = opt.multiplier"
                    >
                      <i :class="['fa-solid', opt.icon]"></i>
                      {{ opt.name }}
                    </button>
                  </div>
                </div>

                <!-- Step 3 -->
                <div class="calc-step">
                  <label class="calc-label">{{ t.estimator.step3 }}</label>
                  <div class="scope-grid">
                    <div v-for="s in scopeOptions" :key="s.value" class="scope-item">
                      <v-checkbox
                        v-model="selectedScopes"
                        :value="s.value"
                        :label="s.label"
                        color="#D4AF37"
                        density="compact"
                        hide-details
                      />
                    </div>
                  </div>
                </div>

                <!-- Result -->
                <div class="calc-result">
                  <p class="calc-result-label">{{ t.estimator.resultLabel }}</p>
                  <div class="calc-price gold-text">{{ priceRange.min }} - {{ priceRange.max }} {{ t.estimator.currency }}</div>
                  <p class="calc-note">{{ t.estimator.note }}</p>
                  <a href="#contact" class="gold-btn calc-cta">{{ t.estimator.cta }}</a>
                </div>
              </div>
            </v-theme-provider>
          </div>
        </div>
      </section>

      <!-- ================= Process ================= -->
      <section id="process" class="section bg-cream">
        <div class="container">
          <div class="section-head">
            <span class="badge">{{ t.process.badge }}</span>
            <h2>{{ t.process.title }}</h2>
            <p>{{ t.process.desc }}</p>
          </div>

          <div class="grid-4">
            <div v-for="step in processSteps" :key="step.n" class="step-card">
              <div>
                <div class="step-num">{{ step.n }}</div>
                <h3>{{ step.t }}</h3>
                <p>{{ step.d }}</p>
              </div>
              <div class="step-time"><i class="fa-solid fa-clock"></i> {{ step.time }}</div>
            </div>
          </div>
        </div>
      </section>

      <!-- ================= Testimonials ================= -->
      <section class="section bg-white">
        <div class="container">
          <div class="section-head">
            <span class="badge">{{ t.reviews.badge }}</span>
            <h2>{{ t.reviews.title }}</h2>
          </div>

          <div class="grid-3">
            <div v-for="r in t.reviews.items" :key="r.n" class="review-card">
              <div>
                <div class="stars">
                  <i v-for="s in 5" :key="s" class="fa-solid fa-star"></i>
                </div>
                <p class="review-quote">"{{ r.q }}"</p>
              </div>
              <div class="review-author">
                <div class="avatar">{{ r.i }}</div>
                <div>
                  <h4>{{ r.n }}</h4>
                  <p>{{ r.p }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ================= Contact ================= -->
      <section id="contact" class="section bg-dark">
        <div class="container split-grid split-grid--top">
          <div class="split-left contact-left">
            <div>
              <span class="badge badge--dark">{{ t.contact.badge }}</span>
              <h2 class="h2-light">{{ t.contact.title1 }} <br /><span class="gold-text">{{ t.contact.title2 }}</span></h2>
              <p class="light-desc small">{{ t.contact.desc }}</p>
            </div>

            <div class="contact-list">
              <div class="contact-row">
                <div class="contact-icon"><i class="fa-solid fa-location-dot"></i></div>
                <div>
                  <h4>{{ t.contact.showroomLabel }}</h4>
                  <p>{{ t.contact.showroom }}</p>
                </div>
              </div>
              <div class="contact-row">
                <div class="contact-icon"><i class="fa-solid fa-phone"></i></div>
                <div>
                  <h4>{{ t.contact.phoneLabel }}</h4>
                  <p>
                    <template v-for="(p, i) in contact.phones" :key="p.href">
                      <a :href="p.href">{{ p.label }}</a><span v-if="i < contact.phones.length - 1">, </span>
                    </template>
                  </p>
                </div>
              </div>
              <div class="contact-row">
                <div class="contact-icon"><i class="fa-brands fa-line"></i></div>
                <div>
                  <h4>{{ t.contact.lineLabel }}</h4>
                  <p><a :href="contact.lineHref" target="_blank" rel="noopener">{{ contact.lineLabel }}</a> {{ t.contact.lineNote }}</p>
                </div>
              </div>
              <div class="contact-row">
                <div class="contact-icon"><i class="fa-solid fa-envelope"></i></div>
                <div>
                  <h4>{{ t.contact.emailLabel }}</h4>
                  <p><a :href="`mailto:${contact.email}`">{{ contact.email }}</a></p>
                </div>
              </div>
            </div>
          </div>

          <div class="split-right">
            <v-theme-provider theme="ikammDark">
              <div class="glass-panel glass-panel--form">
                <v-form ref="leadForm" @submit.prevent="handleFormSubmit">
                  <div class="form-grid">
                    <v-text-field
                      v-model="lead.name"
                      :label="t.contact.form.name"
                      :placeholder="t.contact.form.namePh"
                      :rules="[required]"
                      variant="outlined"
                      color="#D4AF37"
                      rounded="lg"
                      density="comfortable"
                    />
                    <v-text-field
                      v-model="lead.phone"
                      :label="t.contact.form.phone"
                      :placeholder="t.contact.form.phonePh"
                      type="tel"
                      :rules="[required]"
                      variant="outlined"
                      color="#D4AF37"
                      rounded="lg"
                      density="comfortable"
                    />
                    <v-text-field
                      v-model="lead.lineId"
                      :label="t.contact.form.lineId"
                      :placeholder="t.contact.form.lineIdPh"
                      variant="outlined"
                      color="#D4AF37"
                      rounded="lg"
                      density="comfortable"
                    />
                    <v-select
                      v-model="lead.residence"
                      :items="residenceTypes"
                      :label="t.contact.form.residence"
                      variant="outlined"
                      color="#D4AF37"
                      rounded="lg"
                      density="comfortable"
                    />
                  </div>
                  <v-textarea
                    v-model="lead.details"
                    :label="t.contact.form.details"
                    :placeholder="t.contact.form.detailsPh"
                    rows="3"
                    variant="outlined"
                    color="#D4AF37"
                    rounded="lg"
                  />
                  <button type="submit" class="gold-btn submit-btn" :disabled="submitting">
                    <i :class="submitting ? 'fa-solid fa-circle-notch fa-spin' : 'fa-solid fa-paper-plane'"></i>
                    <span>{{ submitting ? t.contact.form.submitting : t.contact.form.submit }}</span>
                  </button>
                </v-form>
              </div>
            </v-theme-provider>
          </div>
        </div>
      </section>

      <!-- ================= Footer ================= -->
      <footer class="site-footer">
        <div class="container footer-row">
          <div class="logo">
            <div class="logo-mark logo-mark--sm">I</div>
            <span class="footer-brand">IKAMM <span>HOME DECOR</span></span>
          </div>
          <p class="footer-copy">
            &copy; {{ new Date().getFullYear() }} IKAMM Home Decor. {{ t.footer.rights }} {{ t.footer.tagline }}
          </p>
          <div class="footer-social">
            <a :href="contact.facebook" target="_blank" rel="noopener" aria-label="Facebook"><i class="fa-brands fa-facebook"></i></a>
            <a :href="contact.lineHref" target="_blank" rel="noopener" aria-label="LINE"><i class="fa-brands fa-line"></i></a>
          </div>
        </div>
      </footer>
    </v-main>

    <!-- ================= Floating actions ================= -->
    <div class="fab-stack">
      <a :href="contact.lineHref" target="_blank" rel="noopener" class="fab fab--line" :aria-label="t.fab.line">
        <i class="fa-brands fa-line"></i>
        <span class="fab-tip">{{ t.fab.line }}</span>
      </a>
      <a :href="contact.phones[0].href" class="fab fab--phone" :aria-label="t.fab.call">
        <i class="fa-solid fa-phone"></i>
        <span class="fab-tip">{{ t.fab.call }}</span>
      </a>
    </div>

    <!-- ================= Lightbox ================= -->
    <v-dialog v-model="lightboxOpen" max-width="900">
      <div v-if="lightboxItem" class="lightbox">
        <button class="lightbox-close" :aria-label="t.lightbox.close" @click="lightboxOpen = false">
          <i class="fa-solid fa-xmark"></i>
        </button>
        <img :src="lightboxItem.img" :alt="lightboxItem.title" />
        <div class="lightbox-body">
          <span class="eyebrow-gold">{{ t.portfolio.categories[lightboxItem.category] }}</span>
          <h3>{{ lightboxItem.title }}</h3>
          <p>{{ lightboxItem.desc }}</p>
        </div>
      </div>
    </v-dialog>

    <!-- ================= Toast ================= -->
    <v-snackbar v-model="toast" :timeout="4000" location="top right" color="#123f32" rounded="xl" class="toast">
      <div class="toast-inner">
        <i class="fa-solid fa-circle-check"></i>
        <div>
          <h4>{{ t.toast.title }}</h4>
          <p>{{ t.toast.desc }}</p>
        </div>
      </div>
    </v-snackbar>
  </v-app>
</template>
