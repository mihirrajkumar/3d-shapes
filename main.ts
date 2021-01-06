basic.forever(function () {
    basic.showNumber(3)
    basic.showString("d shapes")
    basic.showString("cube")
    basic.showLeds(`
        . # # # #
        # . # . #
        # # # # #
        # . # . #
        # # # # .
        `)
    basic.showString("cuboid")
    basic.showLeds(`
        . # # # #
        # # . . #
        # # # # #
        # . . # .
        # # # # #
        `)
    basic.showString("octhehedron")
    basic.showLeds(`
        . . # . .
        . # . # .
        # # # # #
        . # . # .
        . . # . .
        `)
    basic.showString("tetrehedron")
    basic.showLeds(`
        . . . . .
        # # # # #
        # . # . #
        . # # # .
        . . # . .
        `)
    basic.showString("pyramid")
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        # # # # #
        . . . . .
        `)
    basic.showString("doddecahedron")
    basic.showLeds(`
        . # . # .
        # . # . #
        . # . # .
        # # # # #
        . # . # .
        `)
    basic.showString(" prism")
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        # . # . #
        # # # # #
        `)
    basic.showString("cylinder")
    basic.showLeds(`
        . # # # .
        # # # # #
        # . . . #
        # # # # #
        . # # # .
        `)
    basic.showString("sphere")
    basic.showLeds(`
        . # # # .
        # # # # #
        # # # # #
        # # # # #
        . # # # .
        `)
    basic.showString("hemi-sphere")
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        # # # # #
        . # # # .
        `)
    basic.showString("ellipsoid")
    basic.showLeds(`
        . . # . .
        . # # # .
        . # # # .
        . # # # .
        . . # . .
        `)
    basic.showString("cone")
    basic.showLeds(`
        . . # . .
        . # . # .
        . # # # .
        # . . . #
        . # # # .
        `)
    basic.pause(100)
})
