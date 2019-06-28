<template>
  <div id="edit_form">
    <el-dialog title="编辑用户" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="用户ID" :label-width="formLabelWidth">
          <el-input v-model="form.id" autocomplete="off" disabled="disabled"></el-input>
        </el-form-item>
        <el-form-item label="姓名" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="所在省份" :label-width="formLabelWidth">
          <el-input v-model="form.province" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="重要级别" :label-width="formLabelWidth">
          <el-select v-model="form.level" placeholder="请选择重要级别">
            <el-option label="1" value="1"></el-option>
            <el-option label="2" value="2"></el-option>
            <el-option label="3" value="3"></el-option>
            <el-option label="4" value="4"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="click_confirm">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: "EditForm",
  data() {
    return {
      dialogFormVisible: false,
      form: {
        id: "",
        name: "",
        province: "",
        level: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      formLabelWidth: "120px"
    }
  },
  methods: {
    open_dialog(index, row) {
      this.form.id = row.user_id
      this.form.name = row.user_name
      this.form.province = row.user_province
      this.form.level = row.user_level
      this.dialogFormVisible = true
    },
    async click_confirm() {
      let form_data = {
        user_id: this.form.id,
        user_name: this.form.name,
        user_province: this.form.province,
        user_level: this.form.level
      }
      let this_form = this.form
      await axios
        .post("http://localhost:3000/api/editUsers", {
          user_data: form_data
        })
        .then(function(response) {
          this_form.id = response.data.data.user_data.user_id
          this_form.name = response.data.data.user_data.user_name
          this_form.province = response.data.data.user_data.user_province
          this_form.level = response.data.data.user_data.user_level
        })
        .catch(function(error) {
          console.log(error)
        })
      this.dialogFormVisible = false
      let edited_data = {
        user_id: this_form.id,
        user_name: this_form.name,
        user_province: this_form.province,
        user_level: this_form.level
      }
      console.log(temp)
      this.$emit('returnEditedData', edited_data)
    }
  }
}
</script>

<style scoped>
</style>