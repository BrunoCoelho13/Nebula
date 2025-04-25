function updateTime() {
    const time = new Date();
    const options = {
        timeZone: 'America/Sao_Paulo',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    };
    const formattedTime = time.toLocaleTimeString('pt-BR', options);
    document.getElementById("time").textContent = formattedTime;
}

document.addEventListener("DOMContentLoaded", () => {
    updateDay();
    updateTime();
    setInterval(updateTime, 1000);
});

function updateDay() {
    const date = new Date();
    const options = { 
        weekday: 'long', 
        timeZone: 'America/Sao_Paulo'
    };
    let dayName = date.toLocaleDateString('pt-BR', options);
    dayName = dayName.charAt(0).toUpperCase() + dayName.slice(1);
    document.getElementById("day").textContent = `| ${dayName}`;
}

document.addEventListener('DOMContentLoaded', function() {
    const diasSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
    const hoje = new Date();
    
    const elementosDias = document.querySelectorAll('.text-0');
    
    elementosDias.forEach((elemento, index) => {
        const data = new Date();
        data.setDate(hoje.getDate() + index);
        const diaSemana = diasSemana[data.getDay()]; 
        
        if (index === 0) {
            elemento.textContent = 'Hoje';
        } else if (index === 1) {
            elemento.textContent = 'Amanhã';
        } else {
            elemento.textContent = diaSemana;
        }
        
        const diaMes = data.getDate();
        const mes = data.toLocaleString('pt-BR', { month: 'short' }).toUpperCase();
        elemento.closest('.day_col').querySelector('.subtitle-m').textContent = `${diaMes} ${mes}.`;
    });
});