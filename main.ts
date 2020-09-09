let strip = neopixel.create(DigitalPin.P2, 24, NeoPixelMode.RGB)
strip.clear()
strip.range(0, 9).showRainbow(0, 255)
basic.pause(50)
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . . # . .
        . # . # .
        . . # . .
        . . . . .
        `)
    basic.pause(50)
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        . . # . .
        . . # . .
        `)
    basic.pause(50)
})
basic.forever(function () {
    strip.rotate(1)
    strip.show()
    basic.pause(50)
})
