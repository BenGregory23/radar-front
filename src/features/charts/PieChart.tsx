import { Chart, Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import { useAppSelector } from '../../app/hooks';
import { selectUsage } from '../usageTable/usageTableSlice';
import { useEffect, useState } from 'react';
import { Card, CardBody, CardHeader, CardFooter, Divider} from '@nextui-org/react';




const PieChart = () => {
    

    const usage = useAppSelector(selectUsage)
    const [data, setData] = useState({
        labels: ['Noice','Portfolio', 'Corn', 'LoLeaf'],
        datasets: [
          {
            label: 'Number of visits',
            data: [0, 0, 0, 0, 0],
            borderWidth: 1,
          },
        ],
    })




    useEffect(() => {
      
        usage.map((item) => {
            let source = item.source
            let index = data.labels.indexOf(source)
            if (index != -1) {
                data.datasets[0].data[index] += 1
            }
            else {
               data.labels.push(item.source)
               let index = data.labels.indexOf(source)
               data.datasets[0].data[index] += 1
            }
        })        

    }, [usage])



    return (
        <div>
            <Card className="max-w-[400px] m-5">
                <Divider/>
                <CardBody>
                <Pie data={data} />
                </CardBody>
                <Divider/>
                <CardFooter>
                    <p className="text-default-900 text-center">
                        This is a pie chart showing the number of visits to each source.
                    </p>
                 
                </CardFooter>
            </Card>

           
 
        </div>
    )

}

export default PieChart