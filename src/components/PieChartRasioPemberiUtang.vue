<script>
import { Pie } from "vue-chartjs";
import datas from '../data/RasioPemberiUtang.json'

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
  extends: Pie,
  props: {
    theyear: Number
  },
  data(){
    return {
      year: this.theyear,
      dataColor: ['#668043', '#25a934', '#1aee49'],
    }
  },
  mounted() {
    let dataSector = datas.map(data => data["Pemberi Utang"])
    let dataYear = datas.map(data => data[this.year])
    let dataColorr = this.dataColor;
    let values = sortData(dataSector, dataYear, dataColorr)
    let dataColorSorted = this.dataColor.slice(0, 6)
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
      { responsive: true,
        maintainAspectRatio: true,
        legend: {
          position: 'bottom'
        },
        title: {
          display: false,
          text: "Rasio Pemberi Utang Indonesia",
          fontSize: 16,
          padding: 10
        }, }
      
    );
  }
};
</script>