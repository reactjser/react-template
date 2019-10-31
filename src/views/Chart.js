import React, { Component } from 'react';
import G2 from '@antv/g2';
import { DataView, DataSet } from '@antv/data-set';

class Chart extends Component {
  containerRef = React.createRef();

  componentDidMount() {
    const data = [{
      x: 'd1',
      low: 5,
      q1: 9,
      median: 16,
      q3: 22,
      high: 24,
      outliers: [10, 20, 25, 28],
      PetalLength: 1.4,
      PetalWidth: 0.2,
      SepalLength: 5.1,
      SepalWidth: 3.5,
      Species: "I. setosa",
    }, {
      x: 'd2',
      low: 5,
      q1: 9,
      median: 16,
      q3: 22,
      high: 24,
      outliers: [10, 20, 25, 28],
      PetalLength: 1.4,
      PetalWidth: 0.2,
      SepalLength: 5.1,
      SepalWidth: 3.5,
      Species: "I. setosa",
    }, {
      x: 'd3',
      low: 5,
      q1: 9,
      median: 16,
      q3: 22,
      high: 24,
      outliers: [10, 20, 25, 28],
      PetalLength: 1.4,
      PetalWidth: 0.2,
      SepalLength: 5.1,
      SepalWidth: 3.5,
      Species: "I. setosa",
    }, {
      x: 'd4',
      low: 5,
      q1: 9,
      median: 16,
      q3: 22,
      high: 24,
      outliers: [10, 20, 25, 28],
      PetalLength: 1.4,
      PetalWidth: 0.2,
      SepalLength: 5.1,
      SepalWidth: 3.5,
      Species: "I. setosa",
    }];
    const dv = new DataView().source(data);
    dv.transform({
      type: 'map',
      callback: function callback(obj) {
        obj.range = [obj.low, obj.q1, obj.median, obj.q3, obj.high];
        return obj;
      }
    });

    var ds = new DataSet({
      state: {
        bandwidth: 0.17,
        step: 0.105
      }
    });
    var fields = ['PetalWidth', 'PetalLength', 'SepalWidth', 'SepalLength'];
    var dv1 = ds.createView().source(data).transform({
      type: 'kde',
      bandwidth: '$state.bandwidth', // 计算概率函数的 bandwidth
      step: '$state.step', // 计算采样点的数据间隔。注意不能比采样数据范围大
      extent: [0, 8], // 采样范围
      fields: fields,
      as: ['key', 'y', 'size'], // 生成的统计字段：字段名、采样点、采样点对应的概率值
      groupBy: ['Species'],
      minSize: 0.01 // 小于这个值的概率将被忽略
    });
    var chart = new G2.Chart({
      container: this.containerRef.current,
      forceFit: true,
      height: this.containerRef.current.clientHeight
    });
    chart.source(dv, {
      range: {
        min: 0,
        max: 35
      },
      outliers: {
        min: 0,
        max: 35
      }
    });
    chart.tooltip({
      showTitle: false,
      crosshairs: {
        type: 'rect'
      },
      // itemTpl: '<li data-index={index} style="margin-bottom:4px;">' + '<span style="background-color:{color};" class="g2-tooltip-marker"></span>' + '{name}<br/>' + '<span style="padding-left: 16px">最大值：{high}</span><br/>' + '<span style="padding-left: 16px">上四分位数：{q3}</span><br/>' + '<span style="padding-left: 16px">中位数：{median}</span><br/>' + '<span style="padding-left: 16px">下四分位数：{q1}</span><br/>' + '<span style="padding-left: 16px">最小值：{low}</span><br/>' + '</li>'
    });
    chart.schema().position('x*range').shape('box').tooltip('x*low*q1*median*q3*high').style({
      stroke: '#3A9EF9',
      fill: '#B1D0FA'
    });
    chart.render();

    var errorPointView = chart.view();
    errorPointView.source(data);
    errorPointView.axis(false);
    errorPointView.tooltip(false);
    errorPointView.point().position('x*outliers').color('x', (m) => {
      console.log(m);
      return '#F9B81C'
    }).shape('circle').size(5).active(false);
    chart.render();

    // violin plot
    var view1 = chart.view();
    view1.source(dv1);
    var adjustCfg = [{
      type: 'dodge',
      marginRatio: 1 / 32
    }];
    view1.axis(false)
    view1.violin().position('key*y').color('x').adjust(adjustCfg)
      // .shape('smooth')
      // .shape('smoothHollow')
      .size('size').style({
        lineWidth: 1,
        fillOpacity: 0.3,
        strokeOpacity: 0.75
      }).tooltip(false);
    // 95% confidence interval
    chart.render();
  }

  render() {
    return <div ref={this.containerRef} className="chart"></div>;
  }
}

export default Chart;
