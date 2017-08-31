<template>
    <div class="box">
        <div>{{ txt }}</div>
        <button class="btn" @click="clickMe">点我</button>
        <p>23{{whats}}</p>
        <button class="btn" @click="sentMsg">传值给父组件</button>
        <button class="btn" @click="sentMsg2">向兄弟组件传值</button>
        <p>{{getxiongdi}}</p>
        <button class="btn" @click="sentType2">向兄弟组件传值方法2:通过vuex</button>
        <img src="../images/picture2.jpg">
        <div class="bgtest bgtest2"></div>
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
            },
            sentType2:function(){
                //this.$emit("childChange","username",this.username)
                this.$store.state.user_name1 = this.txt;
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

<!--  scoped 样式仅限当前组件使用 -->
<style scoped>
p{
    color:blue;
    font-size:30px;
}
.btn{
    padding:10px;
    font-size:14px;
}
.bgtest{
    width:200px;
    height:200px;
}
.bgtest{
    background:url(../images/picture2.jpg) no-repeat center top;
}
</style>
