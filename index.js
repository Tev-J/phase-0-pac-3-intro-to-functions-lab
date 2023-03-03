function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  console.log(`${shout(string)}`);
}

function logWhisper(string) {
  console.log(`${whisper(string)}`);
}

function sayHiToHeadphonedRoommate(string) {
  let message;

  if (string === string.toLowerCase()) {
    message = "I can't hear you!";
  } else if (string === string.toUpperCase()) {
    message = "YES INDEED!";
  } else if (string === "Let's have dinner together!") {
    message = "I would love to!";
  }

  return message;
}
