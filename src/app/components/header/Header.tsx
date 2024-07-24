type HeaderProps = {
    children?: JSX.Element;
};
export const Header = ({children}: HeaderProps) => {
    return (
        <header className="bg-emerald-500 text-gray-50 sticky top-0 w-screen">
            {children}
        </header>
    );
};
