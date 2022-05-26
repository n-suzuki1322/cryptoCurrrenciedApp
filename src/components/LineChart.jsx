import React from 'react';
import { Line } from 'react-chartjs-2';
import { Col, Row, Typography } from 'antd';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title as ChartTitle,
  Tooltip,
  Legend
} from 'chart.js';
  
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ChartTitle,
  Tooltip,
  Legend
);

const { Title } = Typography;

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  let coinPrices = [];
  let coinTimestamps = [];

  for (let i = 0; i < coinHistory?.data?.history?.length; i++) {
    coinPrices.push(coinHistory?.data?.history[i].price);
    // console.log(new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString())
    coinTimestamps.push(new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString());
  }
  
  const data = {
    labels: coinTimestamps,
    datasets: [
      {
        label: 'Price in USD',
        data: coinPrices,
        fill: false,
        backgroundColor: '#0071bd',
        borderColor: '#0071bd',
      }
    ]
  };
  // const options = {
  //   scales: {
  //     yAxes: [
  //       {
  //         ticks: {
  //           beginAtZero: true
  //         }
  //       }
  //     ]
  //   }
  // };

  return (
    <>
      <Row className='chart-header'>
        <Title level={2} className='chart-title'>{coinName} Price Chart</Title>
        <Col className='price-container'>
          <Title level={5} className='price-change'>{coinHistory?.data?.change}%</Title>
          <Title level={5} className='current-price'>Current {coinName} Price: $ {currentPrice} </Title>
        </Col>
      </Row>
      <Line data={data} />
    </>
  )
}

export default LineChart;