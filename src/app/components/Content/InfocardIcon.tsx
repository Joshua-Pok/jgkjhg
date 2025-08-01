import { InfoCardType } from '@/app/types';
import {
    CarOutlined,
    UpOutlined,
    CodeOutlined,
    WarningOutlined
} from '@ant-design/icons'

interface InfocardIconProps{
    type: InfoCardType
}

export default function InfocardIcon({type}: InfocardIconProps){
    switch(type){
        case 'total-vehicles':
            return <CarOutlined/>;
        case 'active-deployment':
            return <UpOutlined/>;
        case 'version-compliance':
            return <CodeOutlined/>;
        case 'action-required':
            return <WarningOutlined/>
    }
}