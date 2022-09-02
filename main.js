const learnMoreFirst = document.querySelector('.button-learn-1')
const learnMoreSecond = document.querySelector('.button-learn-2')
const learnMoreThird = document.querySelector('.button-learn-3')
const textPrimary = document.querySelector('.span-learn-more')
const textSecondary = document.querySelector('.span-learn-more-2')
const textTertiary = document.querySelector('.span-learn-more-3')

learnMoreFirst.addEventListener('click', function() {
    textPrimary.classList.toggle('show-more');
    if (learnMoreFirst.textContent === 'Lexo me shume')
    learnMoreFirst.textContent = 'Shfaq me pak'
    else learnMoreFirst.textContent = 'Lexo me shume'
})

learnMoreSecond.addEventListener('click', function() {
    textSecondary.classList.toggle('show-more');
    if (learnMoreSecond.textContent === 'Lexo me shume')
    learnMoreSecond.textContent = 'Shfaq me pak'
    else learnMoreSecond.textContent = 'Lexo me shume'
})

learnMoreThird.addEventListener('click', function() {
    textTertiary.classList.toggle('show-more');
    if (learnMoreThird.textContent === 'Lexo me shume')
    learnMoreThird.textContent = 'Shfaq me pak'
    else learnMoreThird.textContent = 'Lexo me shume'
})