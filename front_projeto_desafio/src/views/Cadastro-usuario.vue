<template>
    <div id="cadastro">
        <br>
        <h1>Cadastro usuário</h1>
        <br>
        <br>
        <br>
        <h2>Nome:</h2>
        <input id="name" class="input" type="text">
        <br>
        <br>
        <br>
        <h2>Senha:</h2>
        <input id="password" class="input" type="password">
        <br>
        <br>
        <br>
       
        <button v-on:click="registerUser()">Cadastrar</button>
        <p v-on:click="back()" style="font-size:30px;position:relative;top:2%;left:-40%;cursor:pointer">&#10229;</p> 
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
            var password = document.getElementById("password").value;
            axios.post('http://localhost:3000/user', {
                                name: name,
                                password:password
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