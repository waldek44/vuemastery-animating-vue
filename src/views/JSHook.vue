<template>
<!--
  W JS mamy hooki które mówią przeglądarce na jakim etapie ma renderować:
  before-enter
  enter
  after-enter
  enter-cancelled
  before-leave
  leave
  after-leave
  leave-cancelled

  tych hooków możemy używać wewnątrz transition przypisując im nazwę metody którą mają wywołać
  Przypisując je z @ (@before-enter) i dodając nazwę metody mówimy vue 
  aby nie korzystało z domyślnych klas transition tylko z hooków JS, np:
  @before-enter="metodaBeforeEntera"
 -->
 <div>
    <button @click="isOpen = !isOpen">
      My Profile
    </button>
    <transition 
    @before-enter="BeforeEnter"
    @enter="enter"
    @leave="leave"
    :css=false
    >
    <div v-if="isOpen" class="drawer">
      <img src="../assets/avatar.png" alt="avatar" />
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    </transition>
  </div>
</template>

<script>
// instaluję globalnie biblitekę: npm i velocity-animate
// potem importuję ją tutaj
import Velocity from 'velocity-animate'
export default {
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    BeforeEnter(el)  {
      el.style.opacity = 0
      el.style.width = '0em'
    },

    enter(el, done) {
      Velocity(
        el,
        {opacity: 1, width: '12em'},
        {duration: 1000, easing: [60, 10], complete: done}
        )
    },

    leave(el, done) {
      Velocity(
        el,
        {opacity: 0, width: '0em'},
        {duration: 600, easing: 'easeInCubic', complete: done}
        )
    }

  }
}
</script>

<style scoped>
img {
  height: 2.5em;
  width: 2.5em;
  border-radius: 50%;
}

.drawer {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 12em;
  height: 20em;
  border-radius: 1%;
  background-color: #e0e0e0;
  box-shadow: 0.08em 0.03em 0.4em #ababab;
  padding-top: 0.7em;
}
.drawer div {
  height: 3.5em;
  width: 95%;
  margin-top: 0.6em;
  background-color: #f0f0f0;
  border: 0.02em solid #ababab;
  border-radius: 1%;
}
</style>
