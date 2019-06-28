<template>
  <div class="app">
    <el-container>
      <el-header height="60px">
        <NavBar></NavBar>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <AsideBar></AsideBar>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue"
import AsideBar from "@/components/AsideBar.vue"

export default {
  // Assets
  components: {
    NavBar,
    AsideBar
  }
}
</script>

<style>
.app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  .el-header {
    background-color: #007aff;
    color: #fff;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #f6f6f6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #fff;
    color: #333;
    text-align: center;
    /* line-height: 160px; */
  }

  .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

  .nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
}
</style>
