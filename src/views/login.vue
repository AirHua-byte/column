<template>
  <ValidateForm @form-submit="onFormSubmit">
      <div class="mb-3">
        <label class="form-label">邮箱地址</label>
        <ValidateInput
          :rules="emailRules" v-model="emailVal"
          placeholder="请输入邮箱号"
          type="text"
          ref="inputRef"
        ></ValidateInput>
      </div>
      <div class="mb-3">
        <label class="form-label">密码</label>
        <ValidateInput
          type="password"
          placeholder="请输入密码"
          :rules="passwordRules"
          v-model="passwordVal"
          ref="passwordRef"
        ></ValidateInput>
      </div>
      <template #submit>
        <span class="btn btn-primary">Submit</span>
      </template>
    </ValidateForm>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import ValidateInput, { RulesProp } from '../components/ValidateInput.vue'
import ValidateForm from '../components/ValidateForm.vue'

export default defineComponent({
  components: {
    ValidateInput,
    ValidateForm
  },
  setup () {
    const emailRules: RulesProp = [
      { type: 'required', message: '电子邮箱地址不能为空' },
      { type: 'email', message: '请输入正确的电子邮箱格式' }
    ]
    const passwordRules: RulesProp = [
      { type: 'required', message: '密码不能为空' },
      { type: 'password', message: '以字母开头，长度在6~18之间，只能包含字母、数字和下划线' }
    ]
    const emailVal = ref('')
    const passwordVal = ref('')
    const inputRef = ref<any>()
    const passwordRef = ref<any>()
    const router = useRouter()
    const store = useStore()
    const onFormSubmit = (result: boolean) => {
      if (!result) {
        inputRef.value.clearInput()
        passwordRef.value.clearInput()
      } else {
        router.push('/')
        store.commit('login')
      }
    }
    return {
      emailRules,
      passwordRules,
      emailVal,
      passwordVal,
      onFormSubmit,
      inputRef,
      passwordRef
    }
  }
})
</script>
