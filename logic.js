class Landing{
    Database={
        // properties
        "Sali":{username:"Sali",password:"12"},
        "Swali":{username:"Swali",password:"123"},
        "Junaid":{username:"Junaid",password:"1234"},
        "Salman":{username:"Salman",password:"1245"},
         "Fayis":{username:"Fayis",password:"123456"}

    }
    // method
    // to store permanently
    saveData(){
        if(this.Database){
        localStorage.setItem("database",JSON.stringify(this.Database))
    }
}
    // to get data from local storage
    getData(){
      this.Database= JSON.parse(localStorage.getItem("database"))
      console.log(this.Database);
    }

    // to register new usr
     register(){
        this.getData()
    let user = reguser.value
    // console.log(user);
    let pswd =  regpswd.value
    // console.log(pswd);
    if(user=="" || pswd==""){
        alert('Please enter a valid input')
    }
    else{
        if(user in this.Database){
            alert('User already exist')
            reguser.value=""
            regpswd.value=""
        }
        else{
           this.Database[user]={username:user,password:pswd}
           console.log(this.Database);
           this.saveData()
           alert('Registration Successfull')
           
        //    navigate

        window.location="login.html"
        }
    }
     }

    //  login
    login(){
        let user1=loguser.value
        console.log(user1);
        let pswd1=logpswd.value
        console.log(pswd1);

        this.getData()
        if(user1 in this.Database){
            if(this.Database[user1].password==pswd1){
                localStorage.setItem("user",user1)
                alert('Login successfull')

                // navigate
                window.location="home.html"
            }
            else{
                alert('invalid username or password')
            }

        }
        else{
            alert('user does not exist')
        }
    }
}

const obj =new  Landing()

obj.getData()
