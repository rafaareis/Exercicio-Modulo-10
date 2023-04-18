const iconObj = [
    {
        id: 1,
        socialNetwork: 'Facebook',
        aClass: 'facebook-link',
        href: 'https://www.facebook.com/',
        iClass: 'fa-brands fa-facebook-f',
        alt: 'Ícone do Facebook'
    },
    {
        id: 2,
        socialNetwork: 'Instagram',
        aClass: 'instagram-link',
        href: 'https://www.instagram.com/',
        iClass: 'fa-brands fa-instagram',
        alt: 'Ícone do Instagram'
    },
    {
        id: 3,
        socialNetwork: 'WhatsApp',
        aClass: 'whatsapp-link',
        phone:'5512982757380',
        href:'https://web.whatsapp.com/send?phone=',
        iClass: 'fa-brands fa-whatsapp',
        alt: 'Ícone do Whatsapp'
    },
    {
        id: 4,
        socialNetwork: 'Youtube',
        aClass:'youtube-link',
        href:'https://www.youtube.com/',
        iClass: 'fa-brands fa-youtube',
        alt: 'Ícone do Youtube'
    }

]

let icons = iconObj.map(function(icon) {
    if(icon.socialNetwork === 'WhatsApp') {
        return `<li>
                <a class="${icon.aClass}" href="${icon.href}${icon.phone}" id="${icon.socialNetwork}">
                <i class="${icon.iClass}" alt="${icon.alt}"></i>
                 </a>
                </li>`;
    } else {
        return `<li>
                <a class="${icon.aClass}" href="${icon.href}" id="${icon.socialNetwork}">
                    <i class="${icon.iClass}" alt=${icon.alt}"></i>
                </a>
                </li>`;
    }
})

document.querySelector('#footer-social-media').innerHTML = icons.join("");

