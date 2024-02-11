<template>
  <div>
    <Hero></Hero>
    <About></About>
    <Skills></Skills>
    <Projects></Projects>
  </div>
</template>

<script>
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Hero from '../components/Hero'
import About from '../components/About.vue'

export default {
  name: 'HomeView',
  components: {
    Projects,
    Skills,
    Hero,
    About,
  }
}
</script>
