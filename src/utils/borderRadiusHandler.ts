const borderRadiusHandler = (radius?: string) => {
  let borderRadius = "0";

  switch (radius) {
    case "none":
      borderRadius = "0";
      break;
    case "small":
      borderRadius = "var(--radius-2)";
      break;
    case "medium":
      borderRadius = "var(--radius-4)";
      break;
    case "large":
      borderRadius = "var(--radius-6)";
      break;
    case "full":
      borderRadius = "var(--radius-full)";
      break;
  }

  return borderRadius;
};

export default borderRadiusHandler;
