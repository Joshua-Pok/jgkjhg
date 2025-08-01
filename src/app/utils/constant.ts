export const GROUP_OPTIONS = [
    {value: "PRODUCTION", label: "Production"},
    {value: "TESTING", label: "Testing"},
    {value: "BRINGUP", label: "LMAO"},
];

export const SOFTWARE_VERSION_OPTIONS = GROUP_OPTIONS;

export const LAUNCH_FLAG_OPTIONS = GROUP_OPTIONS;

export const STATUS_COLORS: Record<string, string> = {
    RestartRequired: "orange",
    Updated: "green",
    NotInstalled: "red",
}