var dt = new Date();
var month_name = ["Jan", "Feb", "Mar", "Apr","May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov","Dec"];
document.getElementById("curr_date").innerHTML = dt.toDateString();

var x = dt.getMonth();
document.getElementById("curr_month").innerHTML = month_name[x];

var cells  ="";
for(i=1;i<=30;i++)
{
  cells += "<div>" + i +"</div>";
}

document.getElementsByClassName('dates')[0].innerHTML = cells;
