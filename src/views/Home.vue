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
          <button @click="navigateTo('/Home')">Главная</button>
          <button @click="navigateTo('/Registration')">Регистрация</button>
          <button @click="navigateTo('/Catalog')">Каталог</button>
          <button @click="navigateTo('/Login')">Вход</button>
        </div>
      </div>
      <div class="header-center">
        <h1>Магазин картриджей</h1>
        <p>Ваш лучший выбор для печати!</p>
      </div>
      <div class="header-right">
        <button class="avatar-btn" @click="navigateTo('/Profile')" aria-label="Профиль">
          <svg viewBox="0 0 64 64" class="avatar-icon" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <circle cx="32" cy="32" r="30" fill="#b38b4e"/>
            <circle cx="32" cy="22" r="12" fill="#f5e5a4"/>
            <rect x="16" y="38" width="32" height="18" rx="9" ry="9" fill="#f5e5a4"/>
          </svg>
        </button>
        <label for="theme-slider" class="theme-label">
          <span class="theme-text">Тёмная тема</span>
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
      <div class="welcome-windows">
        <div class="welcome-box">
          <div class="welcome-icon">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L1 21h22L12 2zm0 4l7.53 13H4.47L12 6zm-1 5v4h2v-4h-2zm0 6v2h2v-2h-2z" fill="currentColor"/>
            </svg>
          </div>
          <h2>Добро пожаловать!</h2>
          <p>
            Мы работаем уже более 10 лет, предлагая качественные картриджи и комплектующие для принтеров.
            Обеспечиваем надежность и выгодные цены для наших клиентов.
          </p>
          <button class="learn-more" @click="Detail">Подробнее</button>
        </div>
        <div class="welcome-box">
          <div class="welcome-icon">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2zm12 4c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zm-9 8c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6v-1z" fill="currentColor"/>
            </svg>
          </div>
          <h2>Қош келдіңіз!</h2>
          <p>
            Біз 10 жылдан астам тәжірибемізбен сапалы картридждер мен басып шығару жабдықтарын ұсынамыз.
            Клиенттерімізге сенімділік пен тиімді баға кепілдігі.
          </p>
          <button class="learn-more" @click="Detailkaz">Көбірек білу</button>
        </div>
        <div class="welcome-box">
          <div class="welcome-icon">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" fill="currentColor"/>
            </svg>
          </div>
          <h2>Welcome!</h2>
          <p>
            We have been working for over 10 years providing quality cartridges and printer accessories.
            Reliability and competitive prices for our customers guaranteed.
          </p>
          <button class="learn-more" @click="Detaileng" >Learn More</button>
        </div>
      </div>
    </main>

    <!-- Подвал -->
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-section">
          <h3>Контакты</h3>
          <p>Тел: +7 (705) 531-49-42</p>
          <p>Email: kykypysa228@gmail.com</p>
        </div>
        <div class="footer-section">
          <h3>Адрес</h3>
          <p>г. Усть-Каменогорск, ул. Сатпаева, 21</p>
        </div>
        <div class="footer-section">
          <h3>Мы в соцсетях</h3>
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
        <p>© 2025 Магазин картриджей - Все права защищены</p>
      </div>
    </footer>
  </div>
</template>

<script>
import { ref, watch, onMounted } from "vue";
import { useRouter } from "vue-router";
import "../style.css";

export default {
  methods: {
  Detaileng() {
    this.$router.push('/Detaileng');
  },
  Detailkaz() {
    this.$router.push('/Detailkaz');
  },
  Detail() {
    this.$router.push('/Detail');
  }
},
  setup() {
    const isDarkTheme = ref(false);
    const showMenu = ref(false);
    const router = useRouter();

    // Загрузка темы из localStorage
    onMounted(() => {
      const saved = localStorage.getItem("dark-theme");
      if (saved === "true") {
        isDarkTheme.value = true;
      }

      // Закрытие меню при клике вне него
      document.addEventListener("click", (e) => {
        if (showMenu.value && !e.target.closest(".header-left")) {
          showMenu.value = false;
        }
      });
    });

    // Сохраняем тему при изменении
    watch(isDarkTheme, (val) => {
      localStorage.setItem("dark-theme", val);
    });

    // Тоггл меню
    const toggleMenu = (event) => {
      event.stopPropagation();
      showMenu.value = !showMenu.value;
    };

    // Навигация
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
