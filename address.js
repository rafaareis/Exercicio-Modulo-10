const addressObj = [
    {
        id: 1,
        socialNetwork: 'Google-Maps',
        aClass: 'maps-link',
        href: 'https://www.google.com.br/maps/place/Av.+Salm%C3%A3o,+678+-+Parque+Res.+Aquarius,+S%C3%A3o+Jos%C3%A9+dos+Campos+-+SP,+12246-260/@-23.2200124,-45.9039132,17z/data=!3m1!4b1!4m6!3m5!1s0x94cc4a802ab69483:0xc2ba89495a093fe8!8m2!3d-23.2200124!4d-45.9039132!16s%2Fg%2F11jcfs504m',
        endereco: 'Av. Salmão, 678',
        bairro: 'Parque Res. Aquarius', 
        cidade: 'São José dos Campos - SP',
        cep: '12246-260',
        iClass: 'fa-solid fa-location-dot',
        alt: 'Ícone do Google Maps',
    }
]



let addresses = addressObj.map(function(address) {
    return `
                <address>
                    <a class="${address.aClass}" href="${address.href}" id="${address.socialNetwork}" >
                    <ul class="address-ul">
                        <div class="icon-address">
                        <li>
                            <i class="${address.iClass}" alt="${address.alt}"></i>                       
                        </li>
                        <li>${address.endereco}</li>
                        </div>
                        <li>${address.bairro}</li>
                        <li>${address.cidade}</li>
                        <li>${address.cep}</li>
                    </ul>
                    </a>
                    
                </address>

            `;
})



document.querySelector('#address').innerHTML = addresses.join("");