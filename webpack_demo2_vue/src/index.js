//es6加载模块  
import Vue from 'vue' 
import VueRouter from 'vue-router' 
import msg1 from './views/msg1.vue'  
import msg2 from './views/msg2.vue'

import Page from './views/page.vue'
import Detail from './views/detail.vue'
Vue.use(VueRouter)


const routes = [
  { path: '/page', component:Page },
  { path: '/detail', component:Detail }
];

const router = new VueRouter({
  routes:routes
})
//创建一个vue实例,注意：不要绑在body上
/*const app = new Vue({
  router:router
}).$mount('#app');*/

new Vue({   
    el: '#app',
    components: { msg1,msg2 },
    router:router,
    data:{
        whats:'haha234'
    },
    methods:{
        showChildMsg:function(msg){
            this.whats = msg
        }
    }
})