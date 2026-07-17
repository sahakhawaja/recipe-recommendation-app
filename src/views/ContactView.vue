<script setup>
import { ref } from 'vue';

const formData = ref({
  fullName: '',
  email: '',
  phone: '',
  address: '',
  description: ''
});
</script>
<template>
  <div class="contact-page">
    <h1 class="heading">Contact Us</h1>
    
    <div class="contact-card">


      <form @submit.prevent="handleSubmit" class="form-section">
        <input type="text" v-model="formData.fullName" placeholder="Full Name" required />
        <input type="email" v-model="formData.email" placeholder="Email Address" required />
        <input type="tel" v-model="formData.phone" placeholder="Phone Number" required />
        <input type="text" v-model="formData.address" placeholder="Address" required />
        <textarea v-model="formData.description" placeholder="Description/Message" rows="4" required></textarea>
        
        <button type="submit" class="submit-btn">Submit </button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.contact-page { max-width: 700px; margin: 40px auto; padding: 20px; font-family: sans-serif; }
.heading { text-align: center; color: #333; margin-bottom: 30px; }

.contact-card { 
  background: #fff; padding: 30px; border-radius: 8px; 
  box-shadow: 0 4px 10px rgba(0,0,0,0.05); /* Light shadow for clean look */
  border: 1px solid #eee;
}

.info-section { margin-bottom: 25px; border-bottom: 1px solid #eee; padding-bottom: 15px; }

.form-section { display: flex; flex-direction: column; gap: 12px; }
input, textarea { 
  padding: 10px; border: 1px solid #ddd; border-radius: 4px; font-size: 14px; 
}
.submit-btn { 
  padding: 12px; background-color: #333; color: white; border: none; 
  border-radius: 4px; cursor: pointer; transition: 0.3s;
}
.submit-btn:hover { background-color: #555; }
</style>