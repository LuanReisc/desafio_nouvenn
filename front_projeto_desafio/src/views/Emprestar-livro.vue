<template>
    <div id="loan">
        <br>
        <h1>Emprestar Livro</h1>
        <br>
        <br>
        <br>
        <h2>Id do livro:</h2>
        <input id="book" class="input" type="text">
        <br>
        <br>
        <br>
        <h2>Id do usuário que vai emprestar o livro:</h2>
        <input id="user" class="input" type="text">
        <br>
        <br>
        <br>
        <h2>Data do emprestimo:</h2>
        <input id="date" class="input" type="date">
        <br>
        <br>
        <br>
       
        <button v-on:click="registerUser()">Concluir</button>
        <p v-on:click="back()" style="font-size:30px;position:relative;top:10%;left:-40%;cursor:pointer">&#10229;</p> 
    </div>
</template>
<script>
import axios from 'axios';
export default {
    
    methods:
    {
        registerUser: function()
        {
            var book = document.getElementById("book").value;
            var user = document.getElementById("user").value;
            var date = document.getElementById("date").value;
            axios.post('http://localhost:3000/loan', {
                                id_user_receiver: user,
                                id_book: book,
                                date_loan: date,
                                returned: 0
                            })
                            .then((response) => {
                                alert("Emprestimo concluido");
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
#loan
{
    background-color:burlywood;
    width:50%;
    margin-left:25%;
    margin-right:25%;
    height:800px;
}
.input
{
    height:30px;
    width:70%;
    margin-left:15%;
    margin-right:15%;
}
</style>