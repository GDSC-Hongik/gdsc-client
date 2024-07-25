export const customMediaQuery = (minWidth: number): string =>
  `@media (min-width: ${minWidth}px)`;
export const media = {
  custom: customMediaQuery,
  pc: customMediaQuery(900),
  mobile: `@media (max-width : 900px)`
};
