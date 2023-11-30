import { Home } from "../../icons/Home";
import { Logo } from "../../icons/Logo";

export const Sidebar = () => {
	const nav = [
		{
			name: "Home",
			href: "/",
			icon: Home,
		},
		{
			name: "About",
			href: "/",
			icon: Home,
		},
		{
			name: "Contact",
			href: "/",
			icon: Home,
		},
	];

	return (
		<div className="w-full h-full flex flex-col">
			<div className="flex justify-center items-center h-20 border-b border-r">
				<div className="text-primary text-2xl font-bold flex justify-center items-center gap-4">
					<Logo />
					<a href="/">Countries</a>
				</div>
			</div>
			<div className="border-r flex-1">
				<nav className="mt-4">
					<ul className="flex flex-col gap-3 p-2">
						{nav.map(({ name, href, icon: Icon }) => (
							<li key={name}>
								<a
									href={href}
									className="flex gap-2 h-10 items-center text-title-200 px-2 hover:text-primary font-medium rounded-md hover:bg-title-200/10"
								>
									<Icon />
									Home
								</a>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</div>
	);
};
