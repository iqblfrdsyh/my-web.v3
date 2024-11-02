function formatText(text) {
  return text
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

function trimmedValue(value) {
  const isString = typeof value === "string" ? value : String(value);
  return isString.trim() ? false : true;
}

module.exports = { formatText, trimmedValue };
