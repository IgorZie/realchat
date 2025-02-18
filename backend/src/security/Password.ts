import bcrypt from 'bcryptjs'

export class Password{

    private password

    constructor(password: string){
        this.password = password
    }

    public create(){
        return bcrypt.hashSync(this.password, 8)
    }

    public verify(hash: string){
        return bcrypt.compareSync(this.password, hash)
    }

}