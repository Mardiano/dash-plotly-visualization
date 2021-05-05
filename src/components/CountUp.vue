<template>
  <div class="iCountUp">
    <ICountUp
      :delay="delay"
      :endVal="endVal"
      :options="options"
      @ready="onReady"
    />
  </div>
</template>

<script>
  import ICountUp from 'vue-countup-v2';

  export default {
    name: 'demo',
    components: {
      ICountUp
    },
    props: {
      endVal: Number,
      decVal: Number,
    },
    data() {
      return {
        delay: 1000,
        options: {
          useEasing: true,
          useGrouping: true,
          separator: '.',
          decimal: ',',
          prefix: '',
          suffix: '',
          decimalPlaces: this.decVal
        }
      };
    },
    methods: {
      onReady: function(instance, CountUp) {
        const that = this;
        instance.update(that.endVal);
      }
    }
  };
</script>

<style scoped>
  .iCountUp {
    font-size: 46px;
    font-family: Montserrat;
    margin: 0;
    color: #4d63bc;
  }

  .iCountUp span {
    margin: 0;
    padding: 0;
    user-select: none;
  }
</style>