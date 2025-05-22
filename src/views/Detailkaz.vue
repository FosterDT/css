<template>
  <div :class="['wrapper', { dark: isDarkTheme }]">
    <!-- Затемнение под темную тему -->
    <div v-if="isDarkTheme" class="dark-overlay"></div>

    <!-- Заголовок -->
    <header class="header">
      <div class="header-left">
        <button @click="toggleMenu" class="menu-button">
          <span class="hamburger-icon">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
        <div v-if="showMenu" class="dropdown-menu">
          <button @click="navigateTo('/Home')">Басты бет</button>
<button @click="navigateTo('/Registration')">Тіркеу</button>
<button @click="navigateTo('/catalog')">Каталог</button>
        </div>
      </div>
      <div class="header-center">
<h1>Картридж қоймасы</h1>
<p>Басып шығару үшін ең жақсы таңдауыңыз!</p>
      </div>
      <div class="header-right">
        <button class="avatar-btn" @click="navigateTo('/profile')" aria-label="Профиль">
          <svg viewBox="0 0 64 64" class="avatar-icon" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <circle cx="32" cy="32" r="30" fill="#b38b4e"/>
            <circle cx="32" cy="22" r="12" fill="#f5e5a4"/>
            <rect x="16" y="38" width="32" height="18" rx="9" ry="9" fill="#f5e5a4"/>
          </svg>
        </button>
        <label for="theme-slider" class="theme-label">
        <span class="theme-text">Қараңғы тақырып</span>
          <div class="toggle-switch">
            <input
              type="checkbox"
              id="theme-slider"
              class="theme-slider"
              v-model="isDarkTheme"
            />
            <span class="slider"></span>
          </div>
        </label>
      </div>
    </header>

    <!-- Основное содержимое -->
    <main class="main-content">
      <div class="detail-container">
        <div class="detail-header">
         <h2>Біздің дүкен туралы</h2>
<p class="subtitle">2015 жылдан бері сапа мен сенімділік</p>
        </div>

        <!-- Секция о компании -->
        <section class="detail-section">
          <div class="section-icon">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z" fill="currentColor"/>
            </svg>
          </div>
      <h3>Компания тарихы</h3>
<p>
Біздің картридж дүкені өз қызметін 2015 жылы Өскемен қаласындағы шағын кеңседе бастады. 
Компанияның негізін қалаушылар, полиграфиялық технологиялар саласындағы ынталы мамандар,
жоғары сапалы шығын материалдарымен қамтамасыз етуді алдымызға міндет етіп қойды
қол жетімді бағамен баспа жабдығы үшін. 
</p>
<p>
10 жыл қызмет ету барысында біз өнім ассортиментін айтарлықтай кеңейтіп, аштық
қаланың әртүрлі аудандарында бірнеше қызмет көрсету орындары. Біздің команда өсті
3-тен 15-ке дейін маман, олардың әрқайсысы өз ісінің кәсіби маманы. 
</p>
        </section>

        <!-- Секция услуг -->
        <section class="detail-section">
          <div class="section-icon">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14h-2V9h-2V7h4v10z" fill="currentColor"/>
            </svg>
          </div>
        <h3>Біздің қызметтеріміз</h3>
          <div class="services-grid">
            <div class="service-card">
              <div class="service-icon">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z" fill="currentColor"/>
                </svg>
              </div>
         <h4>Картриджді сату</h4>
<p>Принтерлердің барлық түрлеріне арналған түпнұсқа және үйлесімді картридждердің кең ауқымы</p>
            </div>
            <div class="service-card">
              <div class="service-icon">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z" fill="currentColor"/>
                </svg>
              </div>
             <h4>Сәуірде картридждерді қайта толтыру</h4>
<p>Сапа кепілдігі бар лазерлік және сия бүріккіш картридждерді кәсіби түрде толтыру</p>
            </div>
            <div class="service-card">
              <div class="service-icon">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z" fill="currentColor"/>
                </svg>
              </div>
