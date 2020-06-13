import VueRouter from 'vue-router'
import Vue from "vue"
import Foo from '../view/foo.vue'
import Bar from '../view/bar.vue'

Vue.use(VueRouter);
const router = new VueRouter({
    routes: [
        { path: '/', redirect: '/foo'},
        { path: '/foo', component: Foo},
        { path: '/bar', component: Bar}
    ]
})

export default router
