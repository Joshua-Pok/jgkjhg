import { useState, useEffect, useRef, useContext } from 'react';
import { Button } from 'antd'
import SummaryMenu from './SummaryMenu';
import { VehicleContext } from '../Provider/VehicleProvider';
import { ActionsButtonProps} from '@/app/types';
import { VehicleRead } from '../../../../testservices';

export default function ActionsButton({vehicleID}: ActionsButtonProps){

    const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const buttonRef = useRef<HTMLDivElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);
    const vehicles = useContext(VehicleContext)?.vehicles || [];

    const handleButtonClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        const button = buttonRef.current?.getBoundingClientRect();

        if (button) {
            setMenuPosition({
                x: button.left - 166,
                y: button.top
            });
        }
        setIsMenuOpen(true);
    }

    const handleCloseMenu = () => {
        setIsMenuOpen(false);
    }

    const handleModalStateChange = (modalIsOpen: boolean) => {
        setIsModalOpen(modalIsOpen);
    };

    useEffect(() => {
            const handleOutsideClick = (e: MouseEvent) => {

                if(isModalOpen) return;

                if (menuRef.current &&
                    !menuRef.current.contains(e.target as Node) &&
                    buttonRef.current &&
                    !buttonRef.current.contains(e.target as Node)) {
                    setIsMenuOpen(false);
                }
            };
    
            if (isMenuOpen) {
                document.addEventListener('mousedown', handleOutsideClick);
            }
    
            return () => {
                document.removeEventListener('mousedown', handleOutsideClick);
            };
        }, [isMenuOpen, isModalOpen]);

    return (
        <>
            <Button onClick={handleButtonClick} ref={buttonRef} style={{backgroundColor: "#212121", color: "white", border: "1px solid #424242"}}>:</Button>
                
                {isMenuOpen && (
                <SummaryMenu
                    ref={menuRef}
                    vehicle={vehicles.find((v: VehicleRead) => v.vehicle_name === vehicleID)}
                    onClose={handleCloseMenu}
                    onModalStateChange={handleModalStateChange}
                    style={{
                        position: 'fixed',
                        left: menuPosition.x,
                        top: menuPosition.y,
                        zIndex: 1000,
                        borderRadius: '6px',
                        overflow: 'scroll'
                    }}
                />
            )}
        </>
    )
}