<template>
  <div class="about">
    <h1>This is an about page... Are you sure??</h1>
    <TheWelcome/>
  </div>
</template>

<script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>

<style scope>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
