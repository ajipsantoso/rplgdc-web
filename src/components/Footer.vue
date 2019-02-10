<template>
  <!-- untuk assets di folder src/assets/namagambar.jpg/png -->
  <div class="footer">
      <div class="bar">
          <div class="bar_left">
              &copy; 2019 RPLGDC Laboratory, All Right Reserved
          </div>
          <div class="bar_right">
              <i class="fab fa-instagram"></i><i class="fab fa-line"></i>
          </div>
      </div>
  </div>
</template>

<script>    
export default {
    data:()=> ({
            dynamicNav:{
                shrink: false,
            }
    }),
}

</script>

<style scoped>
    .bar{
        border-top: 1px solid black;
        position: relative;
        display: inline-block;
        width: 100%;
        height: 70px;
    }
    .bar_left{
        float: left;
        position: absolute;
        font-size: 14px;
        width: 50%;
        top: 50%;
        transform: translateY(-50%);
        margin-left: 20px;
    }
    .bar_right{
        float:right;
        width: 50%;
        text-align: right;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
        position: absolute;
    }
    i{
        font-size: 50px;
        margin-right: 20px;
    }
</style>
