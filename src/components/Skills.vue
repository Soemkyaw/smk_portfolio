<template>
  <section id="skill" style="padding-top: 70px !important;">
    <div class="container py-5">
        <h1 class="text-center fw-bolder">Abilities I Possess</h1>

        <!-- frontend development skills  -->
        <div class="my-5">
            <p class="text-center  ">Front-End Develoment Skills</p>
            <div class="rounded ">
                <div class="feSkills mx-auto rounded"></div>
            </div>
            <div class="row mt-3 justify-content-center">
                <div v-for="skill in frontend_skills" :key="skill.id" class="my-2 col-xl-2 col-lg-3 col-md-4 col-sm-6 col  d-flex justify-content-center align-items-center">
                    <div class="px-3 py-2 bg-dark skill-logo rounded">
                        <div class=" p-3 bg-light skillCard rounded rounded-circle">
                            <img v-bind:src="skill.imgSrc" style="height: 100px;width: 100px;">
                        </div>
                        <p class="text-center text-light pt-2">{{ skill.name.toUpperCase() }}</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- backend development skills  -->
        <div class="backendSkills my-5">
            <p class="text-center ">Back-End Develoment Skills</p>
            <div class="rounded ">
                <div class="feSkills mx-auto rounded"></div>
            </div>
            <div class="row mt-3">
                <div class=" col-md-6 offset-md-3">
                    <div class=" d-flex">
                      <div v-for="skill in backend_skills" :key="skill.id" class="m-2 col d-flex justify-content-center align-items-center">
                        <div class="px-3 py-2 bg-dark skill-logo rounded">
                            <div class=" p-3 bg-light skillCard rounded rounded-circle">
                                <img v-bind:src="skill.imgSrc" style="height: 100px;width: 100px;">
                            </div>
                            <p class="text-center text-light pt-2">{{ skill.name.toUpperCase() }}</p>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue';
export default {
    setup(props) {
        let frontend_skills = ref([
            {name : 'html',imgSrc: require('../assets/images/html.png'),id: 1},
            {name : 'css',imgSrc: require('../assets/images/css.png'),id: 2},
            {name : 'jquery',imgSrc: require('../assets/images/bootstrap.png'),id: 3},
            {name : 'javascript',imgSrc: require('../assets/images/js.png'),id: 4},
            {name : 'Vuejs',imgSrc: require('../assets/images/vue.png'),id: 5},
        ])
        let backend_skills = ref([
            {name : 'php',imgSrc: require('../assets/images/php.png'),id: 1},
            {name : 'laravel',imgSrc: require('../assets/images/laravel.png'),id: 2},
        ])

        return {frontend_skills,backend_skills}
    }
};
</script>

<style>
.skillCard{
    width: fit-content;
}
.feSkills{
    width: 6rem;
    height: 4px;
    background-color: #103783;
}
.skill-logo{
    box-shadow: -10px 10px 2px #103783;
    transition: all 0.5s ease;
}
.skill-logo:hover{
    transform: translateY(10px) translateX(-10px);
    box-shadow: -2px 2px 1px #103783;
}
</style>
