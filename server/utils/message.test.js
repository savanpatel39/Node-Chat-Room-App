var expect = require('expect');

var {generateMessage , generateLocationMessage} = require('./message');

describe('generateMessage' , () => {
    
    it('should generate correct message object' , ()=> {
        var from = 'Savan';
        var text = 'Some message';
        var message = generateMessage(from,text);

        expect(typeof message.createdAt).toBe('number');
        expect(message).toMatchObject({from,text});
    })
});

describe('generateLocationMessage', () => {
    it('should generate Location Object', () => {
        var from = 'Savan';
        var lon = 12.33;
        var lat = -1233.313;
        var url = `https://www.google.com/maps?q=${lat},${lon}`;

        var message = generateLocationMessage(from,lat,lon);

        expect(typeof message.createdAt).toBe('number');
        expect(message).toMatchObject({from,url});
    });
})