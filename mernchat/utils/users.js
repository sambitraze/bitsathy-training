const users = []

function userJoin(id, username, room) {
    console.log(id, username, room);
    const user = { id, username, room };
    users.push(user);
    return user;
}

function getCurrentUser(id) {
    return users.filter(user => user.id === id)[0];
}

module.exports = { userJoin, getCurrentUser };