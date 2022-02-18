/* Tests
1. gives list of friends when user name given
2. if user name not present in users return not present
3. if no input given consider empty string hence return user not found
4. if non string data type given return wrong input type
*/

const {friendGenerator} = require("../userFriendsGenerator.js");

describe('friendGenerator function that returns list of friends when name input', () => {
    it('should give a list of friends when user name given', () => {
        const friendList = friendGenerator('Barton Mckee');
        expect(friendList).toEqual(["Cooper Kinney", "Lenore Jefferson", "Krystal Sheppard"]);
    });
    it('should throw user not found if user not in data', () => {
        expect(() => {friendGenerator('Palak')}).toThrow('user not found');
    });
    it('should consider empty string when no input guven hence throw user not found ', () => {
        expect(() => {friendGenerator()}).toThrow('user not found');
    });
    it('should throw wrong data type if user not string', () => {
        expect(() => {friendGenerator(123)}).toThrow('wrong data type');
    });
});