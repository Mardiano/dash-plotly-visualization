<script>
import { Pie } from "vue-chartjs";
import datas from '../data/LembagaPemberiUtang.json'

export default {
  extends: Pie,
  mounted() {
    this.renderChart(
      {
        labels: datas.map(data => data["Lembaga Pemberi Hutang"]),
        datasets: [
          {
            backgroundColor : ['#668043', '#25a934', '#1aee49', '#1a038d', '#1ebda0', '#5ea5b1', '#47b5d3', '#72dbf1', '#59aee4', '#d2c25d', '#bd6008', '#f0af64', '#af1f06', '#b9325d', '#66036c', '#d39c9b'],
            data: datas.map(data => data["2020"])
          }
        ]
      },
      { responsive: true, maintainAspectRatio: false }
    );
  }
};
</script>