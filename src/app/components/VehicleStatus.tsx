import { VehicleStatusProps, VehicleStatus as VehicleStatusEnum } from '../types'
import { WarningTwoTone, CloseCircleTwoTone, CheckCircleTwoTone } from '@ant-design/icons';
import { StatusDisplay } from './shared/StatusDisplay';
import '../scss/components/VehicleStatus.scss'

export default function VehicleStatus({ status }: VehicleStatusProps) {
    const statusConfig = {
        [VehicleStatusEnum.Updated]: { text: "Updated", textColor: "#8ED5A8", icon: <CheckCircleTwoTone/> }, 
        [VehicleStatusEnum.RestartRequired]: { text: "Restart Required", textColor: "#F9D36C", icon: <WarningTwoTone/> }, 
        [VehicleStatusEnum.NotInstalled]: { text: "Not Installed", textColor: "white", icon: <CloseCircleTwoTone/> } 
    }

    const config = statusConfig[status] || { text: 'Unknown', textColor: '#ff4d4f', icon: <CloseCircleTwoTone/> }; 

    return (
        <StatusDisplay
            icon={config.icon}
            text={config.text}
            textColor={config.textColor}
            className="vehicle-status"
        />
    );
}