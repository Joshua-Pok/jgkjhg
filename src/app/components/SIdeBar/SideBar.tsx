import SideBarSelect from './SideBarSelect'
import '../../scss/components/Sidebar.scss';
import OverviewComponent from "./OverviewComponent";
import { Space } from 'antd'
import { useState } from 'react'
export default function SideBar() {
  
  const [activeComponent, setActiveComponent] = useState<string>("Dashboard")

  const overviewOptions = [
    "Dashboard",
    "Release Notes"
  ];


  return (
   <>
   <div className="sidebar-wrapper">
      <div className="sidebarselect">
        <SideBarSelect></SideBarSelect>
      </div>

      <h3 className='overview'>Overview</h3>
      <div className="overview-components">
        <Space size="middle" direction='vertical' align='center'>
      {overviewOptions.map((item) => (
        <OverviewComponent
        key={item}
        name={item}
        isActive={activeComponent === item}
        onClick={() => setActiveComponent(item)}
        />
      ))}
    </Space>
      </div>
      
   </div>
    
   </>
  );
}
