<template>
  <div class="container" v-if="projectData">
    <div class=" drop">
      <div class="modal-tag rounded">
        <div class="modal-content">
          <div class=" p-2">
            <div class=" d-flex align-items-center justify-content-between">
              <h5>{{  projectData.title }}</h5>
              <i class="fa-solid fa-xmark fs-3" @click="closeModal" style="cursor: pointer;"></i>
            </div>
            <hr>
            <div class="my-3">
                <span class="tagColor me-2 px-3 py-1 rounded" v-for="tag in projectData.tags" :key="tag">{{ tag }}</span>
            </div>
            <p>{{  projectData.description }}</p>
            <hr>
          </div>
          <img :src="projectData.img" alt="">
          <p class=" my-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat mollitia esse aliquid nostrum, vel, eligendi culpa odit, enim amet quas iusto saepe repellendus quia doloribus unde numquam atque ad id necessitatibus. Doloremque tempore distinctio magnam alias debitis, nesciunt illo ipsam, fuga doloribus saepe quo non incidunt. Veniam, possimus nulla. Dolor dignissimos excepturi repellat magnam! Explicabo molestiae consectetur vero cupiditate corrupti repellat alias placeat soluta. Autem, a assumenda sit ratione cumque quo, nulla et iure non provident corporis libero consequatur consequuntur, accusamus sint illo sequi. Laborum dolorem ut sed, architecto excepturi tempora, sapiente ratione mollitia harum vero, iure reprehenderit molestias. Delectus?</p>
        </div>
        <hr>
        <div class=" d-flex justify-content-around align-items-center">
            <button  class="mb-2 btn btn-outline-primary">Github</button>
            <button class="mb-2 btn btn-outline-primary" @click="closeModal">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
  // import {ref} from "vue"
  export default {
    props: ['projectData'],
    setup(props,context) {

      console.log(props.projectData);
      let closeModal = function(){
        context.emit('closeModal')
      }
      return {closeModal}
    }
  };
  </script>
  
  <style >
  .btn-outline-primary{
    border: 1px solid #103781 !important;
    color: #103781 !important;
  }
  .btn-outline-primary:hover{
    background-color: #103781!important;
    color: white !important;;
  }

  .drop {
    position: fixed;
    z-index: 99999;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.211);
    width: 100%;
    height: 100%;
  }
  .modal-tag {
    max-width: 600px;
    scroll-margin-bottom: 0;
    margin: 150px auto;
    background-color: #fff;
  }
  
  .modal-tag img {
    width: -webkit-fill-available;
  }
  .modal-content{
    height: 500px;
    padding: 10px;
    overflow-y: scroll;
  }
/* Customize the right scrollbar */
  .modal-content::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }

  .modal-content::-webkit-scrollbar-thumb {
    background-color: #103781;
    border-radius: 10px;
    height: 20px;
  }

  .modal-content::-webkit-scrollbar-track {
    background-color:  rgba(88, 80, 80, 0.439);
    
  }
  @media (max-width: 500px) {
    .modal-tag {
      margin: 100px auto;
    }
  }
  </style>