<template>
  <div>
    <Hero></Hero>
    <About></About>
    <Skills></Skills>
    <Projects></Projects>
    <Contact></Contact>
  </div>
</template>

<script>
import Contact from '../components/Contact'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Hero from '../components/Hero'
import About from '../components/About.vue'

export default {
  name: 'HomeView',
  components: {
    Contact,
    Navbar,
    Projects,
    Skills,
    Hero,
    About,
  }
}
</script>
