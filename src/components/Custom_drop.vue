<template>
  <div class="drop_back">
    <div class="drop_item">
      <img
          v-bind:src="photo_url"
          :alt=info
      />
      <p>{{date}}</p>
      <h3 class="toolName">{{ title }}</h3>
      <p>{{info}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Custom_drop",
  props: {
    date: {
      type: String,
      default: null,
    },
    title: {
      type: String,
      default: null
    },
    info: {
      type: String,
      default: null
    },
    photo_url: {
      type: String,
      default: null
    },
  },
}
</script>

<style scoped>

</style>