<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class=" container-fluid">
      <a href="#hero" class="logo me-5">
        <span>SoemKyaw<span>.</span></span>
      </a>
      <button
        @click="isExpanded=!isExpanded"
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse mt-2" :class="{ 'bg-blur' : isExpanded }" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a href="#about" class="nav-link">About</a>
          </li>
          <li class="nav-item">
            <a href="#skill" class="nav-link">Skills</a>
          </li>
          <li class="nav-item">
            <a href="#projects" class="nav-link">Projects</a>
          </li>
          <li class="nav-item">
            <a href="#contact" class="nav-link">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref } from "vue";
export default {
  setup(props) {
    let isExpanded = ref(false);

    return {isExpanded}
  },
};
</script>

<style scoped>
.logo {
  text-decoration: none;
  font-size: 34px;
  font-weight: bold;
  letter-spacing: 2px;
  transition: all 0.5s;
}
.logo span {
  color: #103783;
  text-shadow: 2px 3px 3px #9bafd9;
}
.logo:hover {
  letter-spacing: 0px;
}
.nav-link {
  display: block;
  display: block;
  padding: 0.5rem 1rem;
}

ul li a {
  margin-right: 10px;
  text-decoration: none;
  color: #343a40aa;
  font-weight: 600;
  transition: all 0.5;
}
ul li a:hover {
  color: #103783;
}
nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  border-bottom: 1px solid #dbe4ee;
  padding: 10px;
  height: 70px;
}
.bg-blur {
  backdrop-filter: blur(2px);
  background-color: rgba(255, 255, 255, 0.8); /* Optional for a light frosted effect */
  transition: backdrop-filter 0.3s ease, background-color 0.3s ease;
}
</style>
