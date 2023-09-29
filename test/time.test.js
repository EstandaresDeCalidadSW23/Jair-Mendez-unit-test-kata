const time = require("../src/time");
const HOURS_IN_SECONDS = 3600;
const DAYS_IN_SECONDS = 24 * HOURS_IN_SECONDS;
const WEEKS_IN_SECONDS = 7 * DAYS_IN_SECONDS;
const YEARS_IN_SECONDS = 365 * DAYS_IN_SECONDS;

test("should return '0s' for 0 seconds", function () {
    // setup
    const seconds = 0;

    // execute
    const result = time(seconds);

    // expectation
    expect(result).toEqual("0s");
});


test("should return '2y' for 2 * YEARS_IN_SECONDS + 5 * DAYS_IN_SECONDS + 3 * HOURS_IN_SECONDS", function () {
    // setup
    const seconds = 2 * YEARS_IN_SECONDS + 5 * DAYS_IN_SECONDS + 3 * HOURS_IN_SECONDS;

    // execute
    const result = time(seconds);

    // expectation
    expect(result).toEqual("2y ");
});

test("should return '3y 1w 3d' for 3 * YEARS_IN_SECONDS + WEEKS_IN_SECONDS + 3 * DAYS_IN_SECONDS + 59", function () {
    // setup
    const seconds = 3 * YEARS_IN_SECONDS + WEEKS_IN_SECONDS + 3 * DAYS_IN_SECONDS + 59;

    // execute
    const result = time(seconds);

    // expectation
    expect(result).toEqual("3y 1w 3d ");
});// test/time.test.js

// other tests...

test("should return '1h' for 1 hour and 9 seconds", function () {
  // setup
  const seconds = 3609;

  // execute
  const result = time(seconds);

  // expectation
  expect(result).toEqual("1h");
});

test("should return '2y 3w' for 751 days and 360 minutes", function () {
  // setup
  const seconds = 751 * DAYS_IN_SECONDS + 360 * 60;

  // execute
  const result = time(seconds);

  // expectation
  expect(result).toEqual("2y 3w");
});

test("should return '1w 2d' for 9 days, 35 seconds", function () {
  // setup
  const seconds = 9 * DAYS_IN_SECONDS + 35;

  // execute
  const result = time(seconds);

  // expectation
  expect(result).toEqual("1w 2d");
});