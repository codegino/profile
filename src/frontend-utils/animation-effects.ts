export const underlineOnHover = (color = 'var(--color-primary-light)') => {
  return `
      position: relative;

      @keyframes expand {
        0% {
          width: 0;
        }
  
        100% {
          width: 100%;
        }
      }

      &:hover {
        &::before {
          content: '';
          position: absolute;
          bottom: -2px;
          width: 100%;
          height: 2px;
          background-color: ${color};
          transition: width 0.3s ease;
          animation: expand 0.5s;
        }
      }
    `;
};
