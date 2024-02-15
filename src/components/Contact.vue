<template>
  <section id="contact">
    <div class="container  p-3">
        <h1 class="text-center fw-bolder pjtTitle">Contact </h1>
        <hr>

        <form action="">
            <input type="text" class="bg-light" placeholder="name">
            <input type="text" class="bg-light" placeholder="email">
            <textarea  cols="30" rows="10" class="bg-light" placeholder="message"></textarea>
            <button class="btn btn-outline-primary">Send</button>
        </form>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style scoped>
    hr{
        display: block;
        max-width: 600px;
        margin: 0 auto;
    }
    form{
        max-width: 600px;
        margin: 20px auto;
    }
    form input, textarea{
        width: 100%;
        outline: none;
        border: none;
        padding: 10px;
        border-radius: 5px;
        margin: 10px 0;
    }
    button{
        width: 100%;
    }
</style>