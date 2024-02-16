<template>
  <!-- <div> -->
    <Hero></Hero>
    <About></About>
    <Skills></Skills>
    <Projects></Projects>
    <Contact></Contact>
    <Footer></Footer>
  <!-- </div> -->
</template>

<script>
import Footer from '../components/Footer'
import Contact from '../components/Contact'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Hero from '../components/Hero'
import About from '../components/About.vue'

export default {
  name: 'HomeView',
  components: {
    Footer,
    Contact,
    Projects,
    Skills,
    Hero,
    About,
  }
}
</script>
