function ColorPreview({ colorName }) {
  const colorBg = {
    red: 'bg-red-500',
    blue: 'bg-blue-500',
    green: 'bg-green-500',
    orange: 'bg-orange-500',
    purple: 'bg-purple-500',
    teal: 'bg-teal-500',
  };
  const bgClass = colorBg[colorName];

  const classes = `w-48 h-48 border-2 border-gray-300 rounded ${bgClass} flex items-center justify-center`;
  return (
    <div className={classes}>
      {!colorName ? 'No color selected':''}
    </div>
  );
}
export default ColorPreview;
