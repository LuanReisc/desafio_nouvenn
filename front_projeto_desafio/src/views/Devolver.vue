<template>
    <div id="devolver">
        <br>
        <h1>Devolver livro</h1>
        <br>
        <br>
        <br>
        <h2>Id do livro que deseja devolver:</h2>
        <input id="boook" class="input" type="text">
        <br>
        <br>
        <br>
        
        <button v-on:click="returnedBook()">Cadastrar</button>
        <p v-on:click="back()" style="font-size:30px;position:relative;top:10%;left:-40%;cursor:pointer">&#10229;</p>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    
    methods:
    {
        returnedBook: function()
        {
            var book = document.getElementById("book").value;
            
            axios.post('http://localhost:3000/loan/returned', {
                                id_book: book
                            })
                            .then((response) => {
                                alert("Livro devolvido");
                                console.log(response);
                            }, (error) => {
                            console.log(error);
            });
        },
    
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
#devolver
{
    background-color:burlywood;
    width:50%;
    margin-left:25%;
    margin-right:25%;
    height:500px;
}
.input
{
    height:30px;
    width:70%;
    margin-left:15%;
    margin-right:15%;
}
</style>
