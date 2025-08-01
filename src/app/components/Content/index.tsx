import DataTable from '../DataTable'
import Banner from './Banner'
import '../../scss/ContentStyles.scss'
import Summary from './Summary'
import InstalledVersions from './InstalledVersions'
import SearchBar from './SearchBar'
import Filter from './Filter'
import { Button } from "antd"
import UpdateVersion from '../UpdateVersion'
import { useState } from 'react'
import { useDebounce } from '@/app/utils/useDebounce'
import Infocard from './Infocard'
import { PlusOutlined } from '@ant-design/icons'
import FilterDropDown from '../FilterDropdown'
import AddVehicleModal from '../AddVehicleModal'
import { useFilterOptions } from '@/app/utils/useFilterOptions'
import { DeploymentStatus, VehicleService, VehicleUpdate } from '../../../../testservices'

export default function Content() {

  const [search, setSearch] = useState('');
  const [group, setGroup] = useState('');
  const [isUpdateOpen, setIsUpdateOpen] = useState(false);
  const [isAddVehicleOpen, setIsAddVehicleOpen] = useState(false);
  const [version, setVersion] = useState("");
  const [status, setStatus] = useState("");

  const {fleetOptions, versionOptions, statusOptions } = useFilterOptions();
  const debouncedSearch = useDebounce(search, 500); 

  const handleUpdateStatus = async(token: string, status: string) => {
    const body: VehicleUpdate = {
      deployment_status: status as DeploymentStatus,
    }
    try{
      const response = await VehicleService.putVehicle(token, body);
      return;
    }catch(err){
      throw err;
    }
  }

  const handleStatusChange = (value: string) => {
    setStatus(value);
  }
  
  const handleOpenAddVehicle = () => {
    setIsAddVehicleOpen(true);
  }

  const handleCloseAddVehicle = () => {
    setIsAddVehicleOpen(false);
  }
  
  const handleOpenUpdateVersion = () => {
    setIsUpdateOpen(true);
  }

  const handleCloseUpdateVersion = () => {
    setIsUpdateOpen(false);
  }
  return (
    <div className='content-wrapper'>
      <div className="welcome-section">
        <h1 className='welcome-text'>Welcome Back, Johnson John!</h1>
        
      </div>
      
      <div className='banner'>
              <Banner></Banner>
      </div>

      <div className="card-section">
        <Infocard type="total-vehicles"></Infocard>
        <Infocard type="active-deployment"></Infocard>
        <Infocard type="version-compliance"></Infocard>
        <Infocard type="action-required"></Infocard>
      </div>
      
      <div className="vehicle-heading">
        <div className="left-section">
            <h1 style={{color: "#FFFFFFD9", fontSize: "20px"}}>Vehicles</h1>
        <Button icon={<PlusOutlined/>} onClick={handleOpenAddVehicle} style={{color: "#FFFFFFD9", backgroundColor: "#424242"}}>Add Vehicle</Button>
        </div>
        <div className="right-section">
            <Button type="primary" onClick={handleOpenUpdateVersion}>Update Version</Button>
        </div>
        
      </div>

      
      <div className="filter-section">
         <SearchBar value={search} onChange={setSearch}></SearchBar>
            <FilterDropDown
            type='fleet'
            value={group}
            onChange={setGroup}
            options={fleetOptions}
            />
            <FilterDropDown
            type='version'
            value={version}
            onChange={setVersion}
            options={versionOptions}
            />
            <FilterDropDown
            type='status'
            value={status}
            onChange={handleStatusChange}
            options={statusOptions}
            />
      </div>

       <div className="filter">
              <Filter value={group} onChange={setGroup}></Filter>
            </div>
            
        <div className="DataTable">
        <DataTable searchTerm={debouncedSearch} group={group} version={version} status={status} fleet={group}></DataTable>
      </div>
      <UpdateVersion isOpen={isUpdateOpen} onClose={handleCloseUpdateVersion}></UpdateVersion>
      <AddVehicleModal isOpen={isAddVehicleOpen} onClose={handleCloseAddVehicle}></AddVehicleModal>        
        {/* <div className="summarysearch">
          <div className="searchbar">
        <SearchBar value={search} onChange={setSearch}></SearchBar>
      </div>
            <div className="summary">
        <Summary></Summary>
        <InstalledVersions></InstalledVersions>
      </div>
      
        </div> */}

      {/* <div className='test-section'>
          <Infocard></Infocard>
      </div> */}
    </div>
  );
}
