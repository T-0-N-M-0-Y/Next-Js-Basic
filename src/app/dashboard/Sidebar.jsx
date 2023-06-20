import Link from "next/link";

const navLinks = [
    {
        path: '/dashboard',
        title: "Dashboard"
    },
    {
        path: '/dashboard/dashHome',
        title: "DashHome"
    },
    {
        path: '/dashboard/dashProducts',
        title: "DashProducts"
    },
    {
        path: '/',
        title: "Home"
    },
]

const Sidebar = () => {

    return (
        <aside className="mr-10">
            <ul>
                {
                    navLinks.map(({title, path}) => (
                        <li key={{path}}>
                            <Link href={path}>{title}</Link>
                        </li>
                    ))
                }
            </ul>
        </aside>
    );
};

export default Sidebar;