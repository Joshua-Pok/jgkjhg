import { Select } from 'antd';

interface FormFieldProps {
  label: string;
  placeholder: string;
  value?: string | string[];
  onChange: (value: any) => void;
  options?: Array<{value: string; label: string}>;
  mode?: 'default' | 'tags';
  style?: React.CSSProperties;
}

export const FormField = ({
  label,
  placeholder,
  value,
  onChange,
  options = [],
  mode = 'default',
  style = { width: "100%", backgroundColor: "#1C1C1C" }
}: FormFieldProps) => {
  return (
    <div id="option">
      <p style={{ color: "white" }}>{label}:</p>
      <Select
        placeholder={placeholder}
        style={style}
        onChange={onChange}
        options={options}
        value={value}
        mode={mode}
      />
    </div>
  );
}; 