<template>
  <div>
    <div class="leader-title">
      <h1>{{ title }}</h1>
    </div>
    <div class="leader-cards-container">
      <div class="leader-card-container">
        <LeaderCard
          v-for="(leaderType, index) in leaderTypeData"
          :key="index"
          :leaderCardData="leaderType"
        />
      </div>
    </div>
  </div>
</template>

<script>
import LeaderCard from '../components/LeaderCard.vue'

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
      } catch (error) {
        this.$router.push('/not-found')
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
  justify-content: center;
  text-align: center;
}

.leader-card-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
}

@media (max-width: 1300px) {
  .leader-card-container {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 800px) {
  .leader-card-container {
    grid-template-columns: 1fr;
  }
}
</style>
