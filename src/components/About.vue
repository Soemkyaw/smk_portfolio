<template>
  <section
    class="about py-5 bg-light"
    id="about"
    style="padding-top: 70px !important"
  >
    <div class="container">
      <div class="text-center">
        <span
          class="skills px-5 fs-3"
          style="font-weight: 900; letter-spacing: 1px"
          >About ME
        </span>
      </div>
      <transition name="aboutC" appear>
        <div class="aboutMe mt-5" id="aboutMe">
          <div class="row align-items-center">
            <div class="col-md-6">
              <h5 class="ms-3">
                Hi! there, my name is Soe Mow Kyaw.
              </h5>
              <p>
                Enthusiastic and self-driven Junior Web Developer with a strong
                foundation in PHP, Laravel, JavaScript, and front-end frameworks
                like Bootstrap and Tailwind CSS. Proven ability to build
                dynamic, responsive web applications through personal study
                projects. Eager to apply my skills in a professional environment
                and continue growing as a developer.
              </p>
            </div>
            <div class="col-md-6 text-center">
              <img
                src="https://media.giphy.com/media/wLNuW1tCKRiPmDV5Y4/giphy.gif"
                alt=""
                style="height: 150px; width: 200px"
              />
            </div>
          </div>
        </div>
      </transition>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.skills {
  font-size: 20px;
  border-bottom: 1px solid #aaa;
}
.aboutC-enter-from {
  opacity: 0;
  transform: translateY(50px);
}
.aboutC-enter-to {
  opacity: 1;
  transform: translateY(0px);
}
.aboutC-enter-active {
  transition: all 2s ease;
}
</style>
