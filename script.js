const obj = {
  first: "jane",
  second: "doe",
  full: function () {
    return `${obj.first} ${obj.second}`
  },
  pincode: 1,
}

obj["city"] = function () {
  if(obj.pincode === 1) return "blr"
  else if (obj.pincode === 2) return "del"
  else return "mum"
}

console.log(obj);
console.log(obj.city());
