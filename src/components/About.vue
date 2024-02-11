<template>
  <section class="about py-5 bg-light" id="about" >
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
              <h5 class="ms-3">Hi! there, my name is Soe Mow Kyaw. I am 23 year old.</h5>
              <p>
                I am a hard working person. I am self motivated and have a can
                do attitude. I graduated Bachelor of Computer Science (B.C.Sc)
                from Computer University of PangLong (UCSPL) in 2023. I studied
                the skills and knowledge of HTML, Css, Tailwind, Bootstrap,
                Javascript, ReactJs, PHP and Laravel.
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
