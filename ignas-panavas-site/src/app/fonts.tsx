import localFont from "next/font/local";

export const tinos = localFont({
    src: [
      { path: './fonts/Tinos-Regular.ttf', weight: '400', style: 'normal' },
      { path: './fonts/Tinos-Italic.ttf', weight: '400', style: 'italic' },
      { path: './fonts/Tinos-Bold.ttf', weight: '700', style: 'normal' },
      { path: './fonts/Tinos-BoldItalic.ttf', weight: '700', style: 'italic' },
    ],
  });