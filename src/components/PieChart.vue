<script>
import { Pie } from "vue-chartjs";
import datas from '../data/SektorEkonomi.json'

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
    this.renderChart(
      {
        labels: datas.map(data => data.Sektor),
        datasets: [
          {
            // backgroundColor: [this.gradient, this.gradient2, "#00D8FF"],
            // backgroundColor : colors,
            backgroundColor : ['#668043', '#25a934', '#1aee49', '#1a038d', '#1ebda0', '#5ea5b1', '#47b5d3', '#72dbf1', '#59aee4', '#d2c25d', '#bd6008', '#f0af64', '#af1f06', '#b9325d', '#66036c', '#d39c9b'],
            data: datas.map(data => data.Nilai)
          }
        ]
      },
      { responsive: true, maintainAspectRatio: false }
    );
  }
};
</script>