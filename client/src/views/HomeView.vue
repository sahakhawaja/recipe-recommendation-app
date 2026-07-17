<script setup>
import { ref, computed, onMounted } from 'vue';
import api from '../api';
import RecipeCard from '../components/RecipeCard.vue';

const searchQuery = ref('');
const selectedCategory = ref('All');
const recipes = ref([]);

onMounted(async () => {
  try {
    const response = await api.get("/api/recipes");

    recipes.value = response.data.map(recipe => ({
      id: recipe._id,
      name: recipe.title,
      category: recipe.category,
      time: recipe.cookingTime + " Mins",
      difficulty: "Medium",
      desc: recipe.instructions
    }));

  } catch (error) {
    console.error("Error fetching recipes:", error);
  }
});

const filteredRecipes = computed(() => {
  return recipes.value.filter(r => (selectedCategory.value === 'All' || r.category === selectedCategory.value) && r.name.toLowerCase().includes(searchQuery.value.toLowerCase()));
});
</script>


<template>
  <div class="home">
    <div class="hero"><h1>Recipes Recommendations App</h1>
    <p>Explore premium recipes tailored for your healthy & easy daily cooking layout</p></div>
    
    <div class="controls">
      <input v-model="searchQuery" placeholder="🔍 Search recipes..." class="search-input" />
      <div class="categories">
        <button v-for="cat in ['All', 'Pakistani', 'Italian', 'Chinese', 'Dessert']" 
                :key="cat" @click="selectedCategory = cat" :class="{active: selectedCategory === cat}">
          {{ cat }}
        </button>
      </div>
    </div>

    <div class="recipe-grid">
      <RecipeCard v-for="recipe in filteredRecipes" :key="recipe.id" v-bind="recipe" @view-details="id => $router.push(`/recipe/${id}`)"/>
    </div>
  </div>
</template>


<style scoped>
.hero { background: #d35400; padding: 40px; color: white; text-align: center; }
.controls { padding: 20px; display: flex; flex-direction: column; gap: 15px; }
.search-input { padding: 10px; border: 1px solid #ccc; }
.categories { display: flex; gap: 10px; }
.categories button { padding: 8px 16px; cursor: pointer; }
.categories button.active { background: #d35400; color: white; }
.recipe-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; padding: 20px; }
</style>