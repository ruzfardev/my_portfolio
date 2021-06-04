function calcBMI(){
    const weight = document.getElementById("weight").value;
    const height = document.getElementById('height').value;
    const result = weight / (height * height);
    const result1 = (result.toFixed(1));  
    document.getElementById('output').innerHTML = 'Your BMI is ' + result1; 
    if (result1 < 18.5){
        document.getElementById('anylize').innerHTML = 'Your are underweight &#128528;';
    }else if (result1 >=18.5 && result1 < 24.9){
        document.getElementById('anylize').innerHTML = 'Your BMI is ideal &#9989;';
    }else if (result1 >= 25 && result1 < 29.9){
        document.getElementById('anylize').innerHTML = 'Your are overweight &#9940;'
    }else if (result1 >= 30){
        document.getElementById('anylize').innerHTML = 'Your are obese &#10060;'
    }
}
function inputFocus(){ 
    height.insertAdjacentHTML('afterend', "<p>Enter your weight in kilograms and height in meters</p>");
    const removal = document.querySelector("p");
    removal.style.cssText = 'color: red; font-size: 12px';
    removal.insertAdjacentHTML('afterbegin', '<span> &#9888; </span>')
}
function inputBlur (){
    const removal = document.querySelector("p");
    removal.remove();
}
height.onfocus = inputFocus;
weight.onfocus = inputFocus;
height.onblur = inputBlur;
weight.onblur = inputBlur;

