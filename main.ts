input.onButtonPressed(Button.A, function () {
    radio.setGroup(13)
    basic.pause(1000)
    basic.showNumber(3)
})
input.onButtonPressed(Button.AB, function () {
    radio.setGroup(11)
    basic.pause(1000)
    basic.showNumber(1)
})
input.onButtonPressed(Button.B, function () {
    radio.setGroup(12)
    basic.pause(1000)
    basic.showNumber(2)
})
radio.onReceivedValue(function (name, value) {
    serial.writeValue(name, value)
    if (name.substr(0, 2) == "Li") {
        line = value
        LCD1IN8.DrawRectangle(
        2,
        25 * line - 3,
        28,
        25 * line + 10,
        LCD1IN8.Get_Color(LCD_COLOR.BLACK),
        DRAW_FILL.DRAW_FULL,
        DOT_PIXEL.DOT_PIXEL_1
        )
        LCD1IN8.DisString(
        2,
        25 * line,
        "L:" + ("" + value),
        value + 1500
        )
    }
    if (name.substr(0, 2) == "Pr") {
        LCD1IN8.DrawRectangle(
        35,
        25 * line - 3,
        69,
        25 * line + 10,
        LCD1IN8.Get_Color(LCD_COLOR.BLACK),
        DRAW_FILL.DRAW_FULL,
        DOT_PIXEL.DOT_PIXEL_1
        )
        LCD1IN8.DisString(
        28,
        25 * line,
        "P:" + ("" + value),
        LCD1IN8.Get_Color(LCD_COLOR.WHITE)
        )
    }
    if (name.substr(0, 2) == "Ri") {
        LCD1IN8.DrawRectangle(
        70,
        25 * line - 3,
        105,
        25 * line + 10,
        LCD1IN8.Get_Color(LCD_COLOR.BLACK),
        DRAW_FILL.DRAW_FULL,
        DOT_PIXEL.DOT_PIXEL_1
        )
        LCD1IN8.DisString(
        70,
        25 * line,
        "R:" + ("" + value),
        LCD1IN8.Get_Color(LCD_COLOR.WHITE)
        )
    }
    if (name.substr(0, 2) == "Te") {
        LCD1IN8.DrawRectangle(
        109,
        25 * line - 2,
        154,
        25 * line + 11,
        LCD1IN8.Get_Color(LCD_COLOR.BLACK),
        DRAW_FILL.DRAW_FULL,
        DOT_PIXEL.DOT_PIXEL_1
        )
        LCD1IN8.DisString(
        110,
        25 * line,
        "T=" + ("" + value),
        LCD1IN8.Get_Color(LCD_COLOR.WHITE)
        )
        if (value > 45) {
            LCD1IN8.DrawRectangle(
            108,
            25 * line - 3,
            155,
            25 * line + 12,
            LCD1IN8.Get_Color(LCD_COLOR.RED),
            DRAW_FILL.DRAW_FULL,
            DOT_PIXEL.DOT_PIXEL_1
            )
            LCD1IN8.DisString(
            110,
            25 * line,
            "T=" + ("" + value) + "!!",
            LCD1IN8.Get_Color(LCD_COLOR.WHITE)
            )
        }
    }
    LCD1IN8.LCD_Display()
})
let line = 0
led.setBrightness(15)
basic.showLeds(`
    # . . . .
    # . . . .
    # # # . #
    . . # # #
    . . # . #
    `)
LCD1IN8.LCD_Init()
LCD1IN8.DrawRectangle(
0,
0,
160,
129,
LCD1IN8.Get_Color(LCD_COLOR.BLACK),
DRAW_FILL.DRAW_FULL,
DOT_PIXEL.DOT_PIXEL_1
)
LCD1IN8.LCD_Display()
LCD1IN8.DrawRectangle(
1,
1,
158,
17,
LCD1IN8.Get_Color(LCD_COLOR.GRAY),
DRAW_FILL.DRAW_EMPTY,
DOT_PIXEL.DOT_PIXEL_1
)
LCD1IN8.DisString(
30,
3,
"WASH MONITOR",
LCD1IN8.Get_Color(LCD_COLOR.BLUE)
)
LCD1IN8.DisString(
31,
2,
"WASH MONITOR v2.3",
LCD1IN8.Get_Color(LCD_COLOR.WHITE)
)
LCD1IN8.DrawRectangle(
1,
20,
158,
40,
LCD1IN8.Get_Color(LCD_COLOR.BLUE),
DRAW_FILL.DRAW_EMPTY,
DOT_PIXEL.DOT_PIXEL_1
)
LCD1IN8.DrawRectangle(
1,
45,
158,
65,
LCD1IN8.Get_Color(LCD_COLOR.BLUE),
DRAW_FILL.DRAW_EMPTY,
DOT_PIXEL.DOT_PIXEL_1
)
LCD1IN8.DrawRectangle(
1,
70,
158,
90,
LCD1IN8.Get_Color(LCD_COLOR.BLUE),
DRAW_FILL.DRAW_EMPTY,
DOT_PIXEL.DOT_PIXEL_1
)
LCD1IN8.DrawRectangle(
1,
100,
158,
126,
LCD1IN8.Get_Color(LCD_COLOR.GREEN),
DRAW_FILL.DRAW_FULL,
DOT_PIXEL.DOT_PIXEL_1
)
LCD1IN8.DisString(
10,
107,
"STATUS:",
LCD1IN8.Get_Color(LCD_COLOR.BLACK)
)
LCD1IN8.LCD_Display()
radio.setGroup(13)
serial.redirectToUSB()
serial.setBaudRate(BaudRate.BaudRate115200)
basic.showNumber(3)
line = 3
basic.forever(function () {
    LCD1IN8.DrawRectangle(
    0,
    0,
    120,
    10,
    LCD1IN8.Get_Color(LCD_COLOR.BLACK),
    DRAW_FILL.DRAW_FULL,
    DOT_PIXEL.DOT_PIXEL_1
    )
    LCD1IN8.DrawRectangle(
    1,
    1,
    158,
    17,
    LCD1IN8.Get_Color(LCD_COLOR.GRAY),
    DRAW_FILL.DRAW_EMPTY,
    DOT_PIXEL.DOT_PIXEL_1
    )
    LCD1IN8.DisString(
    30,
    3,
    "WASH MONITOR",
    LCD1IN8.Get_Color(LCD_COLOR.BLUE)
    )
    LCD1IN8.DisString(
    31,
    2,
    "WASH MONITOR",
    LCD1IN8.Get_Color(LCD_COLOR.WHITE)
    )
    for (let index = 0; index <= 2; index++) {
        LCD1IN8.DrawRectangle(
        60,
        103,
        150,
        123,
        LCD1IN8.Get_Color(LCD_COLOR.BLACK),
        DRAW_FILL.DRAW_FULL,
        DOT_PIXEL.DOT_PIXEL_1
        )
        LCD1IN8.DisString(
        65,
        107,
        "                ",
        LCD1IN8.Get_Color(LCD_COLOR.WHITE)
        )
        LCD1IN8.DisString(
        65,
        107,
        "Check Line:" + ("" + (1 + index)),
        LCD1IN8.Get_Color(LCD_COLOR.GREEN)
        )
        LCD1IN8.LCD_Display()
        radio.setGroup(11 + index)
        basic.showNumber(1 + index)
        basic.pause(30000)
    }
})
