import React,{Component} from 'react'
import Input from './Input'
import {FcLock} from 'react-icons/fc'
import '../../ComponentCss/Sign.css'
import Button from './Button'
import axios from 'axios'
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchUser} from '../../redux/userAuthentication/action'
import cookie from 'react-cookies';
import Icon from '../../assets/icon.svg';
import GoogleLogin from 'react-google-login';

class Sign extends Component{

    constructor(props) {
        super(props)
        console.log("Inside Constructor of Sign", props);
    
        this.state = {
             username:"account2",
             email:"account2@gmail.com",
             password:"account2",
             emailError:false,
             usernameError:false,
            passwordError:false,
            redirectToSignIn:false,
            redirectToMain:false,
            redirectToSignUp:false,
            authKey:'',
            

        }

        this.moveToSignIn = this.moveToSignIn.bind(this);
        this.moveToSignUp= this.moveToSignUp.bind(this);

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

    componentDidMount(){
        console.log("In comp did mou",this.props)
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



     // After verifying the input its time to communicate with backend
            
            if(this.props.type==="Sign Up"){
                        await this.makeSignUpRequest();
            }

            else{
                    await this.makeSignInRequest();

            }

    }

    makeSignInRequest= async ()=>{

       // try{
        //     const result = await axios.post('http://localhost:8000/api/v1/users/create-session/', {
        //         email: this.state.email,
        //         password: this.state.password,
        //     })
        //      console.log(result.data.data.token);
        //      this.setState({
        //          redirectToSignIn:false,
        //          redirectToMain:true,
        //          authKey:result.data.data.token,
        //      },()=>{
        //          console.log("the auth key inside after request is ", this.state.authKey)
        //          this.props.setAuthKey(this.state.authKey);
        //      })
        // }
        // catch(err){
        //         console.log(err);
        // }

                 await this.props.fetchUser(this.state.email, this.state.password);
                 

                 this.setState({
                     authKey:this.props.authKey,
                     redirectToMain:true,
                 },()=>{

                 })

    }

  
    


    makeSignUpRequest = async ()=>{

     

        try{

            const result = await axios.post('http://localhost:8000/api/v1/users/create-account/', {
               username: this.state.username,
               email: this.state.email,
               password: this.state.password,
           })
            console.log(result);
            this.setState({
                redirectToSignIn:true,
            })

        }
        catch(e){
            console.log(e);
        }
    }

    responseGoogle = (response) => {
        console.log(response);

        axios.post('http://localhost:8000/api/v1/users/google-login/', {
            token: response.tokenObj.id_token,
           
        })
        .then((response)=>{
            console.log("the response" ,response);
            console.log("seeted in cookies is: ", response.data.data.token)
            cookie.save('userId', response.data.data.token , { path: '/' })
            cookie.save('user',response.data.data.username, {path: '/'})
            this.setState({
                authKey:this.props.authKey,
                redirectToMain:true,
            },()=>{

            })
              
        })
        .catch((error)=>{
            console.log("The error message is: ")
            console.log(error);
        })
        



      }

      responseFailure = (error) => {
          console.log(error)
      }
    
      moveToSignIn = ()=>{
          console.log("ji got claaed too")
          this.setState({
              redirectToSignIn:true
          })
      }

      moveToSignUp =()=>{
          console.log('i got called')
          this.setState({
              redirectToSignUp:true
          })
      }
         

    render() {
         
        console.log("the value of props in signin render ", this.props)
    
      if(this.state.redirectToMain==true){
          return <Redirect to='/Main'></Redirect>
      }  


      if(this.state.redirectToSignIn==true){
          
            return <Redirect to="/signin"></Redirect> 
      }

      if(this.state.redirectToSignUp==true){
          
        return <Redirect to="/signup"></Redirect> 
  }

      else
        return (

            <div className='sign-entire'>

                    <img
                        src={Icon}
                        alt='background'
                        className='beautify'
                    />


            <div className="sign">

                   
                {/* <FcLock style={styles.icon}/> */}

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
                <Button name={this.props.type} clickHandler={this.buttonClickHandler}/>

                {this.props.type =='Sign Up' && <button onClick = {this.moveToSignIn}>Have Account</button>}
                {this.props.type =='Sign In' && <button onClick = {this.moveToSignUp}>Don't Have Account</button>}


                
                
                
                {/* <GoogleLogin
                    clientId="394103427165-8t7tv3gk5ne5birefeat95nocu0h40ha.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseFailure}
                    cookiePolicy={'single_host_origin'}
                />, */}

                 {/* Hey roll in the next update  */}
                {/* <div id="bottom-elements">
                    {this.props.forgotPassword==='true' && <h5>Forget Password</h5> }
                        <h5>Have Account...?</h5>
                </div> */}

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

function mapStateToProps(store){ 
    console.log(" store inside the sign is" , store.setAuthReducer.authKey);
    return {
        authKey: store.authkey
    }
}

function mapDispatchToProps(dispatch){
    
    return {
        fetchUser:(email, password)=>{
            console.log("mapDispatchtoProps got called")
            dispatch(fetchUser(email, password));
        }


    }
}


export default connect(mapStateToProps , mapDispatchToProps)(Sign)

// export default SignUp