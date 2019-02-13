<template>
<div class="navbarr">
  <nav class="navbar navbar-expand-md navbar-dark navibar" :class="dynamicNav">
    <router-link to="/" class="navbar-brand">
      <div class="logo">
        <div class="logo_l">                        
          <img src="../../assets/icon_RPLGDC.png" width="30" height="30" class="d-inline-block align-top" alt="">
        </div>
        <div class="logo_r">
          <div class="logo_txt">
            RPLGDC Laboratory
          </div>
        </div> 
      </div>
    </router-link>
    <button class="navbar-toggler" type="button" @click="navcolaps_js()"  data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse " id="navbarSupportedContent" >
      <div class="mr-auto"> </div>
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/" class="nav-link">HOME</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/product" class="nav-link">PRODUCT</router-link>
        </li>
        <li class="nav-item">
          <a href="http://rplgdc.com/daftar/register" class="btn btn-square" type="button">JOIN US</a>
        </li>
      </ul>
    </div>
  </nav>
</div>
</template>

<script>    
export default {
data: () => ({
  dynamicNav:{
    shrink: false,
    navcolaps: false,
    navcolaps_top: true
  }
}),
methods: {
  navset () {
    this.dynamicNav.shrink= window.scrollY > 60;
  },
  navcolaps_js () {
    this.dynamicNav.navcolaps= !this.dynamicNav.navcolaps;
    this.dynamicNav.navcolaps_top= !this.dynamicNav.navcolaps_top;
    //console.log(this.dynamicNav.navcolap);
  }
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
.navibar.navcolaps{
  background-color: #1a1a1a;
}
.navibar.navcolaps_top{
  background-color: rgba(0,0,0,0);
}
.nav-item .nav-link{
  color: #ffff;
}
ul li{
  margin-right: 20px;
}
.btn.btn-square {
  border-radius: 10px;
  background-color: #e67e22;
}
.navibar {
  min-height: 100px;
  color: white;
  position: fixed;
  width: 100%;
  z-index: 99999;
  transition: all ease .5s;
}
.logo {
  font-size: 26px;
  margin-left: 60px;
  width: 300px;
  height: 60px;
  position: relative;
  transition: all ease .5s;
}

.logo_l{
  height: 100%;
  width: 20%;
  float: left;
  position: relative;
}
.logo_r{
  height: 100%;
  width: 80%;
  float: right;
  position: relative;
}
.logo_l img{
  width: auto;
  margin: auto;
  height: 70%;
  top: 0;
  right:10%;
  bottom: 0;
  left: unset;
  position: absolute;
}

.logo_txt{
  top: 50%;
  transform: translateY(-50%);
  position: absolute;
}
.navibar.shrink .logo_l img {
  height: 70%;
  margin: auto; 
  top: 0;
  right:10%;
  bottom: 0;
  left: unset;
  position: absolute;
}
.navibar.shrink {
  background-color: #1a1a1a;
  min-height: 50px;
  transition: all ease .5s;
}
.navibar.shrink .logo {
  font-size: 18px;
  height: 30px;
  transition: all ease .5s;
}
.navibar.shrink .logo_l{
  width: 20%
}
.navibar.shrink .logo_r{
  width: 80%
}

@media (max-width: 575.98px) {
  .navibar {
    min-height: 60px;
  }
  .logo {
    font-size: 20px;
    margin-left: unset;
    width: 200px;
    height: 40px;
    position: relative;
    transition: all ease .5s;
  }
  ul {
    margin-left: 20px;
  }
}
@media (min-width: 576px) and (max-width: 823.98px) {
  .logo {
    font-size: 20px;
    margin-left: unset;
    width: 300px;
    height: 40px;
    position: relative;
    transition: all ease .5s;
  }
  ul {
    margin-left: 20px;
  }
}

/* @media (max-width: 350px) {
  .logo_r .logo_txt {
    font-size: 15px;
  }
} */
</style>