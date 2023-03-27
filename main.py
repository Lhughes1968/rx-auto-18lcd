def on_button_pressed_a():
    radio.set_group(13)
    basic.pause(1000)
    basic.show_number(3)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    radio.set_group(11)
    basic.pause(1000)
    basic.show_number(1)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    radio.set_group(12)
    basic.pause(1000)
    basic.show_number(2)
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_received_value(name, value):
    global line
    serial.write_value(name, 0)
    if name.substr(0, 2) == "Li":
        line = value
        LCD1IN8.draw_rectangle(2,
            25 * line - 3,
            30,
            25 * line + 10,
            LCD1IN8.Get_Color(LCD_COLOR.BLACK),
            DRAW_FILL.DRAW_FULL,
            DOT_PIXEL.DOT_PIXEL_1)
        LCD1IN8.dis_string(2, 25 * line, "L:" + str(value), value * 1500)
    if name.substr(0, 2) == "Pr":
        LCD1IN8.draw_rectangle(35,
            25 * line - 3,
            90,
            25 * line + 10,
            LCD1IN8.Get_Color(LCD_COLOR.BLACK),
            DRAW_FILL.DRAW_FULL,
            DOT_PIXEL.DOT_PIXEL_1)
        LCD1IN8.dis_string(35,
            25 * line,
            "Bar:" + str(value),
            LCD1IN8.Get_Color(LCD_COLOR.WHITE))
    if name.substr(0, 2) == "Te":
        LCD1IN8.draw_rectangle(95,
            25 * line - 3,
            155,
            25 * line + 10,
            LCD1IN8.Get_Color(LCD_COLOR.BLACK),
            DRAW_FILL.DRAW_FULL,
            DOT_PIXEL.DOT_PIXEL_1)
        LCD1IN8.dis_string(95,
            25 * line,
            "T=" + str(value),
            LCD1IN8.Get_Color(LCD_COLOR.WHITE))
        if value > 45:
            music.play_tone(262, music.beat(BeatFraction.WHOLE))
            LCD1IN8.dis_string(95,
                25 * line,
                "T=" + str(value) + "WRN",
                LCD1IN8.Get_Color(LCD_COLOR.RED))
    LCD1IN8.LCD_Display()
radio.on_received_value(on_received_value)

line = 0
led.set_brightness(15)
basic.show_leds("""
    # . . . .
        # . . . .
        # # # . #
        . . # # #
        . . # . #
""")
LCD1IN8.LCD_Init()
LCD1IN8.draw_rectangle(0,
    0,
    160,
    129,
    LCD1IN8.Get_Color(LCD_COLOR.BLACK),
    DRAW_FILL.DRAW_FULL,
    DOT_PIXEL.DOT_PIXEL_1)
LCD1IN8.LCD_Display()
LCD1IN8.dis_string(30, 0, "WASH MONITOR", LCD1IN8.Get_Color(LCD_COLOR.WHITE))
LCD1IN8.draw_line(30,
    13,
    120,
    13,
    LCD1IN8.Get_Color(LCD_COLOR.RED),
    DOT_PIXEL.DOT_PIXEL_2,
    LINE_STYLE.LINE_SOLID)
LCD1IN8.draw_rectangle(1,
    20,
    158,
    40,
    LCD1IN8.Get_Color(LCD_COLOR.BLUE),
    DRAW_FILL.DRAW_EMPTY,
    DOT_PIXEL.DOT_PIXEL_1)
LCD1IN8.draw_rectangle(1,
    45,
    158,
    65,
    LCD1IN8.Get_Color(LCD_COLOR.BLUE),
    DRAW_FILL.DRAW_EMPTY,
    DOT_PIXEL.DOT_PIXEL_1)
LCD1IN8.draw_rectangle(1,
    70,
    158,
    90,
    LCD1IN8.Get_Color(LCD_COLOR.BLUE),
    DRAW_FILL.DRAW_EMPTY,
    DOT_PIXEL.DOT_PIXEL_1)
LCD1IN8.draw_rectangle(1,
    100,
    158,
    126,
    LCD1IN8.Get_Color(LCD_COLOR.BLUE),
    DRAW_FILL.DRAW_EMPTY,
    DOT_PIXEL.DOT_PIXEL_1)
LCD1IN8.dis_string(10, 107, "STATUS:", LCD1IN8.Get_Color(LCD_COLOR.YELLOW))
LCD1IN8.LCD_Display()
radio.set_group(13)
serial.redirect_to_usb()
serial.set_baud_rate(BaudRate.BAUD_RATE115200)
basic.show_number(3)
line = 3

def on_forever():
    LCD1IN8.draw_rectangle(0,
        0,
        125,
        10,
        LCD1IN8.Get_Color(LCD_COLOR.BLACK),
        DRAW_FILL.DRAW_FULL,
        DOT_PIXEL.DOT_PIXEL_1)
    LCD1IN8.dis_string(30, 0, "WASH MONITOR", LCD1IN8.Get_Color(LCD_COLOR.WHITE))
    for index in range(3):
        basic.show_number(1 + index)
        LCD1IN8.draw_rectangle(60,
            103,
            150,
            123,
            LCD1IN8.Get_Color(LCD_COLOR.BLACK),
            DRAW_FILL.DRAW_FULL,
            DOT_PIXEL.DOT_PIXEL_1)
        LCD1IN8.dis_string(60,
            107,
            "              ",
            LCD1IN8.Get_Color(LCD_COLOR.WHITE))
        LCD1IN8.dis_string(60,
            107,
            "Checking:" + str((1 + index)),
            LCD1IN8.Get_Color(LCD_COLOR.GRAY))
        LCD1IN8.LCD_Display()
        radio.set_group(11 + index)
        basic.pause(12000)
basic.forever(on_forever)
