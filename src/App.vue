<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>
  <div class="navbar">
    <uL>
      <li> <RouterLink active-class="active" to="/">Home</RouterLink></li>
     <li>  <RouterLink  active-class="active" to="/add-user">Add User</RouterLink></li>
     <li> <RouterLink active-class="active" to="/about">About</RouterLink> </li>
  </uL>   
    
</div>
<RouterView /> 

</div>
</template>

<style scoped>
.navbar{
  background-color: black;
 
}
ul{
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
       
  }
  li{
    float: left;
  }
  li a{
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }
  li a:hover{
    background-color: rgb(161, 13, 13);
  }
  .active{
    font-weight: 900;
    color:rgb(125, 240, 17);
  }
</style>
