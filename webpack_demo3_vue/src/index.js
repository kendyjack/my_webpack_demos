//es6加载模块  
import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import msg1 from './views/msg1.vue'
import msg2 from './views/msg2.vue'

import Page from './views/page.vue'
import Detail from './views/detail.vue'
Vue.use(VueRouter)
Vue.use(Vuex)


const routes = [
    { path: '/page', component: Page },
    { path: '/detail', component: Detail }
];

const router = new VueRouter({
    routes: routes
})

const vuex_store = new Vuex.Store({
    state: {
        user_name1: ""
    },
    mutations: {
        showSomeThing(state) {
            //alert(state.user_name1);
        }
    }
})



/*const app = new Vue({
  router:router
}).$mount('#app');*/

/*当Vue实例没有el属性时，则该实例尚没有挂载到某个dom中；
假如需要延迟挂载，可以在之后手动调用vm.$mount()方法来挂载。*/

//创建一个vue实例,注意：不要绑在body上
new Vue({
    el: '#app',
    components: { msg1, msg2 },
    router: router,
    data: {
        whats: 'haha234'
    },
    store: vuex_store,
    methods: {
        showChildMsg: function(msg) {
            this.whats = msg
        }
    }
})