const iconObj = [
    {
        id: 1,
        socialNetwork: 'Facebook',
        aClass: 'facebook-link',
        href: 'https://www.facebook.com/',
        src: './icones/facebook.png',
        alt: 'Ícone do Facebook'
    },
    {
        id: 2,
        socialNetwork: 'Instagram',
        aClass: 'instagram-link',
        href: 'https://www.instagram.com/',
        src: './icones/instagram.png',
        alt: 'Ícone do Instagram'
    },
    {
        id: 3,
        socialNetwork: 'WhatsApp',
        aClass: 'whatsapp-link',
        phone:'5512982757380',
        href:'https://web.whatsapp.com/send?phone=',
        src: './icones/whatsapp.png',
        alt: 'Ícone do Whatsapp'
    },
    {
        id: 4,
        socialNetwork: 'Youtube',
        aClass:'youtube-link',
        href:'https://www.youtube.com/',
        src: './icones/youtube.png',
        alt: 'Ícone do Youtube'
    }

]

let icons = iconObj.map(function(icon) {
    if(icon.socialNetwork === 'WhatsApp') {
        return `<li>
                <a class=${icon.aClass} href=${icon.href}${icon.phone}>
                    <img src=${icon.src} alt=${icon.alt} />
                 </a>
                </li>`;
    } else {
        return `<li>
                <a class=${icon.aClass} href=${icon.href}>
                    <img src=${icon.src} alt=${icon.alt} />
                </a>
                </li>`;
    }
})

document.querySelector('.social-media-icons').innerHTML = icons.join("");

