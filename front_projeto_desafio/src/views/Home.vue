<template>
    <div id="home">
        
        <h1>&#128218; Emprestimos de livros</h1>
        <br>
        <br>
        <button v-on:click="register()">Cadastrar usuário</button>
        <br>
        <br>
        <button v-on:click="registerBook()">Cadastrar Livro para usuário</button>
        <br>
        <br>
        <button v-on:click="loanBook()">Emprestar livros para usuários</button>
        <br>
        <br>
        <button v-on:click="returnedBook()">Devolver livro</button>
        <br>
        <br>
        
        <button v-on:click="showInfoUser()">Acessar informações de usuários cadastrados</button>

        <br>
        <br>
        
        <button v-on:click="showInfoBook()">Acessar livros cadastrados</button>
    </div>
</template>
<script>
export default
{
    methods:
    {
        showInfoBook: function()
        {
            window.location.href= "http://localhost:8080/livro-cadastrados";
        },
        returnedBook: function()
        {
            window.location.href= "http://localhost:8080/devolver";
        },
        loanBook: function()
        {
            window.location.href= "http://localhost:8080/emprestar-livro";
        },
        registerBook: function()
        {
            window.location.href= "http://localhost:8080/cadastro-livro"
        },
        register: function()
        {
            window.location.href= "http://localhost:8080/cadastro-usuario"
        },
        showInfoUser: function()
        {
            window.location.href= "http://localhost:8080/usuarios-cadastrados"
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
#home
{
    background-color:burlywood;
    width:50%;
    margin-left:25%;
    margin-right:25%;
    height:550px;
}
.input
{
    width:70%;
    margin-left:15%;
    margin-right:15%;
}
</style>