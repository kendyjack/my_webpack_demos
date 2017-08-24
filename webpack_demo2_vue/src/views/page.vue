<template>
    <div class="box">
        
        <p>Here: {{txt}}</p>
    </div>
</template>

<script>
export default{   
        data(){   
            return {  
                txt: 'I am page'
            }  
        }  
    }  
</script>

<style scoped>
p{
    color:#f30;
    font-size:34px;
}
</style>
