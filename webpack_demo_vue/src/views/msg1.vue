<template>
    <div class="box">
        <p>112{{ msg }}</p>
        <p>{{setTxt}}</p>
        <p>{{xiongdi}}</p>
        <button class="btn" @click="sentTo">我也给你传个值看看</button>
    </div>
</template>

<script>
import bus from '../../src/eventBus'
export default{   
        data(){   
            return {  
                msg: 'Hello Jason',
                xiongdi:'兄弟原来的值'
            }  
        },
        methods:{
            sentTo:function(){
                bus.$emit('listento2','你也被我变了，哈哈');
            }
        },
        computed:{
            setTxt:function(){
                return 'haha11';
            }
        },
        mounted(){
            let self = this;
            bus.$on('listento',function(msg){
                self.xiongdi = msg;
            })
        }
    }  
</script>

<style>
p{
    color:#f30;
    font-size:20px;
}
</style>
