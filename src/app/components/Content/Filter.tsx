import { Tabs } from "antd"
import { FilterProps, } from '../../types'
import '../../scss/ContentStyles.scss'
import { useContext, memo} from 'react'
import { VehicleContext } from "../Provider/VehicleProvider"
import { useGroupCount } from "@/app/utils/useGroupCount"


export default memo(function Filter({value, onChange}: FilterProps){

  const context = useContext(VehicleContext);

  const vehicles = context?.vehicles || [];


    const tabItems = [
        {
            key: '',
            label: 'All Vehicles'
        },
        {
            key: 'PRODUCTION',
            label: 'Production'
        },
        {
            key: 'TESTING',
            label: 'Testing'
        },
        {
            key: 'BRINGUP',
            label:'Bring-Up'
        }
    ];

    const groupCount = useGroupCount(vehicles);
    
    return(
        <>

         <style>
        {`
          .custom-tabs .ant-tabs-tab-btn {
            color: #FFFFFF73;
          }

          .ant-tabs .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn{
            color: #FFFFFFD9;
          }
        `}
        
      </style>
        <Tabs className='custom-tabs' defaultActiveKey="1" activeKey={value} onChange={(e) => onChange(e)} items={tabItems.map((tabItem) => ({
          key: tabItem.key,
          label: (
            <div className="tab-item">
                <p>{tabItem.label}</p>
                <div className="tab-badge">{groupCount?.get(tabItem.key) || 0}</div>
            </div>
          ),
        }))}
        ></Tabs>
        </>
    )
})