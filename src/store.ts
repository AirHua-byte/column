import { createStore, Commit } from 'vuex'
import { testData, testPosts, ColumnProps, PostProps } from './testData'

export interface UserProps {
  isLogin: boolean,
  name?: string,
  id?: number
}

export interface GlobalDataProps {
  colums: ColumnProps[],
  posts: PostProps[],
  user: UserProps
}

const store = createStore<GlobalDataProps>({
  state: {
    colums: testData,
    posts: testPosts,
    user: {
      isLogin: false
    }
  },
  mutations: {
    login (state) {
      state.user = { isLogin: true, name: 'airhua' }
      console.log(state.user)
    }
  }
})

export default store
