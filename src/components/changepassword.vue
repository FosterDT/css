<template>
  <div v-if="show" class="modal-overlay">
    <div class="modal">
      <h2>Изменение пароля</h2>
      
      <form @submit.prevent="submitForm">
        <div>
          <label for="current-password">Текущий пароль</label>
          <input 
            id="current-password" 
            type="password" 
            v-model="currentPassword" 
            required 
          />
        </div>
        
        <div>
          <label for="new-password">Новый пароль</label>
          <input 
            id="new-password" 
            type="password" 
            v-model="newPassword" 
            required 
          />
        </div>
        
        <div>
          <label for="confirm-password">Подтвердите пароль</label>
          <input 
            id="confirm-password" 
            type="password" 
            v-model="confirmPassword" 
            required 
          />
        </div>
        
        <div class="buttons">
          <button type="submit">Сохранить</button>
          <button type="button" @click="closeModal">Отмена</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    };
  },
  methods: {
    closeModal() {
      this.$emit('close'); // сообщаем родителю, что модальное окно нужно закрыть
    },
    submitForm() {
      if (this.newPassword !== this.confirmPassword) {
        alert('Новый пароль и подтверждение не совпадают!');
        return;
      }

      // Здесь может быть отправка данных на сервер
      console.log('Текущий пароль:', this.currentPassword);
      console.log('Новый пароль:', this.newPassword);

      this.$emit('success'); // сообщаем родителю об успешном изменении
      this.closeModal(); // закрываем модальное окно
    },
  },
};
</script>

<style>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal {
  background: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 400px;
  width: 100%;
}
.buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
</style>