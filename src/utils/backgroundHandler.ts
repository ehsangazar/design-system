const backgroundHandler = (bg?: string) => {
  let backgroundColor: string = "transparent";

  switch (bg) {
    case "gray":
      backgroundColor = "var(--gray-6)";
      break;
    case "gray-light":
      backgroundColor = "var(--gray-2)";
      break;
    case "gray-medium":
      backgroundColor = "var(--gray-6)";
      break;
    case "gray-dark":
      backgroundColor = "var(--gray-10)";
      break;
    case "gold":
      backgroundColor = "var(--gold-6)";
      break;
    case "bronze":
      backgroundColor = "var(--bronze-6)";
      break;
    case "brown":
      backgroundColor = "var(--brown-6)";
      break;
    case "yellow":
      backgroundColor = "var(--yellow-6)";
      break;
    case "amber":
      backgroundColor = "var(--amber-6)";
      break;
    case "orange":
      backgroundColor = "var(--orange-6)";
      break;
    case "tomato":
      backgroundColor = "var(--tomato-6)";
      break;
    case "red":
      backgroundColor = "var(--red-6)";
      break;
    case "ruby":
      backgroundColor = "var(--ruby-6)";
      break;
    case "crimson":
      backgroundColor = "var(--crimson-6)";
      break;
    case "pink":
      backgroundColor = "var(--pink-6)";
      break;
    case "plum":
      backgroundColor = "var(--plum-6)";
      break;
    case "purple":
      backgroundColor = "var(--purple-6)";
      break;
    case "violet":
      backgroundColor = "var(--violet-6)";
      break;
    case "iris":
      backgroundColor = "var(--iris-6)";
      break;
    case "indigo":
      backgroundColor = "var(--indigo-6)";
      break;
    case "blue":
      backgroundColor = "var(--blue-6)";
      break;
    case "cyan":
      backgroundColor = "var(--cyan-6)";
      break;
    case "teal":
      backgroundColor = "var(--teal-6)";
      break;
    case "jade":
      backgroundColor = "var(--jade-6)";
      break;
    case "green":
      backgroundColor = "var(--green-6)";
      break;
    case "grass":
      backgroundColor = "var(--grass-6)";
      break;
    case "sage":
      backgroundColor = "var(--sage-6)";
      break;
    case "olive":
      backgroundColor = "var(--olive-6)";
      break;
    case "sand":
      backgroundColor = "var(--sand-6)";
      break;
    case "slate":
      backgroundColor = "var(--slate-6)";
      break;
    case "mauve":
      backgroundColor = "var(--mauve-6)";
      break;
    default:
      break;
  }
  return backgroundColor;
};

export default backgroundHandler;
