<template>
    <div>
        <div class="title">
            添加新闻
        </div>
        <el-card>
            <el-form ref="form" :model="formData" label-width="80px">
                <el-form-item label="新闻标题" required>
                    <el-input v-model="formData.title"></el-input>
                </el-form-item>
                <el-form-item label="作者" required>
                    <el-select v-model="formData.author">
                        <el-option v-for="(item,index) in users" :key="index" :value="item._id" :label="item.nickname">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="新闻类型">
                    <el-select v-model="formData.category" placeholder="请选择类型">
                        <el-option v-for="(item,index) in categories" :key="index" :value="item._id" :label="item.title">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="新闻头图">
                    <Upload v-model="formData.img"></Upload>
                </el-form-item>
                <el-form-item label="新闻编辑">
                    <quill-editor v-model="formData.content" ref="myQuillEditor" :options="editorOption" @change="handleChange($event)">
                    </quill-editor>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="handleAdd">提交</el-button>
                    <el-button>取消</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script>
    import axios from "axios"
    import { quillEditor, Quill } from "vue-quill-editor"
    import { container, ImageExtend, QuillWatch } from 'quill-image-extend-module'
    Quill.register('modules/ImageExtend', ImageExtend)

    import Upload from "@/components/upload-avatar.vue"
    export default {
        components: {
            quillEditor,
            Upload
        },
        data() {
            return {
                formData: {
                    title: "",
                    content: "",
                    contentText: "",
                    img: "",
                    author: "",
                    category: "",
                    lookNum: "",
                    myQuillEditor: {},
                },
                token:"",
                users: [],
                categories: [],
                editorOption: {
                    //  富文本配置项
                    modules: {
                        ImageExtend: {
                            loading: true,
                            name: 'file',
                            action: "https://upload-z1.qiniup.com",
                            response: (res) => {
                                return res.url
                            },
                            change: (xhr, formData) => {
                             formData.append('token', this.token)
                            } 
                        },
                        toolbar: {
                            container: [
                                ['bold', 'italic', 'underline', 'strike', "clean"], // 加粗、倾斜、下划线、删除线
                                [{ 'header': 1 }, { 'header': 2 }], // 标题一、标题二
                                [{ 'list': 'ordered' }, { 'list': 'bullet' }], // 列表
                                [{ 'color': [] }, { 'background': [] }], // 字体颜色、背景颜色
                                ["image"],
                            ],
                            handlers: {
                                'image': function () {
                                    QuillWatch.emit(this.quill.id)
                                }
                            }
                        }
                    }
                },
            }
        },
        methods: {
            getUser() {
                this.$axios.get("/admin/user").then(res => {
                    if (res.code == 200) {
                        this.users = res.data
                    }
                })
            },
            getCategory() {
                this.$axios.get("/admin/category").then(res => {
                    if (res.code == 200) {
                        this.categories = res.data
                    }
                })
            },
            handleChange({ quill, html, text }) {
                this.formData.contentText = text
                this.formData.contentText = this.formData.contentText.substring(0, 200) + "..."
            },
            handleAdd() {
                this.$axios.post("/admin/news", this.formData).then(res => {
                    console.log(res)
                    if (res.code == 200) {
                        this.$message.success(res.msg)
                        setTimeout(() => {
                            this.$router.push("newsList")
                        }, 1000)
                    }
                })
            },
            getToken(){
                axios.get("http://upload.yaojunrong.com/getToken").then(res=>{
                    this.token = res.data.data
                })
            }
        },
        created() {
            this.handleAdd()
            this.getUser()
            this.getCategory()
            this.getToken()
        }
    }
</script>

<style scoped lang="scss">
    /deep/ .ql-editor {
        height: 200px;
    }

    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }

    .avatar-uploader .el-upload:hover {
        border-color: #409eff;
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