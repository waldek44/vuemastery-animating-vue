import Vue from 'vue'
import VueRouter from 'vue-router'
import GSAP from '../views/GSAP.vue'
import SimpleTransition from '../views/SimpleTransition.vue'
import GroupTransition from '../views/GroupTransition.vue'
import JSHook from '../views/JSHook.vue'
import State from '../views/State.vue'
import GsapTimeline from '../views/GsapTimeline.vue'
import GsapNestedTimeline from '../views/GsapNestedTimeline.vue'


Vue.use(VueRouter)

  const routes = [

  {
    path: '/',
    name: 'SimpleTransition',
    component: SimpleTransition
  },

  {
    path: '/gsap',
    name: 'GSAP',
    component: GSAP
  },

  {
    path: '/group',
    name: 'Group',
    component: GroupTransition
  },
  {
    path: '/hooks',
    name: 'JSHook',
    component: JSHook
  },

  {
    path: '/gsap-state',
    name: 'State',
    component: State
  },

  {
    path: '/gsap-timeline',
    name: 'Timeline',
    component: GsapTimeline
  },

  {
    path: '/gsap-nested-timeline',
    name: 'GsapNestedTimeline',
    component: GsapNestedTimeline
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
