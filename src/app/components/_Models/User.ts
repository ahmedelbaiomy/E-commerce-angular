export class User {
    constructor(public fname: string,
        public lname: string,
        public username: string,
        public password : string,
        public email :string,
        public dob ?: Date,
        public _id?:string,
        public token?:string,
        )

        {  }
}
