class NumberRunner {
    constructor(mainBlock) {
        this.mainBlock = document.querySelector(mainBlock)
        if (this.mainBlock)
            this.items = this.mainBlock.querySelectorAll('.number-runner')

        if (this.items) {
            let idInterval = setInterval(() => {
                if (this.mainBlock.classList.contains('number-runner-start')) {
                    this.Start()
                    clearInterval(idInterval)
                }
            }, 100)
        }

    }

    Start = () => {
        this.items.forEach(x => {
            let endValue = parseInt(x.innerText.replace(/\D/, ''))
            let pattern = x.getAttribute('data-pattern')
            let step = parseInt(x.getAttribute('data-step'))
            let speed = parseInt(x.getAttribute('data-speed'))
            let i = 0
            let value = 0

            x.innerText = pattern.replaceAll(/(#+)/g, '0')

            let id = setInterval(() => {
                i += step
                value = i > endValue ? endValue : i

                let build = pattern

                for (let i2 = value.toString().length; i2 > 0; i2--) {
                    build = build.substring(0, build.lastIndexOf('#'))
                        + value.toString()[i2 - 1]
                        + build.substring(build.lastIndexOf('#') + 1)
                }

                build = build.replaceAll('#,', '0,')

                x.innerText = build.replaceAll('#', '')

                if (i > endValue)
                    clearInterval(id)
            }, speed)
        })

    }
}

export default NumberRunner
