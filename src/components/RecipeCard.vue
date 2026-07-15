<script setup>
defineProps(['id', 'name', 'category', 'time', 'difficulty', 'desc']);
defineEmits(['view-details']);
</script>

<template>
  <div class="recipe-card">
    <span class="category-badge">{{ category }}</span>
    <h3>{{ name }}</h3>
    <p>{{ desc }}</p>
    <div class="meta-grid">
      <div>⏱ {{ time }}</div>
      <div>⚡ {{ difficulty }}</div>
    </div>
    <button @click="$emit('view-details', id)">View Full Recipe Details</button>
  </div>
</template>



<style scoped>
.recipe-card { border: 1px solid #e0e0e0; padding: 20px; border-radius: 8px; background: #fff; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
.category-badge { background: #edf2f7; padding: 4px 8px; font-size: 12px; font-weight: bold; border-radius: 4px; }
.meta-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin: 15px 0; font-size: 13px; }
button { background: #e67e22; color: white; border: none; padding: 10px; width: 100%; cursor: pointer; border-radius: 4px; font-weight: bold; }
</style>