const screen = document.querySelector('.calc-screen');

//представляем кнопки как массив
let buttons = Array.from(document.querySelectorAll('.btn'));

// используем метод map, чтобы выводить текст с кнопки в консоль
buttons.map((button) => {
    button.addEventListener('click', (event) => {
        switch (event.target.innerText) {
            case 'AC': //сброс
                screen.innerText = '0'
                break

            case '.': //точка
                if (screen.innerText === '0'){ //если точка перед первым 0
                    screen.innerText = '0.'
                } else {
                    screen.innerText.includes('.')
                    ? screen.innerText
                    :screen.innerText += event.target.innerText
                }
                break

            case '%': //вычисление 1%
                let procent = screen.innerText + '/100'
                screen.innerText = eval(procent)
                break

            case '+/-': //+/-
                screen.innerText.includes('-')
                    ? screen.innerText = screen.innerText.slice(1)
                    :screen.innerText = '-' + screen.innerText
                    break

            case '=':
                try {
                    screen.innerText = eval(screen.innerText)
                } catch(error) {
                    screen.innerText = 'Error'
                }
                break

            default:
                if (screen.innerText === '0') {
                    screen.innerText = event.target.innerText;
                }
                else {
                    screen.innerText += event.target.innerText;
                }

        }

    })
})
