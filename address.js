const addressObj = [
    {
        id: 1,
        socialNetwork: 'Google Maps',
        aClass: 'maps-link',
        href: 'https://www.google.com.br/maps/place/Av.+Salm%C3%A3o,+678+-+Parque+Res.+Aquarius,+S%C3%A3o+Jos%C3%A9+dos+Campos+-+SP,+12246-260/@-23.2200124,-45.9039132,17z/data=!3m1!4b1!4m6!3m5!1s0x94cc4a802ab69483:0xc2ba89495a093fe8!8m2!3d-23.2200124!4d-45.9039132!16s%2Fg%2F11jcfs504m',
        endereco: 'Av. Salmão, 678 - Parque Res. Aquarius, São José dos Campos - SP, 12246-260' ,
        src: 'icones/maps.png',
        alt: 'Ícones do Google Maps',
    }
]



let addresses = addressObj.map(function(address) {
    return `
            <a class=${address.aClass} href=${address.href}>
                <img src=${address.src} alt=${address.alt} />
                <address>${address.endereco}</address>
            </a>
            `;
})

document.querySelector('.address-footer').innerHTML = addresses.join("");