let $buttons = $('#menu>ul>#menuItem')
let $slides = $('#slides')
let $images = $slides.children('img')
let current = 1


makeFakeSlides()
$slides.css({ transform: 'translateX(-920px)' })
bindEvents()

$('#previous').on('click', function () {
    goToSlides(current - 1)
})
$('#next').on('click', function () {
    goToSlides(current + 1)
})

const timer2 = autoPlay()
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        window.clearInterval(timer2)
    } else {
        autoPlay()
    }
})






// 工具函数
function autoPlay() {
    let timer = setInterval(function () {
        goToSlides(current + 1)
    }, 4000)
    $('.gallery').on('mouseenter', function () {
        window.clearInterval(timer)
    }).on('mouseleave', function () {
        timer = setInterval(function () {
            goToSlides(current + 1)
        }, 4000)
    })
    return timer
}

function makeFakeSlides() {
    // 把#slides中第一张和最后一张图片克隆
    let $firstCopy = $images.eq(0).clone(true)
    let $lastCopy = $images.eq($images.length - 1).clone(true)
    // 将克隆的两张图片分别追加到#slides的首尾
    $slides.append($firstCopy)
    $slides.prepend($lastCopy)
}

function bindEvents() {
    $('#menu>ul').on('click', '#menuItem', function (e) { // 事件委托
        let $li = $(e.currentTarget)
        let index = $li.index()
        goToSlides(index)
    })
}

function goToSlides(index) {
    if (index > $buttons.length) {
        index = 1
    } else if (index < 1) {
        index = $buttons.length
    }
    console.log('current', 'index')
    console.log(current, index)
    if (current === $buttons.length && index === 1) {
        console.log('从最后一张到第一张')
        $slides.css({ transform: `translateX(${-($buttons.length + 1) * 920}px)` })
            .one('transitionend', function () {
                $slides.hide()
                    .offset()
                $slides.css({ transform: `translateX(${-(index) * 920}px)` })
                    .show()
            })
    } else if (current === 1 && index === $buttons.length) {
        console.log('从第一张到最后一张')
        $slides.css({ transform: 'translateX(0px)' })
            .one('transitionend', function () {
                $slides.hide()
                    .offset()
                $slides.css({ transform: `translateX(${-(index) * 920}px)` })
                    .show()
            })
    } else {
        console.log('普通的切换')
        $slides.css({ transform: `translateX(${-(index) * 920}px)` })
    }
    current = index
}