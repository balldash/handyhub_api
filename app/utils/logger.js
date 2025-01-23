function logMessage(message) {
  if (!message) throw new Error("Message is required");
  console.log(message);
  return true;
}

module.exports = { logMessage };
