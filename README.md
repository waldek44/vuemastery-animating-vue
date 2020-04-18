# animacje-vue

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

## 1 Transitions

> TRANSITION COMPONENT to taki wrapper który oplata elementy lub komponenty do animacji, dostarcza on wbudowane klasy:


> WEJŚCIE W ANIMACJĘ -> v-enter (od) | v-enter-to (do) | v-enter-active (długość wejścia)


> WYJŚCIE Z ANIMACJI -> v-leave (od) | v-leave-to (do) | v-leave-active (długość wyjścia)

1. dodaję aniację, czyli transition o nazwie fade - dobrą praktyką jest nadawanie transition nazw określających co te transiton robią (u mnie fade) do nazwy tej mogę się odwołać stylując transition

```
   <transition name="fade">
      <div v-if="isOpen" class="modal">
        <button @click="toggleModal"> Close</button>
      </div>
   </transition>
```
2. Tworzę style wejścia i wyjścia elementu używając domyślnych klas transition:

```
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
```

## 2 Page Transitions
DODAWANIE ANIMACJI PRZEJŚCIA POMIĘDY STRONAMI

1. W App.vue oplatam transition wokół elementu ```<router-view/>``` i dodaję w style transition wejścia i wyjścia (są one globalne - ponieważ są w App.vue - mogę więc ich używać też w innych miejscach odwołując się do nazwy)
    
## 3 Group Transitions

 1. zmieniam element `ul` na `transition-group` ponieważ `transition-group` domyślnie wyświetla `span` i może być renderowany jako domyślny element wrapper podając `tag="nazwa elementu"` . Polecenie `appear` dodaje transition dopiero przy załadowaniu komponentu (nadpisując domyślną transition przy załadowaniu strony)
    

## 4 JS Hooks & Velocity

>  W JS mamy hooki które mówią przeglądarce na jakim etapie ma renderować:
  
  before-enter

  enter

  after-enter

  enter-cancelled

  before-leave

  leave

  after-leave

  leave-cancelled


  tych hooków możemy używać wewnątrz transition przypisując im nazwę metody którą mają wywołać.
  Przypisując je z @ (@before-enter) i dodając nazwę metody mówimy vue aby nie korzystało z domyślnych klas transition tylko z hooków JS, np: `@before-enter="metodaBeforeEntera"`

  Pracuję z biblioteką animacji JS o nazwievelocity
  
  1. Dlatego instaluję globalnie biblitekę velocity: 
  `npm i velocity-animate`

  2. potem importuję ją wewnątrz `script`


## 5 GSAP - GreenSock Animation Platform

> https://greensock.com/gsap/

1. Instaluję platformę `npm i gsap`
2. Importuję gsap w `script`

## 5 GSAP-State
Aby tworzyć "state-based animations" używam `tweenings`
tween jest skrótem od between i określa odkąd dokoąd odbywa się animacja
