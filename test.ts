// import player from 'play-sound'

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
(async () => {
    console.log('start sleeping 1sec')
    await sleep(1000)
    console.log('start playing song')
    await playSong()
})()


async function playSong() {
    var player = require('play-sound')();
    player.play('wakeUp.mp3', function (err) {
        if (err) throw err
    })
}
