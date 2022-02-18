const users = require('./users.json');

const friendGenerator = (userName='') => {
    if(typeof(userName) !== 'string')
        throw new Error ('wrong data type');
    let friends = [];
    let userPresent = false;
    users.forEach((user) =>{
        if(user.name === userName){
            userPresent = true;
            const friendsObject = user.friends;
            friendsObject.forEach((friend) => {
                const {name} = friend;
                friends.push(name);
            });
        }
    });
    if(!userPresent){
        throw new Error('user not found');
    }
    return friends;
};
friendGenerator('Barton Mckee');
module.exports = {friendGenerator};