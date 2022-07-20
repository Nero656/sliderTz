<template>
  <div class="slider">
    <div v-bind:key="id" v-for="(item, id) in slides" class="slide" @click="itemEnableClick(id)" >
      <Custom_slide :ref="item"
                    :date=item.date
                    :title=item.title
                    :info=item.info
                    :photo_url=item.photo_url
      />
    </div>
    <div  @click="itemDisableClick">
      <Custom_drop v-if="itemEnable"
                   :date="dropSlide[0].date"
                   :photo_url="dropSlide[0].photo_url"
                   :title="dropSlide[0].title"
                   :info="dropSlide[0].info"
      />
    </div>
  </div>
</template>

<script>
import Custom_slide from "@/components/Custom_slide";
import Custom_drop from "@/components/Custom_drop";

export default {
  name: "Custom_slider",
  components: {Custom_slide, Custom_drop},
  data: () => ({
    itemEnable: false,
    id: 0,
    slides: [],
    dropSlide:[]
  }),

  mounted() {
    this.slides.push({
          id: 1,
          date: "17.07.2022",
          title: "Ким и Валерия Брейтбурги написали книгу про искусство",
          info: "Работа над книгой велась более пяти лет, и действенные методики, описанные в ней," +
              " созданные в результате анализа и синтеза идей…",
          photo_url: "/images/empty_photo.png"
        },
        {
          id: 2,
          date: "12.07.2022",
          title: "Юрий Колокольников пытается спасти Землю в клипе «Космические силы»",
          info: "Премьера клипа «Космические силы» группы «Мумий Тролль» состоялась 6 ноября 2020 года.",
          photo_url: "/images/empty_photo.png"
        },
        {
          id: 3,
          date: "14.06.2022",
          title: "BTS получили четыре награды MTV EMA",
          info: "BTS получили четыре награды MTV EMA\n" +
              "27-я ежегодная церемония награждения MTV Europe Music Awards состоялась 8 ноября 2020 г.",
          photo_url: "/images/empty_photo.png"
        },
        {
          id: 4,
          date: "12.04.2022 ",
          title: "Открытие сезона «Ла Скала» отменено",
          info: "Миланский театр La Scala отменил открытие сезона. Первый спектакль был назначен на 7 декабря — «Лючия ди Ламмермур».",
          photo_url: "/images/empty_photo.png"
        }
    )
  },
  methods: {
    slideNext() {
      this.slides.unshift(this.slides[this.slides.length - 1])
      this.slides.pop();
    },

    slideBack() {
      this.slides.push(this.slides[0])
      this.slides.shift()
    },

    slideClick(id) {
      this.slides.unshift(this.slides[id])
      this.slides.pop();
    },

    itemEnableClick(id) {
      this.dropSlide.push({
        date: this.slides[id].date,
        title: this.slides[id].title,
        info: this.slides[id].info,
        photo_url: this.slides[id].photo_url
      })
      this.itemEnable = true
    },
    itemDisableClick(){
      this.itemEnable = false
    }
  },
}
</script>

<style scoped>

</style>