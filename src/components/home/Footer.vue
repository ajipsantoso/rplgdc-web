<template>
<div class="footer">
  <div class="bar">
    <div class="bar_left">
        &copy; 2019 RPLGDC Laboratory, All Right Reserved
    </div>
    <div class="bar_right">
        <a href="https://www.instagram.com/rplgdc_/"><i class="fab fa-instagram"></i></a>
        <a href="https://line.me/R/ti/p/%40ajh8699v"><i class="fab fa-line"></i></a>
    </div>
  </div>
</div>
</template>

<script>    
export default {
  data: () => ({
    dynamicNav: {
      shrink: false,
    }
  })
}
</script>

<style scoped>
.bar {
  border-top: 1px solid #1a1a1a;
  color: #1a1a1a;
  position: relative;
  width: 100%;
  height: 70px;
}
.bar_left {
  float: left;
  position: absolute;
  font-size: 14px;
  width: 50%;
  top: 50%;
  transform: translateY(-50%);
  margin-left: 20px;
}
.bar_right {
  float:right;
  width: 50%;
  text-align: right;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  position: absolute;
}
i {
  font-size: 50px;
  margin-right: 20px;
}
a {
  color: #1a1a1a;
}
</style>
