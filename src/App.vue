<template>
  <div id="app">
    <transition name="fade">
      <router-view/>
    </transition>
  </div>
</template>

<style>
body,html{
  height:100%; width: 100%;}

* {
  margin: 0;
  padding: 0;
}
.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .40s;
}
.fade-enter-active {
  transition-delay: .40s;
}
.fade-enter, .fade-leave-active {
  opacity: 0;
}
</style>
