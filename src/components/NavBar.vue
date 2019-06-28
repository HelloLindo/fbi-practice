<template>
  <div id="nav_bar">
    <div id="nav_logo">
      <img alt="CSIG Logo" src="../assets/img/tencent_cloud_logo.png">
    </div>
    <div id="nav_menu">
      <el-menu
        :default-active="activeIndex"
        mode="horizontal"
        @select="handleSelect"
        background-color="rgba(0,0,0,0)"
        text-color="#fff"
        active-text-color="#ffffcc"
      >
        <el-menu-item index="1">我的控制台</el-menu-item>
        <el-menu-item index="2" disabled>我的账户</el-menu-item>
        <el-menu-item index="3">
          <a
            href="https://github.com/AlloyTeam/fbi"
            target="_blank"
            style="text-decoration:none;"
          >引用框架</a>
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      logo_src: "../assets/img/tencent_cloud_logo.png",
      //../替换成@/就不行
      activeIndex: "1"
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      if(key==1){
        this.$router.push('/')
      }
    }
  }
}
</script>

<style scoped>
#nav_bar {
  text-align: left;
}
#nav_logo {
  float: left;
  left: 0;
  top: 0;
  margin: 0 0;
  width: 145px;
}
#nav_logo > img {
  width: 100%;
  height: 35px;
}
#nav_menu {
  display: fixed;
  float: right;
  right: 0;
  top: 0;
  width: 360px;
}
</style>