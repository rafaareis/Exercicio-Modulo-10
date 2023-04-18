const menuArr = ['sobre', 'lançamentos', 'promoções', 'contato']

let menu = menuArr.map(function(item) {
    return  `
            <li>
                <a href="#${item}">${item}</a>
            </li>
            `;
});

document.querySelector('.nav').innerHTML = menu.join("");

document.querySelector('#menu').innerHTML = menu.join("");