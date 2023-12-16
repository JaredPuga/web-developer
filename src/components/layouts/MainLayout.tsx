import { Navbar } from "../ui";

interface MainLayoutProps {
  children: JSX.Element | JSX.Element[];
  title: string;
}

export const MainLayout = ({ children, title }: MainLayoutProps) => {
  return (
    <>
      <head>
        <title>{title}</title>
      </head>

      <nav>
        <Navbar />
      </nav>

      <main>
        {children}
      </main>
    </>
  );
};
