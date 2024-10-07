import { Logo } from './Logo';
import { Nav } from './nav';
import { Options } from './options';
import { Interaction } from './interaction';
import MobileHeader from './mobileHeader';

export function Header() {
  return (
    <header className="sticky top-0 left-0 border-b-[1px] border-b-[var(--gray)] bg-white z-50">
      <div className="h-[40px] flex justify-center items-center bg-black text-white text-[11px] font-hausBold tracking-widest uppercase">
        free standard shipping with adiclub
      </div>
      <div className="max-w-full w-[1690px] px-10 xl:px-5 mx-auto">
        <MobileHeader />
        <Options />
        <div className="md:hidden grid grid-cols-[2fr_5fr_2fr] xl:grid-cols-[1fr_5fr_2fr]">
          <Logo />
          <Nav />
          <Interaction />
        </div>
      </div>
    </header>
  );
}
