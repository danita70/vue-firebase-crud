<template>
    <div class="adduser">
        <div class="container">
         <div class="row">
             <div class="col-md-6 offset-md-3">
                 <h2> User Registration</h2>
                 <form>
                     <div class="form-group">
                         <input type="text" class="form-control mb-2" placeholder="First Name"                 
                         />
                       </div>
                       <div class="form-group">
                         <input
                           type="text"
                           class="form-control mb-2"
                           placeholder="Middle Name"
                          
                         />
                       </div>
                       <div class="form-group">
                         <input
                           type="text"
                           class="form-control mb-2"
                           placeholder="Last Name"
                         
                         />
                       </div>
                       <div class="form-group">
                         <input
                           type="email"
                           class="form-control mb-2"
                           placeholder="email"
                          
                         />
                         </div>
                         <div class="form-group">
                             <input
                               type="text"
                               class="form-control mb-2"
                               placeholder="Username"
                             
                             />
                           </div>
                        
                       
                       <button class="btn btn-primary">Add User</button>
                 </form>
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
.adduser{
    padding-top: 20px;
   }
</style>