/* ==================================================
   VACINA KIDS
   Sistema de Acompanhamento Vacinal Infantil
================================================== */

document.addEventListener("DOMContentLoaded", () => {

    console.log("✅ Vacina Kids iniciado com sucesso!");

    verificarAutenticacao();
    iniciarRelogio();
    configurarLogin();
    configurarLogout();
    configurarAnimacoes();
    configurarTabelaCriancas();
    configurarCalendario();
    configurarCampanhas();
    configurarRelatorios();
    configurarConfiguracoes();
    carregarDashboard();

});

/* ==================================================
   RELÓGIO
================================================== */

function iniciarRelogio() {

    const relogio = document.getElementById("relogio");

    if (!relogio) return;

    setInterval(() => {

        const agora = new Date();

        relogio.innerHTML =
            agora.toLocaleDateString("pt-BR") +
            " " +
            agora.toLocaleTimeString("pt-BR");

    }, 1000);

}

/* ==================================================
   LOGIN
================================================== */

function configurarLogin() {

    const loginForm = document.getElementById("loginForm");

    if (!loginForm) return;

    loginForm.addEventListener("submit", (e) => {

        e.preventDefault();

        const email = document.getElementById("email")?.value;
        const senha = document.getElementById("senha")?.value;

        // Validação de campos vazios
        if (!email || !senha) {
            mostrarAlerta(
                "❌ Preencha todos os campos!",
                "warning"
            );
            return;
        }

        // Validação de email
        if (!validarEmail(email)) {
            mostrarAlerta(
                "❌ Email inválido! Use o formato: email@dominio.com",
                "warning"
            );
            return;
        }

        // Validação de senha (mínimo 6 caracteres)
        if (senha.length < 6) {
            mostrarAlerta(
                "❌ Senha deve ter no mínimo 6 caracteres!",
                "warning"
            );
            return;
        }

        // Simulando autenticação
        localStorage.setItem("usuarioLogado", email);
        localStorage.setItem("dataLogin", new Date().toLocaleString("pt-BR"));

        if (document.getElementById("lembrar")?.checked) {
            localStorage.setItem("lembrarEmail", email);
        } else {
            localStorage.removeItem("lembrarEmail");
        }

        mostrarAlerta(
            "✅ Login realizado com sucesso!",
            "success"
        );

        setTimeout(() => {

            window.location.href = "home.html";

        }, 1500);

    });

    // Carregar email lembrado
    const emailLembrado = localStorage.getItem("lembrarEmail");
    if (emailLembrado) {
        const emailInput = document.getElementById("email");
        const lembrarCheckbox = document.getElementById("lembrar");
        if (emailInput) emailInput.value = emailLembrado;
        if (lembrarCheckbox) lembrarCheckbox.checked = true;
    }

}

/* ==================================================
   VALIDAÇÃO DE EMAIL
================================================== */

function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

/* ==================================================
   MOSTRAR ALERTA
================================================== */

