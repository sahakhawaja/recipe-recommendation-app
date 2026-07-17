import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RecipeDetailsView from '../views/RecipeDetailsView.vue'
import FavoritesView from '../views/FavoritesView.vue'
import ContactView from '../views/ContactView.vue'
import AboutView from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'Home', component: HomeView },
    { path: '/recipe/:id', name: 'RecipeDetails', component: RecipeDetailsView, props: true },
    { path: '/favorites', name: 'Favorites', component: FavoritesView },
    { path: '/contact', name: 'Contact', component: ContactView },
    { path: '/about', name: 'About', component: AboutView }
  ]
})
export default router