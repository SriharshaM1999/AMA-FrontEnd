import React,{Component} from 'react'
import Input from './Input'
import {FcLock} from 'react-icons/fc'
import '../ComponentCss/Sign.css'
import Button from './Button'
import axios from 'axios'

class SignUp extends Component{

    constructor(props) {
        super(props)
    
        this.state = {
             username:"M.Sriharsha",
             email:"sriharshamadireddy@gmail.com",
             password:"123456789",
             emailError:false,
             usernameError:false,
            passwordError:false

        }
    }

    emailChangeHandler=(value)=>{
          this.setState({
              email:value
          })
    }

    userNameChangeHandler=(value)=>{
        this.setState({username:value})
    }

    passwordChangeHandler=(value)=>{
        this.setState({password:value})
    }


    // Handling the errors in the input sections provided by the user 

    verifyEmail=(email)=>{


        if(email.indexOf('@gmail.com')!==-1){
            return true;
        }
        return false;

    }

    verifyPassword=(password)=>{


        if(password.length>=8){
            return true;
        }
        return false;

    }

    verifyUserName=(username)=>{


        if(username.length>=8){
            return true;
        }
        return false;

    }



        // action that to be happend upon user click button
    buttonClickHandler= async (event)=>{

            let usernameVerified, emailVerified, passwordVerified
            
            
             emailVerified= this.verifyEmail(this.state.email);


            if(this.props.type==="Sign Up"){
           
                usernameVerified= this.verifyUserName(this.state.username);

                if(!usernameVerified){
                    this.setState({usernameError:true})
                }

       
            }


             passwordVerified= this.verifyPassword(this.state.password);



           
            if(!emailVerified){
                this.setState({emailError:true})
            }
           
            if(!passwordVerified){
                this.setState({passwordError:true})
            }

            if(emailVerified && passwordVerified)
            alert(this.state.username)



     // After Verification its time to dive deep into the code
            
                await this.makeRequest();


    }


    makeRequest = async ()=>{

     

        try{

           const result = await axios.post('http://localhost:8000/api/v1/create-account/', {
               username: this.state.username,
               email: this.state.email,
               password: this.state.password,
           })
            console.log(result);
        }
        catch(e){
            console.log(e);
        }
    }
    
     

  
     

    componentDidMount() {
        console.log("I got rendered")
    }
      

    render() {



        return (
            <div className="sign-up">

                <FcLock style={styles.icon}/>

                <h4>{this.props.type}</h4>

                {/* Error Handling */}
            { this.state.usernameError && <h5> User name length should be &gt; = 8</h5> }
             { this.state.emailError && <h5> Use @gmail.com at the end of email section </h5> }
             { this.state.passwordError && <h5>Password length should be &gt; = 8</h5> }


             
                {/* UserInputs */}
                {this.props.username==='true' && <Input type='text' placeholder='User Name  *' changeHandler={this.userNameChangeHandler} name='username' value={this.state.username}/>}
                <Input type='email' error={true} placeholder='Email Address  *' name='email' value={this.state.email} changeHandler={this.emailChangeHandler} />
                <Input type='password' placeholder='Password *' name='password' value={this.state.password} changeHandler={this.passwordChangeHandler}/>
                

                {/* Button */}
                <Button name='SIGN-UP' clickHandler={this.buttonClickHandler}/>
                <div id="bottom-elements">
                    {this.props.forgotPassword==='true' && <h5>Forget Password</h5> }
                        <h5>Have Account</h5>
                </div>

            </div>

        )   

        }
    }

    const styles={
        icon:{
            fontSize:'4vw',
            backgroundolor:'pink',
            borderRadius:'50%',
            color:'white'
        }
}



export default SignUp
