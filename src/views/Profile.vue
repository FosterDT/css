<template>
  <div :class="['wrapper', { dark: isDarkTheme }]">
    <!-- Затемнение под темную тему -->
    <div v-if="isDarkTheme" class="dark-overlay"></div>

    <!-- Заголовок 123 -->
    <header class="header">
      <div class="header-left">
        <button @click="toggleMenu" class="menu-button">☰</button>
        <div v-if="showMenu" class="dropdown-menu">
          <button @click="navigateTo('/Home')">Главная</button>
          <button @click="navigateTo('/profile')">Профиль</button>
          <button @click="navigateTo('/catalog')">Каталог</button>
          <button v-if="!isAuthenticated" @click="navigateTo('/Registration')">Войти</button>
          <button v-else @click="logout">Выйти</button>
        </div>
      </div>
      <div class="header-center">
        <h1>Профиль пользователя</h1>
      </div>
      <div class="header-right">
        <label for="theme-slider" class="theme-label">
          Тёмная тема
          <input
            type="checkbox"
            id="theme-slider"
            class="theme-slider"
            v-model="isDarkTheme"
          />
        </label>
      </div>
    </header>

    <!-- Основное содержимое -->
    <main class="main-content" :class="{ darkbox: isDarkTheme }">
      <ChangePassword 
      :show="showPasswordModal" 
      @close="showPasswordModal = false" 
      @success="handlePasswordSuccess" />
      <div class="profile-container">
        <!-- Режим просмотра -->
        <div v-if="!editMode" class="profile-view">
          <div class="profile-header">
            <div class="avatar-container">
              <div class="avatar">
                <svg v-if="!userData.avatar" viewBox="0 0 64 64" class="avatar-icon" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <circle cx="32" cy="32" r="30" fill="#b38b4e"/>
                  <circle cx="32" cy="22" r="12" fill="#f5e5a4"/>
                  <rect x="16" y="38" width="32" height="18" rx="9" ry="9" fill="#f5e5a4"/>
                </svg>
                <img v-else :src="userData.avatar" alt="Аватар пользователя" class="avatar-image" />
              </div>
              <div class="user-role" :class="{ 'admin-role': userData.role_id === 1 }">
                {{ userData.role_id === 1 ? 'Администратор' : 'Пользователь' }}
              </div>
            </div>
            <div class="user-info">
              <h2>{{ userData.username }}</h2>
              <p class="info-item"><strong>Email:</strong> {{ userData.email }}</p>
              <p class="info-item"><strong>Полное имя:</strong> {{ userData.full_name || 'Не указано' }}</p>
              <p class="info-item"><strong>Телефон:</strong> {{ userData.phone || 'Не указан' }}</p>
              <p class="info-item"><strong>Адрес:</strong> {{ userData.address || 'Не указан' }}</p>
            </div>
          </div>
          <div class="profile-actions">
            <button @click="startEdit" class="edit-btn">Редактировать профиль</button>
            <button @click="showPasswordModal = true" class="password-btn">Изменить пароль</button>
          </div>
        </div>

        <!-- Режим редактирования -->
        <div v-else class="profile-edit">
          <div class="avatar-edit">
            <div class="avatar">
              <svg v-if="!previewAvatar" viewBox="0 0 64 64" class="avatar-icon" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <circle cx="32" cy="32" r="30" fill="#b38b4e"/>
                <circle cx="32" cy="22" r="12" fill="#f5e5a4"/>
                <rect x="16" y="38" width="32" height="18" rx="9" ry="9" fill="#f5e5a4"/>
              </svg>
              <img v-else :src="previewAvatar" alt="Аватар пользователя" class="avatar-image" />
            </div>
            <div class="avatar-buttons">
              <label for="avatar-upload" class="upload-btn">
                Выбрать аватар
                <input 
                  type="file" 
                  id="avatar-upload" 
                  accept="image/*" 
                  @change="handleAvatarChange" 
                  class="hidden-input"
                />
              </label>
              <button v-if="previewAvatar" @click="removeAvatar" class="remove-btn">Удалить</button>
            </div>
          </div>

          <div class="form-group">
            <label for="username">Имя пользователя</label>
            <input 
              type="text" 
              id="username" 
              v-model="editedUserData.username" 
              placeholder="Введите имя пользователя"
            />
          </div>

          <div class="form-group">
            <label for="email">Email</label>
            <input 
              type="email" 
              id="email" 
              v-model="editedUserData.email" 
              placeholder="Введите email"
            />
          </div>

          <div class="form-group">
            <label for="full_name">Полное имя</label>
            <input 
              type="text" 
              id="full_name" 
              v-model="editedUserData.full_name" 
              placeholder="Введите полное имя"
            />
          </div>

          <div class="form-group">
            <label for="phone">Телефон</label>
            <input 
              type="tel" 
              id="phone" 
              v-model="editedUserData.phone" 
              placeholder="Введите номер телефона"
            />
          </div>

          <div class="form-group">
            <label for="address">Адрес</label>
            <textarea 
              id="address" 
              v-model="editedUserData.address" 
              placeholder="Введите адрес"
              rows="3"
            ></textarea>
          </div>

          <div class="form-actions">
            <button @click="saveChanges" class="save-btn">Сохранить</button>
            <button @click="cancelEdit" class="cancel-btn">Отмена</button>
          </div>
        </div>

        <!-- Показ сообщений -->
        <div v-if="message" class="message-container" :class="{ 'success-message': messageType === 'success', 'error-message': messageType === 'error' }">
          {{ message }}
        </div>
      </div>
    </main>

    <!-- Подвал -->
    <footer class="footer">
      <p>© 2025 Магазин картриджей</p>
    </footer>
  </div>
