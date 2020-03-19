import index from '../static/surah';


export const state = () => ({
  index: '',
  sura: [],
  translation: []
});

export const getters = {
  getIndex: state => {
    return state.index
  }
};

export const mutations = {
  getIndex: (state) => {
    state.index = index
  },
  getSurah: (state, payload) => {
    state.sura = payload
  },
  getTranslation: (state, payload) => {
    state.translation = payload
  }
};

export const actions = {
  SETINDEX: ({
    commit
  }) => {
    commit('getIndex')
  },
  GETSURA: ({
    commit
  }, payload) => {
    let sura = [];
    let transData = [];
    let data = require(`../static/surah/surah_${payload}.json`).verse;
    let translation = require(`../static/translation/en/en_translation_${payload}.json`).verse;
    Object.entries(data).forEach(([key, value]) => {
      sura.push(value);
    });
    Object.entries(translation).forEach(([key, value]) => {
      transData.push(value)
    });
    commit('getTranslation', transData);
    commit('getSurah', sura);
  },
};
