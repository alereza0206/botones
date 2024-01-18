input.onButtonPressed(Button.A, function () {
    basic.showString("hello World ")
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # . # .
        . . # . .
        `)
    music.play(music.builtinPlayableSoundEffect(soundExpression.giggle), music.PlaybackMode.UntilDone)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . . . # #
        . . . # .
        . . # # .
        . # # # .
        . . # . .
        `)
    music.play(music.stringPlayable("G F G A - F E D ", 120), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(randint(1, 6))
})
for (let index = 0; index < 999999999999; index++) {
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
}
