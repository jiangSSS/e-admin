<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  .title {
        font-weight: 700;
        color: #888;
        padding-bottom: 15px;
        padding-left: 20px;
    }
    .pagination{
      text-align: center;
      margin-top: 30px;
    }
</style>
