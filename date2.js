function format(date,format) {
    if(date==="" || format==="" || date===undefined ||format===undefined){ 
        date=undefined;
        return date;
    }
    const monthNames = [
        "January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"
    ];
    const day = date.getDate();
    const month =parseInt( date.getMonth())+1;
    const year = date.getFullYear();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    const hh = twoDigit(hour);
    const mm = twoDigit(minute);
    const ss = twoDigit(second);
    const dd = twoDigit(day);
    const M = month;
    const MM = twoDigit(M);
    const MMMM = monthNames[month-1];
    const MMM = MMMM.substr(0, 3);
    const y = year + "";
    const yy = y.substr(2, 2);
    let formatedDate=format;
    const AA = hour > 12 ? "PM" : "AM";
    const aa = hour > 12 ? "pm" : "am";
    const a = hour > 12 ? "p" : "a";
    const A = hour > 12 ? "P" : "A";
    function twoDigit(num) {
        return num < 10 ? "0" + num : num;
    }
    formatedDate = formatedDate.replace('AA',AA);
    formatedDate = formatedDate.replace('aa',aa);
    formatedDate = formatedDate.replace('A',A);
    formatedDate = formatedDate.replace('a',a);
    formatedDate = formatedDate.replace('HH',hh);
    formatedDate = formatedDate.replace('hh',hh);
    formatedDate = formatedDate.replace('H',hour);
    formatedDate = formatedDate.replace('h',hour);
    formatedDate = formatedDate.replace('mm',mm);
    formatedDate = formatedDate.replace('m',minute);
    formatedDate = formatedDate.replace('SS',ss);
    formatedDate = formatedDate.replace('ss',ss);
    formatedDate = formatedDate.replace('S',second);
    formatedDate = formatedDate.replace('s',second);
    formatedDate = formatedDate.replace('YYYY',y);
    formatedDate = formatedDate.replace('YY',yy);
    formatedDate = formatedDate.replace('yy',yy);
    formatedDate = formatedDate.replace('Y',y);
    formatedDate = formatedDate.replace('y',y);
    formatedDate = formatedDate.replace('DD',dd);
    formatedDate = formatedDate.replace('dd',dd);
    formatedDate = formatedDate.replace('D',day);
    formatedDate = formatedDate.replace('d',day);
    if(format.indexOf('MMMM') > -1 || format.indexOf('MMM') > -1 ) {
        formatedDate = formatedDate.replace('MMMM',MMMM);
        formatedDate = formatedDate.replace('MMM',MMM);
    }
    formatedDate = formatedDate.replace('MM',MM);
    formatedDate = formatedDate.replace('M',M);
    return formatedDate;
}
module.exports=format;