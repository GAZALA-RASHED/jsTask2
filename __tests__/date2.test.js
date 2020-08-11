const  format = require("../date2");
const monthNames = [
    "January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"
];
const date = new Date();
const day = date.getDate();
const month = parseInt( date.getMonth())+1;
const y = date.getFullYear();
const MMMM = monthNames[month-1];
const MMM = MMMM.substr(0, 3);
const MM = month < 10 ? "0" + month : month;
const dd = day < 10 ? "0" + day : day;
let result = '';
describe("format", ( ) => {
test("should return undefined when passing ' '  for date",() =>{
    expect(format("","MM-DD/YYYY")).toBe(undefined);
});
test('should return undefined when passing " " for date and format', () =>{
    expect(format("","")).toBe(undefined);
});
test('should return undefined when passing undefined for date and format', () =>{
    expect(format(undefined, undefined)).toBe(undefined);
});
test('should return undefined when passing undefined  for date', () =>{
    expect(format(undefined, "MM-DD/YYYY")).toBe(undefined);
}); 
test('should return the date when passing new Date()for date and "MMM-DD/YYYY" for format', () =>{
 result =  MMM + '-' + dd +'/' + y;
expect(format(new Date(),"MMM-DD/YYYY")).toBe(result);
});
test('should return the date when passing new Date()for date and "MMM-dd/YYYY" for format', () =>{
 result =  MMM + '-' + dd +'/' + y;
    expect(format(new Date(),"MMM-dd/YYYY")).toBe(result);
});
test('should return the date when passing new Date()for date and "MMM-dd/Y" for format', () =>{
  result =  MMM + '-' + dd +'/' + y;
    expect(format(new Date(),"MMM-dd/Y")).toBe(result);
});
test('should return the date when passing new Date()for date and "MMM-DD/y" for format', () =>{
 result =  MMM + '-' + dd +'/' + y;
    expect(format(new Date(),"MMM-DD/y")).toBe(result);
});
test('should return the date when passing new Date()for date and "MMM-dd/y" for format', () =>{
 result =  MMM + '-' + dd +'/' + y;
    expect(format(new Date(),"MMM-dd/y")).toBe(result);
});
test('should return the date when passing new Date()for date and "MM-DD/YYYY" for format', () =>{
 result =  MM + '-' + dd +'/' + y;
    expect(format(new Date(),'MM-DD/YYYY')).toBe(result);
});
test('should return the date when passing new Date()for date and "M-DD/YYYY" for format', () =>{
result =  month + '-' + dd +'/' + y;
    expect(format(new Date(),'M-DD/YYYY')).toBe(result);
});
test('should return the date when passing new Date()for date and "MMM-D/YYYY" for format', () =>{
 result =  MMM + '-' + day+'/' + y;
    expect(format(new Date(),'MMM-D/YYYY')).toBe(result);
});
test('should return the date when passing new Date()for date and "MM-D/YYYY" for format', () =>{
result =  MM + '-' + day+'/' + y;
    expect(format(new Date(),'MM-D/YYYY')).toBe(result);
});
test('should return the date when passing new Date()for date and "M-D/YYYY" for format', () =>{  
result =  month + '-' + day+'/' + y;
    expect(format(new Date(),'M-D/YYYY')).toBe(result);
});
test('should return the date with time when passing new Date()for date and "H:m:S" for format', () =>{
    expect(format(new Date(1999,2,4,3,4,5),"H:m:S")).toBe( "3:4:5");
});
test('should return the date with time when passing new Date()for date and "H:m:s" for format', () =>{
    expect(format(new Date(1999,2,4,3,4,5),"H:m:s")).toBe( "3:4:5");
});
test('should return the date with time when passing new Date()for date and "HH:mm:SS" for format', () =>{
    expect(format(new Date(1999,2,4,3,4,5),"HH:mm:SS")).toBe( "03:04:05");
});
test('should return the date with time when passing new Date()for date and "HH:mm:ss" for format', () =>{
    expect(format(new Date(1999,2,4,3,4,5),"HH:mm:ss")).toBe( "03:04:05"); 
});
});
