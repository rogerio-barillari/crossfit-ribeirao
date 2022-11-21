// Início do modal de cookies

let lgpdHtml = `

    <div class="lgpd">
    <div class="lgpd-left">
    Utilizamos cookies para melhorar a sua experiência no site e também para personalizar anúncios. Ao navegar, você aceita a nossa <a href="politica-de-privacidade.html" target="_blank">política de privacidade.</a>
    </div>
    <div class="lgpd-right">
    <button>Ok</button>
    </div>
    </div>

    <link rel="stylesheet" href="style.css">

`;

let lsContent = localStorage.getItem('lgpd');
if(!lsContent) {
  document.body.innerHTML += lgpdHtml;

let lgpdArea = document.querySelector('.lgpd');
let lgpdButton = lgpdArea.querySelector('button');

lgpdButton.addEventListener('click', ()=>{
  lgpdArea.remove();
});
}

// Fim do modal de cookies