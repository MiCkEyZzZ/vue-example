export const makeShortText = (txt: string): string => {
  let shortText = txt;
  if (txt.length > process.env.MAX_LENGTH_TEXT) {
    shortText = txt.slice(0, process.env.MAX_LENGTH_TEXT);
  }
  return shortText;
};
