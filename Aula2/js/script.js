//Vamos criar uma janela de alerta para saudar os usuários
alert("Olá, seja bem vindo!");
/*
Vamos pedir ao usuário que digite o seu nome e depois mostraremos em uma
caixa de alerta.
Para executar a operação iremos guardar o nome do usuário em uma 
variável. Essa variável terá o nome de "nome"
*/
var nome = prompt("Digite o seu nome", "Escreva seu nome aqui");
alert(nome);

/*
Para apresentar o nome do usuário na página html
foi necessário criar algum elemento de "link|releção" 
da página html com o javascript.
Para esse vinculo usamos o comando document.getElementById
    - document refere-se ao body da página html
    - get(obter)Element(Elemento)By(por)Id(identificação)
    - inner(Interno, ou seja, dentro)HTML
Então pegamos um elemento que está body por seu id e 
inserimos um conteúdo em html, que neste caso é o nome 
do usuário
*/

document.getElementById("titulo").innerHTML = nome;
