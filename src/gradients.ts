import ColorHash from "color-hash";

const colorHash = new ColorHash({ saturation: 1.0 });

// Converte una stringa in un colore esadecimale
export const stringToColour = (s: string): string => colorHash.hex(s);

// Genera due colori a partire da una stringa
export const generateColours = (s: string): [string, string] => {
  const s1 = s.substring(0, s.length / 2);
  const s2 = s.substring(s.length / 2);
  const c1 = stringToColour(s1);
  const c2 = stringToColour(s2);

  return [c1, c2];
};

// Genera un SVG di gradiente lineare
export const generateSVG = (s: string, size = 256): string => {
  const [c1, c2] = generateColours(s);

  const svg = `
<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="${size}" height="${size}" fill="url(#gradient)" />
  <defs>
    <linearGradient id="gradient" x1="0" y1="0" x2="${size}" y2="${size}" gradientUnits="userSpaceOnUse">
      <stop stop-color="${c1}" />
      <stop offset="1" stop-color="${c2}" />
    </linearGradient>
  </defs>
</svg>
  `.trim();

  return svg;
};
