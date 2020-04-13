import React, { Component } from 'react';

import CanvasJSReact from '../canvasjs/canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
class BarPlot extends Component {	
  render() {
    const options = {
      title: {
        text: "Graph of Marks"
      },
	theme: "dark2",
      data: [{				
                type: "column",
                dataPoints:  this.props.elementsAll.filter(function Filter(ele){ return ele.star> 0}).map(function Mapper(ele){ return{ label: ele.name,  y: ele.star } })
       }]
   }
		
   return (
      <div>
        <CanvasJSChart options = {options}/>
      </div>
    );
  }
}

export default BarPlot;