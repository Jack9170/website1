sounds = ['applause', 'boo', 'DR GIGGLE', 'tada', 'victory', 'wait']

sounds.forEach(sound => {
    btn = document.createElement('button')
    btn.classList.add('btn')
    btn.innerText=sound
    btn.addEventListener('click', () => {
        document.getElementById(sound).play()
    })
    document.getElementById('button').appendChild(btn)
})



function stopSongs() {
    sounds.forEach(sound=> {
        song = document.getElementById(sound)
        song.pause()
        song.currentTime = 0
    })
}


