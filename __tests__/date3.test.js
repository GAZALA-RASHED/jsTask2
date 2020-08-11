const add = require('../date3');
describe("add", ( ) => {
test('should return undefined when passing " " for date and string', () =>{
    expect(add("","")).toBe(undefined);
});
test('should return undefined when passing "ndefined " for date and " " for  string', () =>{
    expect(add(undefined,"")).toBe(undefined);
});
test('should return new date after adding some days  for the  date', () =>{
    expect(add(new Date(2013, 1, 9),"2d").toString()).toBe("Mon Feb 11 2013 00:00:00 GMT+0200 (Israel Standard Time)");
});
test('should return new date after adding some days  for the  date', () =>{
    expect(add(new Date(2013, 1, 9),"2D").toString()).toBe("Mon Feb 11 2013 00:00:00 GMT+0200 (Israel Standard Time)");
});
test('should return new date after adding some hours  for the  date', () =>{
    expect(add(new Date(2013, 1, 9,1,1,1),"2h").toString()).toBe("Sat Feb 09 2013 03:01:01 GMT+0200 (Israel Standard Time)");
});
test('should return new date after adding some hours  for the  date', () =>{
    expect(add(new Date(2013, 1, 9,1,1,1),"2H").toString()).toBe("Sat Feb 09 2013 03:01:01 GMT+0200 (Israel Standard Time)");
});
});