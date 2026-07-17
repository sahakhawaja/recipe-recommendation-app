

<template>
  <div style="padding: 20px; text-align: center;">
    <h2 style="color: #2c3e50;">Your Favorite Recipes</h2>
    <p style="color: #7f8c8d;">Any recipes you bookmark will display inside this dashboard tab.</p>
    
    <div style="margin-top: 30px; padding: 50px 20px; border: 2px dashed #bdc3c7; border-radius: 8px; background: #fafafa; max-width: 500px; margin-left: auto; margin-right: auto;">
      <p style="color: #95a5a6; font-size: 16px; margin-bottom: 20px;">No favorite cooking sheets mapped yet.</p>
      <button @click="$router.push('/')" style="background: #42b883; color: white; border: none; padding: 10px 25px; border-radius: 4px; cursor: pointer; font-weight: bold; transition: 0.2s;">
        Return to Recommendations
      </button>
    </div>
  </div>
</template>