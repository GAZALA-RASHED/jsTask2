const fromFormat=require("../date");
describe("fromFormat", ( ) => {

test("should return undefined when passing ' '  for date",() =>{
    expect(fromFormat("","MM/dd/y")).toBe(undefined);
});
test('should return undefined when passing " " for date and format', () =>{
    expect(fromFormat("","")).toBe(undefined);
});
test('should return undefined when passing undefined for date and format', () =>{
    expect(fromFormat(undefined, undefined)).toBe(undefined);
});
test('should return undefined when passing undefined  for date', () =>{
    expect(fromFormat(undefined, "MM/DD/Y")).toBe(undefined);
}); 
test('should return undefined when passing undefined  for format', () =>{
    expect(fromFormat("22/12/2020", undefined)).toBe(undefined);
}); 
test('pass "12/10/2009" as date and "MM/dd/y" as format', () => {
    let date=fromFormat("12/10/2009","MM/DD/Y");
    expect(date.toString()).toBe('Thu Dec 10 2009 00:00:00 GMT+0200 (Israel Standard Time)');
});
test('should return Date as obj when passing correct values ' , () => {
    let date=fromFormat("12/10/2009","MM/DD/Y");
    expect(typeof date ).toBe("object");
});
test('should return the date when pass "12-10-2009" as date , "MM-dd-y" as format', () => {
    let date= fromFormat("01-05-2009", "MM-DD-Y");
    expect(date.toString()).toBe('Mon Jan 05 2009 00:00:00 GMT+0200 (Israel Standard Time)');
});
test('should return the date when pass "12++10++2009" as date , "MM++dd++y" as format', () => {
    let date= fromFormat("12++10++2009", "MM++DD++Y");
    expect(date.toString()).toBe('Thu Dec 10 2009 00:00:00 GMT+0200 (Israel Standard Time)');
});
test('should return the date when pass  "12--10--2009" as date , "MM--DD--Y" as format', () => {
    let date= fromFormat("12--10--2009", "MM--DD--Y");
    expect(date.toString()).toBe('Thu Dec 10 2009 00:00:00 GMT+0200 (Israel Standard Time)');
});
test('should return the date when pass "12$10$2009" as date , "MM$dd$y" as format', () => {
    let date= fromFormat("12$10$2009", "MM$DD$Y");
    expect(date.toString()).toBe('Thu Dec 10 2009 00:00:00 GMT+0200 (Israel Standard Time)');
});
test('should return the date when pass "12W10W2009" as date , "MMWddWy" as format', () => {
    let date= fromFormat("12W10W2009", "MMWDDWY");
    expect(date.toString()).toBe('Thu Dec 10 2009 00:00:00 GMT+0200 (Israel Standard Time)');
});
test('should return the date when pass  "12-10-2009 run" as date , "MM-dd-y run" as format', () => {
    let date= fromFormat("12-10-2009 run","MM-DD-Y run");
    expect(date.toString()).toBe('Thu Dec 10 2009 00:00:00 GMT+0200 (Israel Standard Time)');
});
  
});

