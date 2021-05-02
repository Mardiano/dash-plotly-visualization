<template>
    <div>
        <div class="grid-container">
            <div class="title">
                Visualisasiasisi
            </div>

            <div class="naration">

            </div>

            <div class="mainchart1">
                <div id="linechart-wrapper">
                <LineChart id="linechart"/>
                </div>   
            </div>  

            <div class="mainchart2">

            </div>

            <div class="slider">
                <Slider id="slider" />
            </div>

            <div class="lainnya">
                dsdsdds
            </div>

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
    grid-template-columns: 18% 13% 13% 13% 13% 13% 13%;
    grid-template-rows: 60px 370px 100px 300px;
    padding: 10px;
    grid-gap: 10px;
    background-color: #c2ecff;
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