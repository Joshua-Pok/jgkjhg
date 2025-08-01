import { InfoCardProps, FleetData } from "@/app/types"
import '../../scss/components/infocardstyles.scss'
import InfocardIcon from "./InfocardIcon"
import { useInfoCardData } from '../../utils/useInfoCardData'


export default function Infocard({
    type,
}: InfoCardProps){

    const{
        totalVehiclesData,
        versionComplianceData,
        actionRequiredData,
        activeDeploymentsData
    } = useInfoCardData()

    let data;

    switch(type){
        case 'total-vehicles':
            data = totalVehiclesData;
            break;
        case 'active-deployment':
            data = activeDeploymentsData;
            break;
        case 'version-compliance':
            data = versionComplianceData;
            break;
        case 'action-required':
            data = actionRequiredData;
            break;
    }


    return (
        <>
        <div className="info-card-wrapper">
            <div className="info-card-title">
                <p>{data.title}</p>
                <InfocardIcon type={type}></InfocardIcon>
            </div>

            <h1 className="main-data">{data.mainData}</h1>
            <div className="sub-data">
                    {data.subData}
            </div>

        </div>
        </>
    )
}