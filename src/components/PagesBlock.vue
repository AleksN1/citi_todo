<template>
  <nav class="footer_menu menu">
    <ul class="menu_list">
      <li class="menu_item"><a href="#!" class="menu_link">Terms & Conditions</a></li>
      <li class="menu_item"><a href="#!" class="menu_link">Privacy</a></li>
      <li class="menu_item"><a href="#!" class="menu_link">Notice at Collection</a></li>
      <li class="menu_item"><a href="#!" class="menu_link">CA Privacy Hub</a></li>
      <li class="menu_item"><a href="#!" class="menu_link" >Contact Us</a></li>
      <li class="menu_item"><a href="#!" class="menu_link">Sitemap</a></li>
    </ul>
  </nav>
</template>


<script>
  export default {
    name: 'PagesBlock'
  }
</script>


<style scoped>
  /*.footer_menu {}*/
  .menu_list {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    align-items: center;
    margin-left: 20px;
  }
  .menu_item:not(:last-child) {
    margin-right: 20px;
  }
  .menu_link {
    font-style: Medium;
    font-weight: 500;
    font-size: 16px;
    line-height: 157%;
    text-decoration: none;
    color: #FFFFFF
  }
  .menu_link:hover {
    text-decoration: underline;
    text-decoration-color:#0076C0
  }
</style>