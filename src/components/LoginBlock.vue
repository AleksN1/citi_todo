<template>
  <div class="main-block_login">
    <form @creation="hendleSubmit" class="block_login" id="app">
      <div class="name">
        <lable id="lable_name" for="name">Name</lable>
        <input id="name" type="text" name="name" autocomplete="off" v-model="name">
        <span id="span_name">{{error_name}}</span>
      </div>
      <div class="password">
        <lable id="lable_password">Password</lable>
        <input id="password" type="password" name="password" autocomplete="off" v-model="password">
        <span id="span_password">{{error_password}}</span>
      </div>
      <!--<input id = "button" type="button" name="login" value="LOGIN" @click="check">-->
      <button id="button" type="sybmit" name="login" @click="check">LOGIN</button>
      <a href="#!" class="forgot_password">Forgot Password</a>
      <div id="rectangle_484"></div>
      <a href="#/Reg" class="register_now">Register now</a>
    </form>
  </div>  
</template>


<script>
  export default ({
    name: 'LoginBlock',

    data () {
      return {
        name: "",
        password: "",
                
        error_password: "",
        error_name: ""
      }
    },
  
    beforeRouteUpdate(to, from, next) {
      const answer = window.confirm("Error on login. Please Register now!")
      if (answer) {next("/Reg")} 
      else next(false)      
    },

    methods: {
      check: function(){
        if (this.name === localStorage.name && this.password === localStorage.password)
        {this.$router.push("ToDo")}
        else 
        if (this.name !== localStorage.name)
        {document.getElementById("name").style.borderColor="#D60000";
        this.error_name = "x Enter your name";}
        if (this.password !== localStorage.password)
        {document.getElementById("password").style.borderColor="#D60000";
        this.error_password = "x Enter your password";}       
        }
      },
  });  
</script>


<style scoped>
  .main-block_login {
    margin: 275px 0px 40px 16px;
    width: 481px;
    height: 464px;
  }
  .block_login {
    position: relative;
    max-width: 481px;
    height: 464px;
          
    background: #FFFFFF;
    box-shadow: 2px 2px 15px 2px rgba(0, 0, 0, 0.1);
  }
  #lable_name {
    position: absolute;
    width: 48px;
    height: 21px;
    left: 6%;
    top: 40px;
  
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 21px;
  /* identical to box height */
  
    display: flex;
    align-items: center;
    text-align: center;
  
    color: #333333;  
  }
  #name {
    box-sizing: border-box;
    font-size: 18px;
  
    position: absolute;
    width: 88%;
    height: 53px;
    left: 6%;
    top: 68px;
    padding: 16px 15px;
    line-height: 21px;
  
    background: #FFFFFF;
    border: 1px solid #9A9A9A;
  }
  #name:focus {
    border: 1px solid #101010;
  }
  #name:valid {
    border: 1px solid #9A9A9A;
  }
  span {
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    color:#D60000;
  }
  #span_name {
    position: absolute;
    left: 6%;
    top: 126px;
  }
  #lable_password {
    position: absolute;
    width: 79px;
    height: 21px;
    left: 6%;
    top: 161px;
  
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 21px;
  /* identical to box height */
  
    display: flex;
    align-items: center;
    text-align: center;
  
    color: #333333;  
  }
  #password {
    box-sizing: border-box;
    font-size: 18px;
  
    position: absolute;
    width: 88%;
    height: 53px;
    left: 6%;
    top: 189px;
    padding: 16px 15px;
    line-height: 21px;
  
    background: #FFFFFF;
    border: 1px solid #9A9A9A;
  }
  #password:focus {
    border: 1px solid #101010;
  }
  #password:valid {
    border: 1px solid #9A9A9A;
  }
  #span_password {
    position: absolute;
    left: 6%;
    top: 247px;
  }
  #button {
    text-transform: uppercase;
    position: absolute;
    width: 88%;
    height: 53px;
    top: 282px;
    left: 6%;
    
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    line-height: 29px;
    display: flex;
    align-items: center;
    justify-content: center;
  
    color:  #FFFFFF;
    background: #0076C0;
  }
  #button:hover {
    color: #0076C0; 
    background:  #FFFFFF;
    border: 2px solid #0076C0;
  }

  input:hover {
    outline: 1px solid #0076C0;
  }
  .forgot_password {
    position: absolute;
    height: 23px;
    left: 0px;
    right: 0px;
    top: 355px;
  
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
  
    color: #056DAE;
  
    text-decoration: none; 
  }
  .forgot_password:hover {
    text-decoration: underline;
    text-decoration-color:#0076C0
  }
  #rectangle_484 {
    position: absolute;
    width: 100%;
    height: 63px;
    left: 0px;
    top: 401px;
  
    background: #F6F6F6;
  }
  .register_now {
    position: absolute;
    left: 0px;
    right: 0px;
    height: 29px;
    
    top: 418px;
  
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    line-height: 29px;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
  
    color: #333333;
  
    text-decoration: none;
  }
  .register_now:hover {
    text-decoration: underline;
    text-decoration-color:#0076C0
  }

/********************************************************************/

  @media (max-width: 940px){
    .main-block_login {
      margin: 40px 0px 0px 0px;
    }
  }
</style>
