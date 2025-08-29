<script setup>
import Resume from './components/resume.vue'
</script>

<template>
  <div class="page-container">
    <div class="image-wrapper">
      <h1 class="main-resume-title">Resume</h1>
      <img alt="Profile Picture" class="logo" src="./assets/kween.svg" width="125" height="125" />
    </div>
    
    <div class="resume-wrapper">
      <Resume />
    </div>
  </div>
</template>

<style scoped>
.page-container {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 40px;
  max-width: 900px;
  margin: 40px auto;
  padding: 20px;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

.image-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;
  border-right: 1px solid #ddd;
}

.main-resume-title {
  text-align: center;
  font-size: 2.5em;
  color: #007bff;
  margin-bottom: 20px;
}

.logo {
  border-radius: 50%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.resume-wrapper {
  padding: 20px;
}
</style>