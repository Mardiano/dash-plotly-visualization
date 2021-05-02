<template>
    <div>
        <div class="grid-container">
            <div class="item1">Visualisasiasisi</div>
            <div class="item2"></div>
            <div class="item3">
                <div id="linechart-wrapper">
                <LineChart id="linechart"/>
                </div>   
            </div>  
            <div class="item4"></div>
            <div class="item5">
                <Slider id="slider" />
            </div>
            <div class="item6"></div>

        </div>
    </div>
</template>

<script>

import LineChart from '../components/LineChart.vue';
import Slider from '../components/Slider.vue';

export default {
  name: "Layout",
  components: {
    LineChart, Slider
  }
}
</script>

<style lang="css">

.item1 { grid-area: header; }
.item2 { grid-area: menu; }
.item3 { grid-area: main; }
.item4 { grid-area: right; }
.item5 { grid-area: footer; }
.item6 { grid-area: footest; }


.grid-container {
  display: grid;

  grid-template-columns: 18% 13% 13% 13% 13% 13% 13%;
  grid-template-rows: 60px 370px 100px auto;
  grid-template-areas:
    'menu header header header header header header'
    'menu main main main right right right'
    'menu footer footer footer footer footer footer'
    'menu footest footest footest footest footest footest';
  grid-gap: 10px;
  background-color: #c2ecff;
  padding: 10px;
}

.grid-container > div {
  background-color: rgba(255, 255, 255, 1.0);
  text-align: center;
  font-size: 20px;
  border-radius: 15px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1), 0 0 40px rgba(0, 0, 0, 0.1);

}

#linechart-wrapper {
  padding: 10px;
  background-color: rgb(255, 255, 255);
  width: 520px;
  margin: 10px;
  border-radius: 20px;
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

</style>