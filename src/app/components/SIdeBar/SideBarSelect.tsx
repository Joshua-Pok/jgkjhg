import React from 'react';
import { Select } from 'antd';
import "../../scss/components/SideBarSelect.scss"
import OperationsIcon from '../../assets/Operations.png'
import DeploymentIcon from '../../assets/Deployment.png'
import MaintainanceIcon from '../../assets/Maintainance.png'
import InsightIcon from '../../assets/Insight.png'
import ConsolesIcon from '../../assets/Consoles.png'

const SideBarSelect = () => {

  const options = [
    { 
      key: 'main',
      value: 'Operations', 
      label: 'Operations',
      icon: OperationsIcon,
      description: 'Manage operations'
    },
    { 
      value: 'Deployment', 
      label: 'Deployment',
      icon: DeploymentIcon,
      description: 'Deploy applications'
    },
    { 
      value: 'Maintainance', 
      label: 'Maintainance',
      icon: MaintainanceIcon,
      description: 'System maintenance'
    },
    { 
      value: 'Insight', 
      label: 'Insight',
      icon: InsightIcon,
      description: 'Analytics & insights'
    },
    { 
      value: 'Consoles', 
      label: 'Consoles',
      icon: ConsolesIcon,
      description: 'Console management'
    },
  ];

  return (
    <div>
      <Select
        className="deployment-select"
        style={{ width: '200px' }}
        defaultValue="Operations"
        dropdownClassName="deployment-dropdown"
      >
        {options.map(option => (
          <Select.Option key={option.value} value={option.value}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img 
                src={option.icon.src} 
                alt={option.label}
                style={{
                  width: '24px',
                  height: '24px',
                  marginRight: '12px',
                  borderRadius: '4px'
                }}
              />
              <div>
                <div style={{ 
                  color: '#ffffff', 
                  fontSize: '14px', 
                  fontWeight: '500',
                  lineHeight: '20px'
                }}>
                  {option.label}
                </div>
                <div style={{ 
                  color: '#9ca3af', 
                  fontSize: '12px',
                  lineHeight: '16px'
                }}>
                  {option.description}
                </div>
              </div>
            </div>
          </Select.Option>
        ))}
      </Select>
    </div>
  );
};

export default SideBarSelect;