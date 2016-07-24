export const sm = '786px';
export const md = '992px';
export const lg = '1200px';

export const minSm = () => `@media (min-width: ${sm})`;
export const minMd = () => `@media (min-width: ${md})`;
export const minLg = () => `@media (min-width: ${lg})`;
export const minCustom = (px) => `@media (min-width: ${px})`;

export const maxSm = () => `@media (max-width: ${sm})`;
export const maxMd = () => `@media (max-width: ${md})`;
export const maxLg = () => `@media (max-width: ${lg})`;

export const xsOnly = () => `@media (max-width: ${sm})`;
export const smOnly = () => `@media (min-width: ${sm}) and (max-width: ${md})`;
export const mdOnly = () => `@media (min-width: ${md}) and (max-width: ${lg})`;
export const lgOnly = () => `@media (min-width: ${lg})`;

// '@media (min-width: 375px)': {
//   // fontSize: `${pxToEm(baseFontSize-29,16)}rem`,
// },
// '@media (min-width: 414px)': {
//   // fontSize: `${pxToEm(baseFontSize-25,16)}rem`,
// },
// '@media (min-width: 768px)': {
//   // fontSize: `${pxToEm(baseFontSize-10,16)}rem`,
// },
// '@media (min-width: 992px)': {
//   // fontSize: `${pxToEm(baseFontSize-5,16)}rem`,
// },
// '@media (min-width: 1200px)': {
//   // fontSize: `${pxToEm(baseFontSize,16)}rem`,
// }
