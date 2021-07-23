// all song
let All_song = [
    {
        name: 'Somebody to love',
        path: 'music/bh_02.mp3',
        img: 'https://fresh-song.ru/uploads/posts/2018-10/1540027773_cover.jpg',
        singer: 'Queen',
    },
    {
        name: 'Doing all Right',
        path: 'music/bh_03.mp3',
        img: 'https://fresh-song.ru/uploads/posts/2018-10/1540027773_cover.jpg',
        singer: 'Queen',
    },
    {
        name: 'Keep Yourself Alive',
        path: 'music/bh_04.mp3',
        img: 'https://fresh-song.ru/uploads/posts/2018-10/1540027773_cover.jpg',
        singer: 'Queen',
    },
    {
        name: 'Killer Queen',
        path: 'music/bh_05.mp3',
        img: 'https://fresh-song.ru/uploads/posts/2018-10/1540027773_cover.jpg',
        singer: 'Queen',
    },
    {
        name: 'Fat Bottomed Girls',
        path: 'music/bh_06.mp3',
        img: 'https://fresh-song.ru/uploads/posts/2018-10/1540027773_cover.jpg',
        singer: 'Queen',
    },
    {
        name: 'Bohemian Rhapsody',
        path: 'music/bh_07.mp3',
        img: 'https://fresh-song.ru/uploads/posts/2018-10/1540027773_cover.jpg',
        singer: 'Queen',
    },
    {
        name: "Now I'm Here",
        path: 'music/bh_08.mp3',
        img: 'https://fresh-song.ru/uploads/posts/2018-10/1540027773_cover.jpg',
        singer: 'Queen',
    },
    {
        name: "Crazy Little Thing Called Love",
        path: 'music/bh_09.mp3',
        img: 'https://fresh-song.ru/uploads/posts/2018-10/1540027773_cover.jpg',
        singer: 'Queen',
    },
    {
        name: "Lofe of My Life",
        path: 'music/bh_10.mp3',
        img: 'https://fresh-song.ru/uploads/posts/2018-10/1540027773_cover.jpg',
        singer: 'Queen',
    },
    {
        name: "We Will Rock You",
        path: 'music/bh_11.mp3',
        img: 'https://fresh-song.ru/uploads/posts/2018-10/1540027773_cover.jpg',
        singer: 'Queen',
    },
]

let thisTrack
let thisOneT

window.onload = function(){
    activeTr()
    thisTrack[indx].classList.add('active-track')
    for(let trcks of thisTrack){

        trcks.addEventListener('click', function(){
            if(playingSong == false){
                playingSong = true
            for(let delA of thisTrack){
                delA.classList.remove('active-track')
            }
            load_track(trcks.getAttribute('value'))
            playSong()
            trcks.classList.add('active-track')
        } else {
            playingSong = false
            pauseSong()
        }
        })
    }
    load_track(0)
    timeChng()

    // tracktime
function timeChng(){
    let inf = document.createElement('audio')
    for (r=0; r < All_song.length; r++){
        inf.src = All_song[r].path
        inf.load()
        document.querySelectorAll('.time small')[r].innerText = `${inf.duration}`
    }
}
}

// inputs
const durat= document.getElementById('durationM')
const volume = document.getElementById('volumeM')
const image = document.getElementById('titleImg')


// Player button
const shufle = document.getElementById('randomBtn')
const prew = document.getElementById('prewBtn')
const play = document.getElementById('playBtn')
const playA = document.getElementById('playA')
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



// event listener 
play.addEventListener('click', justPlay)
playA.addEventListener('click', justPlay)
next.addEventListener('click', nextSong)
prew.addEventListener('click', prewSong)
durat.addEventListener('change', durChange)
durat.addEventListener('click', durChange)
volume.addEventListener('change', volChange)
volume.addEventListener('click', volChange)
repeat.addEventListener('click', repeatSong)
mute.addEventListener('click', muteM)


// Functions creating list of music
function createList(j){
    let anchor = document.createElement('a')
    anchor.classList.add('play-list-body')
    anchor.classList.add('d-flex')
    anchor.classList.add('align-items-center')
    anchor.setAttribute('value',`${j}`)

    let firstDiv = document.createElement('div')
    firstDiv.classList.add('d-flex')
    firstDiv.classList.add('list-title')

        // inside first div
        let fdiv1Div = document.createElement('div')
        fdiv1Div.classList.add('d-flex')
        fdiv1Div.classList.add('align-items-center')
        
            // song number
            let fdiv1DivDiv = document.createElement('div')
            fdiv1DivDiv.classList.add('d-flex')
            fdiv1DivDiv.classList.add('align-items-center')
            
            let fdiv1DivSpan = document.createElement('span')
            fdiv1DivSpan.innerText = j + 1

            fdiv1DivDiv.appendChild(fdiv1DivSpan)
            fdiv1Div.appendChild(fdiv1DivDiv)
            firstDiv.appendChild(fdiv1Div)

        // second div
        let fdiv2Div = document.createElement('div')
        fdiv2Div.classList.add('d-flex')
        fdiv2Div.classList.add('flex-column')
        fdiv2Div.classList.add('align-items-start')

            // creating p and small
            let fdiv2DivP = document.createElement('p')
            fdiv2DivP.innerText = All_song[j].name
            let fdiv2DivSm = document.createElement('small')
            fdiv2DivSm.innerText = All_song[j].singer
            fdiv2Div.appendChild(fdiv2DivP)
            fdiv2Div.appendChild(fdiv2DivSm)
            firstDiv.appendChild(fdiv2Div)

    // time section
    let time = document.createElement('div')
    time.classList.add('time')
    let timeRight = document.createElement('small')

    time.appendChild(timeRight)

    // merging
    anchor.appendChild(firstDiv)
    anchor.appendChild(time)
    lists.appendChild(anchor)

    // bug fix>??????
}


