<template>
  <div id="app">
    <div class="leader-title">
      <h1>{{ title }}</h1>
    </div>
    <div class="leader-card-container">
      <LeaderCard
        v-for="(leaderType, index) in leaderTypeData"
        :key="index"
        :leaderCardData="leaderType"
      />
    </div>
  </div>
</template>

<script>
import LeaderCard from './components/LeaderCard.vue'

export default {
  name: 'App',
  components: {
    LeaderCard,
  },
  data() {
    return {
      title: null,
      leaderTypeData: null,
    }
  },
  methods: {
    async getContent() {
      try {
        const data = await this.$prismic.client.getSingle('leader-types')
        this.title = data.data.title[0].text
        this.leaderTypeData = data.data.types
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    },
  },
  created() {
    this.getContent()
  },
}
</script>

<style>
.leader-title {
  display: flex;
  align-items: center;
  justify-content: center;
}

.leader-card-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  text-align: center;
}
</style>
