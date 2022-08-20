document.getElementById('button').addEventListener('click', getAgeResult)
document.getElementById('ofAge').style.display = 'none'
document.getElementById('underAge').style.display = 'none'

function getAgeResult(){
    const userAge = document.querySelector('input').value
    console.log(userAge)

    if (userAge >= 18) {
        document.querySelector('#ofAge').style.display = 'block'

    }
    else {
        document.querySelector('#underAge').style.display = 'block'
        document.querySelector('#ofAge').style.display = 'none'
    }

}