<h4>Принтерді жөндеу</h4>
<p>Кез келген күрделіліктегі лазерлік және сиялы принтерлерді диагностикалау және жөндеу</p>
            </div>
            <div class="service-card">
              <div class="service-icon">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" fill="currentColor"/>
                </svg>
              </div>
             <h4>Жеткізу</h4>
<p>5000 теңгеден жоғары тапсырыстар үшін қала ішінде тауарды жеткізу тегін</p>
            </div>
          </div>
        </section>

        <!-- Преимущества -->
        <section class="detail-section">
          <div class="section-icon">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 9l1.25-2.75L23 5l-2.75-1.25L19 1l-1.25 2.75L15 5l2.75 1.25L19 9zm-7.5.5L9 4 6.5 9.5 1 12l5.5 2.5L9 20l2.5-5.5L17 12l-5.5-2.5zM19 15l-1.25 2.75L15 19l2.75 1.25L19 23l1.25-2.75L23 19l-2.75-1.25L19 15z" fill="currentColor"/>
            </svg>
          </div>
    <h3>Неге бізді таңдау керек</h3>
          <div class="advantages-list">
            <div class="advantage-item">
              <div class="advantage-icon">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" fill="currentColor"/>
                </svg>
              </div>
              <div class="advantage-content">
 <h4>Сапа кепілдігі</h4>
<p>Біз жұмыс пен тауарлардың барлық түрлеріне кепілдік береміз</p>
              </div>
            </div>
            <div class="advantage-item">
              <div class="advantage-icon">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" fill="currentColor"/>
                </svg>
              </div>
              <div class="advantage-content">
             <h4>Ең жақсы бағалар</h4>
<p>Бәсекеге қабілетті бағалар және тұрақты тұтынушыларға арналған жеңілдіктер жүйесі</p>
              </div>
            </div>
            <div class="advantage-item">
              <div class="advantage-icon">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" fill="currentColor"/>
                  <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z" fill="currentColor"/>
                </svg>
              </div>
              <div class="advantage-content">
<h4>Жылдам қызмет</h4>
<p>Клиенттің қатысуымен картридждерді 15-30 минут ішінде шұғыл толтыру</p>
              </div>
            </div>
            <div class="advantage-item">
              <div class="advantage-icon">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.5 12c1.38 0 2.49-1.12 2.49-2.5S17.88 7 16.5 7C15.12 7 14 8.12 14 9.5s1.12 2.5 2.5 2.5zM9 11c1.66 0 2.99-1.34 2.99-3S10.66 5 9 5C7.34 5 6 6.34 6 8s1.34 3 3 3zm7.5 3c-1.83 0-5.5.92-5.5 2.75V19h11v-2.25c0-1.83-3.67-2.75-5.5-2.75zM9 13c-2.33 0-7 1.17-7 3.5V19h7v-2.25c0-.85.33-2.34 2.37-3.47C10.5 13.1 9.66 13 9 13z" fill="currentColor"/>
                </svg>
              </div>
              <div class="advantage-content">
       <h4>Кәсіби топ</h4>
<p>5 жылдан астам тәжірибесі бар білікті мамандар</p>
              </div>
            </div>
          </div>
        </section>

        <!-- Часто задаваемые вопросы -->
        <section class="detail-section">
          <div class="section-icon">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z" fill="currentColor"/>
            </svg>
          </div>
<h3>Жиі қойылатын сұрақтар</h3>
          <div class="faq-list">
            <div class="faq-item">
          <h4>Картриджді толтыру қанша тұрады?</h4>
<p>Қайта толтыру құны картридж үлгісіне және принтер түріне байланысты. Бағалары сия бүріккіштері 1500 теңгеден, лазерлік картридждер 2000 теңгеден басталады.</p>
</div>
            <div class="faq-item">
             <h4>Қайта толтырылған картридж қанша уақытқа жетеді?</h4>
