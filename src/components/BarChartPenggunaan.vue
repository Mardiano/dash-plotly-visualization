<script>
import { HorizontalBar } from "vue-chartjs";
import datas from '../data/SektorEkonomi.json'

function sortData(dataSector, dataYear, dataColor){
  var yearSorted = dataYear
  var sectorSorted = dataSector
  var colorSorted = dataColor
  for (let i = 0; i < yearSorted.length; i++) {
        for (let j = 0; j < yearSorted.length; j++) {
            if (yearSorted[j] < yearSorted[j + 1]) {
                let tmp = yearSorted[j];
                yearSorted[j] = dataYear[j + 1];
                yearSorted[j + 1] = tmp;
                tmp = sectorSorted[j];
                sectorSorted[j] = sectorSorted[j + 1];
                sectorSorted[j + 1] = tmp;
                tmp = colorSorted[j];
                colorSorted[j] = colorSorted[j + 1];
                colorSorted[j + 1] = tmp;
            }
        }
    }
  return [yearSorted, sectorSorted, colorSorted]
}

export default {
  extends: HorizontalBar,
  props: {
    theyear: Number
  },
  data(){
    return {
      year: this.theyear,
      dataColor: ['#668043', '#25a934', '#1aee49', '#1a038d', '#1ebda0', '#5ea5b1', '#47b5d3', '#72dbf1', '#59aee4', '#d2c25d', '#bd6008', '#f0af64', '#450c27', '#66036c', '#af1f06', '#b9325d', '#d39c9b'],
    }
  },
  mounted() {
    console.log(this.year)
    let dataSector = datas.map(data => data.Sektor)
    let dataYear = datas.map(data => data[this.year])
    let dataColorr = this.dataColor;
    let values = sortData(dataSector, dataYear, dataColorr)
    let dataColorSorted = values[2].slice(0, 6)
    dataSector = values[1].slice(0, 6)
    dataYear =  values[0].slice(0, 6)

    this.renderChart(
      {
        labels: dataSector,
        datasets: [
          {
            backgroundColor : dataColorSorted,
            data: dataYear
          }
        ]
      },
      { 
        responsive: true, maintainAspectRatio: false, 
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        title: {
          display: false,
          text: "Sektor Pemanfaatan Utang Indonesia",
          fontSize: 16,
          padding: 10
        },
        scales: {
          yAxes: [{
            afterFit: function(scale) {
               scale.width = 90
            },
            scaleLabel: {
              display: false,
              labelString: 'Sektor',
              fontSize: 12,
            }
          }],
          xAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Utang Indonesia',
              fontSize: 12
            },
            ticks: {
                beginAtZero: true,
                  stepSize: 5000,
                  min: 0,
                  max: 50000,
                  maxRotation: 45,
                  minRotation: 45
            }
          }]
        },
        layout: {
            padding: {
                left: 130
            }
        } 
      }
    );
  }
};
</script>
