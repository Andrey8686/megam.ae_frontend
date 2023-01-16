class Header {
    constructor() {
        this.header = document.querySelector('header')
        this.footer = document.querySelector('footer')

        setInterval(() => {
            this.Resizer()
        }, 100)


        // window.addEventListener('resize', (e) => {
        //     this.Resizer()
        // })
    }

    Resizer = () => {
        this.header.style.paddingRight = `${this.header.offsetWidth - this.footer.offsetWidth}px`
    }
}

export default Header
