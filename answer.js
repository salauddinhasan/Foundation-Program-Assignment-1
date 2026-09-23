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

//Question No. 3
 
function validateUsername(username) {
  if (username.length < 4) {
    return "Too Short";
  } else if (username.includes(" ")) {
    return "No Space Allowed";
  } else if (username.toLowerCase().includes("admin")) {
    return "Reserved Word";
  } else {
    return "Available";
  }
}

 