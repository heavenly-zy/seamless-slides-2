let $buttons = $('#menu>ul>#menuItem')
let $slides = $('#slides')
let $images = $slides.children('img')
let current = 0


makeFakeSlides()
$slides.css({ transform: 'translateX(-920px)' })
bindEvents()



function makeFakeSlides() {
    // 把#slides中第一张和最后一张图片克隆
    let $firstCopy = $images.eq(0).clone(true)
    let $lastCopy = $images.eq($images.length - 1).clone(true)
    // 将克隆的两张图片分别追加到#slides的首尾
    $slides.append($firstCopy)
    $slides.prepend($lastCopy)
}

function bindEvents() {
    $buttons.eq(0).on('click', function () {
        if (current == 3) {
            console.log('从最后一张到第一张')
            $slides.css({ transform: 'translateX(-4600px)' })
                .one('transitionend', function () {
                    $slides.hide()
                        .offset()
                    $slides.css({ transform: 'translateX(-920px)' })
                        .show()
                })
        } else {
            $slides.css({ transform: 'translateX(-920px)' })
        }
        current = 0
    })
    $buttons.eq(1).on('click', function () {
        $slides.css({ transform: 'translateX(-1840px)' })
        current = 1
    })
    $buttons.eq(2).on('click', function () {
        $slides.css({ transform: 'translateX(-2760px)' })
        current = 2
    })
    $buttons.eq(3).on('click', function () {
        if (current == 0) {
            console.log('从第一张到最后一张')
            $slides.css({ transform: 'translateX(0px)' })
                .one('transitionend', function () {
                    $slides.hide()
                        .offset()
                    $slides.css({ transform: 'translateX(-3680px)' })
                        .show()
                })
        } else {
            $slides.css({ transform: 'translateX(-3680px)' })
        }
        current = 3
    })
}
