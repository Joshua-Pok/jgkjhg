const theme = {
  components: {
    Button: {
      colorPrimary: 'var(--primary)',
      colorPrimaryActive: 'var(--primary-active)',
      colorPrimaryHover: 'var(--primary-hover)',
    },
    Input: {
      activeBorderColor: 'var(--primary-active)',
      hoverBorderColor: 'var(--primary-hover)',
    },
    Form: {
      colorError: 'var(--danger)',
    },
    Table: {
      cellFontSize: 14,
      colorBgContainer: 'var(--bg-black)',
            borderColor: 'var(--border-secondary)',
            headerBg: 'var(--bg-fill-quaternary)',
            colorText: 'var(--text-base)',
            colorLinkHover: 'var(--text-hover)',
            colorLinkActive: 'var(--text-active)',
            rowHoverBg: 'var(--bg-hover)',
            bodySortBg:'var(--bg-elevated)',
            headerSortActiveBg:'var(--bg-elevated)'
          },
  },
};

export default theme;
