import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";

interface LayoutProps {
  showHeaderFooter?: boolean;
}

function Layout({ showHeaderFooter = true }: LayoutProps) {
  return (
    <div className="bg-slate-900 min-h-screen text-slate-100">
      {showHeaderFooter && (
        <div className="w-full h-full ">
          <Header />
          <Body />
          <Footer />
        </div>
      )
      }
      {!showHeaderFooter && (
        <Body />
      )}
    </div>
  );
}

export default Layout;
