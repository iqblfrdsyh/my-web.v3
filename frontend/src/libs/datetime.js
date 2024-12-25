export const RealTimeClock = (() => {
  const formatTime = (value) => {
    return value.toString().padStart(2, "0");
  };

  const getCurrentDateTime = () => {
    const now = new Date();
    const day = formatTime(now.getDate());
    const month = formatTime(now.getMonth() + 1);
    const year = now.getFullYear();
    const hours = formatTime(now.getHours());
    const minutes = formatTime(now.getMinutes());
    const seconds = formatTime(now.getSeconds());

    return `${day}/${month}/${year} | ${hours}:${minutes}:${seconds}`;
  };

  const startClock = (callback) => {
    if (typeof callback !== "function") {
      throw new Error("Callback must be a function.");
    }

    setInterval(() => {
      const currentDateTime = getCurrentDateTime();
      callback(currentDateTime);
    }, 1000);
  };

  return {
    startClock,
    getCurrentDateTime,
  };
})();
