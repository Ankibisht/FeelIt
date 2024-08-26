const music = new Audio('audio/2.mp3');


//Song play part

let Play = document.getElementById('master_play');
let wave = document.getElementById('wave');


    Play.addEventListener('click', ()=>{
    if(music.paused || music.currentTime <=0){
        music.play();
        wave.classList.add('active');
        Play.classList.remove('bi-play-fill');
        Play.classList.add('bi-pause-fill');
    }else{
        music.pause();
        wave.classList.remove('active');
        Play.classList.remove('bi-pause-fill');
        Play.classList.add('bi-play-fill');

    }

});



//Scroll part

let pop_left = document.getElementById('pop_left');
let pop_right = document.getElementById('pop_right');
let popSongs = document.getElementsByClassName('popSongs')[0];


pop_right.addEventListener('click' , () => {
    popSongs.scrollLeft +=330;
})

pop_left.addEventListener('click' , () => {
    popSongs.scrollLeft -=330;
})



let items_left = document.getElementById('items_left');
let items_right = document.getElementById('items_right');
let items = document.getElementsByClassName('items')[0];


items_right.addEventListener('click' , () => {
    items.scrollLeft +=330;
})

items_left.addEventListener('click' , () => {
    items.scrollLeft -=330;
})

let index = 0;
let poster = document.getElementById('poster');

Array.from(document.getElementsByClassName('hi')).forEach((e)=>{
    e.addEventListener('click',(element)=>{
        index = element.target.id;
        music.src = `audio/${index}.mp3`;
        poster.src = `img/img${index}.jpg`;
        music.play();
        wave.classList.add('active');
        Play.classList.remove('bi-play-fill');
        Play.classList.add('bi-pause-fill');

        let songTittles = songs.filter((els) =>{
            return els.id == index;
        })

        songTittles.forEach((els) =>{
            let{songName} = els;
            tittle.innerHTML = songName;
        })

        let songTittles1 = sunidhi.filter((els) =>{
            return els.id == index;
        })

        songTittles1.forEach((els) =>{
            let{songName} = els;
            tittle.innerHTML = songName;
        })

    });
})

let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementById('dot');

music.addEventListener('timeupdate', ()=>{
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min1 = Math.floor(music_dur / 60);
    let sec1 = Math.floor(music_dur % 60);

    if(sec1 < 10){
        sec1 = `0${sec1}`;
    }
    currentEnd.innerHTML = `${min1}:${sec1}`;

    let min2 = Math.floor(music_curr / 60);
    let sec2 = Math.floor(music_curr % 60);

    if(sec2 < 10){
        sec2 = `0${sec2}`;
    }
    currentStart.innerHTML = `${min2}:${sec2}`;

    let progress = parseInt((music_curr / music_dur)*100);
    seek.value = progress;
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;

})

seek.addEventListener('change',()=>{
    music.currentTime = seek.value * music.duration / 100;
});

let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementById('vol_bar');
let vol_dot = document.getElementById('vol_dot');

vol.addEventListener('change', ()=>{
    if(vol.value == 0){
        vol_icon.classList.remove('bi-volume-up')
        vol_icon.classList.remove('bi-volume-down-fill')
        vol_icon.classList.add('bi-volume-mute-fill')
    }
    if(vol.value > 0){
        vol_icon.classList.remove('bi-volume-mute-fill')
        vol_icon.classList.remove('bi-volume-up')
        vol_icon.classList.add('bi-volume-down-fill')
    }
    if(vol.value > 50){
        vol_icon.classList.remove('bi-volume-mute-fill')
        vol_icon.classList.remove('bi-volume-down-fill')
        vol_icon.classList.add('bi-volume-up')
    }

    let vol_val = vol.value;
    vol_bar.style.width = `${vol_val}%`;
    vol_dot.style.left = `${vol_val}%`;
    music.volume = vol_val /100;

})


let shuffle = document.getElementsByClassName('shuffle')[0];

shuffle.addEventListener('click',()=>{
    let a = shuffle.innerHTML;

    switch (a){
        case "next":
            shuffle.classList.add('bi-repeat');
            shuffle.classList.remove('bi-shuffle');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.innerHTML = 'repeat';
            break;

        case "repeat":
            shuffle.classList.remove('bi-repeat');
            shuffle.classList.remove('bi-shuffle');
            shuffle.classList.add('bi-music-note-beamed');
            shuffle.innerHTML = 'random';
            break;

        case "random":
                shuffle.classList.remove('bi-repeat');
                shuffle.classList.add('bi-shuffle');
                shuffle.classList.remove('bi-music-note-beamed');
                shuffle.innerHTML = 'next';
                break;

        
        

    }
});








