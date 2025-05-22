<template>
  <div class="wrapper">
    <div class="dark-overlay"></div>
    
    <!-- Header -->
    <header class="header">
      <div class="header-center">
        <h1>Добро пожаловать</h1>
        <p>Войдите в свой аккаунт</p>
      </div>
    </header>
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
    <!-- Main Content -->
    <main class="main-content">
      <div class="form-container">
        <div class="card-title">
          <div class="welcome-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          Вход в систему
        </div>

        <form @submit.prevent="handleLogin" class="form">
          <div class="form-group">
            <label for="email">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" style="width: 16px; height: 16px; margin-right: 8px; display: inline-block;">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
              </svg>
              Email адрес
            </label>
            <input
              id="email"
              type="email"
              v-model="email"
              placeholder="Введите ваш email"
              required
              :class="{ 'input-error': emailError }"
            />
            <span v-if="emailError" class="error-message">{{ emailError }}</span>
          </div>

          <div class="form-group">
            <label for="password">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" style="width: 16px; height: 16px; margin-right: 8px; display: inline-block;">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              Пароль
            </label>
            <input
              id="password"
              type="password"
              v-model="password"
              placeholder="Введите ваш пароль"
              required
              :class="{ 'input-error': passwordError }"
            />
            <span v-if="passwordError" class="error-message">{{ passwordError }}</span>
          </div>

          <div class="form-group" style="margin-top: 1.5rem;">
            <button 
              type="submit" 
              class="register-btn"
              :disabled="isLoading"
            >
              <span v-if="isLoading">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" style="width: 20px; height: 20px; margin-right: 8px; display: inline-block; animation: spin 1s linear infinite;">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Вход...
              </span>
              <span v-else>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" style="width: 20px; height: 20px; margin-right: 8px; display: inline-block;">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                </svg>
                Войти в систему
              </span>
            </button>
          </div>

          <div v-if="errorMessage" class="error-message" style="text-align: center; margin-top: 1rem; padding: 0.75rem; background-color: rgba(231, 76, 60, 0.1); border: 1px solid #e74c3c; border-radius: 6px;">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" style="width: 20px; height: 20px; margin-right: 8px; display: inline-block;">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.664-.833-2.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
            {{ errorMessage }}
          </div>

          <div v-if="successMessage" class="success-message">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" style="width: 20px; height: 20px; margin-right: 8px; display: inline-block;">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {{ successMessage }}
          </div>
        </form>

        <div style="text-align: center; margin-top: 2rem; padding-top: 1.5rem; border-top: 1px solid rgba(179, 139, 78, 0.3);">
          <p style="margin: 0; font-size: 0.9rem; opacity: 0.8;">
            Нет аккаунта? 
            <a href="#" @click.prevent="$emit('switch-to-register')" style="color: #b38b4e; text-decoration: none; font-weight: 500; transition: all 0.3s ease;">
              Зарегистрироваться
            </a>
          </p>
        </div>
      </div>
    </main>

    <!-- Footer -->
    <footer class="footer">
      <div class="copyright">
        <p>&copy; 2024 Ваша компания. Все права защищены.</p>
      </div>
    </footer>
  </div>
</template>

<script>

import "../style.css";
export default {
  data() {
    return {
      email: '',
      password: '',
      errorMessage: '',
    };
  },
  methods: {
    async handleLogin() {
      this.errorMessage = '';

      // Здесь пример запроса на сервер, подставь свой URL API
      try {
        const response = await fetch('http://localhost:3000/api/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: this.email,
            password: this.password,
          }),
        });

        const data = await response.json();

        if (response.ok) {
         localStorage.setItem('token', data.token);
        this.$router.push('/profile');
        } else {
          this.errorMessage = data.message || 'Ошибка при входе';
        }
      } catch (err) {
        this.errorMessage = 'Сервер недоступен';
      }
    },
  },
};
</script>