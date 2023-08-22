'use strict'

const outputDiv = document.getElementById('output')

const citiesSelect = document.getElementById('city_id')
citiesSelect.addEventListener('change', onCityChangeEventHandler)

const countriesSelect = document.getElementById('country_id')
countriesSelect.addEventListener('change', onCountriesChangeEventHandler)

function buildOption (value) {
    const option = document.createElement('option')
    option.setAttribute('value', value)
    option.appendChild(document.createTextNode(value))
    return option
}

function buildCountrieOptions () {
    // eslint-disable-next-line no-undef
    Object.keys(COUNTRIES).forEach(function (countrie) {
        const option = buildOption(countrie)
        countriesSelect.appendChild(option)
    })
}

function onCountriesChangeEventHandler (event) {
    // Retire tout les éléments option
    citiesSelect.innerHTML = null

    // eslint-disable-next-line no-undef
    COUNTRIES[event.target.value].forEach(function (city) {
        const option = buildOption(city)
        citiesSelect.appendChild(option)
    })
}

function onCityChangeEventHandler (event) {
    outputDiv.innerHTML = event.target.value
}

buildCountrieOptions()
