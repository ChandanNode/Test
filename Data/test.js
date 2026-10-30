let dataObj = [];

for (let i = 0; i < keys.length; i++) {
  let value = keys[i];

  if (["city", "name", "email"].includes(value)) {
    dataObj.push(value);
  }
}
