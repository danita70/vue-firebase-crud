<template>
  <div class="home">
  
    <div class="container">
      <div class="row">
        <div class="col-md-6 offset-md-3">
          <h2> Users List</h2>
          <ul class="list-group">
            <li class=" ist-group-item d-flex  justify-content-between align-items-center">
             <h2>User name 1</h2>
              <span class="badge badge-primary badge-pill">
                <router-link  :to="{path: `/users/1234`}"  class="btn btn-primary ml-2">Edit</router-link>
                <a href="#" class="btn btn-danger">Delete</a>
              </span>
            </li>
            <li class=" ist-group-item d-flex  justify-content-between align-items-center">
              <h2>User name 2</h2>
               <span class="badge badge-primary badge-pill">
                 <router-link  :to="{path: `/users/1234`}"  class="btn btn-primary ml-2">Edit</router-link>
                 <a href="#" class="btn btn-danger">Delete</a>
               </span>
             </li>
             <li class=" ist-group-item d-flex  justify-content-between align-items-center">
              <h2>User name 3</h2>
               <span class="badge badge-primary badge-pill">
                 <router-link  :to="{path: `/users/1234`}"  class="btn btn-primary ml-2">Edit</router-link>
                 <a href="#" class="btn btn-danger">Delete</a>
               </span>
             </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
.home{
 padding-top: 20px;
}
  
</style>