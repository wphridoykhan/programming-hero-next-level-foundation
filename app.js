const height = process.argv[2] //Feet
const weight = process.argv[3]

const HeightToMeters = height * 0.3048 // Convert Feet to Meters

function BmiCalculator(HeightToMeters, weight ) {
   const bmi = weight/ (HeightToMeters*HeightToMeters)
   return bmi;
}

const BmiScore = BmiCalculator(HeightToMeters, weight)

let BmiCategory = ""

if(BmiScore < 18.5){
    BmiCategory = "Underweight"
}else if(BmiScore < 25){
    BmiCategory = "Normal"
}else if(BmiScore < 30){
    BmiCategory = "Overweight"
}else {
    BmiCategory = "Obese"
}
    
const bmiDisplay = `Your Bmi Score is ${BmiScore.toFixed(1)} and its ${BmiCategory}`


console.log(bmiDisplay)


