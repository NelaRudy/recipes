type HeaderProps = {
    children?: JSX.Element;
};

export const Header = ({children}: HeaderProps) => {
    return (
        <header className="bg-teal-600 text-gray-50 sticky top-0 w-screen">
            {children}
        </header>
    );
};
