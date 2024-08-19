function CalcAge(birthDate){
    const today = new Date()
    const birth = new Date(birthDate)

    let years = today.getFullYear() - birth.getFullYear()
    let month = today.getMonth() - birth.getMonth()
    let days = today.getDate() - birth.getDate()


    if(days < 0){
        month--;
        days+= new Date(today.getFullYear(), today.getMonth(), 0).getDate()
    }

    if(month < 0){
        years--;
        month += 12
    }

    return{
        years: years,
        months: month,
        days: days
    }
}

function Calculadora(){
    
    // Pegar dados
    const day = document.getElementById('day').value
    const month = document.getElementById('month').value
    const year = document.getElementById('year').value

    const yourbirth = year+'-'+month+'-'+day

    const result = CalcAge(yourbirth)

    const yearSpan = document.getElementById('years-result')
    const daySpan = document.getElementById('days-result')
    const monthSpan = document.getElementById('mouths-result')

    const dayTitle = document.getElementById('day-title')
    const monthTitle = document.getElementById('month-title')
    const yearTitle = document.getElementById('year-title')
    const dayInput = document.getElementById('day')
    const monthInput = document.getElementById('month')
    const yearInput = document.getElementById('year')

    const erroDay = document.getElementById('erro-day')
    const erroMonth= document.getElementById('erro-month')
    const erroYear = document.getElementById('erro-year')
    

    if (Number.isNaN(result.days) || Number.isNaN(result.months)  || Number.isNaN(result.years)){
        dayTitle.classList.add('erro-span')
        monthTitle.classList.add('erro-span')
        yearTitle.classList.add('erro-span')

        dayInput.classList.add('input-erro')
        monthInput.classList.add('input-erro')
        yearInput.classList.add('input-erro')

        erroDay.classList.add('visible')
        erroMonth.classList.add('visible')
        erroYear.classList.add('visible')
    }else{

        dayTitle.classList.remove('erro-span')
        monthTitle.classList.remove('erro-span')
        yearTitle.classList.remove('erro-span')

        dayInput.classList.remove('input-erro')
        monthInput.classList.remove('input-erro')
        yearInput.classList.remove('input-erro')

        erroDay.classList.remove('visible')
        erroMonth.classList.remove('visible')
        erroYear.classList.remove('visible')

        daySpan.innerText = result.days
        monthSpan.innerText = result.months
        yearSpan.innerText = result.years
    }
    

}
