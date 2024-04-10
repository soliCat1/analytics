<template>
  <div class="container container__analytics">
    <h1>Аналитика</h1>
    <h2>Аналитика по визитам</h2>
    <div class="charts" ref="charts"></div>
  </div>
</template>

<script>
import * as am5 from '@amcharts/amcharts5'
import * as am5xy from '@amcharts/amcharts5/xy'
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated'
import {chartsValue} from '@/mocks/chartsValue'

export default {
  mounted() {
    const isAuth = localStorage.getItem('Leadhit-Site-Id')
    if (!isAuth) {
      this.$router.push('/')
      return
    }
    const root = am5.Root.new(this.$refs.charts)
    root.setThemes([am5themes_Animated.new(root)])
    const chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panY: false,
        wheelY: "zoomX",
        layout: root.verticalLayout
      })
    )
    const yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
      min: 0,
      max: 300,
      renderer: am5xy.AxisRendererY.new(root, {})
      })
    )
    const xAxis = chart.xAxes.push(
      am5xy.DateAxis.new(root, {
        baseInterval: { timeUnit: "day", count: 1 },
        renderer: am5xy.AxisRendererX.new(root, {})
      })
    )
    const series = chart.series.push(
      am5xy.LineSeries.new(root, {
        name: "Series",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "visits",
        valueXField: "date",
        tooltip: am5.Tooltip.new(root, {})
      })
    );
    series.data.setAll(chartsValue)

    series.bullets.push(function(root) {
      return am5.Bullet.new(root, {
        sprite: am5.Circle.new(root, {
        radius: 5,
        fill: series.get("fill")
        })
      })
    })
    series.get("tooltip").label.set("text", "Дата: {valueX.formatDate()}[/]\nКоличество визитов: {valueY}")
    chart.set("cursor", am5xy.XYCursor.new(root, {}))
  }
}
</script>

<style>

.charts {
  width: 100%;
  height: 500px;
}
</style>