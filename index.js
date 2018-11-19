// Write your solution in this file!
const driver = {};

// non-destructive update - using Object.assign()
function updateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign({}, driver, {
    [key]: value
  });
};

//destructive update - directly using object[key] = value assignment
function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;
  return driver;
};

//non-destructive delete - using Object.assign to copy the old Object into a new object and then delete the key 
function deleteFromDriverByKey(driver, key) {
  const newObj = Object.assign({}, driver);
  delete newObj[key];
  return newObj;
};
// destructive delete - using delete keyword directly object[key]
function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key];
  return driver;
};
