const backgroundHandler = (bg?: string) => {
  let backgroundColor: string = "transparent";

  switch (bg) {
    case "gray":
      backgroundColor = "var(--gray-4)";
      break;
    case "gray-light":
      backgroundColor = "var(--gray-3)";
      break;
    case "gray-medium":
      backgroundColor = "var(--gray-4)";
      break;
    case "gray-dark":
      backgroundColor = "var(--gray-6)";
      break;
    case "gold":
      backgroundColor = "var(--gold-3)";
      break;
    case "bronze":
      backgroundColor = "var(--bronze-3)";
      break;
    case "brown":
      backgroundColor = "var(--brown-3)";
      break;
    case "yellow":
      backgroundColor = "var(--yellow-3)";
      break;
    case "amber":
      backgroundColor = "var(--amber-3)";
      break;
    case "orange":
      backgroundColor = "var(--orange-3)";
      break;
    case "tomato":
      backgroundColor = "var(--tomato-3)";
      break;
    case "red":
      backgroundColor = "var(--red-3)";
      break;
    case "ruby":
      backgroundColor = "var(--ruby-3)";
      break;
    case "crimson":
      backgroundColor = "var(--crimson-3)";
      break;
    case "pink":
      backgroundColor = "var(--pink-3)";
      break;
    case "plum":
      backgroundColor = "var(--plum-3)";
      break;
    case "purple":
      backgroundColor = "var(--purple-3)";
      break;
    case "violet":
      backgroundColor = "var(--violet-3)";
      break;
    case "iris":
      backgroundColor = "var(--iris-3)";
      break;
    case "indigo":
      backgroundColor = "var(--indigo-3)";
      break;
    case "blue":
      backgroundColor = "var(--blue-3)";
      break;
    case "cyan":
      backgroundColor = "var(--cyan-3)";
      break;
    case "teal":
      backgroundColor = "var(--teal-3)";
      break;
    case "jade":
      backgroundColor = "var(--jade-3)";
      break;
    case "green":
      backgroundColor = "var(--green-3)";
      break;
    case "grass":
      backgroundColor = "var(--grass-3)";
      break;
    case "sage":
      backgroundColor = "var(--sage-3)";
      break;
    case "olive":
      backgroundColor = "var(--olive-3)";
      break;
    case "sand":
      backgroundColor = "var(--sand-3)";
      break;
    case "slate":
      backgroundColor = "var(--slate-3)";
      break;
    case "mauve":
      backgroundColor = "var(--mauve-3)";
      break;
    default:
      break;
  }
  return backgroundColor;
};

export default backgroundHandler;
