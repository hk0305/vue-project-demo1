<template>
  <h1 v-if="level==1">{{title}}1</h1>
  <h2 v-else-if="level==2">{{title}}2</h2>
  <h3 v-else-if="level==3">{{title}}3</h3>
  <h4 v-else-if="level==4">{{title}}4</h4>
  <h5 v-else>{{title}}5</h5>
</template>
<script>
export default {
  name: 'title',
  props: {
    title: {
      type: String,
      default: '페이지 제목입니다.'
    },
    level: {
      type: Number,
      default: 2
    }
  }
}
</script>
