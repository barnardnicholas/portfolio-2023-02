const contentBlockColumns = { xs: '1fr' };
const contentBlockAreas = { xs: `"content"` };

export const contentBlockStyles = {
  left: {
    gridTemplateColumns: { ...contentBlockColumns, md: '1fr 2fr' },
    gridTemplateAreas: { ...contentBlockAreas, md: `"content ."` },
  },
  right: {
    gridTemplateColumns: { ...contentBlockColumns, md: '1fr 2fr' },
    gridTemplateAreas: { ...contentBlockAreas, md: `". content"` },
  },
  center: {
    gridTemplateColumns: { ...contentBlockColumns, md: '1fr 4fr 1fr' },
    gridTemplateAreas: { ...contentBlockAreas, md: `". content ."` },
  },
};
