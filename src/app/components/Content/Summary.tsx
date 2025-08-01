import { Card } from "antd";
import { useContext } from 'react';
import { VehicleContext } from "../Provider/VehicleProvider";
import '../../scss/components/SummaryStyles.scss'
import useStatusCount from '../../utils/useStatusCount'


export default function Summary() {
    const context = useContext(VehicleContext);
    const vehicles = context?.vehicles || [];

    const statusCounts = useStatusCount(vehicles);

    const colors = {
      "RestartRequired": "orange",
      "Updated": "green",
      "NotInstalled": "red"
    }

    return (
        <>
            <Card 
                title="Summary" 
                className="summary-card"
            >
                {Object.entries(statusCounts).map(([status, count]) => (
                    <div className="summary-row" key={status}>
                        <div className="summary-dot" style={{backgroundColor: colors[status as keyof typeof colors]}}/>
                        <div className="summary-flex">
                            <p className="summary-label">{status}</p>
                            <p className="summary-value">{count}</p>
                        </div>
                    </div>
                ))}
            </Card>
        </>
    );
}