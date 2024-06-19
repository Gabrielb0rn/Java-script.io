

var usuario = String(prompt('Digite seu nome de usuário: '));
var senha = String(prompt('Digite sua senha: '));

if (usuario === 'admin' && senha === '123') {
    alert('Login efetuado!');
} else {
    if (usuario !== 'admin' && senha !== '123') {
        alert('Nome de usuário e senha incorretos!');
    } else if (usuario !== 'admin') {
        alert('Nome de usuário incorreto!');
    } else {
        alert('Senha incorreta!');
    }
} 
