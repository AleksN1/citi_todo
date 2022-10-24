<template>
  <div class="main-block_text">
    <div class = "title">Welcome to <br> Business Analytics Online</div>
    <div class="subtitle"><span>Business Analytics</span> — a new, convenient tool for managing and forecasting your business performance, which will help analyze your own finances and cash flows, visualize your reporting, business processes, KPI's</div>
    <div class="list">
      <ul class="list__items">
        <li >Interactive Reporting</li>
        <li>In just a few clicks, you can connect your data from 1C, CRM (Bitrix24, AmoCRM, ZohoCRM), <br> E-commerce (PROM.UA, Rozetka, ebay), Logistic (Nova Poshta), Google Analytics and many more systems that reflect different aspects of business activities.</li>
        <li>Automated data updates</li>
        <li>The application automatically updates and structures the data in just 60 seconds, saving you time and money.</li>
        <li>Data Security</li>
        <li>The Bank guarantees the safety of your personal data, ensuring their integrity and confidentiality.</li>
      </ul>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'TextBlock'
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main-block_text {
    max-width: 680px;
    height: 100%;
    /*border: 2px solid goldenrod;*/
  }
  .title {
    max-width: 630px;
    height: 387px;
      
    font-style: Regular;
    font-weight: 400;
    font-size: 55px;
    line-height: 157%;
    /* or 86px */
    
    display: flex;
    flex: 1 1 auto;
    align-items: flex-end;
  
    color: #FFFFFF;

    /*border: 1px solid slateblue;*/
  }
  .subtitle {
    margin: 115px 0px 5px 0px;
    font-size: 16px;
    font-weight: 400;
    line-height: 157%;
    max-width: 664px;
    height: 100%;
    line-height: 157%;  
  }
  .subtitle span  {
    font-weight: 500;  
    font-size: 16px;
    line-height: 157%;
  }
  .list {
    max-width: 671px;
    height: 100%;
    display: flex;
    flex: 1 1 auto;
            
    color: #333333;
    
    /*align-items: center;*/
    /*border: 1px solid lightseagreen;*/
  }
  /*.list__items {}*/
  .list li:nth-child(odd) {
    font-style: Medium;
    font-weight: 500;
    font-size: 16px;
    line-height: 157%;
    margin-top: 17px;
    background: url("../assets/Vector.png") left no-repeat;
    padding-left: 38px;
  }
  .list li:nth-child(even) {
    font-style: Regular;
    font-weight: 400; 
    font-size: 14px;
    line-height: 157%;
    margin: 10px 0px 0px 38px;
  }

  /********************************************************************/

  @media (max-width: 1167px) {
    .title {
      line-height: 145.00%;
    }
  }
</style>