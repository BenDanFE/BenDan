<template>
  <div id="app">
    <Layout> 
      <Header/>
      <Content>
        <router-view/>
      </Content>

    </Layout>
  </div>
</template>



<script lang="ts">
 import Header from "@/components/Header/Header.vue";  
  export default {
    components: {
      Header
    }
  }
</script>

<style lang="less">
</style>