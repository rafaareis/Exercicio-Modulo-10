const lancObj = [
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
        price: "R$ 133.37"
    },

    {
        id: 4,
        artista: 'Joe Bonamassa',
        nomeDoDisco: 'Time Clocks',
        anoLancamento: '2021',
        capaDoDisco: './capas de cds/joe_bonamassa_time_clocks.jpg',
        price: "R$ 62.12"
    },

    {
        id: 5,
        artista: 'Five Finger Death Punch',
        nomeDoDisco: 'Afterlife',
        anoLancamento: '2022',
        capaDoDisco: './capas de cds/ffdp_after.jpg',
        price: "R$ 78.90"
    },

    {
        id: 6,
        artista: 'The Warning',
        nomeDoDisco: 'Error',
        anoLancamento: '2022',
        capaDoDisco: './capas de cds/TheWarning_Error.jpeg',
        price: "R$ 100.00"
    },




];


let discoslanc = lancObj.map(function(disco) {
    return `
            <li>
            <img src="${disco.capaDoDisco}" alt="Capa do Disco: ${disco.artista} - ${disco.nomeDoDisco}" />
            
            <h3>${disco.nomeDoDisco}(${disco.anoLancamento})</h3>
            <h4>${disco.artista}</h4>

            <div class="price">
                <strong>${disco.price}</strong>
            </div>
            <button type="button">Tenho interesse</button>
            </li>
            `;
});

document.querySelector('.lista-discos-lanc').innerHTML = discoslanc.join("");