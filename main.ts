input.onButtonPressed(Button.A, function () {
    basic.showNumber(numero)
    numero += 1
})
input.onButtonPressed(Button.AB, function () {
    texto = "tiene cabeza y tiene cola"
    basic.showString(texto)
})
input.onButtonPressed(Button.B, function () {
    numero += -1
    basic.showNumber(numero)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showString(texto)
})
let numero = 0
let texto = ""
texto = "la vaca lola, la vaca lola "
numero += 1
