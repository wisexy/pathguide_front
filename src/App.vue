<script setup lang="ts">
</script>

<template class="super">
  <div class="home">
    <el-header id="header">Header</el-header>
    <el-container id="main_container">
      <el-main id="main_panel">Main</el-main>
      <el-aside id="aside" width="200px">Aside</el-aside>
    </el-container>
    <el-footer id="footer">Footer</el-footer>
  </div>
</template>

<style scoped>
#header {
  background-color: blanchedalmond;
  height: 15vh;
}
#main_panel {
  background-color:cadetblue;
  width: 80vw;
}
#aside {
  background-color:darkgoldenrod;
  width: 15vw;
}
#main_container {
  height: 80vh;
}
#footer {
  background-color: blanchedalmond;
  height: 5vh;
}
.logo {
  display: block;
  margin: 0 auto 2rem;
}
</style>
