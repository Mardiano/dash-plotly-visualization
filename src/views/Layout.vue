<template>
    <div>
        <div class="grid-container">
            <div class="title text-center">
                <h3>Dashboard</h3>
            </div>

            <div id="naration" class="naration text-left p-md-3 text-white">
                <h2>Utang</h2>
                <h4>Luar Negeri Indonesia</h4>
            </div>

            <div id="mainchart1" class="mainchart1">
                <div id="linechart-wrapper">
                <LineChart id="linechart"/>
                </div>   
            </div>  

            <div class="mainchart2">
                
            </div>

            <div class="slider">
                <Slider id="slider" @childToParent="onChildClick"/>
            </div>

            <div class="lainnya">
                <CountUp />
                <div id="piechart1-wrapper">
                <PieChart id="sektor"/>
                </div>
                <div id="piechart2-wrapper">
                <PieChartNegara id="negara"/>
                </div>
                <div id="piechart3-wrapper">
                <PieChartLembaga id="lembaga"/>
                </div>
            </div>

        </div>
    </div>
</template>

<script>

import LineChart from '../components/LineChart.vue';
import PieChart from '../components/PieChart.vue';
import PieChartNegara from '../components/PieChartNegara.vue';
import PieChartLembaga from '../components/PieChartLembaga.vue';
import Slider from '../components/Slider.vue';
import CountUp from '../components/CountUp.vue';


export default {
  name: "Layout",
  components: {
    LineChart, Slider, CountUp, PieChart, PieChartNegara, PieChartLembaga
  },
  data(){
      return {
          year : 2020,
      }
  }
  ,
  methods: {
    onChildClick(value) {
      this.year = value
    }
  }
}
</script>

<style lang="css">

.title { 
    grid-area: title; 
}

.naration { 
    grid-area: naration; 
}

.mainchart1 { 
    grid-area: mainchart1; 
}

.mainchart2 { 
    grid-area: mainchart2; 
}

.slider { 
    grid-area: slider; 
}

.lainnya { 
    grid-area: lainnya; 
}

.grid-container {
    display: grid;
    grid-template-areas:
        'naration title title title title title title'
        'naration mainchart1 mainchart1 mainchart1 mainchart2 mainchart2 mainchart2'
        'naration slider slider slider slider slider slider'
        'naration lainnya lainnya lainnya lainnya lainnya lainnya';
    grid-template-columns: 22% 12% 12% 12% 12% 12% 12%;
    grid-template-rows: 60px 370px 100px 300px;
    padding: 10px 20px 10px 20px;
    grid-gap: 15px;
    background-color: #f1f1f1;
}

.grid-container > div {
    background-color: rgba(255, 255, 255, 1.0);
    text-align: center;
    font-size: 20px;
    border-radius: 15px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1), 0 0 10px rgba(0, 0, 0, 0.1);
}

#linechart-wrapper {
    padding: 10px;
    background-color: rgb(255, 255, 255);
    width: 520px;
    margin: 10px;
    border-radius: 20px;
    margin-left: auto;
    margin-right: auto;
}

#linechart {
    width: 500px;
    height: 330px;
}
    
#slider {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
}

.title h3 { 
    margin-top: 10px;
}

#naration {
    background-color: rgb(0, 124, 17);
}


</style>