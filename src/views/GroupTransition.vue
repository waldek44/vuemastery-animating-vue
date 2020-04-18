<template>
  <div>
    <input type="text" v-model="newContact" placeholder="Wpisuj się" />
    <button @click="addContact">Wyślij</button>
    <button @click="sortContact">Sortuj</button>
    <!-- 
      zmieniam ul na transition-group
      ponieważ transition-group domyślnie wyświetla span 
      i może być renderowany jako domyślny element wrapper podając tag="nazwa elementu"
    -->
    <!-- 
      appear - dodaje transition przy załadowaniu komponentu (nadpisując domyślną transition przy załadowaniu strony)
    -->
    <transition-group name="slide-up" tag="ul" appear>
      <li v-for="contact in contacts" :key="contact">
        {{ contact }}
      </li>
    </transition-group>
  </div>

</template>

<script>
export default {
  data() {
    return {
      newContact: '',
      contacts: ['Anna Rek', 'Natalia Rek', 'Alice Vunderlind']
    }
  },
  methods: {
    addContact() {
      this.contacts.push(this.newContact)
      this.newContact = ''
    },
    sortContact() {
      this.contacts.sort()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
/*** slide-up ***/
.slide-up-enter {
  transform: translateY(20px);
  opacity: 0;
}

.slide-up-enter-active {
  transition: all 0.5s ease;
}

/* move - pozwala zmieniać zachowanie 1 elementu w grupie*/
.slide-up-move {
  transition: transform 1.1s ease-in;
}

</style>