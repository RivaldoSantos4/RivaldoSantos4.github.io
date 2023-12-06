const btnDarkModeToggle = document.getElementById('btn-dark-mode-toggle')
const themeSystem = localStorage.getItem('themeSystem') || 'light'

btnDarkModeToggle.addEventListener('click', () => {
    let oldTheme = localStorage.getItem('themeSystem') || 'light'
    let newTheme = oldTheme == "light" ? "dark" : "light"
    localStorage.setItem('themeSystem',newTheme)
    defineCurrentTheme(newTheme)
})

function defineCurrentTheme(theme){
    const darkSvg = "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-moon-stars' viewBox='0 0 16 16'><path d='M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z'/><path d='M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z'/></svg>"
    const lightSvg = "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-sun' viewBox='0 0 16 16'><path d='M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z'/></svg>"
    document.documentElement.setAttribute("data-theme", theme)
    if(theme == "light")
    {
        btnDarkModeToggle.innerHTML = darkSvg
        return
    }
    btnDarkModeToggle.innerHTML = lightSvg
}

defineCurrentTheme(themeSystem)



const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault()
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active')
    event.currentTarget.setAttribute('aria-expanded', active);
    if (active) {event.currentTarget.setAttribute ('aria-label', 'Fechar Menu')
    }  else {
        event.currentTarget.setAttribute ('aria-label', 'Abrir Menu')
    }
}


btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);




