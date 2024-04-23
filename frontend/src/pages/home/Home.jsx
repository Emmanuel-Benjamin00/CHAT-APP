import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css"

const Home = () => {
	return (
		<div className='hometotal flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding bg-opacity-0 md:backdrop-filter md:backdrop-blur-lg'>
			<Sidebar className="sidebar-class" />
			<MessageContainer />
		</div>

	);
};
export default Home;
