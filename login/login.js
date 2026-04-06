const email = document.getElementById('email');
const senha = document.getElementById('senha');
const btn = document.getElementById('btn');
const emailMsg = document.getElementById('emailMsg');
const senhaMsg = document.getElementById('senhaMsg');

function validarEmail() {
  if (email.value.includes('@')) {
    emailMsg.textContent = ''; 
    return true;
  } else {
    emailMsg.textContent = 'Email precisa conter @';
    emailMsg.className = 'msg invalid';
    return false;
  }
}

function validarSenha() {
  if (senha.value.length >= 8) {
    senhaMsg.textContent = '';
    return true;
  } else {
    senhaMsg.textContent = 'Senha deve ter no mínimo 8 caracteres';
    senhaMsg.className = 'msg invalid';
    return false;
  }
}

function validarForm() {
  const emailOk = email.value.includes('@');
  const senhaOk = senha.value.length >= 8;

  if (emailOk && senhaOk) {
    btn.disabled = false;
    btn.classList.add('active');
  } else {
    btn.disabled = true;
    btn.classList.remove('active');
  }
}

email.addEventListener('input', () => {
    validarEmail();
    validarForm();
});

senha.addEventListener('input', () => {
    validarSenha();
    validarForm();
});

btn.addEventListener('click', () => {
  alert('Login realizado com sucesso!');
});