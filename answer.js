 //Question No. 1
function describeValue(value) {
  let type = typeof value;
  let truthyOrFalsy = value ? "truthy" : "falsy";
  return type + " | " + truthyOrFalsy;
}