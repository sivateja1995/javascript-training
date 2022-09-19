

// function for the converting into the temperature to the kelvin
const convertToKelvin = function () {
    const measurement = {
        type: 'temperature',
        unit: 'celsius',
        value: Number(prompt('degree celsius'))
    }

    const kelvin = measurement.value + 273;
    return kelvin;
}


console.log(convertToKelvin());