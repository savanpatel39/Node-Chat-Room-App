const expect = require('expect');
const {isRealString} = require('./validation.js');

describe('isRealString' , () => {

    it('should reject non-string values' , ()=> {
        var test = 98;
        
        var string = isRealString(test);

        expect(string).toBe(false);
    });

    it('should reject string with only spaces' , ()=> {
        var test = '          ';
        
        var string = isRealString(test);

        expect(string).toBe(false);
    });

    it('should allow string with non-space characters' , ()=> {
        var test = 'Testing String!';
        
        var string = isRealString(test);

        expect(string).toBe(true);
    });
});