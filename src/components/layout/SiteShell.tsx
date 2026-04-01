import { AnnouncementBar } from "./AnnouncementBar";
import { FloatingBrandBag } from "@/components/brand/InteractiveBrandBag";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { SearchOverlay } from "@/components/search/SearchOverlay";
import { Footer } from "./Footer";
import { Header } from "./Header";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main className="min-w-0 flex-1">{children}</main>
      <Footer />
      <CartDrawer />
      <SearchOverlay />
      <FloatingBrandBag />
    </>
  );
}
