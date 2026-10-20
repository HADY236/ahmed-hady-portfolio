const translations = {
  en: {
    skip:"Skip to content", navAbout:"About",navSkills:"Skills",navProjects:"Projects",navContact:"Contact",
    eyebrow:"IT STUDENT · SOFTWARE PROJECTS",hello:"Hi, I'm",headline:"IT Student | Aspiring Software Developer",
    intro:"I build practical software projects across web development, desktop tools, and the Internet of Things. I enjoy turning real problems into useful, maintainable solutions.",
    viewProjects:"Explore my projects",contactMe:"Contact me",editHint:"Replace the sample social links with your own profile URLs before publishing.",
    aboutEyebrow:"A LITTLE ABOUT ME",aboutTitle:"I learn by building.",
    aboutText:"I am an Information Technology student at Borg El Arab Technological University in Egypt. I work on practical projects that connect software with real user needs. I am developing my skills and looking for opportunities to learn, contribute, and grow as a developer.",
    factOneTitle:"Problem solving",factOneText:"Break a task into clear steps and build a working solution.",factTwoTitle:"Hands-on projects",factTwoText:"Practice through web, desktop, and connected-device projects.",factThreeTitle:"Continuous learning",factThreeText:"Improve technical skills through coursework and project work.",
    skillsEyebrow:"TOOLS & TECHNOLOGIES",skillsTitle:"Skills I use in my projects",skillsIntro:"These are technologies associated with the projects listed below. Update this section to reflect your current level and hands-on experience.",
    projectsEyebrow:"SELECTED WORK",projectsTitle:"Projects",projectsIntro:"A selection of academic and practical projects. Add screenshots, source-code links, and a demo when they are ready to share.",
    ataaText:"A platform concept that connects donors with charitable organizations to donate usable clothes and items, helping charities manage eligibility and distribution.",
    duplicateText:"A Windows desktop utility designed to identify duplicate files by content using hashes, review matches, and support safer cleanup workflows.",
    iotText:"A smart-home concept using temperature and motion sensors with an ESP32 and cloud connectivity to monitor conditions and control devices.",
    linkPending:"Project links and screenshots can be added here.",contactEyebrow:"GET IN TOUCH",contactTitle:"Have an opportunity or an idea?",
    contactText:"I am open to discussing projects, internships, and entry-level opportunities. Reach out through email or connect with me on professional platforms.",
    emailButton:"Email me ↗",emailHint:"Replace this placeholder with your professional email before publishing.",footerText:"Built with care. Updated as I learn.",backTop:"Back to top ↑"
  },
  ar: {
    skip:"انتقل إلى المحتوى",navAbout:"نبذة عني",navSkills:"المهارات",navProjects:"المشاريع",navContact:"تواصل معي",
    eyebrow:"طالب تكنولوجيا معلومات · مشاريع برمجية",hello:"أهلًا، أنا",headline:"طالب تكنولوجيا معلومات ومطور برمجيات طموح",
    intro:"أعمل على مشاريع برمجية عملية في تطوير الويب وتطبيقات سطح المكتب وإنترنت الأشياء. أهتم بتحويل المشكلات إلى حلول قابلة للاستخدام والتطوير.",
    viewProjects:"استعرض مشاريعي",contactMe:"تواصل معي",editHint:"استبدل روابط التواصل التجريبية بروابط حساباتك قبل نشر الموقع.",
    aboutEyebrow:"نبذة عني",aboutTitle:"أتعلم من خلال بناء المشاريع.",
    aboutText:"أنا طالب تكنولوجيا معلومات بجامعة برج العرب التكنولوجية في مصر. أعمل على مشاريع عملية تربط البرمجيات باحتياجات المستخدمين. أطور مهاراتي وأبحث عن فرص للتعلم والمشاركة والنمو كمطور.",
    factOneTitle:"حل المشكلات",factOneText:"تقسيم المهمة إلى خطوات واضحة وبناء حل يعمل.",factTwoTitle:"مشاريع عملية",factTwoText:"التدرب من خلال مشاريع الويب وسطح المكتب والأجهزة المتصلة.",factThreeTitle:"التعلم المستمر",factThreeText:"تطوير المهارات التقنية من خلال الدراسة وتنفيذ المشاريع.",
    skillsEyebrow:"الأدوات والتقنيات",skillsTitle:"تقنيات أستخدمها في مشاريعي",skillsIntro:"التقنيات التالية مرتبطة بالمشاريع المعروضة. حدّث القسم وفقًا لمستواك وخبرتك العملية الحالية.",
    projectsEyebrow:"نماذج من عملي",projectsTitle:"المشاريع",projectsIntro:"مجموعة من المشاريع الدراسية والعملية. أضف صورًا وروابط الكود ونسخة تجريبية عندما تصبح جاهزة للمشاركة.",
    ataaText:"فكرة منصة تربط المتبرعين بالمؤسسات الخيرية للتبرع بالملابس والأغراض القابلة للاستخدام، مع دعم تنظيم الاستحقاق والتوزيع لدى الجمعيات.",
    duplicateText:"أداة لسطح مكتب Windows تهدف إلى اكتشاف الملفات المتكررة حسب المحتوى باستخدام البصمات الرقمية، ومراجعة النتائج، ودعم حذف أكثر أمانًا.",
    iotText:"فكرة منزل ذكي تستخدم حساسات الحرارة والحركة مع ESP32 والاتصال السحابي لمتابعة الظروف والتحكم في الأجهزة.",
    linkPending:"يمكن إضافة روابط المشروع وصوره هنا.",contactEyebrow:"تواصل معي",contactTitle:"هل لديك فرصة أو فكرة؟",
    contactText:"أنا منفتح على مناقشة المشاريع والتدريب وفرص العمل للمبتدئين. يمكنك التواصل عبر البريد الإلكتروني أو الحسابات المهنية.",
    emailButton:"راسلني ↗",emailHint:"استبدل هذا النص ببريدك المهني قبل نشر الموقع.",footerText:"موقع يتطور مع تطور مهاراتي.",backTop:"العودة للأعلى ↑"
  }
};
let lang = "en";
const langToggle = document.getElementById("langToggle");
const themeToggle = document.getElementById("themeToggle");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
function setLanguage(next) {
  lang = next;
  document.documentElement.lang = next;
  document.documentElement.dir = next === "ar" ? "rtl" : "ltr";
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (translations[next][key]) el.textContent = translations[next][key];
  });
  langToggle.textContent = next === "en" ? "العربية" : "English";
  document.title = next === "en" ? "Ahmed Hady | IT Student & Developer" : "أحمد هادي | طالب تكنولوجيا معلومات ومطور";
  document.querySelector('meta[name="description"]').content = next === "en"
    ? "Ahmed Hady's portfolio: IT projects in web development, desktop software, and IoT."
    : "الموقع الشخصي لأحمد هادي، يعرض مشاريع في تطوير الويب وبرامج سطح المكتب وإنترنت الأشياء.";
}
langToggle.addEventListener("click", () => setLanguage(lang === "en" ? "ar" : "en"));
themeToggle.addEventListener("click", () => {
  const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = next;
  themeToggle.textContent = next === "dark" ? "☼" : "☾";
});
menuToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
});
navLinks.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));
document.getElementById("year").textContent = new Date().getFullYear();
