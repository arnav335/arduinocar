        const socket = io()
        const carsArr = []
        let selectedCar = null


        function toggleCommand(cmd) {
            carsArr[selectedCar][cmd] = !carsArr[selectedCar][cmd]
            console.log(carsArr[selectedCar][cmd])
            updateCommands()
        }

        function updateCommands() {
            socket.emit('command', selectedCar+1, carsArr[selectedCar])
        }

        socket.on('cars', (cars) => {
            console.log(cars)
            cars.forEach((e)=>{
                console.log(e)
                const carWrapper = document.querySelector('.cars')
                const element = document.createElement('div')
                element.classList.add('carElement')
                const span = document.createElement('span')
                span.innerText = 'CAR: '+e
                element.appendChild(span)
                carWrapper.appendChild(element)
                carsArr.push({'left': false, 'right': false, 'backward': false, 'forward': false})
                element.addEventListener('click',()=>{
                    selectedCar = e-1
                    console.log(e)
                })
            })
        })