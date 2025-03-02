document.addEventListener("DOMContentLoaded", function(){
    const buttonsArea = document.querySelector('.buttons-expect')
    const buttons = document.querySelectorAll('.buttons-expect button')
    const contents = document.querySelectorAll('.tab-content')
    const faqItemAll = document.querySelectorAll(".faq-item")
    
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
    const OpenAnswer = (e) => {
        faqItemAll.forEach(item => {
            const faqAnswer = item.querySelector('.faq-answer')
            const faqQuestion = item.querySelector('.faq-question')
            const iQuestion = faqQuestion.querySelector('.fa-solid')
            const pQuestion = faqQuestion.querySelector('p')

            const OpenList = () => {
                faqAnswer.style.maxHeight = "400px"
                faqQuestion.style.backgroundColor = "#20c7c7"
                faqQuestion.style.borderColor = "#20c7c7"
                iQuestion.style.rotate = "180deg"
            }
            const CloseList = () => {
                faqAnswer.style.maxHeight = "0px"
                faqQuestion.style.backgroundColor = "#fff"
                faqQuestion.style.borderColor = "var(--main-color)"
                iQuestion.style.rotate = "0deg"
            }
            if(e.target == faqQuestion || e.target == iQuestion || e.target == pQuestion) {
                faqQuestion.classList.toggle('hover')
                faqAnswer.classList.toggle('active')
                if (faqAnswer.classList.contains('active')) {
                    OpenList()
                } else {
                    CloseList()
                }
            } else {
                faqQuestion.classList.remove('hover')
                faqAnswer.classList.remove('active')
                CloseList()
            }    
            if (!faqQuestion.classList.contains('hover')) {
                faqQuestion.addEventListener('mouseover', () => {
                    faqQuestion.style.backgroundColor = '#20c7c727'
                })  
                faqQuestion.addEventListener('mouseout', () => { 
                    faqQuestion.style.backgroundColor = '#fff'
                })
            } else {
                faqQuestion.addEventListener('mouseover', () => {
                    faqQuestion.style.backgroundColor = '#20c7c7'
                })  
                faqQuestion.addEventListener('mouseout', () => { 
                    faqQuestion.style.backgroundColor = '#20c7c7'
                })
            }
            
        }
    )}

    buttonsArea.addEventListener('click', ChangeInfo)
    document.addEventListener('click', OpenAnswer)
})