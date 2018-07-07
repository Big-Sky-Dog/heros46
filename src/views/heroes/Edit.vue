<template>
  <div>
    <h2 class="sub-header">Edit Hero</h2>
    <form>
      <div class="form-group">
        <label for="name">英雄名称</label>
        <input v-model="formData.name" type="text" class="form-control" id="name" placeholder="Name">
      </div>
      <div class="form-group">
        <label for="sex">英雄性别</label>
        <input v-model="formData.gender" type="text" class="form-control" id="sex" placeholder="Sex">
      </div>
      <button @click.prevent="handleEdit" type="submit" class="btn btn-success">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      formData: {
        name: '',
        gender: ''
      },
      heroId: -1
    }
  },
  created() {
    this.heroId = this.$route.params.id;
    this.loadData();
  },
  methods: {
    loadData() {
      axios.get(`http://localhost:3000/heroes/${this.heroId}`)
        .then((res) => {
          if (res.status == 200) {
            this.formData = res.data;
          }
        })
    },
    handleEdit() {
      axios.put(`http://localhost:3000/heroes/${this.heroId}`, this.formData)
        .then((res) => {
          if (res.status === 200) {
            this.$router.push({ name: 'heroes' });
          } else {
            alert('修改失败');
          }
        });
    }
  }
};
</script>

<style>
</style>