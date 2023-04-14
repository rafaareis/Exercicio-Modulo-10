const carouselObJ = [
    {
        src: './capas de cds/coldplay_a_rush_of_blood.jpg',
        alt: 'Coldplay - A Rush of Blood to the Head'
    },

    {
        src: './capas de cds/ffdp_after.jpg',
        alt: 'Five Finger Death Punch - Afterlife'
    },

    {
        src: './capas de cds/jinjer-macro.jpeg',
        alt: 'Jinjer - Macro'
    },

    {
        src: './capas de cds/joe_bonamassa_time_clocks.jpg',
        alt: 'Joe Bonamassa - Time Clocks'
    },

    {
        src: './capas de cds/larkin_poe_blood_harmony.jpg',
        alt: 'Larkin Poe - Blood Harmony'
    },

    {
        src: './capas de cds/Metallica_72_seasons.jpg',
        alt: 'Metallica - 72 Seasons'
    },

    {
        src: './capas de cds/nirvana_nevermind.jpg',
        alt: 'Nirvana - Nevermind'
    },

    {
        src: './capas de cds/Red_Hot_Chili_Peppers_-_By_the_Way.jpg',
        alt: 'Red Hot Chili Peppers - By the Way'
    },

    {
        src: './capas de cds/royal_blood_2014.jpg',
        alt: 'Royal Blood - Royal Blood'
    },

    {
        src: './capas de cds/spiritbox-eternal-blue.jpeg',
        alt: 'Spiritbox - Eternal Blue'
    },

    {
        src: './capas de cds/system_of_a_down_toxicity.jpg',
        alt: 'Spiritbox - Eternal Blue'
    },

    
    {
        src: './capas de cds/tame_impala_lonerism.jpg',
        alt: 'Tame Impala - Lonerism'
    },

    {
        src: './capas de cds/TheWarning_Error.jpeg',
        alt: 'The Warning - Error'
    },
];

console.log(carouselObJ.length)

let carousels = carouselObJ.map(function(carousel) {
   return `
            <img 
            src="${carousel.src}" 
            alt="${carousel.alt}" 
            />
            `  
})

document.querySelector('#carousel-imagens').innerHTML = carousels.join("");