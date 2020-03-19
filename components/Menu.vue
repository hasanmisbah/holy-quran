<template>
  <div class="sidenav">
    <b-menu>
      <template if="suraName">
        <b-menu-list label="Sura Index">
          <b-menu-item
            v-for="(sura, index) in suraName"
            :key="index"
            icon="book-open-page-variant"
            :label="sura.transliteration_en"
            @click.prevent="getSurah(sura.number)"
          ></b-menu-item>
        </b-menu-list>
      </template>
    </b-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: true
    };
  },
  methods: {
    getIndex() {
      this.$store.dispatch("surah/SETINDEX");
    },
    getSurah(data) {
      this.$store.dispatch("surah/GETSURA", data);
    }
  },
  computed: {
    suraName() {
      return this.$store.state.surah.index;
    }
  },
  created() {
    this.getIndex();
  }
};
</script>
<style lang="scss">
.sidenav {
  padding-top: 70px;
  position: fixed;
  left: 0;
  top: 0;
  width: 230px;
  min-height: 100%;
  margin-left: 30px;
  border-right: 1px solid #e3e3e3;
  .menu-list {
    display: block;
    overflow-y: scroll;
    max-height: 85vh;
  }
}
</style>