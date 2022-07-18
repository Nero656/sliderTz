<template>
  <div id="app" class="content">
    <div class="form">
      <div class="content_head">
        <h1>Актуальное</h1>
        <div class="sliderPages">
          <div v-bind:key="id" v-for="id in sliderLength">
            <div v-if="id === pages[0].id">
              <span @click="parentMethodTakeSlide(id)" class="activeSpan"></span>
            </div>
            <div v-else>
              <span @click="parentMethodTakeSlide(id)"></span>
            </div>
          </div>
        </div>
        <span>
          <button @click="parentMethodSlideNext()" >ᐸ</button>
          <button @click="parentMethodSlideBack()">ᐳ</button>
        </span>
      </div>
      <Custom_slider ref="Custom_slider"/>
    </div>
  </div>
</template>

<script>
import Custom_slider from "@/components/Custom_slider";

export default {
  name: 'App',
  components: {
    Custom_slider,
  },
  data: () => ({
    currentTime: 50000000000000,
    sliderLength: 0,
    pages: []
  }),
  methods: {
    parentMethodSlideNext() {
      this.$refs.Custom_slider.slideNext()
    },
    parentMethodSlideBack() {
      this.$refs.Custom_slider.slideBack()
    },
    parentMethodTakeSlide(id) {
      this.$refs.Custom_slider.slideClick(id)
    },
    startTimer() {
      this.timer = setInterval(() => {
        this.currentTime--
      }, 1000)
    },
    reloadTimer() {
      clearTimeout(this.currentTime)
      this.currentTime = 5
    },
  },
  mounted() {
    this.startTimer();
    this.sliderLength = this.$refs.Custom_slider.slides.length
    this.pages = this.$refs.Custom_slider.slides
  },
  watch: {
    currentTime(time) {
      if (time === 0) {
        this.$refs.Custom_slider.slideNext()
        this.reloadTimer()
      }
    }
  },
}
</script>

