<template>
  <div class="container  py-5" id="hero" style="padding-top: 70px !important;">
    <div class="row mt-3">
      <div class="col-md-6 text-center">
        <transition name="hero-img" appear>
          <img src="../assets/profile.jpg" class="pfImage rounded-circle shadow" />
        </transition>
      </div>
      <transition name="hero-para" appear>
        <div class="col-md-6 my-auto mx-auto text-center">
          <h4 class=" fw-bold">Hello There! I'm,</h4>
          <h1 class="hero-title fw-bold py-2">Soe Moe Kyaw</h1>
          <h4 class="">Junior Web Developer</h4>
          <button class="dBtn btn my-4">
            <a href="../assets/files/Soe Moe Kyaw -  Resume.pdf" download class=" text-decoration-none text-primary">Download CV</a>
          </button>
          <!-- <button class=""> -->
            <!-- <a href="../assets/files/Soe Moe Kyaw -  Resume.pdf" download class="btn btn-outline-primary py-2 my-4">Download CV</a> -->
          <!-- </button> -->
          <div class="social-media-group d-flex justify-content-between" >
            <a href="https://www.facebook.com/profile.php?id=100025515164823" target="_blank" class="social-media-app">
              <i class="fa-brands fa-square-facebook fs-3 text-primary"></i>
            </a>
            <a href="" class="social-media-app">
              <i class="fa-brands fa-instagram fs-3 text-danger"></i>
            </a>
            <a href="https://github.com/Soemkyaw" target="_blank" class="social-media-app">
              <i class="fa-brands fa-github fs-3 text-dark"></i>
            </a>
            <a href="tel:+959958158065" class="social-media-app">
              <i class="fa-solid fa-phone fs-3 text-success"></i>
            </a>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { ref } from "vue"
export default {
  props: {},
  setup(props) {
    
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.text-primary{
  color: #103783 !important;
}
.pfImage {
  height: 380px;
  width: 350px;
  padding: 20px;
  border: 1px solid #103783;
}
.hero-title{
  color: #103783;
  text-shadow: 2px 3px 3px #9bafd9;
}
.hero-intro {
  text-align: justify;
  color: #555;
}
.dBtn {
  width: fit-content;
  position: relative;
  height: 3.5em;
  border: 3px ridge #103783;
  outline: none;
  background-color: transparent;
  color: #555;
  transition: 1s;
  border-radius: 0.5em;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  margin: 20px 0;
}

.dBtn::after {
  content: "";
  position: absolute;
  top: -10px;
  left: 3%;
  width: 95%;
  height: 40%;
  background-color: white;
  transition: 0.5s;
  transform-origin: center;
}

.dBtn::before {
  content: "";
  transform-origin: center;
  position: absolute;
  top: 80%;
  left: 3%;
  width: 95%;
  height: 40%;
  background-color: white;
  transition: 0.5s;
}

.dBtn:hover::before, .dBtn:hover::after {
  transform: scale(0)
}

.dBtn:hover {
  color: black;
  box-shadow: inset 0px 0px 25px #103783;
}

.social-media-group{
  margin: 0px auto;
  width: 50%;
}
.social-media-group a {
  margin: 0px 10px;
}

.social-media-app{
  transition: all 0.5s ease;
}
.social-media-app:hover{
  transform: scale(0.9);
}

@media only screen and (max-width: 580px){
    .pfImage {
    -o-object-fit: cover;
    object-fit: cover;
    border-radius: 50%;
    height: 250px;
    width: 250px;
    margin-top: 10px;
    margin-bottom: 10px;
    border: 2px solid #cdcdcd;
  }

}
.hero-img-enter-from{
  opacity: 0;
  transform: translateX(-50px);
}
.hero-img-enter-active{
  transition: all 2s ease;
}
.hero-para-enter-from{
  opacity: 0;
  transform: translateX(50px);
}
.hero-para-enter-active{
  transition: all 2s ease;
}

</style>
