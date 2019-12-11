 Calculator = require('../src/calculator');

//Tests for add function
describe('add function', function () {
     let calculator_instance_of;
    beforeEach(function () {
        calculator_instance_of = new Calculator()
    });

    it('should be able to add two or more numbers', function () {

        expect(calculator_instance_of.add(1,2,3,)).toBe(6);
    });
    it('should be able to keep track of the last value', function () {

        expect(calculator_instance_of.add(1,2,3,4)).toBe(10);
        expect(calculator_instance_of.lastValue()).toBe(10);
    });
    it('should be able to recall the last value and add to a new value', function () {
        expect(calculator_instance_of.add(1,2,3,4)).toBe(10);
        expect(calculator_instance_of.lastValue()).toBe(10);
        expect(calculator_instance_of.add(calculator_instance_of.lastValue(), 2)).toBe(12);
    });
    it("should allow LAST to be used as parameter", () => {
        let calculator_instance_of = new Calculator();
        expect(calculator_instance_of.add(1, 2)).toEqual(3);
        expect(calculator_instance_of.add("LAST", 5)).toEqual(8);
    });
    it('should be able to recall the last value and multiply to a new value', function () {
        expect(calculator_instance_of.add(5, 5, 4)).toBe(14);
        expect(calculator_instance_of.lastValue()).toBe(14);
        expect(calculator_instance_of.multiply(calculator_instance_of.lastValue(), 2)).toBe(28);
    });

    it('should be able to recall the last value and add to a new value and set it last value', function () {
        expect(calculator_instance_of.add(5, 5, 4)).toBe(14);
        expect(calculator_instance_of.lastValue()).toBe(14);
        expect(calculator_instance_of.add(calculator_instance_of.lastValue(), 2)).toBe(16);
        expect(calculator_instance_of.set_slot(1)).toBe(16);
    });
    it('should be able to get last set value', function () {
        expect(calculator_instance_of.add(5, 5, 4)).toBe(14);
        expect(calculator_instance_of.lastValue()).toBe(14);
        expect(calculator_instance_of.add(calculator_instance_of.lastValue(), 2)).toBe(16);
        expect(calculator_instance_of.set_slot(1)).toBe(16);
        expect(calculator_instance_of.get_slot(1)).toBe(16);
    });
    it('should be able to get last set value and add to a new value', function () {
        expect(calculator_instance_of.add(5, 5, 4)).toBe(14);
        expect(calculator_instance_of.lastValue()).toBe(14);
        expect(calculator_instance_of.add(calculator_instance_of.lastValue(), 2)).toBe(16);
        expect(calculator_instance_of.set_slot(1)).toBe(16);
        expect(calculator_instance_of.get_slot(1)).toBe(16);
        expect(calculator_instance_of.add(calculator_instance_of.get_slot(1), 4)).toBe(20);
       
    });
    it('should be able to get last set value and add to the last calculated value', function () {
        expect(calculator_instance_of.add(5, 5, 4)).toBe(14);
        expect(calculator_instance_of.lastValue()).toBe(14);
        expect(calculator_instance_of.add(calculator_instance_of.lastValue(), 2)).toBe(16);
        expect(calculator_instance_of.set_slot(1)).toBe(16);
        expect(calculator_instance_of.get_slot(1)).toBe(16);
        expect(calculator_instance_of.add(calculator_instance_of.get_slot(1), 4)).toBe(20);
        expect(calculator_instance_of.add(calculator_instance_of.get_slot(1), calculator_instance_of.lastValue())).toBe(36);
    });

    it("should allow the use of memory slots and LAST as arguments", () =>{
        expect(calculator_instance_of.add(1, 2)).toEqual(3);
        expect(calculator_instance_of.set_slot(1)).toEqual(3);
        expect(calculator_instance_of.add(10, 20)).toEqual(30);
        expect(calculator_instance_of.set_slot(2)).toEqual(30);
        expect(calculator_instance_of.add(100, 200)).toEqual(300);
        expect(calculator_instance_of.get_slot(1)).toEqual(3);
        expect(calculator_instance_of.get_slot(2)).toEqual(30);
        expect(calculator_instance_of.lastValue()).toEqual(300);
        expect(calculator_instance_of.add("LAST", 10)).toEqual(310);
        expect(calculator_instance_of.add("SLOT_1", 5)).toEqual(8);
        expect(calculator_instance_of.multiply("SLOT_2", 2)).toEqual(60);
      });
});

