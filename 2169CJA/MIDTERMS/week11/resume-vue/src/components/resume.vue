<template>
  <div id="resume-card">
    <div class="header-section">
      <h1>Crizzy Jade Arita</h1>
      <p>
        <strong>Phone:</strong> +639475676960 |
        <strong>Email:</strong> aritacrizzyjade@gmail.com
      </p>
    </div>

    <div class="section">
      <h2>Objective</h2>
      <p>A highly motivated BSIT student with a strong passion for software development and a solid foundation in programming. Eager to apply technical skills in a collaborative environment to contribute to innovative projects.</p>
    </div>

    <div class="section">
      <h2>Skills</h2>
      <ul class="skills-list">
        <li><strong>Programming Languages:</strong> HTML, CSS, JavaScript, Vue.js, Python</li>
        <li><strong>Tools & Platforms:</strong> Git, GitHub, Visual Studio Code</li>
        <li><strong>Database:</strong> SQL</li>
        <li><strong>Soft Skills:</strong> Problem-Solving, Team Collaboration, Adaptability, Communication</li>
      </ul>
    </div>

    <div class="section">
      <h2>Education</h2>
      <div class="education-item">
        <p><strong>Holy Angel University</strong></p>
        <p>College of Information and Communications Technology</p>
        <p>Bachelor of Science in Information Technology (2023 - Present)</p>
        <ul>
          <li>Consistent Dean's Lister</li>
        </ul>
      </div>
      <div class="education-item">
        <p><strong>Colegio de Sebastian</strong></p>
        <p>Senior High School (2021 - 2023)</p>
        <ul>
          <li>Consistent Honor Student</li>
        </ul>
      </div>
      <div class="education-item">
        <p><strong>Pampanga High School</strong></p>
        <p>Junior High School (2017 - 2020)</p>
        <ul>
          <li>Consistent Honor Student</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Resume',
};
</script>

<style scoped>
#resume-card {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  max-width: 800px;
  margin: 20px auto;
  padding: 30px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.header-section {
  text-align: center;
  margin-bottom: 25px;
  border-bottom: 2px solid #ddd;
  padding-bottom: 15px;
}

.header-section h1 {
  font-size: 2.5em;
  margin: 0;
  color: #333;
}

.header-section p {
  margin: 5px 0 0;
  color: #555;
}

.section {
  margin-bottom: 20px;
}

.section h2 {
  font-size: 1.5em;
  color: #007bff;
  border-bottom: 2px solid #007bff;
  padding-bottom: 5px;
  margin-bottom: 15px;
}

.section p {
  margin: 0 0 5px;
  color: #444;
  line-height: 1.5;
}

.education-item {
  margin-bottom: 15px;
}

ul {
  list-style-type: none;
  padding-left: 0;
  margin-top: 5px;
  color: #666;
}

li {
  margin-bottom: 5px;
  padding-left: 1.5em;
  text-indent: -1.5em;
}

.skills-list li:before {
  content: "• ";
  color: #007bff;
  font-weight: bold;
}
</style>