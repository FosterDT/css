import axios from 'axios';

// Создаем экземпляр axios с настройками
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000/api', // Используем import.meta.env
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});

// Перехватчик запросов для добавления токена авторизации
api.interceptors.request.use(
  config => {
    const token = localStorage.getItem('auth_token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// Перехватчик ответов для обработки ошибок
api.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    // Обработка ошибок аутентификации
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('auth_token');
    }
    
    // Формирование стандартного ответа с ошибками для форм
    if (error.response && error.response.data) {
      return Promise.reject(error.response.data);
    }
    
    return Promise.reject({
      message: 'Сетевая ошибка, попробуйте позже',
      errors: {}
    });
  }
);

// Функции API для работы с пользователями
export const userApi = {
  register(userData) {
    return api.post('/register', userData);
  },
  
  login(credentials) {
    return api.post('/Login', credentials);
  },
  
  getProfile() {
    return api.get('/Profile');
  },
  
  updateProfile(userData) {
    return api.put('/Profile', userData);
  }
};

export default api;
