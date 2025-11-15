let number = document.querySelectorAll('.number');
let input = document.getElementById('input');
let eye = document.getElementById('eye');
let deletes = document.getElementById('delete');
let checks = document.getElementById('check');
let pinInput = document.getElementById('pinInput');

// New Element
const alertBox = document.createElement('div');
eye.onclick = () => {
    if (input.type == "password") {
        input.type = "text";
    } else {
        input.type = "password";
    }
}

for (const key of number) {
    key.addEventListener('click', () => {
        input.value += key.textContent.trim();
    })
}

deletes.addEventListener('click', () => {
    input.value = "";
})

checks.addEventListener('click', () => {
    const inputValue = input.value;
    if (inputValue.length == 4) {
        // alert('Access Granted');
        pinInput.style.backgroundColor = '#a4e98b';
        document.getElementById('container').style.display = 'none';
        alertBoxFunc();
    }
});
function alertBoxFunc() {
    alertBox.textContent = "Access Granted";
    alertBox.style.backgroundColor = '#a4e98b';
    alertBox.style.padding = '20px';
    alertBox.style.width = '200px';
    alertBox.style.textAlign = 'center';
    alertBox.style.color = 'white';
    alertBox.style.fontFamily = 'acidic';
    alertBox.style.letterSpacing = '5px';
    alertBox.style.borderRadius = '10px';
    alertBox.style.fontSize = '10px';
    
    

}



document.body.appendChild(alertBox);
