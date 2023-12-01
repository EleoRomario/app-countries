import { Home } from "../../icons/Home";
import { Logo } from "../../icons/Logo";
import { Favorite } from "../../icons/Favorite";
import { Folder } from "../../icons/Folder";

export const Sidebar = () => {
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

	return (
		<div className="w-full h-full flex flex-col shadow-xl shadow-ligth">
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
									className="ml-2 flex gap-2 h-11 items-center text-title-200 px-10 hover:text-primary font-medium border-r-4 border-transparent rounded-ss-lg rounded-es-xl hover:bg-bg-200 hover:border-primary"
								>
									<Icon />
									{name}
								</a>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</div>
	);
};
