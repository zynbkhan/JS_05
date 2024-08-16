  // QUESTION # 1:
  var rightNow = new Date();
  document.write("Current Date and Time: " + rightNow + "<br><br>");

  // QUESTION # 2:
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var currentMonth = months[new Date().getMonth()];
  document.write("Current Month: " + currentMonth + "<br><br>");

  // QUESTION # 3:
  var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  var now = new Date();
  var theDay = now.getDay();
  var nameOfToday = dayNames[theDay];
  document.write("Today is: " + nameOfToday + "<br><br>");

  // QUESTION # 4:
  var today = new Date().getDay();
  if (today === 0 || today === 6) {
      document.write("It’s Fun day<br><br>");
  } else {
      document.write("It's not Fun day<br><br>");
  }

  // QUESTION # 5:
  var today1 = new Date();
  var dayOfMonth = today1.getDate();
  if (dayOfMonth < 16) {
      document.write("First fifteen days of the month<br><br>");
  } else {
      document.write("Last days of the month<br><br>");
  }

  // QUESTION # 6:
  var currentTimeInMilliseconds = new Date().getTime();
  var minutesSince1970 = currentTimeInMilliseconds / (1000 * 60);
  document.write("Minutes since midnight, Jan 1, 1970: " + minutesSince1970.toFixed(0) + "<br><br>");

  // QUESTION # 7:
  var now1 = new Date();
  var currentHour = now1.getHours();
  if (currentHour < 12) {
      document.write("It's AM<br><br>");
  } else {
      document.write("It's PM<br><br>");
  }

  