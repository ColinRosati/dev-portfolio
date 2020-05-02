
export const incrementCount = (count, id) => {
  return {
    type: `COUNT${id}`,
    payload: count + 1,
  };
};
