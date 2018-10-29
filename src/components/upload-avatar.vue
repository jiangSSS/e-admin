<template>
    <el-upload class="avatar-uploader" action="https://upload-z1.qiniup.com" 
        :show-file-list="false" :on-success="handleAvatarSuccess" :data="formData">
        <img v-if="imageUrl" :src="imageUrl" class="avatar">
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
</template>

<script>
    import axios from "axios"
    export default {
    props:{
        value:String
    },
    data() {
      return {
        imageUrl: this.value,
        formData:{
            token:""
        }
      };
    },
    methods: {
      handleAvatarSuccess(res) {
        this.imageUrl = res.url
        this.$emit("input",this.imageUrl)
      },
      getToken(){
          axios.get("http://upload.yaojunrong.com/getToken").then(res=>{
              if(res.data.code == 200){
                  this.formData.token = res.data.data
              }
          })
      }     
    },
    created(){
        this.getToken()
    },
    watch:{
        value(val){
            this.imageUrl = val
        }
    }
  }
  
</script>

<style scoped>
    .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    border: 1px dashed #d9d9d9;
    font-size: 28px;
    color: #8c939d;
    width: 128px;
    height: 128px;
    line-height: 128px;
    text-align: center;
  }
  .avatar {
    width: 128px;
    height: 128px;
    display: block;
  }
</style>