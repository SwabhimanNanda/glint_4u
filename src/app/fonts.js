import { Inter, Bricolage_Grotesque, Latin, Work_Sans, Instrument_Serif  } from 'next/font/google';

export const bri = Bricolage_Grotesque({
  subsets: ['latin'],
  display: 'swap',
});

export const bri2 = Bricolage_Grotesque({
  subsets: ['latin'],
  display: 'swap',
  weight: ['700'], // Change 400 to '400' as a string
});

export const bri3 = Bricolage_Grotesque({
    subsets: ['latin'],
    display: 'swap',
    weight: ['400'], // Change 400 to '400' as a string
  });

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const f1 = Work_Sans({
  subsets: ['latin'],
  display: 'swap',
  weight:['300']
});
export const f2 = Instrument_Serif({
  subsets: ['latin'],
  display: 'swap',
  weight:['400']
});
