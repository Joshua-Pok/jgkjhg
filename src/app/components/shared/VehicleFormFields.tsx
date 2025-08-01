import { VehicleUpdate } from '../../../../testservices';
import { FormOptions } from '../../utils/useVehicleForm';
import { FormField } from './FormField';

interface VehicleFormFieldsProps {
  formState: VehicleUpdate;
  options: FormOptions;
  onAssignedGroupChange: (value: string) => void;
  onAssignedBundleChange: (value: string) => void;
  onLaunchFlagsChange: (values: string[]) => void;
}

export const VehicleFormFields = ({
  formState,
  options,
  onAssignedGroupChange,
  onAssignedBundleChange,
  onLaunchFlagsChange,
}: VehicleFormFieldsProps) => {
  return (
    <>
      <FormField
        label="Select Group"
        placeholder="Select Group"
        value={formState.assigned_group_name || undefined}
        onChange={onAssignedGroupChange}
        options={options.groupOptions}
        style={{ width: "100%", color: "white", backgroundColor: "#1c1c1c" }}
      />

      <FormField
        label="Select Software Version"
        placeholder="Select Software Version"
        value={formState.assigned_bundle_name || undefined}
        onChange={onAssignedBundleChange}
        options={options.softwareOptions}
      />

      <FormField
        label="Select Launch Flags"
        placeholder="Select Launch Flags"
        value={formState.launch_flags ? formState.launch_flags.split(' ') : []}
        onChange={onLaunchFlagsChange}
        options={options.launchFlagOptions}
        mode="tags"
      />
    </>
  );
}; 