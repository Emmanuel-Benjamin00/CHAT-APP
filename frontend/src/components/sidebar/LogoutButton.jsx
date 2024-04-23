import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";
import "../../pages/home/home.css"

const LogoutButton = () => {
	const { loading, logout } = useLogout();

	return (
		<div className='mt-auto'>
			{!loading ? (<>
				<div className="d-flex gap-2 cursor-pointer" onClick={logout}>
					<BiLogOut className='w-6 h-6 text-white cursor-pointer' />
					<h6 className="text-white">Logout</h6>
				</div>
			</>) : (
				<span className='loading loading-spinner'></span>
			)}
		</div>
	);
};
export default LogoutButton;
