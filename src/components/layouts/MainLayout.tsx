import { Footer, Navbar } from "../ui";

interface MainLayoutProps {
  children: JSX.Element | JSX.Element[];
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>

      <nav>
        <Navbar />
      </nav>

      <main>
        {children}
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
};
