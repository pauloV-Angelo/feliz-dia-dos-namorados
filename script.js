document.addEventListener("DOMContentLoaded", function () {
    // Função para criar um popup
    function createPopup(message, onYes, onNo) {
        // Cria o overlay do popup
        const overlay = document.createElement("div");
        overlay.className = "popup-overlay";

        // Cria o conteúdo do popup
        const popup = document.createElement("div");
        popup.className = "popup";
        popup.innerHTML = `
            <div class="popup-header">
                Mensagem de amor S2
            </div>
            <p id="popup-message">${message}</p>
            <button class="yes-button">Sim</button>
            <button class="no-button">Não :(</button>
            <div class="popup-footer"></div>
        `;

        overlay.appendChild(popup);
        document.body.appendChild(overlay);

        // Adiciona eventos aos botões
        document.querySelector(".yes-button").addEventListener("click", function () {
            onYes();
            document.body.removeChild(overlay);
        });

        document.querySelector(".no-button").addEventListener("click", function () {
            onNo();
            document.body.removeChild(overlay);
        });
    }

    // Cria o popup inicial
    createPopup(
        "Aceita ser o meu amor pelo resto da vida?",
        function () {
            // Continua a página normalmente
        },
        function () {
            // Redireciona para a página com gatinhos chorando
            window.location.href = "gatinhos.html";
        }
    );
});

function showMessage() {
    const specialMessageDiv = document.getElementById("special-message");
    specialMessageDiv.innerHTML = `
        <video controls>
            <source src="resources/love.mp4" type="video/mp4">
            Seu navegador não suporta o elemento de vídeo.
        </video>
    `;
}
