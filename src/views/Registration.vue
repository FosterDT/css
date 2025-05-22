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
          <button @click="navigateTo('/catalog')">Каталог</button>
        </div>
      </div>
      <div class="header-center">
        <h1>Регистрация</h1>
        <p>Создайте аккаунт, чтобы получить доступ к лучшим предложениям!</p>
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
      <div class="form-container">
        <h2>Создание нового аккаунта</h2>
        <form @submit.prevent="register">
          <div class="form-group">
            <label for="username">Имя пользователя</label>
            <input type="text" id="username" v-model="formData.username" required placeholder="Введите имя пользователя" />
            <span v-if="errors.username" class="error-message">{{ errors.username }}</span>
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" v-model="formData.email" required placeholder="Введите ваш email" />
            <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
          </div>
          <div class="form-group">
            <label for="phone">Номер телефона</label>
            <input type="tel" id="phone" v-model="formData.phone" required placeholder="Введите номер телефона" />
            <span v-if="errors.phone" class="error-message">{{ errors.phone }}</span>
          </div>
          <div class="form-group">
            <label for="password">Пароль</label>
            <input type="password" id="password" v-model="formData.password" required placeholder="Введите пароль" />
            <span v-if="errors.password" class="error-message">{{ errors.password }}</span>
          </div>
          <div class="form-group">
            <label for="confirmPassword">Повторите пароль</label>
            <input type="password" id="confirmPassword" v-model="formData.confirmPassword" required placeholder="Повторите пароль" />
            <span v-if="errors.confirmPassword" class="error-message">{{ errors.confirmPassword }}</span>
          </div>
          <button type="submit" class="register-btn" :disabled="isSubmitting">
            {{ isSubmitting ? 'Обработка...' : 'Зарегистрироваться' }}
          </button>
          <div v-if="successMessage" class="success-message">
            {{ successMessage }}
          </div>
        </form>
      </div>
    </main>

    <!-- Подвал -->
    <footer class="footer">
      <div class="footer-content">
        <p>© 2025 Магазин картриджей - Все права защищены</p>
      </div>
    </footer>
  </div>
</template>

<script>
import { ref, watch, onMounted } from "vue";
import { useRouter } from "vue-router";
import { userApi } from "./api.js";
import "../style.css";

export default {
  name: "register",
  setup() {
    const router = useRouter();
    const isDarkTheme = ref(false);
    const showMenu = ref(false);
    const isSubmitting = ref(false);
    const successMessage = ref("");
    const errors = ref({
      username: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: ""
    });
    
    const formData = ref({
      username: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    });

    const validateForm = () => {
      let valid = true;
      errors.value = {
        username: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: ""
      };

      // Проверка имени пользователя
      if (formData.value.username.length < 3) {
        errors.value.username = "Имя пользователя должно содержать не менее 3 символов";
        valid = false;
      }

      // Проверка email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.value.email)) {
        errors.value.email = "Введите корректный email адрес";
        valid = false;
      }

      // Проверка телефона
      const phoneRegex = /^\+?[0-9]{10,15}$/;
      if (!phoneRegex.test(formData.value.phone)) {
        errors.value.phone = "Введите корректный номер телефона";
        valid = false;
      }

      // Проверка пароля
      if (formData.value.password.length < 6) {
        errors.value.password = "Пароль должен содержать не менее 6 символов";
        valid = false;
      }

      // Проверка совпадения паролей
      if (formData.value.password !== formData.value.confirmPassword) {
        errors.value.confirmPassword = "Пароли не совпадают";
        valid = false;
      }

      return valid;
    };

    const register = async () => {
      if (!validateForm()) {
        return;
      }

      try {
        isSubmitting.value = true;
        
        // Использование сервиса API для регистрации
        const response = await userApi.register({
          username: formData.value.username,
          email: formData.value.email,
          phone: formData.value.phone,
          password: formData.value.password
        });

        successMessage.value = "Регистрация успешно завершена!";
        // Очистка формы
        formData.value = {
          username: "",
          email: "",
          phone: "",
          password: "",
          confirmPassword: ""
        };
        
        // Перенаправление на страницу входа через 2 секунды
        setTimeout(() => {
          router.push('/login');
        }, 2000);
      } catch (error) {
        console.error("Ошибка при регистрации:", error);
        
        // Обработка ошибок от API-сервиса
        if (error.errors) {
          errors.value = { ...errors.value, ...error.errors };
        } else {
          // Общая ошибка
          alert(error.message || "Произошла ошибка при регистрации. Пожалуйста, попробуйте позже.");
          console.log(error);
        }
      } finally {
        isSubmitting.value = false;
      }
    };

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
      formData,
      register,
      errors,
      isSubmitting,
      successMessage
    };
  },
};
</script>
