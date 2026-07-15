<template>
  <div class="about-page">

    <div class="hero">
      <h1>About Recipe Recommendations App</h1>
      <p>
        Discover delicious recipes anytime and make your cooking easier.
      </p>
    </div>

    <div class="content">

      <h2>Project Overview</h2>

      <p>
        The Recipe Recommendations App is a single-page application developed
        using Vue 3 and Vite. It helps users explore different recipes from
        multiple categories such as Pakistani, Chinese, Italian, Indian,
        Mexican, American, and Desserts. Users can easily browse recipes,
        view detailed cooking instructions, and save their favourite recipes.
      </p>

      <h2>Main Features</h2>

      <ul>
        <li>Browse recipes from different categories.</li>
        <li>View complete recipe details.</li>
        <li>Save recipes to My Favorites.</li>
        <li>Fast navigation using Vue Router.</li>
        <li>Reusable Vue Components.</li>
        <li>Parent to Child communication using Props.</li>
        <li>Child to Parent communication using Emits.</li>
      </ul>

      <h2>Technologies Used</h2>

      <ul>
        <li>Vue 3</li>
        <li>Vite</li>
        <li>Vue Router</li>
        <li>JavaScript (ES6)</li>
        <li>HTML5</li>
        <li>CSS3</li>
      </ul>

      <h2>Purpose</h2>

      <p>
        The main purpose of this project is to provide users with an easy and
        attractive platform where they can quickly discover recipes and enjoy
        a better cooking experience through a simple and responsive interface.
      </p>

    </div>

  </div>
</template>

<script setup>
</script>

<style scoped>

.hero{
    background:#d95b00;
    color:white;
    text-align:center;
    padding:50px 20px;
}

.content{
    max-width:900px;
    margin:auto;
    padding:40px 30px;
}

h2{
    color:#d95b00;
    margin-top:30px;
}

ul{
    padding-left:20px;
}

li{
    margin:15px 0;
    line-height:1.6;
}

p{
    line-height:1.8;
    margin-bottom: 20px;
}

</style>