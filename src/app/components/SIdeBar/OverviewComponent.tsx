import {AppstoreOutlined, AlignLeftOutlined} from '@ant-design/icons'
import '../../scss/components/OverviewComponent.scss'
import { OverviewComponentProps } from '@/app/types'

export default function OverviewComponent({name, isActive, onClick}: OverviewComponentProps){
    const icons = {
        "Dashboard" : <AppstoreOutlined style={{color: "white"}}/>,
        "Release Notes": <AlignLeftOutlined style={{color: "white"}}/>
    }
    return(
        <>
        <div style={{display: "flex", width: "180px", height: "40px", alignItems: "center", gap: "10px", backgroundColor: isActive ? '#FFFFFF14' : '#1c1c1c', borderRadius: '4px', padding: '5px'}}
        onClick={onClick}>
            {icons[name]}
            <span style={{color: isActive ? '#FFFFFFD9' : '#FFFFFFA6'}}>{name}</span>
        </div>
        </>
    )
}