function calculateResult(){
    let n=document.getElementById("subjects").value;
    let total=0;
    for(let i=1; i<=n; i++){
        let marks= parseFloat(prompt("Enter marks for subject "+ i));
        total=total+marks;
    }
    let average = total/n;
    let grade;
    let result;
    let happiness;
    if(average>=90){
        grade="A+";
    }
    else if(average>=75){
        grade="A";
    }
    else if(average>=60){
        grade="B";
    }
    else if(average>=50){
        grade="C";
    }
    else{
        grade="F";
    }

    if(average>=40){
        result= "Pass";
    }
    else{
        result="Fail";
    }

    if(result=="Pass"){
        happiness="Hurray! You Clear the Exam 🎉🎉 ";
    }
    else{
        happiness="😟😔";
    }

    document.getElementById("result").innerHTML=
    "Total Marks : "+ total +"<br>" +
    "Average Marks : "+ average.toFixed(2)+ "<br>" +
    "Grade : "+ grade +"<br>" +
    "result : "+ result + "<br>"+
    happiness;

}