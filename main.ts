basic.forever(function () {
    basic.showIcon(IconNames.StickFigure)
    basic.pause(500)
    basic.showLeds(`
        # . # . .
        # # # # #
        . . # . .
        . # . # .
        # . . . #
        `)
})
