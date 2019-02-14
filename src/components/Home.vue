<template>
<div class="product">
  <Navbar/>
  <Footer/>
</div>
</template>

<script>
export default {
  data: () => ({
  }),
  components:{
    'Navbar': () => import('./home/Navbar.vue'),
    'Footer': () => import('./home/Footer.vue'),
  },
}
</script>

<style scoped>

</style>
