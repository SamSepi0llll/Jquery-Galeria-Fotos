$(document).ready(function () {
    $('header button').click(function(){
        $('form').slideDown(500)
    })
    $('#resetar').click(function(){
        $('form').slideUp(500)
    })
    $('form').on('submit', function(e){
        e.preventDefault()
        const endereçoDaNovaImagem = $('#endereço-imagem-nova').val()
        const novoItem = $('<li style="display: none;" ></li>')
        $(`<img src="${endereçoDaNovaImagem}">`).appendTo(novoItem)
        $(`
        <div class="overlay-image">
            <a href="${endereçoDaNovaImagem}" target="_blank" title="Ver imagem em tamanho real"> Ver Imagem em Tamanho Real</a>
        </div>`).appendTo(novoItem)
        $(novoItem).appendTo('ul')
        $(novoItem).fadeIn(500)
        $('#endereço-imagem-nova').val('')
    })
})
