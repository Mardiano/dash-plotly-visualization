<template>
    <div id="wrapper">
        <div class="grid-container">
            <div id="title" class="title text-center">
                <h3>Dashboard</h3>
            </div>

            <div class="information1">
                <div class="condition">

                </div>
                <div class="value text-left">
                    <h6>Posisi Utang Luar Negeri Indonesia</h6>
                    <div class="format">
                        <h5>$</h5>
                        <CountUp id="countposisi" :endVal="1256000" :decVal="0" />
                    </div>
                </div>
            </div>

            <div class="information2">
                <div class="condition">

                </div>
                <div class="value text-left">
                    <h6>Rasio Utang Luar Negeri Indonesia</h6>
                    <div class="format">
                        <h5>$</h5>
                        <CountUp id="countposisi" :endVal="393.6" :decVal="2" />
                    </div>
                </div>
            </div>

            <div id="naration" class="naration text-left p-md-3 text-white">
                <h2>Utang</h2>
                <h4>Luar Negeri Indonesia</h4>
            </div>

            <div id="mainchart1" class="mainchart1">
                <div id="mainchart1title">
                    <h6>Posisi Utang Luar Negeri Indonesia</h6>
                </div>
                <div id="linechart-wrapper">
                    <LineChartPosisi id="linechart" />
                </div>   
            </div>  

            <div class="mainchart2">
                <div id="mainchart2title">
                    <h6>Rasio Utang Luar Negeri Indonesia</h6>
                </div>
                <div id="linechart-wrapper">
                    <LineChart id="linechart"/>
                </div>   
            </div>

            <div class="slider">
                <div class="left" id="left">
                    <b-button variant="outline-primary" @click="decYear(); forceRerender();">Kiri</b-button>
                </div>
                <div class="year">
                    <h6>Tahun</h6>
                    <h4>{{ year }}</h4>
                </div>
                <div class="sliderarea">
                    <Slider id="slider" :val="this.year" @childToParent="onChildClick" v-if="renderComponent"/>
                </div>
                <div class="right" id="right">
                    <b-button variant="outline-primary" @click="incYear(); forceRerender();">Kanan</b-button>
                </div>
            </div>

            <div class="lainnya">
                <!-- <CountUp /> -->
                <!-- <div id="piechart-wrapper">
                <PieChart id="negara"/>
                </div> -->
            </div>

        </div>
    </div>
</template>

<script>

import LineChart from '../components/LineChart.vue';
import PieChart from '../components/PieChart.vue';
import Slider from '../components/Slider.vue';
import CountUp from '../components/CountUp.vue';
import LineChartPosisi from '../components/LineChartPosisi.vue';


export default {
  name: "Layout",
  components: {
    LineChart, Slider, CountUp, PieChart, LineChartPosisi
  },
  data(){
      return {
          year : 2020,
          renderComponent: true,
      }
  }
  ,
  methods: {
    onChildClick(value) {
      this.year = value
    },
    decYear() {
        if(this.year > 2007) this.year--;
    },
    incYear() {
        if(this.year < 2020) this.year++;
    },
    forceRerender() {
        this.renderComponent = false;
        this.$nextTick(() => {
          this.renderComponent = true;
        });
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

.information1 {
    grid-area: information1;
    display: flex;
    padding: 10px;
}

.information2 {
    grid-area: information2;
    display: flex;
    padding: 10px;
}

.mainchart1 { 
    grid-area: mainchart1; 
    padding: 10px;
}

.mainchart2 { 
    grid-area: mainchart2; 
    padding: 10px;
}

.left {
    grid-area: leftt; 
}

.right {
    grid-area: rightt; 
}

.year {
    grid-area: year; 
}

.sliderarea {
    grid-area: slider; 
}

.slider { 
    grid-area: slider;
    display: grid;
    grid-template-areas:
        'leftt year rightt'
        'leftt slider rightt';
    grid-template-columns: 10% 80% 10%;
    grid-template-rows: 45% 55%;
    background-color: #ffffff;
    padding: 5px;
}

.slider > div {
    margin: 5px;
    text-align: center;
    font-size: 20px;
    border-radius: 15px;
    padding: 5px;
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
        'naration information1 information1 information1 information2 information2 information2'
        'naration lainnya lainnya lainnya lainnya lainnya lainnya';
    grid-template-columns: 22% 12% 12% 12% 12% 12% 12%;
    grid-template-rows: 60px 410px 150px 140px 300px;
    padding: 20px 20px 20px 20px;
    grid-gap: 15px;
    background-color: #f0f0f0;
}

.grid-container > div {
    background-color: rgba(255, 255, 255, 1.0);
    text-align: center;
    font-size: 20px;
    border: darkblue;
    border-radius: 15px;
}

.information1 .condition {
    background-color: rgb(187, 255, 202);
    width: 30%;
    border-radius: 15px;
    margin: 5px;
}

.information1 .value {
    width: 70%;
    padding: 7px;
    margin: 5px;
}

.information1 .format {
    display: flex;
}

.information1 .value .format h5 {
    font-family: Montserrat;
    font-weight: 900;
    color: rgb(37, 0, 124);
    margin-right: 10px;
    padding-top: 15px;
}

.information1 .value .format .countposisi {
    font-family: Montserrat;
    font-weight: 900;
    color: rgb(37, 0, 124);
}

.information2 .condition {
    background-color: rgb(255, 187, 187);
    width: 30%;
    border-radius: 15px;
    margin: 5px;
}

.information2 .value {
    width: 70%;
    padding: 7px;
    margin: 5px;
}

.information2 .format {
    display: flex;
}

.information2 .value .format h5 {
    font-family: Montserrat;
    font-weight: 900;
    color: rgb(37, 0, 124);
    margin-right: 10px;
    padding-top: 15px;
}

.information2 .value .format .countposisi {
    font-family: Montserrat;
    font-weight: 900;
    color: rgb(37, 0, 124);
}

#linechart-wrapper {
    padding: 10px;
    background-color: rgb(255, 255, 255);
    width: 520px;
    margin: 0 10px 10px 10px;
    border-radius: 20px;
    margin-left: auto;
    margin-right: auto;
}

#title {
    background-color: rgb(0, 89, 172);
    color: white;
}

#mainchart1title {
    height: 40px;
    width: 100%;
    border-radius: 12px;
    padding-top: 9px;
    background-color: rgb(214, 237, 255);
}

#mainchart1title h6 {
    font-size: 17px;
}

#mainchart2title {
    height: 40px;
    width: 100%;
    border-radius: 12px;
    padding-top: 9px;
    background-color: rgb(214, 237, 255);
}

#mainchart2title h6 {
    font-size: 17px;
}

#mainchart2title h4 {
    font-size: 17px;
}

#linechart {
    width: 100%;
    height: 330px;
}
    
#slider {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    padding: 0px 10px 10px 10px;
}

.slider .year h4 {
    margin: 0;
    padding: 0;
    font-size: 30px;
}

.slider .year h6 {
    margin: 0;
    padding: 0;
    font-size: 16px;
    letter-spacing: 2px;
}

#left {
    background-color: rgb(255, 221, 183);
}

#right {
    background-color: rgb(255, 221, 183);
}

.title h3 { 
    margin-top: 10px;
}

#naration {
    background-color: rgb(0, 89, 172);
    /* background-color: rgba(0, 124, 17, 1.0); */

}


</style>