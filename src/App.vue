<template>
  <div id="app">
    <Layout>
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
          <a href="#">登录</a> or <a href="#">注册</a>
        </div>
      </Menu>
      <Content :style="{margin: '88px 20px 0', background: '#fff', minHeight: '500px'}">
        <router-view/>
      </Content>
      <Footer class="layout-footer-center">2011-2016 &copy; TalkingData</Footer>
    </Layout>
  </div>
</template>

<style lang="less">
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