//Tests for maltiplication function
    describe('multiplication function', function () {
        let calculator_instance_of;
        beforeEach(function () {
            calculator_instance_of = new Calculator()
        });

    it('should be able to multiply two or more numbers', function () {
        expect(calculator_instance_of.multiply(5, 5, 4)).toBe(100);
    });
    it('should be able to recall the last value', function () {
        expect(calculator_instance_of.multiply(5, 5, 4)).toBe(100);
        expect(calculator_instance_of.lastValue()).toBe(100);
    });
    it('should be able to recall the last value and multiply to a new value', function () {
        expect(calculator_instance_of.multiply(5, 5, 4)).toBe(100);
        expect(calculator_instance_of.lastValue()).toBe(100);
        expect(calculator_instance_of.multiply(calculator_instance_of.lastValue(), 2)).toBe(200);
    });
    it('should be able to recall the last value and multiply to a new value', function () {
        expect(calculator_instance_of.multiply(5, 5, 4)).toBe(100);
        expect(calculator_instance_of.lastValue()).toBe(100);
        expect(calculator_instance_of.add(calculator_instance_of.lastValue(), 2)).toBe(102);
    });
    it('should be able to recall the last value and multiply to a new value and set it last value', function () {
        expect(calculator_instance_of.multiply(5, 5, 4)).toBe(100);
        expect(calculator_instance_of.lastValue()).toBe(100);
        expect(calculator_instance_of.multiply(calculator_instance_of.lastValue(), 2)).toBe(200);
        expect(calculator_instance_of.set_slot(1)).toBe(200);
    });
    it('should be able to get last set value', function () {
        expect(calculator_instance_of.multiply(5, 5, 4)).toBe(100);
        expect(calculator_instance_of.lastValue()).toBe(100);
        expect(calculator_instance_of.multiply(calculator_instance_of.lastValue(), 2)).toBe(200);
        expect(calculator_instance_of.set_slot(1)).toBe(200);
        expect(calculator_instance_of.get_slot(1)).toBe(200);
    });
    it('should be able to get last set value and multiply to a new value', function () {
        expect(calculator_instance_of.multiply(5, 5, 4)).toBe(100);
        expect(calculator_instance_of.lastValue()).toBe(100);
        expect(calculator_instance_of.multiply(calculator_instance_of.lastValue(), 2)).toBe(200);
        expect(calculator_instance_of.set_slot(1)).toBe(200);
        expect(calculator_instance_of.get_slot(1)).toBe(200);
        expect(calculator_instance_of.multiply(calculator_instance_of.get_slot(1), 4)).toBe(800);

    });
    it("should allow LAST to be used as parameter", () => {
        let calculator_instance_of = new Calculator();
        expect(calculator_instance_of.multiply(1, 2)).toEqual(2);
        let LAST = calculator_instance_of.lastValue();
        expect(calculator_instance_of.multiply("LAST", 5)).toEqual(10);
      });
    it('should be able to get last set value and multiply to last calculated value ', function () {
        expect(calculator_instance_of.multiply(5, 5, 4)).toBe(100);
        expect(calculator_instance_of.lastValue()).toBe(100);
        expect(calculator_instance_of.multiply(calculator_instance_of.lastValue(), 2)).toBe(200);
        expect(calculator_instance_of.set_slot(1)).toBe(200);
        expect(calculator_instance_of.get_slot(1)).toBe(200);
        expect(calculator_instance_of.multiply(calculator_instance_of.get_slot(1), 4)).toBe(800);
        expect(calculator_instance_of.multiply(calculator_instance_of.get_slot(1), calculator_instance_of.lastValue())).toBe(160000);

    });

    
});
