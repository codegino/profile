export const mediaQuery = (
  width: number,
  style: string,
  type: 'min' | 'max' = 'min',
) => {
  return `@media only screen and (${type}-width: ${width}px) {
        & {
          ${style}
        }
      }`;
};
