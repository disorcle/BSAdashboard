import React from 'react'
import EChartsReact from 'echarts-for-react'
import { color } from 'echarts/core';

export const WinLossChart = ( {currentTeam} ) => {

  const option = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      textStyle: {color: '#000'},
      top: '5%',
      left: 'center'
    },
    series: [
      {
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#00000094',
          borderWidth: 2
        },
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            color: '#000',
            show: true,
            fontSize: 36,
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          { value: currentTeam.intWin, name: 'Vitórias', itemStyle: {color: '#1dd454'} },
          { value: currentTeam.intLoss, name: 'Derrotas', itemStyle: {color: '#eb4040'} },
          { value: currentTeam.intDraw, name: 'Empates', itemStyle: {color: '#837e7e'} },
        ]
      }
    ]
  };

return(
  <EChartsReact option={option} style={{height: '400px', width: '100%'}}></EChartsReact>
)

}

export const GoalsChart = ( {currentTeam} ) => {
  const option = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      textStyle: {color: '#000'},
      top: '5%',
      left: 'center'
    },
    series: [
      {
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#00000094',
          borderWidth: 2
        },
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            color: '#000',
            show: true,
            fontSize: 30,
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          { value: currentTeam.intGoalsFor, name: 'Gols Marcados', itemStyle: {color: '#ffd82d'} },
          { value: currentTeam.intGoalsAgainst, name: 'Gols Sofridos', itemStyle: {color: '#c922df'} },
        ]
      }
    ]
  };

return(
  <EChartsReact option={option} style={{height: '400px', width: '100%'}}></EChartsReact>
)

}

export const RankCharts = ({teams}) => {
  
  const teamList = teams.map(item => item.strTeam)
  const teamPts = teams.map(item => item.intPoints)

  const option = {
  xAxis: {
    type: 'value',
  },  
  yAxis: {
    type: 'category',
    inverse: 'true',
    data: teamList
  },
  series: [
    {
      itemStyle: {color: '#10915f'},
      data: teamPts,
      type: 'bar'
    }
  ]
};

return(
  <EChartsReact option={option} style={{width: '100%'}}></EChartsReact>
)

}
