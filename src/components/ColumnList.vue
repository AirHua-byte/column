<template>
  <div class="row">
    <div class="col-4" v-for="(item, index) in ColumnList" :key="index">
      <div class="card">
        <div class="card-body text-center">
          <img :src="item.avatar" class="border rounded-circle my-3 border-light" :alt="item.title">
          <h5 class="card-title">{{ item.title }}</h5>
          <p class="card-text text-left">{{ item.description }}</p>
          <router-link :to="`/column/${ item.id }`" class="btn btn-outline-primary">进入专栏</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue'

export interface ColumnProps {
  id: number,
  title: string,
  avatar?: string,
  description: string
}
export default defineComponent({
  props: {
    list: {
      type: Array as PropType<ColumnProps[]>,
      required: true
    }
  },
  setup (props) {
    const ColumnList = computed(() => {
      return props.list.map(item => {
        if (!item.avatar) {
          item.avatar = require('@/assets/column.jpg')
        }
        return item
      })
    })
    return {
      ColumnList
    }
  }
})
</script>

<style scoped>
.card-body img {
  width: 50px;
  height: 50px;
}
.card-body .card-text {
  overflow: hidden;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  box-orient: vertical;
  display: -webkit-box;
  height: 50px;
  /* 1.一行内，超出部分显示省略号：
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
  2.多行文字超出部分显示省略号：

  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden; */
}
</style>
