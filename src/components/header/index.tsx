import Navigation from "./components/navigation";

export default function Header() {
  return (
    <header
      className="pt-3.5 px-3.5 pb-5 w-full h-screen max-h-[460px] bg-cover bg-no-repeat bg-center rounded-[10px]
    bg-[url('/mobile-red-background.png')]
    sm:bg-[url('/red-background.png')] sm:max-h-[222px] sm:rounded-[15px] sm:p-4 
    md:p-4 
    xl:px-8 xl:pb-8 xl:max-h-[316px]"
    >
      <Navigation />
    </header>
  );
}
