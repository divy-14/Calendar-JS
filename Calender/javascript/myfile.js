var dt = new Date();
let x = new Array(12*200);

var month_name = ["Jan", "Feb", "Mar", "Apr","May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov","Dec"];
document.getElementById("curr_date").innerHTML = dt.toDateString();

var y = dt.getMonth();
document.getElementById("curr_month").innerHTML = month_name[y];
base();
populate(y, dt.getFullYear());
// var cells  ="";
// for(i=1;i<=30;i++)
// {
//   cells += "<div>" + i +"</div>";
// }
//
// document.getElementsByClassName('dates')[0].innerHTML = cells;


// 1919-2119
function base() {
  for (let i = 0; i < x.length; i++) {
    x[i] = new Array(31);
    for (let j = 0; j < 31; j++) {
      var d = getDays(i % 12, 1919 + parseInt(i / 12));
      if (j < d)
        x[i][j] = 0;
      else
        x[i][j] = 3;
    }
  }
}

function getDays(month, year){
  var d = new Date(year, month+1, 0);
  return d.getDate();
}

function month_details(month, year){
  var idx=(year-1919)*12+(month%12);
  return x[idx];
}

function populate(month, year){
  var body = document.getElementById("table");
  let f="";
  var d = new Date();
  d.setDate(1);d.setMonth(month);d.setFullYear(year);
  const rows = Math.ceil((d.getDay() + 1 + getDays(month, year))/7);
  let temp=new Array(rows*7);
  var l= 0;
  for(let i = 0;i<temp.length;i++){
    if(i<d.getDay()||l>=31)
      temp[i]=3;
    else
      temp[i]=month_details(month, year)[l++];
  }
  l=0;
  let dt=1;
  for(let i=0;i<rows;i++){
    f+="<tr>";
    for(let j=0;j<7;j++){
      var current = new Date();
      current.setHours(0,0,0,0);
      var test = new Date(year, month, dt);
      if(temp[l]===3)
        f+="<td></td>";
      else if(current.getTime() === test.getTime())
        f+="<td style='background:#a4aec1'>" + dt++ + "</td>";
      else if (temp[l]===1)
        f+="<td style='background:red'>" + dt++ + "</td>";
      else
        f+='<td>' + dt++ + '</td>';
      l++;
    }
    f+="</tr>";
  }
  body.innerHTML=f;
}
