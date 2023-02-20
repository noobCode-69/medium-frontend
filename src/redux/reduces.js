import { combineReducers } from "redux";

const elementsReducers = (elements = [{
  index : 1,
  htmlTag : "h1",
  value : ""
}], action) => {


  if (action.type == "ADD_ELEMENT") {
    const newElements = [...elements];

    const newElement = {
      index: newElements.length==0 ? 1: newElements[newElements.length-1].index+1,
      htmlTag: action.payload,
      value: "",
    };


    newElements.push(newElement);
    return newElements;
    
  } else if (action.type == "UPDATE_ELEMENT") {
    let newElements = [...elements];

    newElements = newElements.map((element) => {
      if(element.index == action.payload.elementIndex) {
        return {...element, value : action.payload.elementValue}
      }
      return element;
    })


    return newElements;
  } else if (action.type == "DELETE_ELEMENT") {
    let newElements = [...elements];
    if(newElements.length == 1){
      return newElements;
    }
    
    newElements = newElements.filter((element) => {
      if(element.index == action.payload.elementIndex){
        return false;
      }
      return true;
    })
    return newElements;
  }

  return [...elements];
};

export default combineReducers({
  elements: elementsReducers,
});
