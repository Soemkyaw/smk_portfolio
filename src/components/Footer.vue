<template>
  <section class="footer">
    <div class="container  justify-content-between py-3">
      <div class="row pt-2">
        <div class="col-xl-6 col-lg-6 col-md-6">
          <div class="text-center text-color text-md-start">© 2024 Copyright: SoemKyaw</div>
        </div>
        <div class="col-xl-6 col-lg-6 col-md-6 align-items-center">
          <div class="social-media-group text-center">
          <a
            href="https://www.facebook.com/profile.php?id=100025515164823"
            target="_blank"
            class="social-media-app"
          >
            <i class="fa-brands fa-facebook-f fs-5"></i>
          </a>
          <a href="" class="social-media-app">
            <i class="fa-brands fa-instagram fs-5 "></i>
          </a>
          <a
            href="https://github.com/Soemkyaw"
            target="_blank"
            class="social-media-app"
          >
            <i class="fa-brands fa-github fs-5 "></i>
          </a>
          <a href="tel:+959958158065" class="social-media-app">
            <i class="fa-solid fa-phone fs-5 "></i>
          </a>
        </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.text-color{
  color: #103781;
}
.footer {
  background-color: #9bafd9;
}
.social-media-app{
  margin: 0px 5px;
}
.social-media-app i {
  padding: 5px 10px;
  border: 1px solid #103781;
  color: #103781;
  border-radius: 5px;
}
.social-media-app i:hover{
  background-color: #103781;
  color: white;
}
</style>