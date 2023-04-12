const discosObj = [
    {
        id: 1,
        artista: 'Larkin Poe',
        nomeDoDisco: 'Blood Harmony',
        anoLancamento: '2022',
        capaDoDisco: './capas de cds/larkin_poe_blood_harmony.jpg',
        price: "R$ 79.90"
    },

    {
        id: 2,
        artista: 'Metallica',
        nomeDoDisco: '72 Seasons',
        anoLancamento: '2023',
        capaDoDisco: './capas de cds/Metallica_72_seasons.jpg',
        price: "R$ 64.90"
    },

    {
        id: 3,
        artista: 'Spiritbox',
        nomeDoDisco: 'Eternal Blue',
        anoLancamento: '2021',
        capaDoDisco: './capas de cds/spiritbox-eternal-blue.jpeg',
        price: "R$ 133,37"
    },

];


let discos = discosObj.map(function(disco) {
    return `
            <li>
            <img src="${disco.capaDoDisco}" alt="Capa do Disco: ${disco.artista} - ${disco.nomeDoDisco}" />
            <h3>${disco.artista}</h3>
            <h4>${disco.nomeDoDisco}</h4>

            <div className="price">
                <strong>${disco.price}</strong>
            </div>
            <button type="button">Tenho interesse</button>
            </li>
            `
            ;
});

document.querySelector('ul').innerHTML = discos.join("");