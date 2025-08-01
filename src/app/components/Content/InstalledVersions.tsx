import { Card } from 'antd'
import '../../scss/components/InstalledVersions.scss'
import useVersionCounts from '../../utils/useVersionCounts'
import { useContext } from 'react';
import { VehicleContext } from '../Provider/VehicleProvider';

export default function InstalledVersions(){

    const context = useContext(VehicleContext);
    const vehicles = context?.vehicles || []
    let counts = useVersionCounts(vehicles);

    return (
        <>
        <Card title="Installed Versions" className="versions-card">
           {counts.map((item, index) => (
                <div className="version-item" key={index || item.version}>
                    <div className="version-no">
                        <p>{item.version}</p>
                    </div>
                    <p className="version-no-value">{item.count}</p>
                </div>
            ))}
        </Card>
        </>
    )
}