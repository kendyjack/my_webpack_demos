<template>
    <div class="box">
        
        <p>show is: {{txt}}</p>
    </div>
</template>

<script>
export default{   
        data(){   
            return {  
                txt: 'I am detail'
            }  
        }  
    }  
</script>

<style scoped>
p{
    color:blue;
    font-size:20px;
}
</style>
