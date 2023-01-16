class MobMenu {
    constructor() {
        this.Init()
    }

    Init = () => {
        this.body = document.querySelector('body')
        this.btn = document.querySelector('.mob-menu__btn')
        this.active = false

        this.btn.addEventListener('click', (e) => {
            if (window.innerWidth > 992)
                return

            if (this.active) {
                this.Close()
            } else {
                this.Open()
            }
        })

        window.addEventListener('resize', (e) => {
            if (this.active === true && window.innerWidth > 992)
                this.Close()
        })
    }

    Open = () => {
        this.body.classList.add('open-mob-menu')
        this.active = true
    }

    Close = () => {
        this.body.classList.remove('open-mob-menu')
        this.active = false
    }
}

export default MobMenu
