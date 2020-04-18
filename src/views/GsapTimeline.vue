<template>
  <div>
    <img class="runner first" src="../assets/runner.png" alt="runner" />
    <img class="runner second" src="../assets/runner.png" alt="runner" />
    <img class="runner third" src="../assets/runner.png" alt="runner" />
  </div>
</template>

<script>
import gsap from 'gsap'

export default {
  mounted() {
    // timeline 
    // domyślnie animacje występują tak, że każda startuje po zakończeniu poprzedniej
    // aby zmienić ten czas ustanawiamy '-=.75' lub '<' aby startowała równo z poprzednią
    // mogę dodać powtarzanie gsap.timeline(repeat: 3) lub nieskończoność gsap.timeline(repeat: -1)
    let tl = gsap.timeline()
    tl.to('.first', {x: 700, duration: 2.4, ease: 'expo.out'})
    tl.to('.second', {x: 600, duration: 1, ease: 'expo.out'}, '-=1.65')
    tl.to('.third', {x: 900, duration: 3, ease: 'expo.out'}, '-=2.25')
  }
}
</script>

<style scoped>
.runner {
  display: block;
  height: 5em;
  width: 5em;
  margin-top: 1.5em;
}
</style>
