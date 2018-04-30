const expect = require('expect');

const {Users} = require('./users');


describe('Users' , () => {
    var users ;

    beforeEach(() => {
        users = new Users();
        users.users = [
            {
                id: '1',
                name : 'Mike',
                room : 'Node course'
            }, {
                id: '2',
                name : 'Jen',
                room : 'React course'
            } , {
                id: '3',
                name : 'Paula',
                room : 'Node course'
            }
        ]
    });

    it('should add new user', () => {
        var users = new Users();
        var user = {
            id : '123',
            name : 'Savan',
            room : 'The Office Fans'
        };

        var resUser = users.addUser(user.id,user.name,user.room);

        expect(users.users).toMatchObject([user]);
    });


    it('should return names for node course', ()=>{
        var userList = users.getUserList('Node course');

        expect(userList).toEqual(['Mike','Paula']);
    });

    it('should return names for react course', ()=>{
        var userList = users.getUserList('React course');

        expect(userList).toEqual(['Jen']);
    });

    it('should remove a user' , () => {
        var userId = '1'
        var user = users.removeUser(userId);

        expect(user.id).toBe(userId);
    });
    
    it('should not remove user' , () => {
        var userId = '1234'
        var user = users.removeUser(userId);

        expect(user).toNotExist;
    });

    it('should find user' , ()=> {
        var userId = '2';
        var user = users.getUser(userId);

        expect(user.id).toBe(userId);
    });

    it('should not find user' , () => {
        var userId = '23';
        var user = users.getUser(userId);

        expect(user).toNotExist;

    });
});