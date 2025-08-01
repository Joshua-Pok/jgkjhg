import { VehicleStatusProps, VehicleStatus as VehicleStatusEnum } from '../types'
import { WarningTwoTone, CloseCircleTwoTone, CheckCircleTwoTone } from '@ant-design/icons';
import { StatusDisplay } from './shared/StatusDisplay';
import '../scss/components/VehicleStatus.scss'

export default function VehicleStatus({ status }: VehicleStatusProps) {
    const statusConfig = {
        [VehicleStatusEnum.Updated]: { 
            text: "Updated", 
            textColor: "#8ED5A8", 
            icon: <CheckCircleTwoTone twoToneColor="#52c41a" /> 
        }, 
        [VehicleStatusEnum.RestartRequired]: { 
            text: "Restart Required", 
            textColor: "#F9D36C", 
            icon: <WarningTwoTone twoToneColor="#faad14" /> 
        }, 
        [VehicleStatusEnum.NotInstalled]: { 
            text: "Not Installed", 
            textColor: "white", 
            icon: <CloseCircleTwoTone twoToneColor="#8c8c8c" /> 
        } 
    }

    const config = statusConfig[status] || { 
        text: 'Unknown', 
        textColor: '#ff4d4f', 
        icon: <CloseCircleTwoTone twoToneColor="#ff4d4f" /> 
    }; 

    return (
        <StatusDisplay
            icon={config.icon}
            text={config.text}
            textColor={config.textColor}
            className="vehicle-status"
        />
    );
}