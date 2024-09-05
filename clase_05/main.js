const { Users } = require('./Users');

const adm = new Users('data/users.json');

adm.getUsers().then( data => {
    console.log(data);
})

const user1 = {
    name: 'Mariela',
    email: 'mariela@mail.com'
}

adm.addUser( user1).then( () => {
    
})
