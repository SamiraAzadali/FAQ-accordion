let faqItems = document.querySelectorAll('.faq-questions');

faqItems.forEach(item => {
    let plus = item.querySelector('.plus');
    let minus = item.querySelector('.minus');
    let answer = item.querySelector('.answers');

    plus.addEventListener('click', () => {

        faqItems.forEach(items => {
            let otherAnswer = items.querySelector('.answers');
            let otherPlus = items.querySelector('.plus');
            let otherMinus = items.querySelector('.minus');

            otherAnswer.style.display = 'none';
            otherPlus.style.display = 'block';
            otherMinus.style.display = 'none';
        })

            answer.style.display = 'block';
            plus.style.display = 'none';
            minus.style.display = 'block';  
    })

    minus.addEventListener('click', () =>{
        answer.style.display = 'none';
        plus.style.display = 'block';
        minus.style.display = 'none';
    })
    
})
