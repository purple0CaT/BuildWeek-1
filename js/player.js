
// inputs
const durat= document.getElementById('durationM')
const volume = document.getElementById('volumeM')
const image = document.getElementById('titleImg')
// button
const random = document.getElementById('randomBtn')
const prew = document.getElementById('prewBtn')
const play = document.getElementById('playBtn')
const next = document.getElementById('nextBtn')
const repeat = document.getElementById('repeatBtn')
const mute = document.getElementById('muteM')
const title = document.getElementById('titleM')
const author = document.getElementById('authorM')

// list


// const
let timer
let indx = 0
let autoplay = 0
let playingSong = false
let muteSong = 0


// music libr
let track = document.createElement('audio')
// all song
let All_song = [
    {
        name: 'Peaky Blinders',
        path: 'music/1.mp3',
        img: 'https://pbs.twimg.com/profile_images/1159601095309758465/hdjeX4rS_400x400.jpg',
        singer: 'Someone'
    },
    {
        name: 'My Number',
        path: 'music/2.mp3',
        img: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/52/My_Number_Single.jpg/220px-My_Number_Single.jpg',
        singer: 'Foals'
    },
    {
        name: 'Poison Lips',
        path: 'music/3.mp3',
        img: 'https://i1.sndcdn.com/artworks-000007961708-2vseje-t500x500.jpg',
        singer: 'Vitalic'
    },
]
// event listener 
play.addEventListener('click', justPlay)
next.addEventListener('click', nextSong)
prew.addEventListener('click', prewSong)
durat.addEventListener('change', durChange)
volume.addEventListener('change', volChange)
repeat.addEventListener('click', repeatSong)
mute.addEventListener('click', muteM)

// Functions 
// LOAD
function load_track(indx){
    clearInterval(timer)
    resetSlider()
    track.src = All_song[indx].path
    image.src = All_song[indx].img
    author.innerText = All_song[indx].singer
    title.innerText = All_song[indx].name
    track.load()

    timer = setInterval(rangeSl, 1000)
    timer = setInterval(barProg, 1000)

}
load_track(0)


// play check
function justPlay(){
    if (playingSong == false){
        playSong()
    } else {
        pauseSong()
    }
}
// play
function playSong(){
    track.play()
    playingSong = true
    play.classList.remove('fa-play-circle')
    play.classList.add('fa-pause')

}
// pause
function pauseSong(){
    track.pause()
    playingSong = false
    play.classList.remove('fa-pause')
    play.classList.add('fa-play-circle')

}

// next song

function nextSong (){
    if (indx < All_song.length-1){
        indx += 1
        load_track(indx)
        playSong()
    } else {
        indx = 0
        load_track(indx)
        playSong()
    }
}
// prew song
function prewSong (){
    if (indx > 0){
        indx -= 1
        load_track(indx)
        playSong()
    } else {
        indx = All_song.length
        load_track(indx)
        playSong()
    }

}
// Duration change
function barProg() {
    let percent
    percent = Math.round(track.currentTime / (track.duration / 100))
    durat.style.background = `linear-gradient(to right, white, ${percent}%, #b3b3b3 0%)`
    volume.style.background = `linear-gradient(to right, white, ${volume.value}%, #b3b3b3 0%)`
}

function durChange(){

    let slider = track.duration * (durat.value / 100)
    track.currentTime = slider
    durat.style.background = `linear-gradient(to right, white, ${durat.value}%, #b3b3b3 0%)`

}


// slider range
function rangeSl(){
    let position = 0

        // update slider position
        if (!isNaN(track.duration)){
            position = track.currentTime * (100 / track.duration )
            durat.value = position
        }

        if (track.ended){
            play.classList.remove('fa-pause')
            play.classList.add('fa-play-circle')
            if (autoplay==1){
                indx +=1
                load_track(indx)
                playSong()
            }
        }
}


// MUTE
let trackVol = 0

function muteM (){
    if (muteSong == 0 ){
        muteSong = 1
        track.volume = 0
        volume.value = 0    
    } else {
        muteSong = 0
        track.volume = trackVol / 100
        volume.value = trackVol
    }

    switch (muteSong){
        case 0:     
        mute.classList.add("fa-volume-up")
        mute.classList.remove("fa-volume-mute")
        mute.style.color = "#b3b3b3"
        break;
        case 1:     
        mute.classList.remove("fa-volume-up")
        mute.classList.add("fa-volume-mute")
        mute.style.color = "#1DB352"
        break;
    }
}

function volChange(){
    track.volume = volume.value / 100
    trackVol = volume.value
    volume.style.background = `linear-gradient(to right, white, ${volume.value}%, #b3b3b3 0%)`
}


function repeatSong(){
    if (autoplay==1){
        autoplay = 0 
        repeat.style.color = "#b3b3b3"
    } else {
        autoplay=1
        repeat.style.color = "#1DB352"

    }
}


// reseting slider
function resetSlider (){
    durat.value = 0
}