<script setup>
import { ref, computed } from "vue";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Calculator,
  CalendarDays,
  Globe2,
  Hammer,
  MapPin,
  Mail,
  MessageCircle,
  PencilRuler,
  Phone,
  Ruler,
  Sparkles,
  Wrench,
  CheckCircle2,
  X,
} from "@lucide/vue";

const contact = {
  lineLabel: "099 104 2639",
  lineHref: "https://line.me/ti/p/~0991042639",
  phones: [
    { label: "+66 99 086 9712", href: "tel:+66990869712" },
    { label: "+63 90 855 78763", href: "tel:+639085578763" },
  ],
  emails: [
    { label: "Service@ikammhomedecor.com", href: "mailto:Service@ikammhomedecor.com" },
    { label: "Marketing@ikammhomedecor.com", href: "mailto:Marketing@ikammhomedecor.com" },
  ],
  facebook: "https://www.facebook.com/profile.php?id=100093160863461",
  website: "https://www.ikammhomedecor.com",
};

const photos = {
  hero: "/images/living/c6aeb4491ca19dcc2ad6f110be8396de.jpg",
  workshop: "/images/workshop.png",
  installation: "/images/fitting.png",
  inspiration: "/images/ambient.png",
};

const portfolioCategories = [
  { id: "all", label: "ทั้งหมด" },
  { id: "living", label: "ห้องนั่งเล่น" },
  { id: "bedroom", label: "ห้องนอน" },
  { id: "kitchen", label: "ห้องครัว" },
  { id: "storage", label: "ตู้และพื้นที่จัดเก็บ" },
];

const portfolioItems = [
  { id: "living-01", category: "living", image: "/images/living/c6aeb4491ca19dcc2ad6f110be8396de.jpg", title: "ห้องนั่งเล่น · ชั้นและผนัง Built-in", alt: "ห้องนั่งเล่นสว่างพร้อมชั้นหนังสือและตู้บิลต์อินรอบผนัง" },
  { id: "living-02", category: "living", image: "/images/living/1418fd5e8498e8fdd71362942aefc206.jpg", title: "ผนังทีวี · ดีไซน์เรียบหรู", alt: "ผนังทีวีตกแต่งด้วยตู้และชั้นบิลต์อินโทนครีม" },
  { id: "living-03", category: "living", image: "/images/living/6e2c7e7519baad0c9f186f0e378d1361.jpg", title: "พื้นที่พักผ่อน · งานไม้สั่งทำ", alt: "ผนังทีวีและตู้บิลต์อินไม้ภายในห้องนั่งเล่น" },
  { id: "living-04", category: "living", image: "/images/living/6830b4146b4ac7326bbad08a306da6d2.jpg", title: "ห้องนั่งเล่น · มินิมอลอบอุ่น", alt: "พื้นที่นั่งเล่นร่วมสมัยพร้อมชั้นจัดเก็บในตัวและไฟซ่อน" },
  { id: "living-05", category: "living", image: "/images/living/d8ad1ebc06f731f0ff168cacb158a8bf.jpg", title: "มุมรับแขก · สัดส่วนที่ลงตัว", alt: "ห้องรับแขกพร้อมเฟอร์นิเจอร์และงานตกแต่งผนังสั่งทำ" },
  { id: "bedroom-01", category: "bedroom", image: "/images/0771f4f2cd2bddd3c3804f27e283a1f1.jpg", title: "ห้องนอน · ฟังก์ชันครบในพื้นที่", alt: "ห้องนอนพร้อมตู้และชั้นบิลต์อินรอบพื้นที่พักผ่อน" },
  { id: "bedroom-02", category: "bedroom", image: "/images/0b1a23ba423381fe00960aa17f916771.jpg", title: "ห้องนอน · ผนังหัวเตียงสั่งทำ", alt: "ห้องนอนโทนสว่างพร้อมงานผนังและตู้สั่งทำ" },
  { id: "bedroom-03", category: "bedroom", image: "/images/1589c953bcbdcdf4f2d6b21cd7e52acb.jpg", title: "ห้องนอน · โทนอบอุ่น", alt: "ห้องนอนแต่งโทนอบอุ่นและพื้นที่ใช้สอยลงตัว" },
  { id: "bedroom-04", category: "bedroom", image: "/images/2ea0719046ebac31dd6639bfa246ac37.jpg", title: "ห้องนอน · ดีไซน์ไม้และสีอ่อน", alt: "ห้องนอนพร้อมตู้และผนังตกแต่งบิลต์อินสั่งทำ" },
  { id: "kitchen-01", category: "kitchen", image: "/images/kitchen-top.png", title: "ครัว Built-in · ท็อปเคาน์เตอร์เกรดพรีเมียม", alt: "ครัวบิลต์อินไม้พร้อมตู้เก็บของและเคาน์เตอร์ทำอาหาร" },
  { id: "kitchen-02", category: "kitchen", image: "/images/fitting.png", title: "ครัวร่วมสมัย · อุปกรณ์ Fitting พรีเมียม", alt: "พื้นที่ครัวพร้อมตู้และชั้นจัดเก็บแบบบิลต์อิน" },
  { id: "kitchen-03", category: "kitchen", image: "/images/workshop.png", title: "มุมเตรียมอาหาร · โครงสร้างไม้มาตรฐาน", alt: "ห้องครัวพร้อมตู้และเคาน์เตอร์สั่งทำโทนไม้" },
  { id: "kitchen-04", category: "kitchen", image: "/images/hero.png", title: "ครัว Built-in · ฟังก์ชันที่พอดี", alt: "ครัวโทนสว่างที่จัดวางตู้และพื้นที่ทำงานอย่างลงตัว" },
  { id: "storage-01", category: "storage", image: "/images/3df0d015b8049599b95155d6f18cfbf8.jpg", title: "ห้องแต่งตัว · ชั้นจัดเก็บเฉพาะคุณ", alt: "ห้องแต่งตัวพร้อมชั้นเก็บของและพื้นที่จัดแสดงแบบบิลต์อิน" },
  { id: "storage-02", category: "storage", image: "/images/48038575684187710c4c35dbe1780671.jpg", title: "Walk-in Closet · ใช้พื้นที่ทุกมุม", alt: "ตู้เสื้อผ้าและชั้นจัดเก็บสั่งทำภายในห้องแต่งตัว" },
  { id: "storage-03", category: "storage", image: "/images/79d9e12a6ebd6fe0130e2df8d40e7e39.jpg", title: "ตู้เสื้อผ้า Built-in · เรียบและเป็นระเบียบ", alt: "ตู้เสื้อผ้าบิลต์อินเต็มผนังพร้อมช่องจัดเก็บและกระจก" },
];

