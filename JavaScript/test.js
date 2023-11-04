var quation = [
    {Q:"sin θ + cos θ = ? (A) 0.5 (B) 1 (C) 1.5",A:"B"},
    {Q:"sin θ + cos θ = ? (A) 0.5 (B) 1 (C) 1.5",A:"B"},
    {Q:"sin θ + cos θ = ? (A) 0.5 (B) 1 (C) 1.5",A:"B"}
]
var score = 0
for (var i=0;i<3;i++){
    inputAnswer = prompt(quation[i].Q)
    if (inputAnswer == quation[i].A){
        score++
        alert("you right")
    }
    else {
        alert("you wrong")
    }
}
alert("your finally score is"+ score)