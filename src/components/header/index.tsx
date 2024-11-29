import Navigation from "./components/navigation";

export default function Header() {
  return (
    <header className="h-screen max-h-[460px] w-full rounded-[10px] bg-red-800 bg-[url('/mobile-red-background.png')] bg-cover bg-center bg-no-repeat px-3.5 pb-5 pt-3.5 sm:max-h-[222px] sm:rounded-[15px] sm:bg-[url('/red-background.png')] sm:p-4 md:p-4 xl:max-h-[316px] xl:px-8 xl:pb-8">
      <Navigation />
    </header>
  );
}