</template>

<script>
import { ref, reactive, onMounted, watch } from "vue";
import { useRouter } from "vue-router";
import ChangePassword from '../components/ChangePassword.vue';
import "../style.css";

export default {
    components: {
    ChangePassword,
  },
  data() {
    return {
      showPasswordModal: false, // Управление видимостью модального окна
    };
  },
  methods: {
    handlePasswordSuccess() {
      alert('Пароль успешно изменён!');
    },
  },
  setup() {
    const router = useRouter();
    const isDarkTheme = ref(false);
    const showMenu = ref(false);
    const editMode = ref(false);
    const userData = reactive({
      id: null,
      username: '',
      email: '',
      role_id: 2,
      full_name: '',
      phone: '',
      address: '',
      avatar: null
    });
    const editedUserData = reactive({
      username: '',
      email: '',
      full_name: '',
      phone: '',
      address: '',
      avatar: null
    });
    const previewAvatar = ref(null);
    const avatarFile = ref(null);
    const message = ref('');
    const messageType = ref('');
    const isAuthenticated = ref(false);

    // Загрузка темы из localStorage
    onMounted(() => {
      const saved = localStorage.getItem("dark-theme");
      if (saved === "true") {
        isDarkTheme.value = true;
      }
      
      // Проверка авторизации
      const token = localStorage.getItem('token');
      if (token) {
        isAuthenticated.value = true;
        fetchUserData();
      } else {
        router.push('/Registration');
      }
    });

    // Сохраняем тему при изменении
    watch(isDarkTheme, (val) => {
      localStorage.setItem("dark-theme", val);
    });

    const toggleMenu = () => {
      showMenu.value = !showMenu.value;
    };

    // Переходы по маршрутам
    const navigateTo = (path) => {
      showMenu.value = false;
      router.push(path);
    };

    // Получение данных пользователя
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          throw new Error('Токен не найден');
        }

        const response = await fetch('http://localhost:3000/api/user/profile', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error('Ошибка получения данных');
        }

        const data = await response.json();
        Object.assign(userData, data);
      } catch (error) {
        console.error('Ошибка:', error);
        showMessage('Не удалось загрузить данные профиля', 'error');
      }
    };

    // Начало редактирования
    const startEdit = () => {
      Object.assign(editedUserData, userData);
      previewAvatar.value = userData.avatar;
      editMode.value = true;
    };

    // Отмена редактирования
    const cancelEdit = () => {
      editMode.value = false;
      previewAvatar.value = null;
      avatarFile.value = null;
    };

    // Обработка изменения аватара
    const handleAvatarChange = (event) => {
      const file = event.target.files[0];
      if (file) {
        avatarFile.value = file;
        const reader = new FileReader();
        reader.onload = (e) => {
          previewAvatar.value = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    };

    // Удаление аватара
    const removeAvatar = () => {
      previewAvatar.value = null;
      avatarFile.value = null;
      editedUserData.avatar = null;
    };

    // Сохранение изменений
    const saveChanges = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          throw new Error('Токен не найден');
        }

        // Создание FormData для отправки файла и данных
        const formData = new FormData();
        formData.append('username', editedUserData.username);
        formData.append('email', editedUserData.email);
        formData.append('full_name', editedUserData.full_name || '');
        formData.append('phone', editedUserData.phone || '');
        formData.append('address', editedUserData.address || '');
        
        if (avatarFile.value) {
          formData.append('avatar', avatarFile.value);
        } else if (editedUserData.avatar === null) {
          formData.append('removeAvatar', 'true');
        }

        const response = await fetch('http://localhost:3000/api/user/update', {
          method: 'PUT',
          headers: {
            'Authorization': `Bearer ${token}`
          },
          body: formData
        });

        if (!response.ok) {
          throw new Error('Ошибка обновления данных');
        }

        const data = await response.json();
        Object.assign(userData, data);
        showMessage('Профиль успешно обновлен', 'success');
        editMode.value = false;
      } catch (error) {
        console.error('Ошибка:', error);
        showMessage('Не удалось обновить профиль', 'error');
      }
    };

    // Показ сообщения
    const showMessage = (text, type = 'success') => {
      message.value = text;
      messageType.value = type;
      setTimeout(() => {
        message.value = '';
      }, 5000);
    };

    // Выход из системы
    const logout = () => {
      localStorage.removeItem('token');
      isAuthenticated.value = false;
      router.push('/Registration');
    };

    return {
      isDarkTheme,
      showMenu,
      toggleMenu,
      navigateTo,
      userData,
      editedUserData,
      editMode,
      startEdit,
      cancelEdit,
      saveChanges,
      handleAvatarChange,
      previewAvatar,
      removeAvatar,
      message,
      messageType,
      isAuthenticated,
      logout
    };
  }
};
</script>