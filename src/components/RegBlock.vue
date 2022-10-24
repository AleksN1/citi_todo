<template>
  <div class="main-block_login">
    <form @creation="hendleSubmit" class="block_login" id="app">
      <lable id="lable_name" for="name">Name</lable>
      <input id="name" type="text" v-model="name" name="name" autofocus>
      <lable id="lable_password">Password</lable>
      <input id="password" type="password" v-model="password" name="password">
      <a href="#/"><input id="button" type="button" name="login" value="REGISTER NOW" @click="save"></a>
      <h1>REGISTRATION</h1>
    </form>
  </div>
</template>


<script>
  export default ({
    name: 'RegBlock',
        
    data () {
      return{
        name: "",
        password: "",
      }
    },
    methods: {
      save () {
        localStorage.name = this.name;
        localStorage.password = this.password;
        /*this.name = "";
        this.password = "";*/
      }
    }       
  })
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
    padding: 16px 15px;
    line-height: 21px;
  
    position: absolute;
    width: 88%;
    height: 53px;
    left: 6%;
    top: 68px;
  
    background: #FFFFFF;
    border: 1px solid #9A9A9A;
  }
  #name:focus {
    border: 1px solid #101010;
  }
  #name:valid {
    border: 1px solid #9A9A9A;
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
    padding: 16px 15px;
    line-height: 21px;
  
    position: absolute;
    width: 88%;
    height: 53px;
    left: 6%;
    top: 189px;
  
    background: #FFFFFF;
    border: 1px solid #9A9A9A;
  }
  #password:focus {
    border: 1px solid #101010;
  }
  #password:valid {
    border: 1px solid #9A9A9A;
  }
  #button {
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
  h1 {
    position: absolute;
    font-size: 40px;
    bottom: 10%;
    font-weight: 700;
    left: 0px;
    right: 0px;

    display: flex;
    justify-content: center;
    /* color:#0076C0 */
   }

/********************************************************************/

  @media (max-width: 940px){
    .main-block_login {
      margin: 40px 0px 0px 0px;
    }  
  }
  @media (max-width: 320px) {
    h1 {
      font-size: 30px;
    }
  }
  @media (max-width: 260px) {
    #button {
      font-size: 20px;
    }
    h1 {
      font-size: 20px;
    }
  }
</style>