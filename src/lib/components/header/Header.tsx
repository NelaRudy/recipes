type HeaderProps = {
    children?: JSX.Element;
};

const Header = ({children}: HeaderProps) => {
    return (
        <header className="bg-teal-700 text-gray-50 sticky top-0 w-screen">
            {children}
        </header>
    );
};

export default Header;
