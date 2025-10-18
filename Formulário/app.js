const form = document.getElementById("cadastroForm");

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const nome = document.getElementById('nome').value.trim();
  const numero = document.getElementById('numero').value.trim();
  const email = document.getElementById('email').value.trim();
  const senha = document.getElementById('senha').value.trim();

  if (!nome || !numero || !email || !senha) {
    alert("Preencha todos os campos!");
    return;
  }

  if (senha.length < 4) {
    alert("A senha precisa ter pelo menos 4 caracteres.");
    return;
  }

  // salva o nome no localStorage
  localStorage.setItem("usuarioNome", nome);

  // redireciona para a tela de sucesso
  window.location.href = "sucesso.html";
});
