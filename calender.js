var day=document.getElementById("day")
var month1=document.getElementById("month")
var year=document.getElementById("year")
var date1=document.getElementById("date")
 
var date=new Date();
var month=date.getMonth()
month1.innerText=date.toLocaleString("en",{
    month:"long"
})

day.innerText =date.toLocaleString("en",{
    weekday:"long"
})

date1.innerText=date.getDate()

year.innerText=date.getFullYear()