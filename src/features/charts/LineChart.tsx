import React, { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { useAppSelector } from '../../app/hooks';
import { selectUsage } from '../usageTable/usageTableSlice';
import { Line } from 'react-chartjs-2';
import { Card, CardBody, CardHeader, CardFooter, Divider} from '@nextui-org/react';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: '',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', "October", "November", "December"];

export const data = {
  labels,
  datasets: [
    {
      label: 'Number of visits',
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0,0,0,0],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export function LineChart() {
    const [loaded, setLoaded] = useState(false);
    const usage = useAppSelector(selectUsage)

    useEffect(() => {
        if(loaded) return
        
        usage.map((item) => {
          
            let date = new Date(item.date)
           
            let month = date.getMonth()
            
            data.datasets[0].data[month] += 1
            console.log(data.datasets[0])
        })

    },[loaded,usage])

  return (
  
  <div className="flex flex-col justify-center items-center w-full h-full">
            <Card className="max-w-[400px] m-5 lg:h-full">
                <Divider/>
                <CardBody>
                <Line options={options} data={data} />
                </CardBody>
                <Divider/>
                <CardFooter>
                    <p className="text-default-900 text-center">
                        This is a Line chart showing the number of visits during each month.
                    </p>
                 
                </CardFooter>
            </Card>

           
 
        </div>
  );
}
