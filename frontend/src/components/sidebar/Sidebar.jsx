import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";
import "../../pages/home/home.css"

const Sidebar = () => {
	return (
		<div className='border-r border-slate-500 p-4 flex flex-col'>
			<SearchInput />
			<div className='divider px-3'></div>
			<Conversations />
			<div className="logoutbtnhiddeninsidebar">
			<LogoutButton/>
			</div>
		</div>
	);
};
export default Sidebar;
