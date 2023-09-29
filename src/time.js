const HOURS_IN_SECONDS = 3600;
const DAYS_IN_SECONDS = 24 * HOURS_IN_SECONDS;
const WEEKS_IN_SECONDS = 7 * DAYS_IN_SECONDS;
const YEARS_IN_SECONDS = 365 * DAYS_IN_SECONDS;
const loopText = ['y', 'w', 'd', 'h', 's'];

function time(seconds) {
  let timeLeft = seconds;
  let timeStack = [];

  if (timeLeft === 0) {
    return '0s';
  }

  for (const unitSeconds of [YEARS_IN_SECONDS, WEEKS_IN_SECONDS, DAYS_IN_SECONDS, HOURS_IN_SECONDS, 1]) {
    const unitCount = Math.trunc(timeLeft / unitSeconds);
    timeStack.push(unitCount);
    timeLeft %= unitSeconds;
  }

  let result = '';
  let previousFlag = true;

  for (let i = 0; i < loopText.length; i++) {
    if (timeStack[i] > 0 && previousFlag) {
      result += `${timeStack[i]}${loopText[i]} `;
    } else {
      previousFlag = false;
    }
  }

  return result.trim();
}

module.exports = time