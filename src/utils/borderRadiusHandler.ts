const borderRadiusHandler = (radius?: string) => {
  let borderRadius = "0";
  if (radius === "none") {
    borderRadius = "0";
  }
  if (radius === "small") {
    borderRadius = "var(--radius-2)";
  }
  if (radius === "medium") {
    borderRadius = "var(--radius-4)";
  }
  if (radius === "large") {
    borderRadius = "var(--radius-6)";
  }
  if (radius === "full") {
    borderRadius = "var(--radius-full)";
  }

  return borderRadius;
};

export default borderRadiusHandler;
