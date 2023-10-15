input.onButtonPressed(Button.A, function () {
    geluidsterkte += -10
})
input.onButtonPressed(Button.B, function () {
    geluidsterkte += 10
})
let geluidsterkte = 127
basic.forever(function () {
    music.ringTone(587)
    if (geluidsterkte > 200) {
        basic.showIcon(IconNames.Happy)
    } else if (geluidsterkte > 120) {
        basic.showIcon(IconNames.Surprised)
    } else if (geluidsterkte > 50) {
    	
    } else {
    	
    }
})
