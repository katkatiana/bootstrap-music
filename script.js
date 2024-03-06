var firstSong = new Audio ('./sounds/keane.mp3')
var secondSong = new Audio ('./sounds/the_killers.mp3')
var thirdSong = new Audio ('./sounds/de_gregori.mp3')
var fourthSong = new Audio ('./sounds/linkin_park.mp3')
var fifthSong = new Audio ('./sounds/rezzacapa.mp3')
var sixthSong = new Audio ('./sounds/bowie.mp3')
const allSongs = document.querySelectorAll(".songs")


function playMusic() {
    let selectedSong
    const clickedButton = event.target;

    if(clickedButton === allSongs[0]) {
        selectedSong = firstSong;
    } else if (clickedButton === allSongs[1]) {
        selectedSong = secondSong;
    } else if (clickedButton === allSongs[2]) {
        selectedSong = thirdSong;
    } else if (clickedButton === allSongs[3]) {
        selectedSong = fourthSong;
    } else if (clickedButton === allSongs[4]) {
        selectedSong = fifthSong;
    } else if (clickedButton === allSongs[5]) {
        selectedSong = sixthSong;
        allSongs[5].innerText = "⏸️";
    }

    if (selectedSong) {
        if(selectedSong.paused) {
            selectedSong.play()
        } else {
            selectedSong.pause()
            selectedSong.currentTime = 0;
            for(let i = 0; i < allSongs.length; i++) {
                allSongs[i].innerText = "▶️"
            }
           
        }
    }
    
    }
  


for (let i = 0; i < allSongs.length; i++){
    allSongs[i].addEventListener("click", playMusic)
}

