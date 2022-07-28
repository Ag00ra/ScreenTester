
<template>
  <select v-model="$i18n.locale">
    <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">{{ locale }}</option>
  </select>
</template>

<script>
//import CountryFlag from 'vue-country-flag-next'
export default {
  name: "LanguageSwitcher",
  components: {
    //CountryFlag,
  },
  setup(){
    
  },
  mounted(){
    let lang = window.navigator.languages ? window.navigator.languages[0] : null;
    lang = lang || window.navigator.language || window.navigator.browserLanguage || window.navigator.userLanguage;
    let shortLang = lang;
    if (shortLang.indexOf('-') !== -1)
        shortLang = shortLang.split('-')[0];
    if (shortLang.indexOf('_') !== -1)
        shortLang = shortLang.split('_')[0];
    this.$i18n.locale = shortLang    
  }

};
</script>


