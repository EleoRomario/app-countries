import { Home } from "../../icons/Home";
import { Logo } from "../../icons/Logo";
import { Favorite } from "../../icons/Favorite";
import { Folder } from "../../icons/Folder";
import { OpenSidebar } from "../../ui/buttons/OpenSidebar";
import { storeCountries } from "../../../helper/store";

export const Sidebar = ({ pathname }) => {
	const nav = [
		{
			name: "Home",
			href: "/",
			icon: Home,
		},
		{
			name: "My countries",
			href: "/saves",
			icon: Folder,
		},
		{
			name: "Favorites",
			href: "/favorites",
			icon: Favorite,
		},
	];

	const { open, setOpen } = storeCountries();

	return (
		<div
			className={`flex ${
				open ? "w-screen h-full" : "w-0 h-screen"
			} relative md:w-full`}
		>
			<div
				className={`w-80 h-full flex flex-col shadow-xl bg-ligth shadow-ligth relative transition-transform duration-300 z-10 md:translate-x-0 ${
					open ? "translate-x-0" : "-translate-x-full"
				}`}
			>
				<div className="flex justify-center items-center h-20">
					<div className="text-primary text-2xl font-bold flex justify-center items-center gap-4">
						<Logo />
						<a href="/">Countries.</a>
					</div>
				</div>
				<div className="flex-1">
					<nav className="mt-4">
						<ul className="flex flex-col gap-2">
							{nav.map(({ name, href, icon: Icon }) => (
								<li key={name}>
									<a
										href={href}
										className={`ml-2 flex gap-2 h-11 items-center px-10 hover:text-primary font-medium border-r-4 rounded-ss-lg rounded-es-xl hover:bg-bg-200 hover:border-primary ${
											pathname == href
												? "text-primary border-primary bg-bg-200"
												: "border-transparent  text-title-200"
										}`}
									>
										<Icon />
										{name}
									</a>
								</li>
							))}
						</ul>
					</nav>
				</div>
				<OpenSidebar />
			</div>

			<div
				className={`bg-black/10 md:hidden flex absolute w-full h-full ${
					open ? "block" : "hidden"
				}`}
				onClick={() => setOpen(!open)}
			/>
		</div>
	);
};
