const fs = require('fs/promises');

class Users {
    path = '';
    
    constructor(path='users.json'){
        this.path = path;
    }

    // { name: 'Juan',  email: 'juan@mail.com' }
    async addUser( user ){
        const name = user.name;
        const email = user.email;
        const id = crypto.randomUUID();
        // Leo el JSON
        const data = await fs.readFile(this.path, 'utf-8');
        const array = JSON.parse(data);
        array.push({
            id: id,
            name: name,
            email: email
        })
        const dataStr= JSON.stringify( array, null, 2);
        // Guardo el JSON
        await fs.writeFile( this.path, dataStr, null, 2 );

    }
    async getUsers(){
        const data = await fs.readFile(this.path, 'utf-8');
        const array = JSON.parse(data);
        return array;
    }
}


module.exports = { Users }