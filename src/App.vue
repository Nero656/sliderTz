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
          <button @click="parentMethodSlideNext()">
            <svg width="12" height="22" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 1L1 11L11 21" stroke="#527CCD"/>
            </svg>
          </button>
          <button @click="parentMethodSlideBack()">
            <svg width="12" height="22" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L11 11L1 21" stroke="#527CCD"/>
            </svg>
          </button>
        </span>
      </div>

      <Custom_slider ref="Custom_slider"/>

      <div class="sliderPagesMob">
        <button @click="parentMethodSlideNext()" style="margin-right: 20%">
          <svg width="12" height="22" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 1L1 11L11 21" stroke="#527CCD"/>
          </svg>
        </button>
        <div v-bind:key="id" v-for="id in sliderLength">
          <div v-if="id === pages[0].id">
            <span @click="parentMethodTakeSlide(id)" class="activeSpan"></span>
          </div>
          <div v-else>
            <span @click="parentMethodTakeSlide(id)"></span>
          </div>
        </div>
        <button @click="parentMethodSlideBack()" style="margin-left: 20%">
          <svg width="12" height="22" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L11 11L1 21" stroke="#527CCD"/>
          </svg>
        </button>
      </div>
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
    currentTime: 5,
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

