import Header from "@/components/Header";
import Products from "@/components/Products";
import SidebarMenu from "@/components/Sidebar-menu";

export default function Contact() {
  return (
    <>
      <Header />
      <div className="">
        <SidebarMenu />
        <main className="flex-1">
          <Products />
        </main>
      </div>
    </>
  );
}
