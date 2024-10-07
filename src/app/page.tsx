'use client'; // eslint-disable-line
import Image from 'next/image';
import main from '@/shared/assets/home.avif';
import mainMd from '@/shared/assets/main_md.avif';
import logo from '@/shared/assets/logo.svg';
import { Trends } from '@/shared/ui/Trends';
import { PageHeader } from '@/widgets/pageHeader';

export default function Home() {
  return (
    <main className="">
      <PageHeader
        image={main}
        imageMobile={mainMd}
        title={'UP TO 50% OFF'}
        subtitle="Score special discounts on premium styles through 10/2. Only for adiClub members."
      />
      <Trends />
      <div className="bg-black py-20 flex flex-col items-center gap-[15px] px-[30px]">
        <h1 className="text-white uppercase text-2xl font-neueBold tracking-[1px]">
          A leader in athletic performance since 1949
        </h1>
        <p className="text-white max-w-[730px] leading-[22px] text-justify">
          We&apos;re inspired by athletes. From the very first track spikes Adi
          Dassler made in his workshop, creating the best gear for the athlete
          is what drives us to pursue technological breakthroughs and design
          innovations. Our sneakers and apparel are worn by world-record holders
          and medal winners, but it&apos;s just as important that road runners,
          weekend hikers, recreational soccer players, fitness enthusiasts and
          yogis look to adidas for gear that helps them find their personal
          best. From adidas Boost, the game-changing cushioning technology, to
          the world-beating design of Adizero Adios Pro running shoes to Terrex
          outdoor gear to soccer cleats with unbeatable touch, we&apos;re always
          iterating, innovating and improving with athletes in mind.
          <br />
          <br />
          The drive to create the best products for the athlete is why we went
          back to the drawing board to build the best sports bras in the
          business. Reimagined and redesigned, our sports bras keep female
          athletes comfortable and supported, whatever their sport. It&apos;s
          why we developed period-proof technology to encourage more women to
          stay in the game. It&apos;s why we partner with designers like Stella
          McCartney who blur the lines between sport and high fashion, with
          sportswear that ensures that athletes look and feel great in and out
          of the gym. Our sneakers and workout clothes are designed to get
          people moving, so they can live life to the fullest.
        </p>
        <Image className="filter_white w-10 mt-[50px]" src={logo} alt="logo" />
      </div>
    </main>
  );
}
