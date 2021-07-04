<template>
  <div>
    <div class="leader-title">
      <h1>{{ title }}</h1>
      <img src="../assets/character_scope.png" />
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
        this.$router.push('/notfound')
      }
    },
  },
  created() {
    this.getContent()
  },
}
</script>

<style lang="scss" scoped>
.leader-title {
  display: flex;
  justify-content: center;
  text-align: center;
  padding-bottom: 40px;

  & h1 {
    text-transform: uppercase;
    padding-top: 40px;
    padding-right: 40px;
  }
  & img {
    width: 520px;
    height: 160px;
  }
}

.leader-card-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
}

@media (max-width: 1300px) {
  .leader-title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & h1 {
      padding-right: 0;
    }

    & img {
      width: 480px;
      height: 170px;
    }
  }
  .leader-card-container {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 800px) {
  .leader-card-container {
    grid-template-columns: 1fr;
  }
  .leader-title {
    & img {
      width: 350px;
      height: 120px;
    }
  }
}
</style>
