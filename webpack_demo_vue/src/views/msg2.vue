<template>
    <div class="box">
        <div>{{ txt }}</div>
        <button class="btn" @click="clickMe">点我</button>
        <p>23{{whats}}</p>
        <button class="btn" @click="sentMsg">传值给父组件</button>
        <button class="btn" @click="sentMsg2">向兄弟组件传值</button>
        <p>{{getxiongdi}}</p>
    </div>
</template>

<script>
import bus from '../../src/eventBus'
export default{ 
        props: [
　　　　　　'whats'
　　　　],  
        data(){   
            return {
                txt:'这是组件2的开始，是一段描述呀呀呀',
                getxiongdi:''
            }
        },
        methods:{
            clickMe:function(){
                alert('你点了我呀！');
            },
            sentMsg:function(){
                this.$emit('listen','about YourName');
            },
            sentMsg2:function(){
                bus.$emit('listento','兄弟的值被改变了呀');
            }
        },
        mounted(){
            let self = this;
            bus.$on('listento2',function(msg){
                self.getxiongdi = msg;
            })
        }
    }
</script>

<style>
p{
    color:blue;
    font-size:30px;
}
.btn{
    padding:10px;
    font-size:14px;
}
</style>
