<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container">
        <a href="#hero" class="logo me-5">
          <span>SoemKyaw<span>.</span></span>
        </a>
        <!-- </transition> -->
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <!-- <transition name="fe" appear> -->

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
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
        <!-- </transition> -->
    </div>
  </nav>
</template>

<script>
export default {};
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

</style>
