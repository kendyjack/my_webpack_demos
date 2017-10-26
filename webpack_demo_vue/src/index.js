//es6加载模块  
import Vue from 'vue'  
import msg1 from './views/msg1.vue'  
import msg2 from './views/msg2.vue'
  
//创建一个vue实例,注意：不要绑在body上
new Vue({   
    el: '#app',
    components: { msg1,msg2 },
    data:{
        whats:'haha234'
    },
    methods:{
        showChildMsg:function(msg){
            this.whats = msg
        }
    }
})

$('.boxtest').append(require('html-loader!../src/tpl/page.html'));
