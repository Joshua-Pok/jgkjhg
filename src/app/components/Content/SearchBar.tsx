import { Input } from "antd"
import { SearchBarProps } from "@/app/types"
import { SearchOutlined } from '@ant-design/icons'

export default function SearchBar({value, onChange}: SearchBarProps){
    return (
        <>
        <style>
            {`

            .ant-input::placeholder{
                color: #FFFFFF40;
            }
            .custom-input::placeholder{
                color: #FFFFFF40;
            }
            `}
        </style>
        <Input prefix={<SearchOutlined/>} className="custom-input" placeholder="Search For Vehicle" style={{backgroundColor: "#303030", color: "white"}}
        value={value}
        onChange={e => onChange(e.target.value)}
        ></Input>
        </>
    )
}