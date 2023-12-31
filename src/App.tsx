import "./App.css"
import { Header } from "./features/header/Header"
import UsageTable from "./features/usageTable/UsageTable"
import {Tabs, Tab} from "@nextui-org/react";
import About from "./features/about/About"
import { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "./app/hooks"
import { selectUsage, setUsage, fetchUsage } from "./features/usageTable/usageTableSlice"
import PieChart from "./features/charts/PieChart";
import { LineChart } from "./features/charts/LineChart";



function App() {

  
  const dispatch = useAppDispatch()
  const usage = useAppSelector(selectUsage)
  // @ts-ignore
 


  useEffect(() => {
  
    dispatch(fetchUsage()).then((unwrapResult) => {     
      setUsage(unwrapResult.payload)
    }).then(() => {
        
    })


    
    

  }, []);


  return (
      <main className={` flex flex-col justify-center items-center`}>
         <Header />
        <Tabs aria-label="Radar tabs" className="align-middle justify-center items-center" color="success" radius="full" defaultSelectedKey={"about"}>
          <Tab key={"usageTable"} title="Table">
          <UsageTable />
          </Tab>
          <Tab key={"about"} title={"Radar"}>
          <div className="flex flex-row justify-center items-center p-4">
            <About />
            </div>
          </Tab>
          <Tab key={"graph"} title={"Graph"}>
          <div className="flex flex-col lg:flex-row justify-center  p-4">
          
            <PieChart />
            <LineChart />
              </div>
          </Tab>
          
        </Tabs>
       
       
  
      </main>
     
  )
}

export default App
