export function timeConverter(timestamp) {
  const dateTime = new Date(timestamp);

  const hours = dateTime.getHours();
  const minutes = dateTime.getMinutes();
  //   const seconds = dateTime.getSeconds();

  //   const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
  //     .toString()
  //     .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}`;
  return formattedTime;
}

export function convertName(name) {
  const parts = name.split("-"); // Split the name using hyphens
  const capitalizedParts = parts.map((part) => {
    return part.charAt(0).toUpperCase() + part.slice(1);
  });
  return capitalizedParts.join(" "); // Join the parts with spaces
}

export function greetingMessage(timeString) {
  const currentTime = new Date(`2000-01-01T${timeString}`);
  const hours = currentTime.getHours();

  if (hours >= 5 && hours < 12) {
    return "Good Morning";
  } else if (hours >= 12 && hours < 19) {
    return "Good Afternoon";
  } else {
    return "Good Night";
  }
}

export function isDaytime(timeString) {
  const currentTime = new Date(`2000-01-01T${timeString}`);
  const hours = currentTime.getHours();
  return hours >= 5 && hours < 18;
}
