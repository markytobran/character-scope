<template>
  <div class="card" v-if="leaderCardData !== null">
    <div
      class="card__side card__side--front"
      :style="{ background: leaderCardData.colour }"
    >
      <figure>
        <img
          :alt="leaderCardData.exemplar_image.alt"
          :src="leaderCardData.exemplar_image.url"
        />
        <figcaption>{{ leaderCardData.name[0].text }}</figcaption>
      </figure>
      <div class="card__side--details">
        <h3 class="card__side--details-header">
          {{ leaderCardData.description[0].text }}
        </h3>
        <!--<p>{{ leaderCardData.description[1].text }}</p>-->
        <p
          class="card__side--details-best"
          :style="{ background: leaderCardData.colour }"
        >
          {{ leaderCardData.description[2].text }}
        </p>
        <ul>
          <li
            class="leader-list-element"
            v-for="(desc, index) in filteredLeaderCardData"
            :key="index"
          >
            <i
              class="fas fa-chart-pie"
              :style="{ color: leaderCardData.colour }"
            ></i>
            <p>{{ desc.text }}</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="card__side card__side--back">
      <p>
        Are you
        <small :style="{ color: leaderCardData.colour }">{{
          leaderCardData.name[0].text
        }}</small
        ><small>?</small>
      </p>
      <a :style="{ background: leaderCardData.colour }">
        Learn More
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    leaderCardData: Object,
  },
  computed: {
    filteredLeaderCardData() {
      const slicedLeaderCardData = this.leaderCardData.description.slice(
        3,
        this.leaderCardData.description.length
      )
      return slicedLeaderCardData.filter((item) => item.text !== '')
    },
  },
}
</script>

<style lang="scss" scoped>
.card {
  perspective: 150rem;
  z-index: 1000;
  cursor: pointer;
  position: relative;
  height: 50rem;
  width: 25rem;
  margin-bottom: 200px;
  &__side {
    height: 45rem;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    backface-visibility: hidden;
    transition: all 2s ease;
    box-shadow: 0 1.5rem 4rem rgba(#000, 0.15);
    &--front {
      & figure {
        display: flex;
        justify-content: center;
        align-items: start;
        height: 40%;
        position: relative;
        clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
        margin-bottom: 30px;
        &::after {
          content: '';
          top: 0;
          left: 0;
          background-color: rgba(0, 0, 0, 0.6);
          position: absolute;
          width: 100%;
          height: 30rem;
        }
      }
      & figcaption {
        position: absolute;
        bottom: 4rem;
        right: 2rem;
        color: white;
        z-index: 1000;
        font-size: 1rem;
        text-transform: uppercase;
        font-weight: 800;
        background-color: black;
        padding: 0.5rem 1rem;
        box-shadow: 1rem 1rem 1rem (rgba(0, 0, 0, 0.8));
        text-shadow: 0.3rem 0.3rem 1rem (rgba(0, 0, 0, 0.8));
      }
    }
    &--back {
      background: linear-gradient(grey 5%, black 95%);
      transform: rotateY(180deg);
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      padding: 20px;
      height: 43rem;
      width: 100%;
      flex-direction: column;
      color: #fff;
      small {
        font-size: 3rem;
        font-weight: 800;
      }
      a {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 8rem;
        color: white;
        padding: 1.5rem 2rem;
        border-radius: 100px;
        font-size: 1.2rem;
        text-transform: uppercase;
        font-weight: 800;
        transition: all 0.5s;
        text-decoration: none;
        &:hover {
          transform: translateY(-5px);
          box-shadow: 0.4rem 0.4rem 0.7rem (rgba(white, 0.6));
        }
      }
    }
    &--details {
      background: linear-gradient(grey 5%, black 95%);
      height: 55%;
      &-header {
        display: flex;
        justify-content: start;
        align-items: center;
        color: white;
        font-size: 1rem;
        padding-top: 50px;
        padding-left: 20px;
      }
      &-best {
        color: white;
        z-index: 1000;
        font-size: 1rem;
        text-transform: uppercase;
        width: 40%;
        margin-left: 20px;
        font-weight: 800;
        padding: 0.5rem 1rem;
        box-shadow: 1rem 1rem 1rem (rgba(0, 0, 0, 0.8));
        text-shadow: 0.3rem 0.3rem 1rem (rgba(0, 0, 0, 0.8));
      }
      & ul {
        display: flex;
        flex-direction: column;
        padding: 1.5rem;
        padding-top: 0.5rem;
      }
      & i {
        height: 20px;
        width: 15px;
        margin-right: 15px;
      }
      & li {
        display: flex;
        justify-content: start;
        align-items: center;
        color: #fff;
        font-size: 1rem;
        font-weight: 500;
        height: 30px;
      }
    }
  }
  &:hover &__side--front {
    transform: rotateY(180deg);
  }
  &:hover &__side--back {
    transform: rotateY(0);
  }
}
</style>
