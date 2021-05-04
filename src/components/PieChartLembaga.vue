<script>
import { Pie } from "vue-chartjs";
import datas from '../data/LembagaPemberiUtang.json'

function sortData(dataSector, dataYear){
  var yearSorted = dataYear
  var sectorSorted = dataSector
  for (let i = 0; i < yearSorted.length; i++) {
        for (let j = 0; j < yearSorted.length; j++) {
            if (yearSorted[j] < yearSorted[j + 1]) {
                let tmp = yearSorted[j];
                yearSorted[j] = dataYear[j + 1];
                yearSorted[j + 1] = tmp;
                tmp = sectorSorted[j];
                sectorSorted[j] = sectorSorted[j + 1];
                sectorSorted[j + 1] = tmp;
            }
        }
    }
  return [yearSorted, sectorSorted]
}

export default {
  extends: Pie,
  mounted() {
    let year = "2020"
    let dataSector = datas.map(data => data["Lembaga Pemberi Hutang"])
    let dataYear = datas.map(data => data[year])
    let values = sortData(dataSector, dataYear)
    dataSector = values[1]
    dataYear =  values[0]
    this.renderChart(
      {
        labels: dataSector,
        datasets: [
          {
            backgroundColor : ['#668043', '#25a934', '#1aee49', '#1a038d', '#1ebda0', '#5ea5b1', '#47b5d3', '#72dbf1', '#59aee4', '#d2c25d', '#bd6008', '#f0af64', '#af1f06', '#b9325d', '#66036c', '#d39c9b'],
            data: dataYear
          }
        ]
      },
      { responsive: true,
        maintainAspectRatio: false,
        legend: {
          position: 'right'
        },
        title: {
          display: true,
          text: "Lembaga Pemberi Utang Indonesia",
          fontSize: 16,
          padding: 10
        }, }
    );
  }
};
</script>