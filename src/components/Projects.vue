<template>
  <section class="bg-light" id="projects" style="padding-top: 70px !important">
    <div class="container py-5">
      <h1 class="text-center fw-bolder pjtTitle">My Projects</h1>

      <div class="row mt-3 px-3">
        <div
          class="col-sm-12 col-md-6 col-lg-6 p-2 justify-content-center align-items-center"
          v-for="pjt in projects"
          :key="pjt"
        >
          <div class="pjtBorder">
            <img
              :src="pjt.img"
              class="card-img-top"
              alt="..."
              style="height: 250px"
            />
            <hr class="" />
            <div class="card-body p-2">
              <h5 class="card-title">{{ pjt.title }}</h5>
              <div class="my-3">
                <span
                  class="tagColor me-2 px-2 py-1 rounded"
                  v-for="tag in pjt.tags"
                  :key="tag"
                  >{{ tag }}</span
                >
              </div>
              <p class="card-text">
                {{ pjt.description.slice(0, 43) + "..." }}
              </p>
            </div>
            <div class="card-footer text-center my-3">
              <hr />
              <button @click="isShow(pjt)" class="mx-4 btn btn-outline-primary">
                See More
              </button>
              <!-- <a :href="pjt.demo" class="mx-4  btn btn-outline-primary" target="_blank">Demo</a> -->
            </div>
          </div>
          <div class="" v-if="show">
            <DropModal
              @closeModal="closeModal"
              :projectData="clickedProjectData"
            ></DropModal>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import DropModal from "./Drop-modal";
import { ref } from "vue";
export default {
  components: { DropModal },
  setup(props) {
    let show = ref(false);
    let clickedProjectData = ref(null);

    let isShow = function (pjt) {
      show.value = true;
      document.body.style.overflow = "hidden";
      clickedProjectData.value = pjt; // Set the clicked project data
    };
    let closeModal = function () {
      show.value = false;
      document.body.style.overflow = "auto";
    };

    let projects = [
      {
        title: "Portfolio",
        description:
          "Created a personal portfolio to showcase projects, skills, and contact information. Designed with a clean, responsive layout to highlight key work and achievements. Built using Html, Bootstrap, and Vue js.",
        img: require("../assets/images/ptpf.png"),
        tags: ["html", "css", "bootstrap", "vue"],
        detail: ``,
        github: "https://github.com/Soemkyaw/smk_portfolio",
      },
      {
        title: "Restaurant Order System",
        description:
          "Created a web-based system for managing restaurant orders, with features for menu and table management, order tracking, and role-based access for waitstaff, kitchen staff, and admins. Built using PHP, Laravel, Bootstrap, and jQuery.",
        img: require("../assets/images/restaurant odr sys img1.png"),
        tags: ["html", "css", "tailwind", "jquery", "php", "laravel"],
        detail: `
Staff Management: Allowing admins to add and manage new staff members.
Menu Management: Admins can add, update, and remove menu items.
Category Management: Categorize menu items for easier navigation and selection.
Table Management: Track and assign tables to customers.
Order Status Management: Separate order status tracking for waitstaff and kitchen. Waitstaff can update the order status, while the kitchen has its own set of statuses for easier tracking.
Built with PHP, Laravel, Tailwind CSS for a responsive design, and jQuery for interactivity.`,
        github: "https://github.com/Soemkyaw/restaurant_system",
      },
      {
        title: "SwalSone Blog",
        description:
          "Built a blog system that allows users to create, edit, and delete posts. Logged-in users can comment on posts, while admins can manage and approve content. Developed using PHP, Laravel, Bootstrap, and jQuery for dynamic interaction.",
        img: require("../assets/images/blog img1.png"),
        tags: ["html", "css", "bootstrap", "jquery", "php", "laravel"],
        detail: `
User Registration and Login: Any user can create an account and log in.
Blog Posting: Only logged-in users can create blog posts.
Comment System: Logged-in users can add comments to posts.
Admin Controls: Admins can manage blog posts by approving or canceling them.
Built with PHP and Laravel for backend functionality, Bootstrap for responsive design, and jQuery for interactivity.
`,
      },
      {
        title: "pixel-postions",
        description:
          "Developed a web-based system for job listings, where employers can post jobs, and job seekers can apply. Includes admin features for managing users and job posts. Built using PHP, Laravel, and tailwind",
        img: require("../assets/images/job-platform.png"),
        tags: ["html", "css", "tailwind", "php", "laravel"],
        detail: `Created a web-based job hiring platform where employers can post job openings, specifying job details, requirements, and salary rates. Job seekers can browse job listings, view detailed job descriptions, and choose potential employers. The system allows users to view multiple job posts from the same employer and compare job listings based on different salary rates. Features include an easy-to-use interface for both employers and job seekers, dynamic job posting management, and intuitive filtering options for salary and job type. Built with PHP, Laravel, Bootstrap, and jQuery.`,
      },
      // {
      //   title: "Live Chat System",
      //   description:
      //     "Built a real-time live chat application using Vue.js for the front-end and Firebase for real-time messaging.",
      //   img: require("../assets/images/js.png"),
      //   tags: ["html", "css", "bootstrap", "vue", "firebase"],
      // },
    ];

    return { show, isShow, closeModal, projects, clickedProjectData };
  },
};
</script>

<style>
.pjtBorder {
  border: 2px solid #103783;
  border-radius: 5px;
  transition: all 0.4s ease-in-out;
}
.pjtBorder:hover {
  box-shadow: 3px 3px 3px #9bafd9;
}
.tagColor {
  font-size: 12px;
  background-color: #a8b5d08f;
  color: black;
}
.btnBorder {
  width: fit-content !important;
  margin: 0px 10px !important;
  color: #fbfbfb !important;
  background-color: #103683d7 !important;
  border: 1px solid #103683a5 !important;
  transition: all 1s ease-in-out;
}
.btnBorder:hover {
  color: #fbfbfb !important;
  background-color: #103783 !important;
}
.btn-outline-primary {
  border: 1px solid #103781 !important;
  color: #103781 !important;
}
.btn-outline-primary:hover {
  background-color: #103781 !important;
  color: white !important;
}
</style>