const estimateSpaceTypes = [
  { value: "living", label: "ห้องนั่งเล่น / ผนังทีวี" },
  { value: "bedroom", label: "ห้องนอน" },
  { value: "kitchen", label: "ห้องครัว" },
  { value: "closet", label: "ตู้เสื้อผ้า / Walk-in Closet" },
  { value: "other", label: "พื้นที่อื่น ๆ" },
];

const activeCategory = ref("all");
const estimateForm = ref({
  spaceType: "living",
  width: "",
  height: "",
  location: "",
  name: "",
  phone: "",
  visitDate: "",
  details: "",
});
const lineStatus = ref("");
const estimateFormRef = ref(null);

const isModalOpen = ref(false);
const selectedItem = ref(null);
const showSnackbar = ref(false);
const snackbarMessage = ref("");

function openPortfolioModal(item) {
  selectedItem.value = item;
  isModalOpen.value = true;
}

function selectSpaceAndScroll(category) {
  isModalOpen.value = false;
  if (category === "living") estimateForm.value.spaceType = "living";
  else if (category === "bedroom") estimateForm.value.spaceType = "bedroom";
  else if (category === "kitchen") estimateForm.value.spaceType = "kitchen";
  else if (category === "storage") estimateForm.value.spaceType = "closet";
  else estimateForm.value.spaceType = "other";
  
  const el = document.getElementById("estimate");
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

const visiblePortfolioItems = computed(() => {
  return portfolioItems.filter(
    (item) => activeCategory.value === "all" || item.category === activeCategory.value,
  );
});

const selectedSpace = computed(() => {
  return estimateSpaceTypes.find((item) => item.value === estimateForm.value.spaceType)?.label ?? "พื้นที่อื่น ๆ";
});

const estimatedWallArea = computed(() => {
  const w = Number(estimateForm.value.width);
  const h = Number(estimateForm.value.height);
  return w > 0 && h > 0 ? w * h : 0;
});

const estimateMessage = computed(() => {
  const form = estimateForm.value;
  const area = estimatedWallArea.value;
  return [
    "ขอประเมินงาน Built-in หน้างาน — IKAMM HOME DECOR",
    `ประเภทพื้นที่: ${selectedSpace.value}`,
    `ขนาดโดยประมาณ: ${form.width || "ไม่ระบุ"} × ${form.height || "ไม่ระบุ"} เมตร`,
    `พื้นที่ผนังโดยประมาณ: ${area ? `${area.toFixed(2)} ตร.ม.` : "ยังไม่ระบุขนาด"}`,
    `สถานที่: ${form.location || "ไม่ระบุ"}`,
    `ชื่อผู้ติดต่อ: ${form.name || "ไม่ระบุ"}`,
    `โทรศัพท์: ${form.phone || "ไม่ระบุ"}`,
    `วันที่สะดวกให้เข้าประเมิน: ${form.visitDate || "ยังไม่ได้เลือก"}`,
    `รายละเอียดเพิ่มเติม: ${form.details || "ไม่มี"}`,
    "หมายเหตุ: ขอให้ทีมติดต่อกลับเพื่อประเมินราคาและยืนยันรายละเอียดหน้างาน",
  ].join("\n");
});

function handleEstimateEmail() {
  const subject = "ขอประเมินราคางาน Built-in หน้างาน";
  window.location.href = `mailto:Service@ikammhomedecor.com?${new URLSearchParams({ subject, body: estimateMessage.value }).toString()}`;
}

async function handleEstimateLine() {
  if (!estimateFormRef.value?.reportValidity()) return;
  const lineWindow = window.open(contact.lineHref, "_blank");
  if (lineWindow) lineWindow.opener = null;
  try {
    await navigator.clipboard.writeText(estimateMessage.value);
    lineStatus.value = "คัดลอกรายละเอียดแล้ว วางข้อความในแชต LINE ที่เปิดขึ้นเพื่อส่งคำขอ";
  } catch {
    lineStatus.value = "เปิด LINE แล้ว กรุณาคัดลอกรายละเอียดจากสรุปและวางในแชต";
  }
}
</script>

<template>
  <v-app theme="ikammTheme">
    <v-main>
      <div class="site-shell" id="top">
    <!-- Header -->
    <header class="site-header">
      <div class="header-inner">
        <a class="brand" href="#top" aria-label="IKAMM Home Decor — กลับสู่ด้านบน">
          <img class="brand-mark" src="/logo.svg" alt="" aria-hidden="true" />
          <span class="brand-copy">
            <span class="brand-name">IKAMM</span>
            <span class="brand-subtitle">HOME DECOR</span>
          </span>
        </a>
        <nav class="main-nav" aria-label="เมนูหลัก">
          <a href="#services">บริการ</a>
          <a href="#process">ขั้นตอน</a>
          <a href="#work">ผลงาน</a>
          <a href="#estimate">ประเมินราคาหน้างาน</a>
          <a href="#news">ข่าวสาร</a>
          <a href="#contact">ติดต่อเรา</a>
        </nav>
        <a
          class="line-link header-cta"
          :href="contact.lineHref"
          target="_blank"
          rel="noreferrer"
          :aria-label="`ติดต่อผ่าน Line หมายเลข ${contact.lineLabel}`"
        >
          <MessageCircle :size="18" :stroke-width="1.8" aria-hidden="true" />
          <span>คุยกับเราทาง LINE</span>
          <ArrowUpRight :size="15" :stroke-width="1.8" aria-hidden="true" />
        </a>
      </div>
    </header>

    <main>
      <!-- Hero Section -->
      <section class="hero-section" aria-labelledby="hero-title">
        <div class="hero-copy">
          <p class="eyebrow"><span class="eyebrow-dot" /> BUILT FOR YOUR WAY OF LIVING</p>
          <h1 id="hero-title">พื้นที่ในแบบคุณ<br /><span>เริ่มต้นที่ IKAMM</span></h1>
          <p class="hero-description">
            ออกแบบ ผลิต และติดตั้งเฟอร์นิเจอร์สั่งทำแบบครบวงจร
            <strong> Built-in ที่คิดมาเพื่อพื้นที่และชีวิตของคุณ</strong>
          </p>
          <div class="hero-actions">
            <a
              class="line-link primary-cta"
              :href="contact.lineHref"
              target="_blank"
              rel="noreferrer"
              :aria-label="`ติดต่อผ่าน Line หมายเลข ${contact.lineLabel}`"
            >
              <MessageCircle :size="18" :stroke-width="1.8" aria-hidden="true" />
              <span>คุยกับเราทาง LINE</span>
              <ArrowUpRight :size="15" :stroke-width="1.8" aria-hidden="true" />
            </a>
            <a class="text-cta" href="#services">
              ดูบริการของเรา <ArrowDown :size="16" :stroke-width="1.7" aria-hidden="true" />
            </a>
            <a class="text-cta hero-estimate-link" href="#estimate">
              <Ruler :size="15" :stroke-width="1.7" aria-hidden="true" /> ประเมินหน้างาน
            </a>
          </div>
          <div class="hero-signature">
            <span class="signature-rule" />
            <span>DESIGN <i>·</i> CRAFT <i>·</i> INSTALL</span>
          </div>
        </div>

        <div class="hero-visual">
          <img
            class="hero-image"
            :src="photos.hero"
            alt="ห้องนั่งเล่นร่วมสมัยพร้อมผนังทีวีและตู้บิลต์อินไม้สั่งทำ"
            fetchpriority="high"
          />
          <div class="hero-image-shade" />
          <div class="image-stamp">
            <span class="stamp-overline">A HOME, MADE YOURS</span>
            <span class="stamp-title">Thoughtful spaces.<br />Made to fit.</span>
          </div>
          <span class="image-index">01 <span /> IKAMM INTERIORS</span>
        </div>
        <a class="scroll-cue" href="#services" aria-label="เลื่อนลงไปดูบริการ">
          <span>SCROLL TO EXPLORE</span><ArrowDown :size="15" aria-hidden="true" />
        </a>
      </section>

      <!-- Services Section -->
      <section class="intro-section section-wrap" id="services" aria-labelledby="intro-title">
        <div class="section-kicker"><span>01</span><span>WHO WE ARE</span></div>
        <div class="intro-content">
          <p class="eyebrow muted-eyebrow">YOUR SPACE, REIMAGINED</p>
          <h2 id="intro-title">เปลี่ยนพื้นที่ว่าง<br />ให้เป็นพื้นที่ที่ใช่<span class="gold-period">.</span></h2>
          <div class="intro-bottom">
            <p>
              เราดูแลตั้งแต่ไอเดียแรกจนถึงวันติดตั้งจริง ออกแบบทุกฟังก์ชันให้ลงตัว
              เลือกวัสดุและรายละเอียดอย่างใส่ใจ เพื่อให้บ้านสวยในแบบของคุณและใช้ชีวิตได้สะดวกขึ้น
            </p>
            <a class="round-link" href="#process" aria-label="ดูขั้นตอนการทำงาน">
              <ArrowDown :size="20" :stroke-width="1.5" aria-hidden="true" />
            </a>
          </div>
        </div>
        <div class="intro-aside" aria-label="บริการ Built-in ครบวงจร">
          <Sparkles :size="22" :stroke-width="1.4" aria-hidden="true" />
          <span>ONE TEAM<br />FROM DESIGN TO INSTALLATION</span>
        </div>
      </section>

      <!-- Process Section -->
      <section class="process-section" id="process" aria-labelledby="process-title">
        <div class="process-heading section-wrap">
          <div>
            <div class="section-kicker light-kicker"><span>02</span><span>HOW WE MAKE IT</span></div>
            <p class="eyebrow light-eyebrow">A CLEAR PROCESS, A PERSONAL RESULT</p>
            <h2 id="process-title">ครบทุกขั้นตอน<br /><span>ใส่ใจทุกรายละเอียด</span></h2>
          </div>
          <p class="process-lead">ทีมเดียวดูแลให้ต่อเนื่อง ตั้งแต่ภาพในจินตนาการ<br class="desktop-break" /> จนกลายเป็นเฟอร์นิเจอร์ที่อยู่กับคุณทุกวัน</p>
        </div>

        <div class="steps-grid section-wrap">
          <article class="step-card step-design">
            <div class="step-topline"><span>01 / DESIGN</span><PencilRuler :size="21" :stroke-width="1.5" aria-hidden="true" /></div>
            <div class="step-illustration design-illustration" aria-hidden="true">
              <div class="drawing-frame"><div class="drawing-room"><span /><i /><b /></div><div class="drawing-lines"><span /><span /><span /></div></div>
              <Ruler class="ruler-icon" :size="36" :stroke-width="1.1" />
            </div>
            <h3>เริ่มจากภาพที่ใช่</h3>
            <p>พูดคุยความต้องการ วางฟังก์ชัน และเห็นภาพงานออกแบบ 3D ก่อนเริ่มผลิต</p>
          </article>

          <article class="step-card step-photo-card">
            <div class="step-photo-wrap">
              <img :src="photos.workshop" alt="ช่างผู้ชำนาญกำลังผลิตชิ้นงานเฟอร์นิเจอร์สั่งทำในเวิร์กช็อป" loading="lazy" />
              <span class="photo-label">MADE WITH CARE</span>
            </div>
            <div class="step-details">
              <div class="step-topline"><span>02 / PRODUCTION</span><Hammer :size="20" :stroke-width="1.5" aria-hidden="true" /></div>
              <h3>ผลิตอย่างได้มาตรฐาน</h3>
              <p>คัดสรรวัสดุและผลิตตามแบบ เพื่อให้งานสวยพอดีกับพื้นที่และรายละเอียดที่ตกลงกัน</p>
            </div>
          </article>

          <article class="step-card step-photo-card">
            <div class="step-photo-wrap">
              <img :src="photos.installation" alt="ทีมช่างติดตั้งเฟอร์นิเจอร์บิลต์อินภายในห้องนั่งเล่น" loading="lazy" />
              <span class="photo-label">FINISHED ON SITE</span>
            </div>
            <div class="step-details">
              <div class="step-topline"><span>03 / INSTALLATION</span><Wrench :size="20" :stroke-width="1.5" aria-hidden="true" /></div>
              <h3>ติดตั้งโดยทีมช่าง</h3>
              <p>ดูแลการติดตั้งหน้างานอย่างประณีต ให้ทุกส่วนประกอบเข้าที่และพร้อมใช้งาน</p>
            </div>
          </article>
        </div>
      </section>

      <!-- Portfolio Section -->
      <section class="portfolio-section" id="work" aria-labelledby="work-title">
        <div class="section-wrap">
          <div class="section-kicker"><span>03</span><span>PROJECT GALLERY</span></div>
          <div class="portfolio-heading">
            <div>
              <p class="eyebrow muted-eyebrow">MADE AROUND YOU</p>
              <h2 id="work-title">ภาพผลงาน Built-in<br /><span>ที่ออกแบบให้พอดีกับคุณ</span></h2>
            </div>
            <p class="portfolio-intro">ชมตัวอย่างงานออกแบบและเฟอร์นิเจอร์สั่งทำจากภาพผลงานของ IKAMM เลือกดูตามพื้นที่ที่คุณกำลังวางแผนได้เลย</p>
          </div>

          <div class="portfolio-filters" role="group" aria-label="กรองภาพผลงานตามหมวดหมู่">
            <button
              v-for="category in portfolioCategories"
              :key="category.id"
              :class="['portfolio-filter', { 'is-active': activeCategory === category.id }]"
              type="button"
              :aria-pressed="activeCategory === category.id"
              @click="activeCategory = category.id"
            >
              {{ category.label }}
              <span>{{ category.id === 'all' ? portfolioItems.length : portfolioItems.filter(item => item.category === category.id).length }}</span>
            </button>
          </div>

          <div class="portfolio-grid" aria-live="polite">
            <article 
              class="portfolio-card" 
              v-for="(item, index) in visiblePortfolioItems" 
              :key="item.id"
              @click="openPortfolioModal(item)"
              style="cursor: pointer;"
              title="คลิกเพื่อดูภาพขนาดเต็ม"
            >
              <div class="portfolio-image-wrap">
                <img :src="item.image" :alt="item.alt" loading="lazy" />
                <span class="portfolio-image-index">{{ String(index + 1).padStart(2, '0') }}</span>
              </div>
              <div class="portfolio-card-copy">
                <span class="portfolio-category-label">
                  {{ portfolioCategories.find((cat) => cat.id === item.category)?.label }}
                </span>
                <h3>{{ item.title }}</h3>
              </div>
            </article>
          </div>

          <div class="portfolio-footer">
            <span>DESIGNED FOR LIVING · BUILT AROUND YOU</span>
            <a class="inline-arrow" href="#contact">เริ่มวางแผนพื้นที่ของคุณ <ArrowRight :size="17" aria-hidden="true" /></a>
          </div>
        </div>
      </section>

      <!-- Estimate Section -->
      <section class="estimate-section" id="estimate" aria-labelledby="estimate-title">
        <div class="section-wrap">
          <div class="section-kicker"><span>04</span><span>ON-SITE ESTIMATE</span></div>
          <div class="estimate-heading">
            <div>
              <p class="eyebrow muted-eyebrow">A CLEAR FIRST STEP</p>
              <h2 id="estimate-title">ประเมินหน้างาน<br /><span>เริ่มจากรายละเอียดพื้นที่ของคุณ</span></h2>
            </div>
            <p>กรอกข้อมูลเบื้องต้นให้ทีม IKAMM เข้าใจโจทย์ก่อนติดต่อกลับ เพื่อพูดคุยรายละเอียดและนัดหมายประเมิน ณ สถานที่จริง</p>
          </div>

          <div class="estimate-layout">
            <aside class="estimate-aside" aria-label="สรุปพื้นที่เบื้องต้น">
              <div class="estimate-area-card">
                <span class="estimate-card-kicker"><Calculator :size="15" aria-hidden="true" /> พื้นที่ผนังโดยประมาณ</span>
                <strong aria-live="polite">{{ estimatedWallArea > 0 ? estimatedWallArea.toFixed(2) : "—" }}<small> ตร.ม.</small></strong>
                <span class="estimate-area-formula">คำนวณจากความกว้าง × ความสูง (เมตร)</span>
              </div>
              <div class="estimate-summary-card">
                <span class="estimate-card-kicker">สรุปข้อมูลสำหรับประเมิน</span>
                <dl>
                  <div><dt>ประเภทพื้นที่</dt><dd>{{ selectedSpace }}</dd></div>
                  <div><dt>ขนาด</dt><dd>{{ estimateForm.width || "—" }} × {{ estimateForm.height || "—" }} ม.</dd></div>
                  <div><dt>สถานที่</dt><dd>{{ estimateForm.location || "กรอกจังหวัด / เขต" }}</dd></div>
                  <div><dt>ผู้ติดต่อ</dt><dd>{{ estimateForm.name || "กรอกชื่อ" }}</dd></div>
                  <div><dt>โทรศัพท์</dt><dd>{{ estimateForm.phone || "กรอกเบอร์โทร" }}</dd></div>
                  <div><dt>วันสะดวก</dt><dd>{{ estimateForm.visitDate || "ยังไม่ได้เลือก" }}</dd></div>
                  <div v-if="estimateForm.details"><dt>รายละเอียด</dt><dd>{{ estimateForm.details }}</dd></div>
                </dl>
              </div>
              <div class="estimate-disclaimer">
                <MapPin :size="17" :stroke-width="1.6" aria-hidden="true" />
                <p><strong>ไม่มีการยืนยันราคาจากแบบฟอร์มนี้</strong><br />พื้นที่ที่คำนวณเป็นข้อมูลเบื้องต้นเท่านั้น ราคาจริงขึ้นอยู่กับวัสดุ แบบ และการสำรวจหน้างานโดยทีมงาน</p>
              </div>
            </aside>

            <form class="estimate-form" ref="estimateFormRef" @submit.prevent="handleEstimateEmail">
              <div class="estimate-form-heading">
                <span>YOUR PROJECT DETAILS</span>
                <p>ระบุข้อมูลที่ทราบได้เลย ช่องที่มีเครื่องหมาย * จำเป็นต้องกรอก</p>
              </div>
              <div class="estimate-fields">
                <label class="estimate-field">
                  <span>ประเภทพื้นที่ <b>*</b></span>
                  <select v-model="estimateForm.spaceType" required @change="lineStatus = ''">
                    <option v-for="item in estimateSpaceTypes" :key="item.value" :value="item.value">{{ item.label }}</option>
                  </select>
                </label>
                <div class="estimate-field-group">
                  <label class="estimate-field">
                    <span>กว้างโดยประมาณ (เมตร)</span>
                    <input type="number" inputmode="decimal" min="0.1" step="0.1" placeholder="เช่น 3.5" v-model="estimateForm.width" @input="lineStatus = ''" />
                  </label>
                  <label class="estimate-field">
                    <span>สูงโดยประมาณ (เมตร)</span>
                    <input type="number" inputmode="decimal" min="0.1" step="0.1" placeholder="เช่น 2.4" v-model="estimateForm.height" @input="lineStatus = ''" />
                  </label>
                </div>
                <label class="estimate-field">
                  <span>สถานที่หน้างาน (จังหวัด / เขต) <b>*</b></span>
                  <input type="text" autocomplete="address-level2" placeholder="เช่น เขตวัฒนา กรุงเทพฯ" v-model="estimateForm.location" required @input="lineStatus = ''" />
                </label>
                <div class="estimate-field-group">
                  <label class="estimate-field">
                    <span>ชื่อผู้ติดต่อ <b>*</b></span>
                    <input type="text" autocomplete="name" placeholder="ชื่อของคุณ" v-model="estimateForm.name" required @input="lineStatus = ''" />
                  </label>
                  <label class="estimate-field">
                    <span>เบอร์โทรศัพท์ <b>*</b></span>
                    <input type="tel" autocomplete="tel" inputmode="tel" placeholder="เบอร์ที่สะดวกให้ติดต่อกลับ" v-model="estimateForm.phone" required @input="lineStatus = ''" />
                  </label>
                </div>
                <label class="estimate-field">
                  <span><CalendarDays :size="14" aria-hidden="true" /> วันที่สะดวกให้เข้าประเมิน <small>ไม่บังคับ</small></span>
                  <input type="date" v-model="estimateForm.visitDate" @input="lineStatus = ''" />
                </label>
                <label class="estimate-field">
                  <span>รายละเอียดเพิ่มเติม <small>ไม่บังคับ</small></span>
                  <textarea rows="3" placeholder="เช่น สไตล์ที่ชอบ วัสดุที่สนใจ หรือช่วงเวลาที่สะดวก" v-model="estimateForm.details" @input="lineStatus = ''" />
                </label>
              </div>
              <div class="estimate-actions">
                <button class="estimate-email-button" type="submit"><Mail :size="16" aria-hidden="true" /> ส่งคำขอทางอีเมล</button>
                <button class="estimate-line-button" type="button" @click="handleEstimateLine"><MessageCircle :size="16" aria-hidden="true" /> ส่งรายละเอียดทาง LINE</button>
              </div>
              <p class="estimate-privacy-note" role="status" aria-live="polite">{{ lineStatus || "เมื่อส่งทาง LINE ระบบจะคัดลอกรายละเอียดให้วางในแชต ส่วนอีเมลจะเปิดแอปอีเมลของคุณ ข้อมูลไม่ได้ถูกบันทึกบนเว็บไซต์" }}</p>
            </form>
          </div>
        </div>
      </section>

      <!-- News Section -->
      <section class="news-section" id="news" aria-labelledby="news-title">
        <div class="news-inner section-wrap">
          <div class="section-kicker"><span>05</span><span>NEWS & UPDATES</span></div>
          <div class="news-copy">
            <p class="eyebrow muted-eyebrow">STAY IN TOUCH</p>
            <h2 id="news-title">ข่าวสารจาก IKAMM<br /><span>ติดตามความเคลื่อนไหวของเรา</span></h2>
            <p>ดูข่าวสาร ผลงาน และอัปเดตต่าง ๆ พร้อมติดต่อ IKAMM ได้ผ่าน Facebook</p>
          </div>
          <a class="news-facebook" :href="contact.facebook" target="_blank" rel="noreferrer">
            <span class="news-facebook-icon"><span class="facebook-mark" aria-hidden="true">f</span></span>
            <span><small>FOLLOW & CONNECT</small><strong>ติดตามข่าวสารบน Facebook</strong></span>
            <ArrowUpRight :size="18" aria-hidden="true" />
          </a>
        </div>
      </section>

      <!-- Contact Section -->
      <section class="contact-section" id="contact" aria-labelledby="contact-title">
        <div class="contact-inner section-wrap">
          <div class="contact-copy">
            <div class="section-kicker light-kicker"><span>06</span><span>LET'S TALK ABOUT YOUR SPACE</span></div>
            <p class="eyebrow light-eyebrow">YOUR NEXT CHAPTER STARTS HERE</p>
            <h2 id="contact-title">มีพื้นที่ในใจ<br />ให้เราช่วยออกแบบไหม?</h2>
            <p>เล่าไอเดียและความต้องการของคุณให้เราฟัง ทีม IKAMM พร้อมพูดคุยเรื่องงาน Built-in ที่เหมาะกับพื้นที่ของคุณ</p>
            <a
              class="line-link contact-cta"
              :href="contact.lineHref"
              target="_blank"
              rel="noreferrer"
              :aria-label="`ติดต่อผ่าน Line หมายเลข ${contact.lineLabel}`"
            >
              <MessageCircle :size="18" :stroke-width="1.8" aria-hidden="true" />
              <span>คุยกับเราทาง LINE</span>
              <ArrowUpRight :size="15" :stroke-width="1.8" aria-hidden="true" />
            </a>
          </div>
          <div class="contact-details">
            <div class="contact-detail-group">
              <span class="detail-label"><Phone :size="14" aria-hidden="true" /> CALL US</span>
              <a v-for="phone in contact.phones" :key="phone.href" :href="phone.href">{{ phone.label }}<ArrowUpRight :size="14" aria-hidden="true" /></a>
            </div>
            <div class="contact-detail-group">
              <span class="detail-label"><MessageCircle :size="14" aria-hidden="true" /> LINE</span>
              <a :href="contact.lineHref" target="_blank" rel="noreferrer">{{ contact.lineLabel }}<ArrowUpRight :size="14" aria-hidden="true" /></a>
            </div>
            <div class="contact-detail-group">
              <span class="detail-label"><span class="facebook-mark" aria-hidden="true">f</span> FACEBOOK</span>
              <a :href="contact.facebook" target="_blank" rel="noreferrer">ข่าวสารและติดต่อ IKAMM<ArrowUpRight :size="14" aria-hidden="true" /></a>
            </div>
            <div class="contact-detail-group">
              <span class="detail-label"><Mail :size="14" aria-hidden="true" /> EMAIL</span>
              <a v-for="email in contact.emails" class="email-link" :key="email.href" :href="email.href">{{ email.label }}<ArrowUpRight :size="14" aria-hidden="true" /></a>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="site-footer">
      <div class="footer-main section-wrap">
        <a class="brand" href="#top" aria-label="IKAMM Home Decor — กลับสู่ด้านบน">
          <img class="brand-mark" src="/logo.svg" alt="" aria-hidden="true" />
          <span class="brand-copy">
            <span class="brand-name">IKAMM</span>
            <span class="brand-subtitle">HOME DECOR</span>
          </span>
        </a>
        <p class="footer-note">ออกแบบพื้นที่ของคุณ<br />ด้วยความใส่ใจในทุกรายละเอียด</p>
        <div class="footer-links">
          <div class="footer-website">
            <Globe2 :size="15" :stroke-width="1.5" aria-hidden="true" />
            <a :href="contact.website" target="_blank" rel="noreferrer">www.ikammhomedecor.com</a>
          </div>
          <a class="footer-facebook" :href="contact.facebook" target="_blank" rel="noreferrer"><span class="facebook-mark" aria-hidden="true">f</span> Facebook</a>
        </div>
      </div>
      <div class="footer-bottom section-wrap">
        <span>© {{ new Date().getFullYear() }} IKAMM HOME DECOR</span>
        <a href="#top">กลับสู่ด้านบน <ArrowUpRight :size="13" aria-hidden="true" /></a>
        <span>DESIGNED FOR LIVING</span>
      </div>
    </footer>

    <!-- Mobile Contact Bar -->
    <div class="mobile-contact-bar" aria-label="ช่องทางติดต่อด่วน">
      <a :href="contact.lineHref" target="_blank" rel="noreferrer" class="mobile-line">
        <MessageCircle :size="17" aria-hidden="true" /><span>LINE</span>
      </a>
      <a :href="contact.phones[0].href" class="mobile-phone" :aria-label="`โทร ${contact.phones[0].label}`">
        <Phone :size="17" aria-hidden="true" /><span>โทร</span>
      </a>
      <a :href="contact.facebook" target="_blank" rel="noreferrer" class="mobile-news" aria-label="ติดตามข่าวสาร IKAMM บน Facebook">
        <span class="facebook-mark" aria-hidden="true">f</span><span>ข่าวสาร</span>
      </a>
      <a href="#estimate" class="mobile-estimate">
        <Ruler :size="17" aria-hidden="true" /><span>ประเมิน</span>
      </a>
    </div>

    <!-- Portfolio Lightbox Modal (Vuetify Dialog) -->
    <v-dialog v-model="isModalOpen" max-width="880" transition="dialog-bottom-transition">
      <v-card v-if="selectedItem" class="rounded-xl overflow-hidden" color="#fbfaf6" elevation="10">
        <div style="background: #0f1a14; position: relative; text-align: center;">
          <img 
            :src="selectedItem.image" 
            :alt="selectedItem.alt" 
            style="width: 100%; max-height: 72vh; object-fit: contain; display: block; margin: 0 auto;" 
          />
          <button 
            type="button"
            @click="isModalOpen = false"
            style="position: absolute; top: 14px; right: 14px; background: rgba(0,0,0,0.65); color: white; border: none; border-radius: 50%; width: 38px; height: 38px; display: grid; place-items: center; cursor: pointer; transition: background 0.2s;"
            aria-label="ปิดหน้าต่าง"
          >
            <X :size="20" />
          </button>
        </div>
        <v-card-text style="padding: 24px; background: #fbfaf6;">
          <div style="display: flex; align-items: center; justify-content: space-between; gap: 18px; flex-wrap: wrap;">
            <div>
              <span style="color: #8d774d; font-size: 11px; letter-spacing: 0.12em; font-weight: 700; text-transform: uppercase;">
                {{ portfolioCategories.find((cat) => cat.id === selectedItem.category)?.label }}
              </span>
              <h3 style="margin: 4px 0 0; color: #123f32; font-size: 21px; font-weight: 700;">
                {{ selectedItem.title }}
              </h3>
              <p style="margin: 6px 0 0; color: #646c64; font-size: 13px;">
                {{ selectedItem.alt }}
              </p>
            </div>
            <div style="display: flex; gap: 10px; align-items: center; flex-wrap: wrap;">
              <a 
                :href="contact.lineHref" 
                target="_blank" 
                rel="noreferrer" 
                class="line-link" 
                style="padding: 0 18px; min-height: 42px; font-size: 13px; border-radius: 6px;"
              >
                <MessageCircle :size="16" />
                <span>ปรึกษาห้องนี้ทาง LINE</span>
              </a>
              <button 
                type="button" 
                @click="selectSpaceAndScroll(selectedItem.category)"
                style="min-height: 42px; padding: 0 18px; background: #e9e8df; border: 1px solid #cdd0c5; color: #123f32; font-size: 13px; font-weight: 600; cursor: pointer; border-radius: 6px;"
              >
                ประเมินราคาส่วนนี้
              </button>
            </div>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>

    <!-- Toast Notification (Vuetify Snackbar) -->
    <v-snackbar
      v-model="showSnackbar"
      :timeout="3500"
      color="#123f32"
      elevation="24"
      rounded="lg"
      location="bottom right"
    >
      <div style="display: flex; align-items: center; gap: 10px; color: #faf9f2;">
        <CheckCircle2 :size="18" style="color: #c5a875; flex-shrink: 0;" />
        <span style="font-size: 13px;">{{ snackbarMessage }}</span>
      </div>
      <template #actions>
        <v-btn color="#c5a875" variant="text" size="small" @click="showSnackbar = false">
          ปิด
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</v-main>
</v-app>
</template>
