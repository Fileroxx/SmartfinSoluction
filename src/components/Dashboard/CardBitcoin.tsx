import React from 'react';
import dynamic from 'next/dynamic'

export const CardBitcoin = () => {

  
const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: true,
})

const options = {
  chart: {
      toolbar: {
          show: false,
      },
      zoom: {
          enabled: true,
      },
      foreColor: 'green',
  },
  grid: {
      show: true,
  },
  dataLabels: {
      enabled: false,
  },
  tooltip: {
      enabled: true,
  },
  xaxis: {
      type: 'datetime',
      axisBorder: {
          color: 'green',
      },
      axisTicks: {
          color: 'green'
      },
      categories: [
          '2021-03-18T00:00:00.000Z',
          '2021-03-19T00:00:00.000Z',
          '2021-03-20T00:00:00.000Z',
          '2021-03-21T00:00:00.000Z',
          '2021-03-22T00:00:00.000Z',
          '2021-03-23T00:00:00.000Z',
          '2021-03-24T00:00:00.000Z',
      ],
  }
};

const series = [
  {
      name: 'series1',
      data: [31, 120, 10, 28, 61, 18, 109],
  }
]

  return (
    <div className='border border-gray shadow-md rounded h-[50vh] mt-0 text-white p-4'>

    <div className="flex justify-between items-center">
        <div>
             <h3 className='text-black font-bold text-1xl'>Bitcoin</h3>
        </div>

        <div>
            <p className='text-black font-bold'>$184.112</p>
        </div>
    </div>

    <div className="flex justify-between items-center">
        <div>
            <h3 className='text-black'>Mercado</h3>
        </div>
    
        <div>
            <select className='text-black' name="" id="">
                <option value="">Jan 23</option>
            </select>
        </div>

    </div>

    <div className='flex justify-center'>
        <div className='mt-10 w-full'>
            <Chart options={options as ApexCharts.ApexOptions} series={series} type="area" width={'100%'} height={160} />
        </div>
    </div>
     
    </div>
  );  
}