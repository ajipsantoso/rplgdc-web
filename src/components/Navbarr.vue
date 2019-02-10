<template>
  <!-- untuk assets di folder src/assets/namagambar.jpg/png -->
  <div class="navbarr">
      <nav class="navbar navbar-expand-sm navbar-dark navibar">
            <a class="navbar-brand" href="#">
                <img src="../assets/icon_RPLGDC.png" width="30" height="30" class="d-inline-block align-top" alt="">
                RPLGDC Laboratory
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse " id="navbarSupportedContent" >
                <div class="mr-auto">

                </div>
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="/home">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/product">Product</a>
                    </li>
                    <li class="nav-item">
                        <a class="btn" type="button" style="background-color: #e67e22;">Daftar</a>
                    </li>
                </ul>
                
            </div>
        </nav>
    <!-- <div class="navi" :class="dynamicNav">
        <div class="logor">Logo</div>
        <div class="logo">
           
        </div>
    </div> -->
  </div>
</template>

<script>    
export default {
    data:()=> ({
            dynamicNav:{
                shrink: false,
            }
    }),
    methods:{
        navset(){
            this.dynamicNav.shrink= window.scrollY > 60;
        },
    },
    created () {
        window.addEventListener('scroll', this.navset);
    },
    destroyed () {
        window.removeEventListener('scroll', this.navset);
    }
}

</script>

<style scoped>
.nav-item .nav-link{
    color: #ffff;
}
.navibar {
  
  color: white;
  background-color: #1a1a1a;
  position: fixed;
  /* position: fixed;
  display: block; */
  width: 100%;
  z-index: 99999;
  transition: all ease .5s;
}

.logor{
    width: 50%;
    color: #fff;
    padding: 20px;
    font-size: 18px;
    transition: all ease .5s;
}
.logo{
    width: 50%;
    color: #fff;
    padding: 20px;
    font-size: 18px;
    transition: all ease .5s;
}

.navibar.shrink {
    top: 10;
  height: 60px;
  transition: all ease .5s;
  
}
.navi.shrink .logo {
  padding: 10px;
  transition: all ease .5s;
}
</style>
