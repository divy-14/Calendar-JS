var dt = new Date();
var month_name = ["Jan", "Feb", "Mar", "Apr","May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov","Dec"];

function setReminder()
{
  console.log('hello');
}

function loadDate(){

  document.getElementById("curr_date").innerHTML = dt.toDateString();
  var x = dt.getMonth();
  document.getElementById("curr_month").innerHTML = month_name[x];


  dt.setDate(1);
  var m = dt.getDay();
  var endDate = new Date(
    dt.getFullYear(),
    dt.getMonth()+1,
    0
  ).getDate();

  var prevDate = new Date(
    dt.getFullYear(),
    dt.getMonth(),
    0
  ).getDate();  // to get the last date of the previous month

  var nextDate = new Date(
    dt.getFullYear(),
    dt.getMonth()+1
  ).getDate();

  //console.log(nextDate);

  var today = new Date();

  var cells  ="";

  var flag=0;
  for(x=m ; x>0;x--)
  {
    cells+= "<div class ='prevdate'>" + (prevDate - x + 1) + "</div>";
    flag++;
  }


  for(i=1;i<=endDate;i++)
  {
    if(i==today.getDate() && dt.getFullYear()== today.getFullYear() && dt.getMonth()== today.getMonth())
    {
      cells += "<div class='today'>" + i +"</div>";
      flag++;
    }
    else{
    cells += "<div class='currdate'>" + i +"</div>";
    flag++;
    }
  }

  //console.log(flag);
  if(flag<35)
  {

    for(z=0;z<35-flag;z++)
    {
      cells+= "<div class='prevdate'>" + (nextDate+z) +"</div>";
    }
  }

  document.getElementsByClassName('dates')[0].innerHTML = cells;
}


function changeMonth(para)
{
  if(para == 'prev')
  {
    dt.setMonth(dt.getMonth()-1);
  }
  else {
    dt.setMonth(dt.getMonth()+1)
  }
  loadDate();
}
