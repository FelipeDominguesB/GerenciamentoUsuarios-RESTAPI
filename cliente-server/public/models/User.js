class User{
    
    constructor(name, gender, birth, country, email, password, photo, admin){
        this._name = name;
        this._id;
        this._gender = gender;
        this._birth = birth;
        this._country = country;
        this._email = email;
        this._password = password; 
        this._photo = photo;
        this._admin = admin;
        this._register = new Date();

    }

    
    get name(){ return this._name; }

    get id(){ return this._id; }

    get gender(){ return this._gender; }

    get birth() {return this._birth;}

    get country(){ return this._gender; }

    get email(){return this._email;}

    get admin() {return this._admin;}

    get photo() {return this._photo;}
    
    set photo(value){ this._photo = value;}

    get password(){ return this._password;}

    get register() { return this._register; }
    

    loadFromJSON(json)
    {
        
        for(let name in json)
        {
            switch(name){
                case '_register':
                    this[name] = new Date(json[name]);
                break;

                default:
                    if(name.substring(0, 1) === '_') this[name] = json[name];
            }
            
        }
    }

    static getUserStorage()
    {
         let users = [];
         if(localStorage.getItem('users')){
             users = JSON.parse(localStorage.getItem('users'));
         }
         return users;

     }


    CreateId()
    {
        if(!window.id) window.id = 0;

        let usuarios = User.getUserStorage();

        usuarios.forEach(e =>{
            if(e._id == id) id++;
        });
        
        return id;

    }
    save()
    {
        return new Promise((resolve, reject) => {
            let promise;
            console.log(this);
            if(this.id)
            {
                promise = HttpRequest.put(`/users/${this.id}`, this.toJSON());
            }
            else{
                promise = HttpRequest.post(`/users`, this.toJSON());
            }
    
            promise.then(data =>{
                this.loadFromJSON(data);

                resolve(this);
            }).catch(e =>{
                reject(e);
            });
        });
        
    }

    toJSON()
    {
        let json = {};
        Object.keys(this).forEach(key =>{
            if(this[key]!== undefined) json[key] = this[key];
        });
        return json;
    }
    remove()
    {
        let users = User.getUserStorage();

        users.forEach((elemento, index) => {
            if(this._id == elemento._id)
            {
                users.splice(index, 1);
            }          
        });
        localStorage.setItem('users', JSON.stringify(users));
    }
}