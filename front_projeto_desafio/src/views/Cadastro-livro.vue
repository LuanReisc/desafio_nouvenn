<template>
    <div id="cadastro">
        <br>
        <h1>Cadastro livro</h1>
        <br>
        <br>
        <br>
        <h2>Nome do livro:</h2>
        <input id="name" class="input" type="text">
        <br>
        <br>
        <br>
        <h2>Id do usuário dono do livro:</h2>
        <input id="owner" class="input" type="text">
        <br>
        <br>
        <br>
        <button v-on:click="registerUser()">Cadastrar</button>
        <p v-on:click="back()" style="font-size:30px;position:relative;top:5%;left:-40%;cursor:pointer">&#10229;</p>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    
    methods:
    {
        registerUser: function()
        {
            var name = document.getElementById("name").value;
            var owner = document.getElementById("owner").value;
            axios.post('http://localhost:3000/book', {
                                name: name,
                                id_user_owner: owner
                            })
                            .then((response) => {
                                alert("cadastro concluido");
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
#cadastro
{
    background-color:burlywood;
    width:50%;
    margin-left:25%;
    margin-right:25%;
    height:600px;
}
.input
{
    height:30px;
    width:70%;
    margin-left:15%;
    margin-right:15%;
}
</style>