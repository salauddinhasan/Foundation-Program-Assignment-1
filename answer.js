 //Question No. 1
function describeValue(value) {
  let type = typeof value;
  let truthyOrFalsy = value ? "truthy" : "falsy";
  return type + " | " + truthyOrFalsy;
}

 
//Question No. 2
function getDayType(day) {
  let lowerDay = day.toLowerCase();
  switch (lowerDay) {
    case "friday":
    case "saturday":
      return "Weekend";
    case "sunday":
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
      return "Working Day";
    default:
      return "Invalid Day";
  }
}