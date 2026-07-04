import Header from "./Header";
import Footer from "./Footer";

export default function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-cream">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
