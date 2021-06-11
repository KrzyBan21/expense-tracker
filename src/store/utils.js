export const copy = (oldObject, updatedProp) => {
  let obj;

  if (Array.isArray(oldObject)) {
    obj = [...oldObject, ...updatedProp];
  } else {
    obj = {
      ...oldObject,
      ...updatedProp,
    };
  }

  return obj;
};
