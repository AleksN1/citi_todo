<template>
  <body>
    <div class="wrapper">
      <header class="header">
        <div class="header-item__up"></div>
        <div class="header-item__down">
          <div class="header__container _container">
            <div class="heder__logo">
            <a href="https://www.citigroup.com/citi/" class="logo__link"><img src="../assets/logo.svg" alt = "logo1"></a>
            </div>
          </div>
        </div>
      </header>
      <main class="main">
        <div class="back_image _ibg">
          <img src="../assets/back.png" alt="back_image">
        </div>
        <div class="main_container _container">
          <div class="items-main">
            <TextBlock/>
            <router-view></router-view>
          </div>
        </div>
      </main> 
      <footer class="footer">
        <div class="footer_container _container">
          <div class="foo_cont">
            <div class="footer_logo">
              <a href="https://www.citigroup.com/citi/" class="footer_logo-link">
                <img src="../assets/Group1853.svg" alt = "logo2"></a>
            </div>
            <PagesBlock/>
          </div>
          <div class = "typography">© 2020 Citigroup Inc. Citibank, N.A. Member FDIC. Equal Opportunity Lender.</div>
        </div>
      </footer>          
    </div>
  </body>
</template>


<script>
  import PagesBlock from '/src/components/PagesBlock.vue'
  import TextBlock from '/src/components/TextBlock.vue'

  export default {
    name: 'CitiPage',
    components: {
      TextBlock,
      PagesBlock,
    }
  }
</script>


<style scoped>
  .wrapper {
    min-height: /*1232px*/ 100vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }
  ._container {
    margin: 0px auto;
    max-width: 1180px;
    min-height: 100%;
    padding: 0px 20px;
    box-sizing: content-box;
  }

/********************************************************************/

  ._ibg {
    position: relative;
  }
  ._ibg img {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0px;
    top: 0px;
    object-fit: cover;
  }

/********************************************************************/

  .header {
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
  }
  .header__container {
    display: flex;
    align-items: center;
  }
  .header-item__up {
    width: 100%;
    height: 53px;
    background-color: #333333;
  }
  .header-item__down {
    top: 53px;
    width: 100%;
    height: 96px;
    background: linear-gradient(180deg, #00AFED 0%, #00569A 100%);
  }
  .header__logo {
    height: 100%; 
  }
  .header__logo img {
    width: 103px;
    height: 66px;
  }

/********************************************************************/

  .main {
    flex: 1 1 auto;
    min-height: 909px;
  }
  .back_image {
    height: 457px;    
  }
  .items-main {
    position: relative;
    max-width: 1180px;
    min-height: 654px;
    margin: -457px 0px 40px 0px;
    display: flex;
    
    justify-content: space-between;
    z-index: 100;

    /*border: 2px solid red;*/
  }
  
/********************************************************************/
 
/*LogBlock/RegBlock*/
    
/********************************************************************/

  .footer {
    width: 100%;
    min-height: 175px;
    background-color: black;
  }
  .foo_cont {
    display:flex;
    min-height: 95.5px;
    justify-content:space-between;
    border-bottom: 2px solid #FFFFFF;
  }
  .footer_logo {
    display: flex;
    align-items: center;
  }
  .footer_logo img{
    width: 56px;
    height: 35px;
  }
  .typography {
    width: 100%;
    min-height: 79.5px;
    height: 100%;
    
    font-style: Medium;
    font-weight: 500;
    font-size: 12px;
    line-height: 157%;
    /* identical to box height, or 19px */

    display: flex;
    align-items: center;

    color: #FFFFFF; 
  }

/********************************************************************/

  @media (max-width: 940px){
    .items-main {
      flex-wrap: wrap;
      justify-content: center;
    }
    .main-block_login {
      margin: 40px 0px 0px 0px;
    }
  }
</style>
