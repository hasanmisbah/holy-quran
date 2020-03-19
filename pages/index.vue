<template>
  <div class="surah-container columns">
    <div class="column is-6">
      <ul class="sura" v-if="ayath">
        <li v-for="(ayah, index) in ayath" :key="index">
          <span class="ayath" v-html="ayah"></span>
          <span v-show="index!=0" class="index">
            <span>{{index | arabic}}</span>
          </span>
        </li>
      </ul>
    </div>
    <div class="column is-6">
      <ul class="translation" v-if="translation">
        <li v-for="(ayah, index) in translation" :key="index+'0'">
          <span v-show="index!=0" class="index">
            <span>{{index}}</span>
          </span>
          <span class="ayath" v-html="ayah"></span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      counter: 0,
      surah: [],
      text: 123
    };
  },
  methods: {
    getSurah() {
      if (!this.$store.state.surah.sura[0]) {
        this.$store.dispatch("surah/GETSURA", 1);
      }
    }
  },

  computed: {
    ayath() {
      return this.$store.state.surah.sura;
    },
    translation() {
      return this.$store.state.surah.translation;
    }
  },
  mounted() {
    this.getSurah();
  }
};
</script>
<style lang="scss">
.surah-container {
  direction: rtl;
  font-family: "PDMS_Saleem_QuranFont", sans-serif;
  font-weight: normal;
  font-style: normal;
  font-size: 28px;
  width: 100%;
  .translation {
    direction: ltr;
  }
  .index {
    font-family: "Lateef", cursive;
    display: inline-block;
    line-height: 0;
    border-radius: 50%;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(140, 112, 37);
    color: rgb(51, 51, 51);
    background: rgb(205, 229, 209);
    font-size: 12px;
    margin-left: 10px;
    margin-right: 10px;
    height: 24px;
    width: 24px;
    position: relative;
    span {
      display: inline-block;
      padding-top: 50%;
      padding-bottom: 50%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  ul.sura {
    //text-align: justify;
    li {
      display: inline-block;
      line-height: 1.8;
      &:first-child {
        display: block;
        text-align: center;
        margin-bottom: 10px;
      }
    }
  }
}
</style>