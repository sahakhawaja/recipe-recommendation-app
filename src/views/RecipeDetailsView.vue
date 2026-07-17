<script setup>
defineProps({ id: String });
</script>

<template>
  <div class="details-container">
    <button class="back-btn" @click="$router.push('/')">← Back to Dashboard</button>

    <div class="details-card">
      <h2>Recipe Detailed Specifications</h2>
      <p class="subtitle">Displaying details for ID: {{ id }}</p>

      <div class="attributes">
        <h3>Technical Attributes</h3>
        <ul>
          <li><strong>Execution Period:</strong> 45-60 Minutes</li>
          <li><strong>Complexity:</strong> Intermediate</li>
          <li><strong>Nutritional Matrix:</strong> High Protein / Balanced Carbs</li>
          <li><strong>Data Handling:</strong> Strict Prop Mapping</li>
        </ul>
      </div>

      <div class="validation-box">
        <strong>State Validation:</strong> Routing mechanism is successfully mounted.
      </div>
    </div>
  </div>
</template>


<style scoped>
.details-container { max-width: 700px; margin: 20px auto; padding: 20px; }
.back-btn { background: #7f8c8d; color: white; border: none; padding: 10px 20px; cursor: pointer; margin-bottom: 20px; }
.details-card { border: 1px solid #e0e0e0; padding: 30px; border-radius: 8px; background: #fff; }
.subtitle { color: #e67e22; margin-bottom: 20px; }
.attributes { margin-top: 25px; border-left: 4px solid #e67e22; padding-left: 15px; }
.validation-box { margin-top: 30px; padding: 15px; background: #fff3e0; border-left: 5px solid #e67e22; font-size: 14px; }
</style>