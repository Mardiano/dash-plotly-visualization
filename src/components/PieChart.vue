<script>
import { Pie } from "vue-chartjs";
import datas from '../data/SektorEkonomi.json'

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
    // this.gradient = this.$refs.canvas
    //   .getContext("2d")
    //   .createLinearGradient(0, 0, 0, 450);
    // this.gradient2 = this.$refs.canvas
    //   .getContext("2d")
    //   .createLinearGradient(0, 0, 0, 450);
    // var colors = []
    // for (var i = 0; i < datas.length; i++) {
    //   var r = Math.floor(Math.random() * 200);
    //   var g = Math.floor(Math.random() * 200);
    //   var b = Math.floor(Math.random() * 200);
    //   var color = 'rgb(' + r + ', ' + g + ', ' + b + ')'
    //   colors.push(color)
      // this.gradient.addColorStop(0, 'rgba(' + r + ', ' + g + ', ' + b + ', 0.5)');
      // this.gradient.addColorStop(0.5, 'rgba(' + r + ', ' + g + ', ' + b + ', 0.25)');
      // this.gradient.addColorStop(1, 'rgba(' + r + ', ' + g + ', ' + b + ', 0)');
      
    // }
    // this.gradient.addColorStop(0, "rgba(255, 0,0, 0.5)");
    // this.gradient.addColorStop(0.5, "rgba(255, 0, 0, 0.25)");
    // this.gradient.addColorStop(1, "rgba(255, 0, 0, 0)");

    // this.gradient2.addColorStop(0, "rgba(0, 231, 255, 0.9)");
    // this.gradient2.addColorStop(0.5, "rgba(0, 231, 255, 0.25)");
    // this.gradient2.addColorStop(1, "rgba(0, 231, 255, 0)");
    // console.log(colors)


    let year = "2020"
    let dataSector = datas.map(data => data.Sektor)
    let dataYear = datas.map(data => data[year])
    let values = sortData(dataSector, dataYear)
    dataSector = values[1]
    dataYear =  values[0]

    this.renderChart(
      {
        labels: dataSector,
        datasets: [
          {
            // backgroundColor: [this.gradient, this.gradient2, "#00D8FF"],
            // backgroundColor : colors,
            backgroundColor : ['#668043', '#25a934', '#1aee49', '#1a038d', '#1ebda0', '#5ea5b1', '#47b5d3', '#72dbf1', '#59aee4', '#d2c25d', '#bd6008', '#f0af64', '#450c27', '#66036c', '#af1f06', '#b9325d', '#d39c9b'],
            data: dataYear
          }
        ]
      },
      { responsive: true, maintainAspectRatio: false }
    );
  }
};
</script>