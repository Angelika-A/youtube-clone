export const API_KEY = "AIzaSyC_K4bXf7iteE04N9jU7tRG8XE1XhKhXpI";

export const value_converter = (value) => {
  if (value >= 1000000) {
    return Math.floor(value / 1000000) + "M";
  } else if (value >= 1000) {
    return Math.floor(value / 1000) + "K";
  } else {
    return value;
  }
};