function mostrarAlerta(mensagem, tipo = "info") {

    // Remover alertas anteriores
    const alertaAnterior = document.querySelector(".alert-temporario");
    if (alertaAnterior) alertaAnterior.remove();

    // Criar elemento de alerta
    const alerta = document.createElement("div");
    alerta.className = `alert alert-${tipo} alert-temporario`;
    alerta.textContent = mensagem;
    alerta.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        max-width: 400px;
        z-index: 9999;
        animation: slideIn 0.3s ease;
    `;

    document.body.appendChild(alerta);

    // Remover após 5 segundos
    setTimeout(() => {
        alerta.style.animation = "slideOut 0.3s ease";
        setTimeout(() => alerta.remove(), 300);
    }, 5000);

}

/* ==================================================
   LOGOUT
================================================== */

function configurarLogout() {

    const sair = document.getElementById("btnLogout");

    if (!sair) return;

    sair.addEventListener("click", (e) => {

        e.preventDefault();

        localStorage.removeItem("usuarioLogado");
        localStorage.removeItem("dataLogin");

        mostrarAlerta(
            "👋 Sessão encerrada com sucesso!",
            "info"
        );

        setTimeout(() => {

            window.location.href = "index.html";

        }, 1000);

    });

}

/* ==================================================
   VERIFICAR AUTENTICAÇÃO
================================================== */

function verificarAutenticacao() {

    const usuarioLogado = localStorage.getItem("usuarioLogado");

    // Se está em index.html e o usuário já está logado, redireciona
    if (window.location.pathname.includes("index.html") && usuarioLogado) {
        window.location.href = "home.html";
    }

    // Se não está em index.html e não está logado, redireciona para login
    if (!window.location.pathname.includes("index.html") && !usuarioLogado) {
        window.location.href = "index.html";
    }

}

/* ==================================================
   DASHBOARD
================================================== */

function carregarDashboard() {

    const vacinasDia =
        document.getElementById("vacinasDia");

    const vacinasPendentes =
        document.getElementById("vacinasPendentes");

    const vacinasAndamento =
        document.getElementById("vacinasAndamento");

    if (!vacinasDia) return;

    vacinasDia.innerText = "80%";
    vacinasPendentes.innerText = "15%";
    vacinasAndamento.innerText = "5%";

}

/* ==================================================
   CRIANÇAS
================================================== */

function configurarTabelaCriancas() {

    const linhas =
        document.querySelectorAll(".crianca-item");

    if (linhas.length === 0) return;

    linhas.forEach(item => {

        item.addEventListener("click", () => {

            const nome =
                item.dataset.nome;

            mostrarAlerta(
                "Perfil de " + nome,
                "info"
            );

        });

    });

}

/* ==================================================
   CALENDÁRIO
================================================== */

function configurarCalendario() {

    const calendario =
        document.getElementById("dataVacina");

    if (!calendario) return;

    calendario.addEventListener("change", () => {

        mostrarAlerta(
            "Data selecionada: " +
            calendario.value,
            "success"
        );

    });

}

/* ==================================================
   CAMPANHAS
================================================== */

function configurarCampanhas() {

    const botoes =
        document.querySelectorAll(".btnCampanha");

    if (botoes.length === 0) return;

    botoes.forEach(botao => {

        botao.addEventListener("click", () => {

            mostrarAlerta(
                "Participação confirmada!",
                "success"
            );

        });

    });

}

/* ==================================================
   RELATÓRIOS
================================================== */

function configurarRelatorios() {

    const pdf =
        document.getElementById("exportarPDF");

    const excel =
        document.getElementById("exportarExcel");

    if (pdf) {

        pdf.addEventListener("click", () => {

            mostrarAlerta(
                "Relatório PDF gerado!",
                "success"
            );

        });

    }

    if (excel) {

        excel.addEventListener("click", () => {

            mostrarAlerta(
                "Relatório Excel gerado!",
                "success"
            );

        });

    }

}

/* ==================================================
   CONFIGURAÇÕES
================================================== */

function configurarConfiguracoes() {

    const salvar =
        document.getElementById("btnSalvarConfig");

    if (!salvar) return;

    salvar.addEventListener("click", () => {

        mostrarAlerta(
            "Configurações salvas!",
            "success"
        );

    });

}

/* ==================================================
   ANIMAÇÕES
================================================== */

function configurarAnimacoes() {

    const cards =
        document.querySelectorAll(".card");

    cards.forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.style.transform =
                "translateY(-8px)";

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform =
                "translateY(0px)";

        });

    });

}

/* ==================================================
   ALERTAS
================================================== */

function mostrarAlerta(
    mensagem,
    tipo = "success"
) {

    const alerta =
        document.createElement("div");

    alerta.classList.add(
        "alert",
        `alert-${tipo}`,
        "position-fixed"
    );

    alerta.style.top = "20px";
    alerta.style.right = "20px";
    alerta.style.zIndex = "9999";

    alerta.innerHTML = mensagem;

    document.body.appendChild(alerta);

    setTimeout(() => {

        alerta.remove();

    }, 3000);

}

/* ==================================================
   LOCAL STORAGE
================================================== */

function salvarDados(chave, valor) {

    localStorage.setItem(
        chave,
        JSON.stringify(valor)
    );

}

function carregarDados(chave) {

    return JSON.parse(
        localStorage.getItem(chave)
    );

}

/* ==================================================
   CRIANÇAS EXEMPLO
================================================== */

const criancas = [

    {
        id: 1,
        nome: "Maria Silva",
        idade: 4,
        status: "Em Dia"
    },

    {
        id: 2,
        nome: "João Souza",
        idade: 2,
        status: "Pendente"
    },

    {
        id: 3,
        nome: "Ana Oliveira",
        idade: 5,
        status: "Em Dia"
    }

];

salvarDados("criancas", criancas);

/* ==================================================
   ESTATÍSTICAS
================================================== */

function calcularEstatisticas() {

    const lista =
        carregarDados("criancas");

    if (!lista) return;

    const total = lista.length;

    const emDia =
        lista.filter(
            c => c.status === "Em Dia"
        ).length;

    const pendentes =
        lista.filter(
            c => c.status === "Pendente"
        ).length;

    console.log(
        "Total:",
        total
    );

    console.log(
        "Em Dia:",
        emDia
    );

    console.log(
        "Pendentes:",
        pendentes
    );

}

calcularEstatisticas();

/* ==================================================
   MODO ESCURO
================================================== */

function alternarTema() {

    document.body.classList.toggle(
        "dark-mode"
    );

}

const btnTema =
    document.getElementById("btnTema");

if (btnTema) {

    btnTema.addEventListener(
        "click",
        alternarTema
    );

}
