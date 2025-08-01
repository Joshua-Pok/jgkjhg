import { Menu, notification } from 'antd'
import type { MenuProps } from 'antd'
import { UploadOutlined, RollbackOutlined } from '@ant-design/icons'
import { useState, forwardRef } from 'react'
import UpdateVehicleVers from '../UpdateVehicleVers'
import { SummaryMenuProps } from '@/app/types'
import { DeploymentStatus, VehicleService, VehicleUpdate } from '../../../../testservices'
import { useVehicleForm } from '@/app/utils/useVehicleForm'
import { useVehicleUpdate } from '@/app/utils/useVehicleUpdate'

type MenuItem = Required<MenuProps>['items'][number]


const items: MenuItem[] = [
    {
        key: '1',
        icon: <UploadOutlined/>,
        label: 'Update Version'
    },
    {
        key: '2',
        icon: <RollbackOutlined/>,
        label: 'Revert Back'
    },
    {
        key: '3',
        label: 'Remove Vehicle',
        className: 'remove-vehicle'
    }
];

const styles = `
    .custom-menu .remove-vehicle {
        color: red !important;
    }
    .custom-menu .remove-vehicle:hover {
        color: red !important;
        background-color: rgba(255, 0, 0, 0.1) !important; // Optional: subtle background on hover
    }
`;

const SummaryMenu = forwardRef<HTMLDivElement, SummaryMenuProps>(({ 
    vehicle, 
    onClose,
    style,
    onModalStateChange 
}, ref) => {

    const [api, contextHolder] = notification.useNotification();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleMenuSelect = ({ key }: { key: string }) => {
        switch(key) {
            case '1':
                setIsModalOpen(true);
                onModalStateChange?.(true);
                break;
            case '2':
                handleRevert();
                break;
            case '3':
                handleDelete();
                break;
        }
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
        onModalStateChange?.(false);
    };

    const handleRevert = async () => {
        try{
            const response = await VehicleService.revert(vehicle!.token);
            api.success({
                message: "Success!",
                description: `Vehicle ${response!.vehicle_name} was successfully reverted`,
                placement: "bottomRight",
                duration: 5,
            });

            onClose?.();
        }catch(err){
            api.info({
                message: "Nothing to revert",
                description: `Nothing to revert`,
                placement: "bottomRight",
                duration: 5,
            })
        }
        
    };

    const handleDelete = async () => {
        const updateData: VehicleUpdate = {
            deployment_status: "ARCHIVED" as DeploymentStatus
        }
        try{
            const response = await VehicleService.putVehicle(vehicle!.token, updateData);
            api.success({
                message: "Vehicle Removed",
                description: "deployment status set to Archived",
                placement: "bottomRight",
                duration: 5,
            })
        }catch(err){
            api.error({
                message: "Something went wrong",
                description: `${err}`,
                placement: "bottomRight",
                duration: 5,
            })
        }
    }

    return (
        <div ref={ref} style={{ ...style, backgroundColor: '#303030' }}>
            {contextHolder}
            <Menu
                items={items}
                defaultSelectedKeys={['1']}
                style={{
                    width: '166px',
                    height: 'auto',
                    backgroundColor: '#303030',
                    border: 'none'
                }}
                theme="dark"
                onClick={handleMenuSelect}
            />

            <UpdateVehicleVers
                vehicleName={vehicle?.vehicle_name}
                isOpen={isModalOpen}
                onClose={handleModalClose}
            />
        </div>
    )
});



export default SummaryMenu;