<template>
  <div>
    <nav class="navbar navbar-dark bg-primary justify-content-between mb-4 px-4">
      <router-link to="/" class="navbar-brand">者也专栏</router-link>
      <ul v-if="!user.isLogin" class="list-inline mb-0">
        <li class="list-inline-item"><router-link to="/login" class="btn btn-outline-light my-2">登录</router-link></li>
        <li class="list-inline-item"><router-link to="/login" class="btn btn-outline-light my-2">注册</router-link></li>
      </ul>
      <ul v-else class="list-inline mb-0">
        <li class="list-inline-item">
          <dropdown :title="`你好 ${user.name}`">
            <DropdownItem><router-link to="/" class="dropdown-item">新建文章</router-link></DropdownItem>
            <DropdownItem disabled><router-link to="/" class="dropdown-item">编辑资料</router-link></DropdownItem>
            <DropdownItem><router-link to="/" class="dropdown-item">退出登录</router-link></DropdownItem>
          </dropdown>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import Dropdown from './Dropdown.vue'
import DropdownItem from './DropdownItem.vue'

export interface UserProps {
  isLogin: boolean,
  name?: string,
  id?: number
}
export default defineComponent({
  components: {
    Dropdown,
    DropdownItem
  },
  props: {
    user: {
      type: Object as PropType<UserProps>,
      required: true
    }
  }
})
</script>
