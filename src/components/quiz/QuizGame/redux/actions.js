export const CHANGE_CATEGORY = "CHANGE_CATEGORY";
export const CHANGE_DIFFICULTY = "CHANGE_DIFFICULTY";
export const CHANGE_TYPE = "CHANGE_TYPE";
export const CHANGE_AMOUNT = "CHANGE_AMOUNT";
export const CHANGE_SCORE = "CHANGE_SCORE";

export const handleCatrgoryChange = (category) => ({
  type: CHANGE_CATEGORY,
  payload: category,
});

export const handleDifficultyChange = (difficulty) => ({
  type: CHANGE_DIFFICULTY,
  payload: difficulty,
});

export const handleTypeChange = (type) => ({
  type: CHANGE_TYPE,
  payload: type,
});

export const handleAmountChange = (amount) => ({
  type: CHANGE_AMOUNT,
  payload: amount,
});

export const handleScoreChange = (score) => ({
  type: CHANGE_SCORE,
  payload: score,
});
