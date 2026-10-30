const allowedKeys = new Set(["city", "name", "email"]);

function getAllowedKeys(list) {
  return list.filter((key) => allowedKeys.has(key));
}

const keys = ["city", "name", "email", "phone", "address"];
const dataObj = getAllowedKeys(keys);

console.log(dataObj);
