import { Select } from 'antd';
import { FilterDropDownProps } from '../types';
export default function FilterDropDown({type, value, onChange, options}: FilterDropDownProps) {
 

  const getPlaceholder = () => {
    switch(type){
      case 'fleet':
        return 'All Fleets';
      case 'version':
        return 'All Versions';
      case 'status':
        return 'All Status';
      default: 
        return 'Select...';
    }
  }

  return (
    <Select
    placeholder={getPlaceholder()}
    value={value || undefined}
    onChange={onChange}
    options={options}
    style={{
      width: 150,
      backgroundColor: "#1C1C1C",
      color: "#FFFFFD9"
    }}
    allowClear
    />
  );
}