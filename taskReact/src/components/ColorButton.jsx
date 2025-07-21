function ColorButton({ colorName, onClick }) {
  const colorBg = {
    red: "bg-red-500",
    blue: "bg-blue-500",
    green: "bg-green-500",
    orange: "bg-orange-500",
    purple: "bg-purple-500",
    teal: "bg-teal-500",
  };

  // Basic styles for size and shape plus the color background
  const classes = `w-12 h-12 rounded-full ${colorBg[colorName]}`;
  return (
    <button
      onClick={() => onClick(colorName)}
      className={classes}
    />
  );
}

export default ColorButton;
