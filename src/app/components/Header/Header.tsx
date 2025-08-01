import '../../scss/components/HeaderStyles.scss'
import { Avatar } from "antd"
import { UserOutlined, AppstoreOutlined } from '@ant-design/icons';
export default function Header() {


	return (
		<div id="header-wrapper">
				<div id="left-section">
					<Avatar icon={<AppstoreOutlined />}></Avatar>
					<p className="dashboard-text">Dashboard</p>
				</div>
			<div id="right-section">
				<div id="profile">
					<Avatar icon={<UserOutlined />}></Avatar>
				</div>
			</div>
		</div>
	);
}
