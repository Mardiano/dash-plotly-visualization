<template>
    <div>
      <vue-slider
        v-model="value"
        :adsorb="true"
        :data="data"
        :marks="true"
        v-bind="options"
        @change="emitToParent"
      ></vue-slider>
    </div>
</template>


<script>
export default {
  props: {
    val: Number
  },
  data: function () {
    return {
      value: this.val,
      data: [2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020],
      options: {
        tooltip: 'active',
        tooltipPlacement: 'bottom'
      }
    }
  },
  methods: {
    emitToParent (event) {
      this.$emit('childToParent', this.value)
    }
  }
  
}
  </script>


<style lang="css">

</style>