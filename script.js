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

    console.log(`Você tem ${result.years} anos, ${result.months} meses e ${result.days} dias.`);

    const yearSpan = document.getElementById('years-result')
    const daySpan = document.getElementById('days-result')
    const monthSpan = document.getElementById('mouths-result')

    daySpan.innerText = result.days
    monthSpan.innerText = result.months
    yearSpan.innerText = result.years

}
