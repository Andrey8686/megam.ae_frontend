const ScrollActivator = (selector, classNameList) => {
    let main = document.querySelector(selector)
    let scroll = document.querySelector('.scrollbar')

    if (!main)
        return

    let id = setInterval(() => {
        if (main.offsetTop + 300 < window.innerHeight + scroll.scrollTop) {
            classNameList.forEach(x => main.classList.add(x))
            clearInterval(id)
        }
    }, 100)
}

export default ScrollActivator