function loadItem(item) {

    var contentDiv = document.getElementById("content");


    switch (item) {
        case 'item1':
            contentDiv.innerHTML = `<div class="container">
                 <div class="polaroid">
                <a href="bolo-de-chocolate.html">
                    <img class="photo" src="assets/img/bolo-de-chocolate-com-recheio-de-leite-ninho.jpg" alt="">
                    <div class="caption">
                        <h2>BOLO DE CHOCOLATE COM RECHEIO DE NINHO</h2>
                        <p>Um bolo de chocolate delicioso com recheio de Ninho. Uma combinação perfeita de massa macia de chocolate e um recheio cremoso que vai te conquistar. Simplesmente irresistível!</p>
                    </div>
                </a>
                  </div>

                        <div class="polaroid">
                    <a href="bombomdechocolate.html">
                        <img class="photo" src="assets/img/bombom.jpg" alt="">
                        <div class="caption">
                            <h2>Bombom De Chocolate</h2>
                            <p>
                                O bombom de chocolate é puro prazer em cada mordida, com sua casquinha crocante e um recheio irresistivelmente gostoso.</p>
                        </div>
                    </a>
                </div>

                <div class="polaroid">
                <a href="brigadeiro.html">
                    <img class="photo" src="assets/img/brigadeiro.jpg" alt="">
                    <div class="caption">
                        <h2>Brigadeiro</h2>
                        <p>O brigadeiro é uma explosão de sabor em formato de pequenas porções de felicidade.</p>
                    </div>
                </a>
            </div>

            <div class="polaroid">
            <a href="docedeabobora.html">
                <img class="photo" src="assets/img/doce-de-abobora.jpg" alt="">
                <div class="caption">
                    <h2>Doce de Abóbora</h2>
                    <p>O doce de abóbora é uma iguaria tradicional que encanta com sua simplicidade e sabor reconfortante.</p>
                </div>
            </a>
        </div>

        <div class="polaroid">
                <a href="docinho-rapido.html">
                    <img class="photo" src="assets/img/rapido.jpg" alt="">
                    <div class="caption">
                        <h2>Docinho Rapido</h2>
                        <p>Que tal experimentar uma receita rápida e fácil para satisfazer seu desejo por doce em minutos?</p>
                    </div>
                </a>
            </div>

            <div class="polaroid">
            <a href="sorvetedechocolate.html">
                <img class="photo" src="assets/img/sorvetechocolate.jpg" alt="">
                <div class="caption">
                    <h2>Sorvete de Chocolate</h2>
                    <p>O sorvete de chocolate é uma sobremesa clássica e indulgente que conquista os amantes de chocolate em todo o mundo.</p>
                </div>
            </a>
        </div>

        <div class="polaroid">
                <a href="pudimdeleitecondensado.html">
                    <img class="photo" src="assets/img/pudimdeleite.jpg" alt="">
                    <div class="caption">
                        <h2>Pudim de Leite Condensado</h2>
                        <p>O pudim de leite condensado é uma sobremesa clássica e deliciosa, muito apreciada por sua textura cremosa e sabor adocicado.</p>
                    </div>
                </a>
            </div>

            <div class="polaroid">
            <a href="moussedemaracuja.html">
                <img class="photo" src="assets/img/moussedemaracuja.jpg" alt="">
                <div class="caption">
                    <h2>Mousse de Maracujá </h2>
                    <p>O mousse de maracujá é uma sobremesa leve e refrescante, muito apreciada por sua combinação única de doçura e acidez.</p>
                </div>
            </a>
        </div>

        <div class="polaroid">
                <a href="Pudimtp.html" class="receita-list">
                    <img class="photo" src="assets/img/Pudim_de_tapioca.jpg" alt="">
                    <div class="caption">
                        <h2>Pudim de Tapioca</h2>
                        <p>O pudim de tapioca é uma sobremesa deliciosa e tradicional, muito apreciada em várias regiões do Brasil.</p>
                    </div>
                </a>
            </div>



        
            </div>`;
            break;
        case 'item2':
            contentDiv.innerHTML = `<div class="container"> 
            <div class="polaroid">
                <a href="lasanhabolonhesa.html">
                    <img class="photo" src="assets/img/lasanhabolonhesa.jpg" alt="">
                    <div class="caption">
                        <h2>Lasanha à Bolonhesa</h2>
                        <p>
                            A lasanha à bolonhesa é um clássico da culinária italiana que cativa paladares com sua camada de massas intercaladas com um recheio rico e saboroso.</p>
                    </div>
                </a>
            </div>

            <div class="polaroid">
                <a href="Macarraoacarbonara.html">
                    <img class="photo" src="assets/img/carbonara.jpg" alt="">
                    <div class="caption">
                        <h2>Macarrão à Carbonara</h2>
                        <p>O macarrão à carbonara é um prato italiano simples e delicioso, conhecido por sua combinação irresistível de massa, ovos, queijo e bacon (ou pancetta).</p>
                    </div>
                </a>
            </div>

            <div class="polaroid">
                <a href="macarraoaoalhoeoleo.html">
                    <img class="photo" src="assets/img/macarraoalho.jpg" alt="">
                    <div class="caption">
                        <h2>Macarrão ao Alho e Óleo</h2>
                        <p>O macarrão ao alho e óleo é um prato clássico italiano conhecido por sua simplicidade e sabor marcante.</p>
                    </div>
                </a>
            </div>

            <div class="polaroid">
                <a href="quichelorraine.html">
                    <img class="photo" src="assets/img/quichelorraine.jpg" alt="">
                    <div class="caption">
                        <h2>Quiche Lorraine</h2>
                        <p>A Quiche Lorraine é uma especialidade da culinária francesa, conhecida por sua base de massa quebrada recheada com uma mistura rica de bacon, creme de leite e ovos.</p>
                    </div>
                </a>
            </div>


            </div>`;
            break;
        case 'item3':
            contentDiv.innerHTML = `<div class="container">
            <div class="polaroid">
                <a href="frangoaocurry.html">
                    <img class="photo" src="assets/img/frangocurry.jpg" alt="">
                    <div class="caption">
                        <h2>Frango ao Curry</h2>
                        <p>
                            O frango ao curry é um prato aromático e delicioso que combina pedaços suculentos de frango com um molho rico em especiarias.</p>
                    </div>
                </a>
            </div>

            <div class="polaroid">
                <a href="coxinhadefrango.html">
                    <img class="photo" src="assets/img/coxinhadefrango.jpg" alt="">
                    <div class="caption">
                        <h2>Coxinha de Frango</h2>
                        <p>A coxinha de frango é um clássico salgado brasileiro que combina massa macia e recheio suculento.</p>
                    </div>
                </a>
            </div>

            <div class="polaroid">
                <a href="sanduiche-mel-mostarda.html">
                    <img class="photo" src="assets/img/molho-de-mostarda-caseiro_28032017070631.jpg" alt="">
                    <div class="caption">
                        <h2>Sanduíche Mel e Mostarda</h2>
                        <p>O Sanduíche Mel e Mostarda é uma explosão de sabores agridoces em cada mordida. Com pão dourado e queijo derretido.</p>
                    </div>
                </a>
            </div>

            <div class="polaroid">
                <a href="Pate-de-frango-com-cenoura.html">
                    <img class="photo" src="assets/img/pate.jpg" alt="">
                    <div class="caption">
                        <h2>Patê De Frango Com Cenoura</h2>
                        <p>Não existe nada mais satisfatório do que descobrir como preparar um delicioso patê de frango para saborear com um pão recém-saído do forno!</p>
                    </div>
                </a>
            </div>

            <div class="polaroid">
                <a href="peixe-assado.html">
                    <img class="photo" src="assets/img/peixeassado.jpg" alt="">
                    <div class="caption">
                        <h2>Peixe Assado</h2>
                        <p>O peixe assado é uma opção saudável e deliciosa que destaca os sabores naturais do peixe.</p>
                    </div>
                </a>
            </div>

            <div class="polaroid">
                <a href="risotodeFunghi.html">
                    <img class="photo" src="assets/img/risoto.jpg" alt="">
                    <div class="caption">
                        <h2>risoto funghi</h2>
                        <p>O risoto funghi é uma variação saborosa e sofisticada do clássico risoto italiano, destacando o sabor distintivo dos cogumelos funghi.</p>
                    </div>
                </a>
            </div>


            </div>
            `;
            break;
        default:
            contentDiv.innerHTML = "<RECENTES</h2><p>Selecione uma categoria para carregar o conteúdo.</p>";
   }
}