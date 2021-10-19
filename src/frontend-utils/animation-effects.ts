export const underlineOnHover = (color = 'var(--color-primary-light)') => {
  return `
      position: relative;

      &:hover {
        &::before {
          content: '';
          position: absolute;
          bottom: -2px;
          width: 100%;
          height: 2px;
          background-color: ${color};
          transition: width 0.3s ease;
          animation: expandToFullWidth 0.5s;
        }
      }
    `;
};
