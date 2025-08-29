<template>
  <div id="resume">
    <div id="todo-card">
      <div class="container">
        <div class="alert alert-primary" role="alert">
          <p>
            Resume
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'resume',
}
</script>

<style scoped>
#resume {
  font-family: Arial, sans-serif;
  padding: 20px;
}
.container {
  max-width: 600px;
  margin: 0 auto;
}
.alert-primary {
  background-color: #e9f2ff;
  border-color: #cce5ff;
  color: #004085;
  padding: 1rem;
  border-radius: .25rem;
}
</style>