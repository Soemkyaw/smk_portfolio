<template>
  <section id="contact">
    <div class="container p-3">
      <h1 class="text-center fw-bolder pjtTitle">Contact</h1>
      <hr />

      <form @submit.prevent="formSubmitHandle">
        <input v-model="username" type="text" class="bg-light" placeholder="name" />
        <input
          v-model="email"
          type="email"
          class="bg-light"
          placeholder="email"
        />
        <textarea
          v-model="password"
          cols="30"
          rows="10"
          class="bg-light"
          placeholder="message"
        ></textarea>
        <button class="btn btn-outline-primary mt-3">Send</button>
      </form>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";

export default {
  setup(props) {
    let username = ref("");
    let email = ref("");
        let password = ref("");
        let errorStatus = ref(false);
        let errorMsg = ref([]);


        let formSubmitHandle = () => {
            Swal.fire({
                  icon: "error",
                  title: "Oops...",
                  text: "Something went wrong!",
          });
            
    };

    return { username, email, password, errorStatus, errorMsg, formSubmitHandle };
  },
};
</script>

<style scoped>
hr {
  display: block;
  max-width: 600px;
  margin: 0 auto;
}
form {
  max-width: 600px;
  margin: 20px auto;
}
form input,
textarea {
  width: 100%;
  outline: none;
  border: none;
  padding: 10px;
  border-radius: 5px;
  margin: 10px 0;
}
button {
  width: 100%;
}
</style>