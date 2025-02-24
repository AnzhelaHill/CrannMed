document.addEventListener("DOMContentLoaded", function(){
    const buttons = document.querySelectorAll('.buttons-expect button')
    const contents = document.querySelectorAll('.tab-content')
    
    const ChangeInfo = (e) => {
        buttons.forEach(item => {
            item.classList.remove('active')
            if(e.target == item){
                item.classList.toggle('active')
                contents.forEach(item => {
                    item.classList.toggle('active')
                })
            }
        })
    }

    document.addEventListener('click', ChangeInfo)
})