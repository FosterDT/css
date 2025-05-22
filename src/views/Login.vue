<template>
  <div class="login-container">
    <form @submit.prevent="handleLogin" class="login-form">
      <h2>Вход</h2>

      <label for="email">Email</label>
      <input
        id="email"
        type="email"
        v-model="email"
        placeholder="Введите email"
        required
      />

      <label for="password">Пароль</label>
      <input
        id="password"
        type="password"
        v-model="password"
        placeholder="Введите пароль"
        required
      />

      <button type="submit">Войти</button>

      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </form>
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