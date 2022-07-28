<template>
  <div class="home">
    
    <contentVue />
     <p>
       
    </p>
  </div>
</template>

<script>
// @ is an alias to /src

import contentVue from '@/components/contentVue.vue'
export default {
  name: 'HomeView',
  components: {
    contentVue
  }
}
</script>
