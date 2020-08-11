const monthNames = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul",
    "Aug", "Sep", "Oct", "Nov", "Dec"
];
function fromFormat(date,format)
{
    if(date==="" || format==="" || date===undefined ||format===undefined) { 
        return undefined;
     } 
    const threeDigitMonthIndex = format.indexOf('MMM') > -1 ? format.indexOf('MMM') : format.indexOf('mmm'); 
    const twoDigitMonthIndex = format.indexOf('MM') > -1 ? format.indexOf('MM') : format.indexOf('mm');
    const monthIndex = format.indexOf('M') > -1 ? format.indexOf('M') : format.indexOf('m');
    const twoDigitDayIndex = format.indexOf('DD') > -1 ? format.indexOf('DD') : format.indexOf('dd');
    const dayIndex = format.indexOf('D') > -1 ? format.indexOf('D') : format.indexOf('d');
    const twoDigitYearIndex = format.indexOf('YY') > -1 ? format.indexOf('YY') : format.indexOf('yy');
    const yearIndex = format.indexOf('Y') > -1 ? format.indexOf('Y') : format.indexOf('y');
let month = 0;
let day = 1;
let year = 1979; 
  if(threeDigitMonthIndex > -1) {
      month = monthNames.indexOf(date.substring(threeDigitMonthIndex, threeDigitMonthIndex + 3));
  } else if(twoDigitMonthIndex > -1 ) {
      month = date.substring(twoDigitMonthIndex,twoDigitMonthIndex+ 2)-1;
  } else if (monthIndex > -1) {
      month = date[monthIndex]-1;
  }
  if(twoDigitDayIndex > -1) {
    day = date.substring(twoDigitDayIndex, twoDigitDayIndex + 2);
} else if(dayIndex > -1) {
    day = date[dayIndex];
} 
if(twoDigitYearIndex > -1) {
    year = date.substring(twoDigitYearIndex,twoDigitYearIndex + 2);
} else if(yearIndex > -1) {
    year = date.substring(yearIndex,yearIndex + 4);
} 
const dateObject = new Date(year,month,day);
return dateObject;
}
module.exports=fromFormat;
