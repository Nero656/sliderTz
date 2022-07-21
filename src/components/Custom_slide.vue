<template>
    <div class="slideTool">
      <img
          v-bind:src="photo_url"
          :alt=info
      />
      <p style=" opacity: 0.6;">{{date}}</p>
      <h3 class="toolName">{{ title }}</h3>
      <p class="toolDis">{{info}}</p>
    </div>
</template>

<script>
export default {
  name: "Custom_slide",
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
  }
}
</script>

<style scoped>

</style>