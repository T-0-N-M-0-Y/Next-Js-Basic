import Link from "next/link";

const navLinks = [
    {
        path: '/',
        title: "Home"
    },
    {
        path: '/about',
        title: "About"
    },
    {
        path: '/dashboard',
        title: "Dashboard"
    }
]

const Navbar = () => {

    return (
        <nav className="flex justify-between items-center mb-10 container mx-auto">
            <h1 className="text-3xl">Next Basic</h1>
            <ul className="flex justify-center items-center">
                {
                    navLinks.map(({ path, title }) => (
                        <li className="mx-2" key={{ path }}>
                            <Link href={path}>{title}</Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
    );
};

export default Navbar;