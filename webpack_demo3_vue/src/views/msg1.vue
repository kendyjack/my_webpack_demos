<template>
    <div class="box">
        <p>11235{{ msg }}</p>
        <p>{{setTxt}}</p>
        <p>{{xiongdi}}</p>
        <button class="btn" @click="sentTo">我也给你传个值看看</button>
        <button class="btn" @click="getSome">点击获取传值方法2得到的东西</button>
        <p>{{user_name2}}</p>
        <p>{{get2}}</p>
    </div>
</template>

<script>
import bus from '../../src/eventBus'
export default{   
        data(){   
            return {  
                msg: 'Hello Jason',
                xiongdi:'兄弟原来的值',
                user_name2:'a'
            }  
        },
        methods:{
            sentTo:function(){
                bus.$emit('listento2','你也被我变了，哈哈');
            },
            getSome:function(){
                //this.$store.commit("showSomeThing");
                this.user_name2 = this.$store.state.user_name1;
            }
        },
        computed:{
            setTxt:function(){
                return 'haha11';
            },
            get2:function(){
                //this.user_name2 = this.$store.state.user_name1;
                return this.$store.state.user_name1;
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

<!--  scoped 样式仅限当前组件使用 -->
<style scoped>
p{
    color:#f30;
    font-size:20px;
}
</style>
