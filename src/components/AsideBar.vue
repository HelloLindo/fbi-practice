<template>
  <div id="aside_bar">
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      @select="menu_click"
    >
      <el-menu-item index="1">
        <i class="el-icon-setting"></i>
        <span>{{ aside_bar_item1 }}</span>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span>{{ aside_bar_item2 }}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "AsideBar",
  data() {
    return {
      aside_bar_item1: "用户信息管理",
      aside_bar_item2: "其他设置"
    }
  },
  methods: {
    menu_click: function(key) {
      if(key==1){
        this.$router.push('/')
      }else if(key==2){
        this.$router.push('/settings')
      }
    }
  }
}
</script>

<style scoped>
#aside_bar {
  text-align: left;
}
</style>