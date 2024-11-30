import { lighten, darken, transparentize } from "color2k";

export const generateShades = (name: string, baseColor: string) => {
  const shades: { [key: string]: string } = {};

  // Define the ranges and steps for lightening and darkening
  const lightSteps = [0.95, 0.9, 0.8, 0.7, 0.6];
  const darkSteps = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6];
  const alphaSteps = [0.04, 0.15, 0.32, 0.49, 0.62, 0.86];

  // Generate light shades
  lightSteps.forEach((step, i) => {
    shades[`${name}-${i + 1}`] = lighten(baseColor, step);
  });

  // Base color (step 6 in your example)
  shades[`${name}-6`] = baseColor;

  // Generate dark shades
  darkSteps.forEach((step, i) => {
    shades[`${name}-${i + 7}`] = darken(baseColor, step);
  });

  // Generate alpha shades
  alphaSteps.forEach((alpha, i) => {
    shades[`${name}-a${i + 1}`] = transparentize(baseColor, 1 - alpha);
  });

  // Generate additional colors
  shades[`${name}-contrast`] = darken(baseColor, 0.8); // Example contrast color
  shades[`${name}-surface`] = transparentize(baseColor, 0.2); // Example surface color
  shades[`${name}-indicator`] = baseColor;
  shades[`${name}-track`] = baseColor;

  return shades;
};
