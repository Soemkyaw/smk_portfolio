<template>
  <section class="bg-light" id="projects" style="padding-top: 70px !important;">
    <div class="container py-5 ">
        <h1 class="text-center fw-bolder pjtTitle">My Projects</h1>

        <div class="row mt-3 px-3">
          <div class="col-sm-12 col-md-6 col-lg-4 p-2 justify-content-center align-items-center " v-for="pjt in projects" :key="pjt">
              <div class=" pjtBorder">
                <img :src="pjt.img" class="card-img-top" alt="..." style="height: 250px;">
                <hr class="">
                <div class="card-body p-2">
                  <h5 class="card-title">{{ pjt.title }}</h5>
                  <div class="my-3">
                    <span class="tagColor me-2 px-3 py-1 rounded" v-for="tag in pjt.tags" :key="tag">{{ tag }}</span>
                  </div>
                  <p class="card-text">{{ pjt.description }}</p>
                </div>
                <div class="card-footer text-center my-3 ">
                  <hr>
                  <button @click="isShow(pjt)" class=" mx-4  btn btn-outline-primary">See More</button>
                  <a :href="pjt.demo" class="mx-4  btn btn-outline-primary" target="_blank">Demo</a>
                </div>
              </div>
              <div class="" v-if="show" >
                <DropModal  @closeModal="closeModal" :projectData="clickedProjectData"></DropModal>
              </div>
            </div>
        </div>
    </div>
  </section>
</template>

<script>
import DropModal from './Drop-modal'
import {ref} from 'vue';
export default {
  components: { DropModal },
  setup(props) {
    let show = ref(false)
    let clickedProjectData = ref(null);

    let isShow = function(pjt){
      show.value = true;
      document.body.style.overflow = "hidden"
      clickedProjectData.value = pjt; // Set the clicked project data
    }
    let closeModal = function(){
      show.value = false;
      document.body.style.overflow = "auto"
    }

    let projects = [
      {
        title: 'Portfolio',
        description: 'This is description testing',
        img: require('../assets/images/portfolio.png'),
        tags: ['html','css','bootstrap','vue'],
        demo: "https://smk-portfolio-theta.vercel.app/"
      },
      {
        title: 'Portfolio',
        description: 'This is description testing',
        img: require('../assets/images/css.png'),
        tags: ['html','css','bootstrap','vue'],
        demo: "https://smk-portfolio-theta.vercel.app/"

      }
      ,{
        title: 'Portfolio',
        description: 'This is description testing',
        img: require('../assets/images/html.png'),
        tags: ['html','css','bootstrap','vue']
      }
      ,{
        title: 'Portfolio',
        description: 'This is description testing',
        img: require('../assets/images/php.png'),
        tags: ['html','css','bootstrap','vue']
      }
      ,{
        title: 'Portfolio',
        description: 'This is description testing',
        img: require('../assets/images/js.png'),
        tags: ['html','css','bootstrap','vue']
      },
      {
        title: 'Portfolio',
        description: 'This is description testing',
        img: require('../assets/images/laravel.png'),
        tags: ['html','css','bootstrap','vue']
      }
    ]

    return {show,isShow,closeModal,projects,clickedProjectData}
  }
};
</script>

<style>
.pjtBorder{
  border: 2px solid #103783;
  border-radius: 5px;
  transition: all 0.4s ease-in-out;
}
.pjtBorder:hover{
  box-shadow: 3px 3px 3px #9bafd9;
}
.tagColor{
font-size: 12px;
  background-color: #a8b5d08f;
  color: black;
}
.btnBorder{
  width: fit-content !important;
  margin: 0px 10px !important;
  color: #FBFBFB !important;
  background-color: #103683d7 !important;
  border: 1px solid #103683a5 !important;
  transition: all 1s ease-in-out;
}
.btnBorder:hover{
  color: #FBFBFB !important;
  background-color: #103783 !important;
}
.btn-outline-primary{
    border: 1px solid #103781 !important;
    color: #103781 !important;
  }
  .btn-outline-primary:hover{
    background-color: #103781!important;
    color: white !important;;
  }
</style>