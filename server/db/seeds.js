use bookings;
db.dropDatabase();

db.bookings.insertMany([
  {
    name: "Sandy Rivers",
    email: "sandyr@himym.com",
    checkedIn: false
  },
  {
    name: "Ted Mosby",
    email: "teddybear@himym.com",
    checkedIn: false
  },
  {
    name: "Barney Stinson",
    email: "wingman@himym.com",
    checkedIn: false
  }
]);