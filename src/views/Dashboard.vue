<template>
  <div id="dashboard">
    <div id="linechart-wrapper">
      <LineChart id="linechart"/>
    </div>
    <Slider id="slider"/>
    <PieChart />
    <PieChartNegara />
    <PieChartLembaga />
  </div>
</template>

<script>

import LineChart from '../components/LineChart.vue';
import PieChart from '../components/PieChart.vue';
import PieChartNegara from '../components/PieChartNegara.vue';
import PieChartLembaga from '../components/PieChartLembaga.vue';
import Slider from '../components/Slider.vue';

import Bootstrap from '../components/Bootstrap.vue';

export default {
  name: "Dashboard",
  components: {
    LineChart, PieChart, PieChartNegara,PieChartLembaga, Slider, Bootstrap
  },
  data() {
    return {

    };
  }
};
</script>

<style>

#dashboard {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgb(247, 247, 247);
}

#linechart-wrapper {
  padding: 30px;
  background-color: rgb(255, 255, 255);
  width: 40%;
  margin: 30px;
  border-radius: 20px;
}

#linechart {
  width: 100%;
}

#slider {
  width: 60%;
  padding: 40px;
}

</style>
