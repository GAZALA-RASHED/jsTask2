
function add(date,str) {
    if(date==="" || str==="" || date===undefined ||str===undefined) { 
        return undefined;
    }
     const day = date.getDate();
     const month = date.getMonth();
     const year = date.getFullYear();
     const hour = date.getHours();
     const minute = date.getMinutes();
     const second = date.getSeconds();
    if(str.indexOf('d') > -1 || str.indexOf('D') > -1 ) {
        const indexOfDay = str.indexOf('d') > -1 ? str.indexOf('d') : str.indexOf('D');
        const num = str.substring(0,indexOfDay) ;
        const currentDate = new Date(year, month, day);
        const newDate = new Date(currentDate);
        newDate.setDate(newDate.getDate() + parseInt(num));
        return newDate;
    }
    if(str.indexOf('h') > -1 || str.indexOf('H') > -1 ) {
        const indexOfHours=str.indexOf('h') > -1 ? str.indexOf('h') : str.indexOf('H');
        const num = str.substring(0,indexOfHours) ;
        const currentDate = new Date(year, month, day,hour,minute,second);
        const newDate = new Date(currentDate);
        newDate.setHours(newDate.getHours() + parseInt(num));
        return newDate;
    }

    
}

module.exports=add;