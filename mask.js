$(document).ready(function() {
    $('#celular').mask('+00(00)00000-0000', {
        placeholder:'+__(__)_____-____'
    }),
    $('#cpf').mask('000.000.000-00', {
        placeholder: '___.___.___-__'
    }),
    $('#cep').mask('00000-000', {
        placeholder:'_____-___'
    })

    $('.discos button').click(function(){
        // $('#disco-de-interesse').removeClass('.escolhido');
        const destino = $('#contato');
        
        const imgDisco = $(this).parent().find('img').attr('src');
        const imgDiscoAlt = $(this).parent().find('img').attr('alt');
        const nomeDisco = $(this).parent().find('h3').text();
        const nomeArtista = $(this).parent().find('h4').text();
        const precoDisco = $(this).parent().find('strong').text();

        const objeto = {
            imgDiscoEscolhido: imgDisco,
            imgAltDiscoEscolhido: imgDiscoAlt,
            discoEscolhido: nomeDisco,
            artistaEscolhido: nomeArtista,
            precoDiscoEscolhido: precoDisco,
        };
        console.log(objeto);

        const discoDeInteresse = $( `
                                    <div class="escolhido">
                                    <h1>Disco de interesse</h1>
                                    <img 
                                    src="${objeto.imgDiscoEscolhido}" 
                                    alt="${objeto.imgAltDiscoEscolhido}" 
                                    />
                                    <h3>${objeto.discoEscolhido}</h3>
                                    <h4>${objeto.artistaEscolhido}</h4>
                                    <strong>${objeto.precoDiscoEscolhido}</strong>
                                    </div>
                                    `
                                )
        $('#disco-de-interesse').html(discoDeInteresse);
    
        $('#disco').val(nomeArtista+' - '+nomeDisco);

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })


  

    $('form').validate({
        rules: {
            nome: {
                required: true,
            },
            email: {
                required: true,
                email: true
            },
            celular: {
                required: true,
            },
            cpf: {
                required: true,
            },
            endereco: {
                required: true,
            },
            cep: {
                required: true,
            },
            disco: {
                required: true,
            }
        },
        
        messages: {
            nome: 'Por favor, insira o seu nome.',
            email: 'Por favor, insira o seu e-mail.',
            celular: 'Por favor, insira o seu celular.',
            cpf: 'Por favor, insira o seu CPF.',
            endereco: 'Por favor, insira o seu endereço.',
            cep: 'Por favor, insira o seu CEP.',
            disco: 'Por favor, insira o seu Disco.'
        },

        submitHandler: function(form) {
            console.log(form);

            
            alert (
                `
                Favor confirme seus dados:

                Nome: ${$('#nome').val()},
                E-mail: ${$('#email').val()},
                Número de celular: ${$('#celular').val()},
                CPF: ${$('#cpf').val()},
                Endereço: ${$('#endereco').val()},
                CEP: ${$('#cep').val()},
                Disco de interesse: ${$('#disco').val()},

                 `
            )
            

            $('#nome').val('');
            $('#email').val('');
            $('#celular').val('');
            $('#cpf').val('');
            $('#endereco').val('');
            $('#cep').val('');
            $('#disco').val('');
            $('#disco-de-interesse').html('');
            $('#class-message').css({display: "block"});
        },

        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if(camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
  
    })

    $('body').click(function() {
        $('#class-message').css({display: "none"});
    })

})