<template>
    <div id="books">
        <h1>Livros cadastrados</h1>
        <br>
        <br>
        <br>  
        <p>{{info}}</p>
        <p v-on:click="back()" style="font-size:30px;position:relative;top:40%;left:-40%;cursor:pointer">&#10229;</p>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data()
    {
        return{
          info: []
        }
        
    },
    mounted()
    {
        
        axios
            .get('http://localhost:3000/book')
            .then((response) => 
            {
                    this.info = response.data.response;
            },
            (error) =>
            {
                console.log(error);
            });
    },
    methods:
    {
        back:function()
        {
            window.location.href ="http://localhost:8080/";
        }        
    }
}
</script>
<style scoped>
button
{
    border-radius:20px;
    width:200px;
    height:50px;
    cursor:pointer;
}
#books
{
    background-color:burlywood;
    width:50%;
    margin-left:25%;
    margin-right:25%;
    height:500px;
}
.input
{
    width:70%;
    margin-left:15%;
    margin-right:15%;
}
</style>
