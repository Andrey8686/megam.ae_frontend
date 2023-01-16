class ModalWindow {
    constructor() {
        this.items = document.querySelectorAll('.modal-window')
        this.buttons = document.querySelectorAll('[data-modal-target]')




        this.items.forEach(x => {

            x.querySelector('.modal-window__content-close').addEventListener('click', () => {
                x.classList.remove('show')
            })

            x.addEventListener('click', (e) => {
                e.target.classList.remove('show')
            })
        })

        this.buttons.forEach(x => {
            x.addEventListener('click', (e) => {
                this.Open(document.querySelector(e.target.getAttribute('data-modal-target')))
            })
        })




    }
    Open = (x) => x.classList.add('show')
    CloseAll = () => this.items.forEach(x => x.classList.remove('show'))
}

export default ModalWindow
