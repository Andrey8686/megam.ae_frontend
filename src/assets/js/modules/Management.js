class Management {
    constructor() {
        this.items = document.querySelectorAll('.management-block__item')

        this.items.forEach(x => {
            let btn = x.querySelector('.management-block__item-button')
            let btnClose = x.querySelector('.management-block__item-description-btn-close')
            btn.addEventListener('click', () => {
                if (x.classList.contains('show-description'))
                    this.Close(x)
                else
                    this.Open(x)
            })
            btnClose.addEventListener('click', () => this.Close(x))
        })
    }
    Open = (item) => item.classList.add('show-description')
    Close = (item) => item.classList.remove('show-description')
}

export default Management
