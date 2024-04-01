
const weightVar = document.getElementById('weightVar');
const ageVar = document.getElementById('ageVar');
const heightVar = document.getElementById('heightVar');

const bmiResult = document.getElementById('bmi-result');
const bmiVerdict = document.getElementById('bmi-verdict');
const bmiNote = document.getElementById('bmi-note');

const verdictSuggestion = document.getElementById('verdict-suggestion');


let weight, age, height;
var resultVar = null;

function GetValue(){

    if(weightVar.value != ''){
        weight = weightVar.value;
        console.log(weight);
    }
    
    if(ageVar.value != ''){;
        age = ageVar.value
        console.log(age);
    }
    
    if(heightVar.value != ''){
        height = heightVar.value;
        console.log(height);
    }

}


function CalculateBMI(){

    GetValue();


    if(weight != null || height != null){

        let heightMeter = height/100;
        console.log(heightMeter);

        resultVar = weight/(heightMeter*heightMeter);

        console.log(resultVar.toFixed(1));

        bmiResult.textContent = resultVar.toFixed(1);
        bmiVerdict.textContent = interpretationBMI();
    }
    else{
        console.log('Missing Input');

        return 0;
    }
}


function interpretationBMI(){
    if(resultVar < 18.5){
        bmiNote.textContent = 'You are Underweight'
        verdictSuggestion.textContent = 'You are in the underweight category excessive. The best way to gain weight is to regulate the calories of food consumed and exercise. If your BMI is in this category then you are advised to increase your weight to normal.'
        return 'Underweight';
    }
    
    else if(resultVar < 24.9){
        bmiNote.textContent = 'You are Ideal'
        verdictSuggestion.textContent = 'You are in the ideal category. Keep the good work! . If your BMI is in this category it mean you doing great maintaining your weight.'
        return 'Ideal';
    }

    else if(resultVar < 29.9){
        bmiNote.textContent = 'You are Overweight'
        verdictSuggestion.textContent = 'You are in the overweight category excessive. The best way to lose weight is to regulate the calories of food consumed and exercise. If your BMI is in this category then you are advised to reduce your weight to normal.'
        return 'Overweight';
    }
    else{
        bmiNote.textContent = 'You are Obese'
        verdictSuggestion.textContent = 'You are in the Obese category. The best way to lose weight is to regulate the calories of food consumed and exercise. If your BMI is in this category then you are advised to reduce  your weight to normal.'
        return 'Obesity';
    }
}