<p>Қайта толтырылған картридждің ресурсы әдетте бастапқы картридж ресурсының 80-100% құрайды. Нақты сандар үлгіге және пайдалану қарқындылығына байланысты.</p>
</div>
            <div class="faq-item">
           <h4>Қайта толтыруға кепілдік бар ма?</h4>
<p>Иә, біз картридждерді толтыру және қалпына келтіру бойынша жұмыстардың барлық түрлеріне 30 күндік кепілдік береміз.</p>
</div>
            <div class="faq-item">
             <h4>Кез келген картриджді толтыруға бола ма?</h4>
<p>Картридждердің көпшілігі қайта толтырылады, бірақ қайта пайдаланудан кірістірілген қорғанысы бар үлгілер бар. Біздің мамандар картриджді толтыруға болатынын анықтауға көмектеседі.</p>
</div>
          </div>
        </section>

        <!-- Призыв к действию -->
        <section class="cta-section">
         <h3>Тапсырыс беруге дайынсыз ба немесе сұрақтарыңыз бар ма?</h3>
<p>Біздің мамандар сізге дұрыс шығын материалдарын таңдауға немесе басып шығару мәселелерін шешуге көмектесуге дайын.</p>
          <div class="cta-buttons">
            <button class="primary-btn" @click="navigateTo('/catalog')">Каталогқа өтіңіз</button>
            <button class="secondary-btn" @click="navigateTo('/Registration')">Тіркелу</button>
          </div>
        </section>
      </div>
    </main>

    <!-- Подвал -->
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-section">
         <h3>Контактілер</h3>
          <p>Тел: +7 (705) 531-49-42</p>
          <p>Электрондық пошта: kykypysa228@gmail.com</p>
        </div>
        <div class="footer-section">
         <h3>Мекенжай</h3>
         <p>Өскемен қ., көш. Сәтпаева, 21</p>
        </div>
        <div class="footer-section">
         <h3>Біз әлеуметтік желілердеміз</h3>
          <div class="social-icons">
            <a href="https://www.facebook.com/profile.php?id=100081180143002" aria-label="Facebook">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 2H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm-5 14h-2v-4h-2v-2h2V8.5C13 7.12 14.12 6 15.5 6H18v2h-1.5c-.55 0-1 .45-1 1v1h2.5l-.5 2h-2v4z" fill="currentColor"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/leshik_borisoff/" aria-label="Instagram">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" fill="currentColor"/>
              </svg>
            </a>
            <a href="https://t.me/+Zu2difW5PVNhMjcy" aria-label="Telegram">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z" fill="currentColor"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div class="copyright">
        <p>© 2025 Cartridge Store - Барлық құқықтар қорғалған</p>
      </div>
    </footer>
  </div>
  
</template>

<script>
import { ref, watch, onMounted } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const isDarkTheme = ref(false);
    const router = useRouter();
    const showMenu = ref(false);
    // Загрузка темы из localStorage
    onMounted(() => {
      const saved = localStorage.getItem("dark-theme");
      if (saved === "true") {
        isDarkTheme.value = true;
      }
      
      // Закрытие меню при клике вне его
      document.addEventListener('click', (e) => {
        if (showMenu.value && !e.target.closest('.header-left')) {
          showMenu.value = false;
        }
      });
    });

    // Сохраняем тему при изменении
    watch(isDarkTheme, (val) => {
      localStorage.setItem("dark-theme", val);
    });

    const toggleMenu = (event) => {
      event.stopPropagation();
      showMenu.value = !showMenu.value;
    };

    // Переходы по маршрутам
    const navigateTo = (path) => {
      showMenu.value = false;
      router.push(path);
    };

    return {
      isDarkTheme,
      showMenu,
      toggleMenu,
      navigateTo,
    };
  },
};
</script>