<template>
     <Menu mode="horizontal" theme="light" active-name="1" :style="{position: 'fixed', width: '100%'}">
        <div class="layout-logo">
          <div>Bendan</div>
        </div>
        <div class="layout-nav">
          <MenuItem name="1"> 文章
          </MenuItem>
          <MenuItem name="2"> 分类
          </MenuItem>
          <MenuItem name="3"> 归档
          </MenuItem>
          <MenuItem name="4"> 留言
          </MenuItem>
        </div>
        <div class="layout-right">
          <router-link to="/signin">登陆</router-link> or <router-link to="/signup">注册</router-link> 
        </div>
      </Menu>
</template>

<style scoped lang="less">
 .layout-logo {
    font-size: 22px;
    width: 100px;
    float: left;
    margin-left: 20px;
  }
  .layout-right {
    float: right;
    margin-right: 20px;
  }
</style>