const sunidhi = [
    {
        id:111,
        songName: `Sohniye
        <div class="Name">KK, Sunidhi Chauhan`,
        poster: "img/img101.jpg",

    },
    {
        id:112,
        songName: `Aja Nachle
        <div class="Name">Sunidhi Chauhan</div>`,
        poster: "img/img102.jpg",

    },
    {
        id:113,
        songName: `Crazy Kiya Re
        <div class="Name">Sunidhi Chauhan</div>`,
        poster: "img/img103.jpg",

    },
    {
        id:114,
        songName: `Kamli
        <div class="Name">Sunidhi Chauhan</div>`,
        poster: "img/img104.jpg",

    },
    {
        id:115,
        songName: `Kashmir main Tu Kanya Kumari
        <div class="Name">Sunidhi Chauhan, Arjit Singh, Neeti Mohan</div>`,
        poster: "img/img105.jpg",

    },
    {
        id:116,
        songName: `Sheela
        <div class="Name">Sunidhi Chauhan</div>`,
        poster: "img/img106.jpg",

    },

    {
        id:117,
        songName: `Kashmir main Tu Kanya Kumari
        <div class="Name">Sunidhi Chauhan, Arjit Singh, Neeti Mohan</div>`,
        poster: "img/img105.jpg",

    },

    {
        id:118,
        songName: `Kashmir main Tu Kanya Kumari
        <div class="Name">Sunidhi Chauhan, Arjit Singh, Neeti Mohan</div>`,
        poster: "img/img105.jpg",

    },

    {
        id:119,
        songName: `Kashmir main Tu Kanya Kumari
        <div class="Name">Sunidhi Chauhan, Arjit Singh, Neeti Mohan</div>`,
        poster: "img/img105.jpg",

    },

    {
        id:120,
        songName: `Kashmir main Tu Kanya Kumari
        <div class="Name">Sunidhi Chauhan, Arjit Singh, Neeti Mohan</div>`,
        poster: "img/img105.jpg",

    },

    {
        id:121,
        songName: `Kashmir main Tu Kanya Kumari
        <div class="Name">Sunidhi Chauhan, Arjit Singh, Neeti Mohan</div>`,
        poster: "img/img105.jpg",

    },

    {
        id:122,
        songName: `Kashmir main Tu Kanya Kumari
        <div class="Name">Sunidhi Chauhan, Arjit Singh, Neeti Mohan</div>`,
        poster: "img/img105.jpg",

    },

    {
        id:123,
        songName: `Kashmir main Tu Kanya Kumari
        <div class="Name">Sunidhi Chauhan, Arjit Singh, Neeti Mohan</div>`,
        poster: "img/img105.jpg",

    },

    {
        id:124,
        songName: `Kashmir main Tu Kanya Kumari
        <div class="Name">Sunidhi Chauhan, Arjit Singh, Neeti Mohan</div>`,
        poster: "img/img105.jpg",

    },

    {
        id:125,
        songName: `Kashmir main Tu Kanya Kumari
        <div class="Name">Sunidhi Chauhan, Arjit Singh, Neeti Mohan</div>`,
        poster: "img/img105.jpg",

    },



    

]

Array.from(document.getElementsByClassName('art_songs')).forEach((e,i) =>{
    e.getElementsByTagName('h5')[0].innerHTML = sunidhi[i].songName;
    e.getElementsByTagName('img')[0].src = sunidhi[i].poster;
    

});






const songs = [
    {
        id:1,
        songName: `Bahara
        <div class="Name">Shreya Ghosal</div>`,
        poster: "img/img1.jpg",

    },

    {
        id:2,
        songName: `Tere Naina
        <div class="Name">Shreya Ghosal</div>`,
        poster: "img/img2.jpg",

    },
    {
        id:3,
        songName: `Nadaniya
        <div class="Name">Akshath</div>`,
        poster: "img/img3.jpg",

    },
    {
        id:4,
        songName: `Tauba Tauba
        <div class="Name">Triptii Dimri, Karan Aujla</div>`,
        poster: "img/img4.jpg",

    },

    {
        id:5,
        songName: `Gun Gun Guna
        <div class="Name">Triptii Dimri, Karan Aujla</div>`,
        poster: "img/img5.jpg",

    },
    {
        id:6,
        songName: `Gun Gun Guna
        <div class="Name">Triptii Dimri, Karan Aujla</div>`,
        poster: "img/img5.jpg",

    },

]


Array.from(document.getElementsByClassName('songItems')).forEach((e,i) =>{
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;

});


