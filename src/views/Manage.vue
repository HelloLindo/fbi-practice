<template>
  <div>
    <el-table
      ref="multipleTable"
      :data="user_table_data"
      stripe
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="user_id" label="用户ID" width="200"></el-table-column>
      <el-table-column prop="user_name" label="姓名" width="200"></el-table-column>
      <el-table-column prop="user_province" label="所在省份" width="200"></el-table-column>
      <el-table-column prop="user_level" label="重要级别" width="200" height="50"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <div style="text-align:left; margin-top: 20px; margin-bottom: 110px">
      <el-button @click="toggleSelection(user_table_data)">反向选择</el-button>
      <el-button @click="toggleSelection()">取消选择</el-button>
      <el-button type="danger" @click="batchDelete()">批量删除</el-button>
    </div>

    <EditForm ref="enter_form" @returnEditedData="refreshData"></EditForm>
  </div>
</template>

<script>
import EditForm from "@/components/EditForm.vue"
import axios from "axios"
export default {
  name: "Manage",
  components: {
    EditForm
  },
  data() {
    return {
      user_table_data: [],
      multipleSelection: []
    }
  },
  mounted() {
    let utb = this.user_table_data
    axios
      .get("http://localhost:3000/api/pullUsers", {
        params: {
          num_of_users: 10
        }
      })
      .then(function(response) {
        console.log(response.data.data)
        for (let i in response.data.data) {
          utb.push({
            user_id : response.data.data[i].user_id,
            user_name : response.data.data[i].user_name,
            user_province : response.data.data[i].user_province,
            user_level : response.data.data[i].user_level
          }) 
        }
      })
      .catch(function(error) {
        console.log(error)
      })
  },
  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row)
        })
      } else {
        this.$refs.multipleTable.clearSelection()
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val
    },
    handleEdit(index, row) {
      this.$refs.enter_form.open_dialog(index, row)
    },
    handleDelete(index, row) {
      console.log(index, row)
    },
    batchDelete() {
      // 批量删除
      console.log(this.multipleSelection)
    },
    refreshData(edited_data) {
      let utb = this.user_table_data
      for(let i in utb) {
        console.log(utb[i].user_id == edited_data.user_id)
        if(utb[i].user_id == edited_data.user_id){
          utb[i].user_name = edited_data.user_name
          utb[i].user_province = edited_data.user_province
          utb[i].user_level = edited_data.user_level
          console.log(edited_data.user_name)
        }
      }
    }
  }
}
</script>

<style scoped>
.el-table__header tr,
.el-table__header th {
  padding: 0;
  height: 40px;
}
</style>