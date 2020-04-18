<template>
  <div  id="one">
    <transition
        appear
        @before-enter="beforeEnter"
        @enter="enter"
        :css="false"
    >
        <div class="card"></div>
    </transition>
  </div>
</template>

<script>
import gsap from 'gsap'

export default {
  methods: {

      beforeEnter(el) {
        el.style.opacity = 0
        el.style.transform = 'scale(0,0)'
      },
      enter(el, done) {
          gsap.to(el, {
            duration: 1,
            opacity: 1,
            scale: 1,
            ease: 'bounce.out',
            onComplete: done
          })
        }
      },

     
}
</script>

<style scoped>
#one {
    display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.card {
  height: 6.5em;
  width: 6.5em;
  border-radius: 1%;
  background-color: #16c0b0;
  box-shadow: 0.08em 0.03em 0.4em #ababab;
  padding-top: 1em;
  margin-top: 0.5em;
  margin-right: 0.5em;
}
</style>