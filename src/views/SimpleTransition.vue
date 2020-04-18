<template>
<!--TRANSITION COMPONENT to taki wrapper który oplata elementy lub komponenty do animacji, 
dostarcza on wbudowane klasy:
WEJŚCIE W ANIMACJĘ -> v-enter (od) | v-enter-to (do) | v-enter-active (długość wejścia)
WYJŚCIE Z ANIMACJI -> v-leave (od) | v-leave-to (do) | v-leave-active (długość wyjścia)
-->
<div class="home">

  <button @click="toggleModal"> Open</button>
  <!--
    dodaję transition o nazwie fade - dobrą praktyką jest nadawanie transition nazw określających co robią
    do nazwy tej mogę się odwołać stylując transition
   -->
   <transition name="fade">
      <div v-if="isOpen" class="modal">
        <button @click="toggleModal"> Close</button>
      </div>
   </transition>
</div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false
    }
  },

  methods: {
    toggleModal() {
      this.isOpen = !this.isOpen
    }
  }
  
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: 1.5s ease-out;
}

.fade-leave-to {
  opacity: 0;
}

.fade-leave-active {
  transition: 0.7s ease-out;
}
</style>