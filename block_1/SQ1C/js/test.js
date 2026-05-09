let counter = 42;

function clickButton(event) {
    
    document.getElementById('ausgabe').innerHTML = event.target.innerHTML

    console.log("I've been clicked: "+event.target.innerHTML)
    counter++;
    console.log("Counter test.js: "+counter);
}

let buttons = document.getElementsByTagName('button')
for (let i = 0; i < buttons.length; i++){
    buttons[i].onclick = clickButton
}
