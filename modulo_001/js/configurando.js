$(document).ready(function() {
    tailwind.config = {
        theme: {
            extend: {
                colors: {
                    padrao: '#4b6879',
                    titulo: '#f9b000',
                    separacao: '#f9b000',
                    laranja: '#fb6b1b',
                    selecionado: '#f9b000'
                },
                backgroundImage: {
                    firstPage: "url('../imagens/background.jpg')",
                    monitor: "url('../imagens/monitor.png')",
                    montanha: "url('../imagens/montanha.png')"
                },
                animation: {
                    'bounce-short': 'bounce 1s ease-in-out 1.5'
                }
            }
        }
    }    
});
