<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg bg-light">
      <span class="navbar-brand ms-2"> {{ $t("title") }}</span>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <!--<li class="nav-item active">
            <router-link class="nav-link" to="/">{{ $t('Home') }}</router-link>

          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">{{ $t('About') }}</router-link>
          </li>-->
        </ul>
      </div>
      
      <LanguageSwitcher></LanguageSwitcher>
    </nav>
   

    <router-view />
  </div>
</template>

<script>
import LanguageSwitcher from "./components/LanguageSwitcher.vue";

export default {

  components: { LanguageSwitcher }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  white-space: pre-line;
  overscroll-behavior: contain;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
