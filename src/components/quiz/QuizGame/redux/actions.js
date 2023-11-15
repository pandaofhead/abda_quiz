export const CHANGE_CATEGORY = "CHANGE_CATEGORY";
export const CHANGE_DIFFICULTY = "CHANGE_DIFFICULTY";
export const CHANGE_TYPE = "CHANGE_TYPE";
export const CHANGE_AMOUNT = "CHANGE_AMOUNT";
export const CHANGE_SCORE = "CHANGE_SCORE";

export const handleCatrgoryChange = (payload) => ({
  type: CHANGE_CATEGORY,
  payload
});

export const handleDifficultyChange = (payload) => ({
  type: CHANGE_DIFFICULTY,
  payload
});

export const handleTypeChange = (payload) => ({
  type: CHANGE_TYPE,
  payload
});

export const handleAmountChange = (payload) => ({
  type: CHANGE_AMOUNT,
  payload
});

export const handleScoreChange = (payload) => ({
  type: CHANGE_SCORE,
  payload
});
