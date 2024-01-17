"""Euler Spiral; based on https://www.youtube.com/watch?v=kMBj2fp52tA"""
import turtle
turtle.tracer(0, 0)

LIST_COLORS = [
    "#E06666",
    "#F6B26A",
    "#FFD966",
    "#94C47E",
    "#76A5AF",
    "#6E9EEB",
    "#6FA8DC",
    "#8E7DC3",
    "#C27BA0",
]


def hex_to_rgb(hex_value):
    return tuple(int(hex_value.lstrip('#')[i:i+2], 16) for i in (0, 2, 4))


def rgb_to_hex(rgb_value):
    return '#' + '%02x%02x%02x' % rgb_value

def between_rgbs(rgb1, rgb2, step_index, num_steps):
    r1, g1, b1 = rgb1
    r2, g2, b2 = rgb2

    d_r = (r2 - r1) / num_steps
    d_g = (g2 - g1) / num_steps
    d_b = (b2 - b1) / num_steps

    return (
        round(r1 + step_index * d_r),
        round(g1 + step_index * d_g),
        round(b1 + step_index * d_b)
    )

list_colors_full = [LIST_COLORS[0]]
for index, color in enumerate(LIST_COLORS):
    if index == len(LIST_COLORS) - 1:
        break

    hex1 = color
    hex2 = LIST_COLORS[index + 1]

    rgb1 = hex_to_rgb(hex1)
    rgb2 = hex_to_rgb(hex2)

    # Now we want some intermediate points.
    for step in range(16):
        c = between_rgbs(rgb1, rgb2, step + 1, 16)
        list_colors_full.append(rgb_to_hex(c))


print(len(list_colors_full))
print(list_colors_full)

# For shadow.
t2 = turtle.Turtle()
t2.speed(0)
t2.color(0.4, 0.4, 0.4)
t2.pensize(3.2)


t = turtle.Turtle()
# Set the speed to the fastest
t.speed(0)
t.pensize(4.0)

t2.penup()
t2.goto(2.4, -2.4)
t2.pendown()

turtle.bgcolor((0.1, 0.1, 0.05))

STEP_LENGTH = 8
TURN_DEG = 3.9
NUM_STEPS = 12000

t.penup()
t.goto(0, 0)
t.pendown()

TOTAL_TURN = 0

for i in range(NUM_STEPS):
    turn = TURN_DEG * i

    TOTAL_TURN += turn
    color_turn = TOTAL_TURN % 180
    color_turn = color_turn % len(list_colors_full)
    color = list_colors_full[int(color_turn)]
    r, g, b = hex_to_rgb(color)
    t.color(r/255, g/255, b/255)

    t.forward(STEP_LENGTH)
    t.right(turn)

    t2.forward(STEP_LENGTH)
    t2.right(turn)




turtle.done()




