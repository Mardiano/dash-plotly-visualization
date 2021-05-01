<template>
    <div>
      <vue-slider
        v-model="value2"
        :adsorb="true"
        :data="data"
        :marks="true"
      ></vue-slider>
    </div>
</template>


<script>
export default {
  data: function () {
    return {
      value2: 'a',
      data: [2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020]
    }
  }
  
}
  </script>