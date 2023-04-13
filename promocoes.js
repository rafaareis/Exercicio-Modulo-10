const promoObj = [
    {
        id: 1,
        artista: 'Coldplay',
        nomeDoDisco: 'A Rush of Blood to the head',
        anoLancamento: '2002',
        capaDoDisco: './capas de cds/coldplay_a_rush_of_blood.jpg',
        percent: '10',
        originalPrice: "R$ 56.90",
        price: "R$ 51.21"
    },

    {
        id: 2,
        artista: 'Jinjer',
        nomeDoDisco: 'Macro',
        anoLancamento: '2019',
        capaDoDisco: './capas de cds/jinjer-macro.jpeg',
        percent: '10',
        originalPrice: "R$ 45.00",
        price: "R$ 40.50"
    },


    {
        id: 3,
        artista: 'Nirvana',
        nomeDoDisco: 'Nevermind',
        anoLancamento: '1992',
        capaDoDisco: './capas de cds/nirvana_nevermind.jpg',
        percent: '20',
        originalPrice: "R$ 48.90",
        price: "R$ 39.12"
    },


    {
        id: 4,
        artista: 'Red Hot Chili Peppers',
        nomeDoDisco: 'By the Way',
        anoLancamento: '2002',
        capaDoDisco: './capas de cds/Red_Hot_Chili_Peppers_-_By_the_Way.jpg',
        percent: '20',
        originalPrice: "R$ 48.90",
        price: "R$ 39.12"
    },

    {
        id: 5,
        artista: 'Royal Blood',
        nomeDoDisco: 'Royal Blood',
        anoLancamento: '2014',
        capaDoDisco: './capas de cds/royal_blood_2014.jpg',
        percent: '10',
        originalPrice: "R$ 140.17",
        price: "R$ 126.15"
    },

    {
        id: 6,
        artista: 'System of a Down',
        nomeDoDisco: 'Toxicity',
        anoLancamento: '2001',
        capaDoDisco: './capas de cds/system_of_a_down_toxicity.jpg',
        percent: '10',
        originalPrice: "R$ 60.90",
        price: "R$ 54.81"
    },

    {
        id: 7,
        artista: 'Tame Impala',
        nomeDoDisco: 'Lonerism',
        anoLancamento: '2012',
        capaDoDisco: './capas de cds/tame_impala_lonerism.jpg',
        percent: '10',
        originalPrice: "R$ 60.90",
        price: "R$ 54.81"
    },


    




];


let discosPromo = promoObj.map(function(disco) {
    return `
            <li>
            <img src="${disco.capaDoDisco}" alt="Capa do Disco: ${disco.artista} - ${disco.nomeDoDisco}" />
            <h3>${disco.artista}</h3>
            <h4>${disco.nomeDoDisco}(${disco.anoLancamento})</h4>

            <div class="price">
                <div className="promocoes">
                    <del>${disco.originalPrice}</del>
                    <p>${disco.percent}%OFF</p>
                </div>
                <strong>${disco.price}</strong>
            </div>
            <button type="button">Tenho interesse</button>
            </li>
            `
            ;
});



document.querySelector('.lista-discos-promo').innerHTML = discosPromo.join("");