// -------------LOAD MUSICCCCC
function load_track(indx){
    clearInterval(timer)
    resetSlider()
    track.src = All_song[indx].path
    image.src = All_song[indx].img
    author.innerText = All_song[indx].singer
    title.innerText = All_song[indx].name
    track.load()
    
    for (let trcks of thisTrack){
        trcks.classList.remove('active-track')
    }
    thisTrack[indx].classList.add('active-track')
    timer = setInterval(rangeSl, 500)
    timer = setInterval(barProg, 500)
    timer = setInterval(timerRenew, 500)
}

// timer renewer
function timerRenew () {
    let curTimeH = document.getElementById('timeStartH')
    let curTimeM = document.getElementById('timeStartM')
    curTimeH.innerText = Math.floor(track.currentTime/60) + ':'
    curTimeM.innerText = Math.floor(track.currentTime%60)

    let timeFinishH = document.getElementById('timeFinishH')
    let timeFinishM = document.getElementById('timeFinishM')
    timeFinishH.innerText = Math.floor(track.duration/60) + ':'
    timeFinishM.innerText = Math.floor(track.duration%60)

}

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
    playA.classList.remove('fa-play-circle')
    playA.classList.add('fa-pause')


}
// pause
function pauseSong(){
    track.pause()
    playingSong = false
    play.classList.remove('fa-pause')
    play.classList.add('fa-play-circle')
    playA.classList.remove('fa-pause')
    playA.classList.add('fa-play-circle')

}

// next song
function nextSong (){
    if (indx < All_song.length-1){
        if (shufleM == 1){
            shufleMus()
            load_track(indx)
            playSong()    
        } else {
            indx += 1
            load_track(indx)
            playSong()    
        }
    } else {
        if (shufleM == 1){
            shufleMus()
            load_track(indx)
            playSong()    
        } else {
            indx = 0
            load_track(indx)
            playSong()
        }
    }
}
// prew song
function prewSong (){
    if (indx > 0){
        if (shufleM == 1){
            shufleMusB()
            load_track(indx)
            playSong()
        } else {
            
            indx -= 1
            load_track(indx)
            playSong()
        }
    } else {
        if (shufleM == 1){
            shufleMusB()
            load_track(indx)
            playSong()
        } else {      
            indx = All_song.length
            load_track(indx)
            playSong()
        }
    }

}

// -------SHUFLE LISTENER
shufle.addEventListener('click', shufleIt)
let shufleM = 0
let randM = 0
let sLibr = []
let bLibr = []
let xIndx = -1
let yIndx = -1

function shufleIt(){
    if(shufleM == 0){
        shufle.style.color = '#1DB954'
        shufleM = 1
        for (j=0; j < All_song.length; j++){
            randomM()
            while (sLibr.includes(randM) == true){
                randomM()
            }
            sLibr.push(randM)
            bLibr.unshift(randM)
        }
    } else {
        sLibr = []
        shufleM = 0
        shufle.style.color = '#b3b3b3'
    }
    console.log(sLibr)
    shufleMus()
    console.log(bLibr)
}
// shufle netx
function shufleMus(){
    xIndx = xIndx + 1
    console.log(xIndx)
    indx = sLibr[xIndx]
}
// shufle previous
function shufleMusB(){
    yIndx = yIndx + 1
    console.log(yIndx)
    indx = bLibr[yIndx]
}

function randomM(){
    randM = Math.floor(Math.random()*(All_song.length-0)+0)
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
                if (shufleM == 1){
                    shufleMus()
                    load_track(indx)
                    playSong()
                } else {
                    indx +=1
                    load_track(indx)
                    playSong()
                }
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
// Vol Change
function volChange(){
    track.volume = volume.value / 100
    trackVol = volume.value
    volume.style.background = `linear-gradient(to right, white, ${volume.value}%, #b3b3b3 0%)`
}

// repeat
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


// creating music librbry
const lists = document.querySelector('.play-list')
let songLeng = All_song.length
for (j=0; 0 < songLeng; j++){
    createList(j)
}

// active track
// listener


function activeTr (indx){
    thisTrack = document.querySelectorAll('.play-list-body')
}


