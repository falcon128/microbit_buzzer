let x = 0
input.onButtonPressed(Button.A, function () {
    if (x == 1) {
        x = 0   
    } else {
        x = 1
    }
})


basic.forever(function () {
    while (x == 1) {
        music.ringTone(262)
        basic.pause(100)
        music.ringTone(330)
        basic.pause(100)
        music.ringTone(392)
        basic.pause(100)
        music.ringTone(330)
        basic.pause(100)
    }
    music.stopAllSounds()
})
