window.addEventListener("DOMContentLoaded", FetchData)
const adviceID = document.querySelector('.advice-id')
const adviceBody = document.querySelector('.advice-body')
const dice = document.querySelector('.dice')

async function FetchData () {
    const response = await fetch("https://api.adviceslip.com/advice")
    const json = await response.json();
    console.log(json);
    adviceID.innerHTML = `ADVICE #${json.slip.id}`
    adviceBody.innerHTML = `"${json.slip.advice}"`
}
dice.addEventListener('click', FetchData)