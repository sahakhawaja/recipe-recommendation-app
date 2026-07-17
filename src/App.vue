<template>
  <nav class="navbar">
    <div class="logo">Recipes Recommendations App</div>
    <div class="nav-links">
    
      <router-link to="/">Dashboard</router-link>
      <router-link to="/favorites">My Favorites</router-link>
      <router-link to="/contact">Contact</router-link>
      <router-link to="/about">About</router-link>
    </div>
  </nav>
  <router-view />
</template>

<style>
.navbar { background-color: #d35400; padding: 15px 30px; display: flex; justify-content: space-between; align-items: center; }
.logo { color: white; font-weight: bold; font-size: 20px; }
.nav-links a { color: white; margin-left: 20px; text-decoration: none; }
</style>
