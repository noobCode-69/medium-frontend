export const addElement = (elementType) => {
  return {
    type: "ADD_ELEMENT",
    payload: elementType,
  };
};

export const updateElement = (elementIndex, elementValue) => {
  return {
    type: "UPDATE_ELEMENT",
    payload: {
      elementIndex,
      elementValue,
    },
  };
};

export const deleteElement = (elementIndex) => {
  return {
    type: "DELETE_ELEMENT",
    payload: {elementIndex},
  };
};
