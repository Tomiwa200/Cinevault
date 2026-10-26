import { Outlet } from "react-router";
import { Header } from "./components/ui/Header";
import { Footer } from "./components/ui/Footer";




export function MainLayout() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}