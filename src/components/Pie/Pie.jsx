import React from 'react';
import { Doughnut} from 'react-chartjs-2';

const state = {
  labels: ['Confirmed', 'Recovered', 'Deaths'],
  datasets: [
    {
      label: 'Rainfall',
      backgroundColor: [
        '#B21F00',
        '#C9DE00',
        '#2FDE00',
      ],
      hoverBackgroundColor: [
      '#501800',
      '#4B5000',
      '#175000',
      ],
      data: [65, 59, 80]
    }
  ]
}
const PieChart = () => {
    return (
      <div>

        <Doughnut
          data={state}
          options={{
            title:{
              display:true,
              text:'Distribution of cases',
              fontSize:15
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
    );
  }


export default PieChart;