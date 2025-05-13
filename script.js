document.addEventListener('DOMContentLoaded', function() {
  // Function to get the value of a cookie by name
  function getCookie(name) {
    let cookieArray = document.cookie.split('; ');
    let cookie = cookieArray.find((row) => row.startsWith(name + '='));
    return cookie ? cookie.split('=')[1] : null;
  }

  // Function to set a cookie
  function setCookie(name, value, daysToExpire) {
    let date = new Date();
    date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000);
    document.cookie =
      name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';
  }

  // 1. Get the value of the 'count' cookie
  let count = parseInt(getCookie('count'));

  // 2. If the cookie exists, increment the value and update the cookie
  // 3. If the cookie does not exist, create it and set the value to 1
  if (isNaN(count)) {
    count = 1;
  } else {
    count++;
  }
  setCookie('count', count, 365);

  // 4. Display the count on the webpage
  // You need an element like <span id="counter"></span> in HTML to show the count
  let counterElement = document.getElementById('counter');
  if (counterElement) {
    counterElement.textContent = count;
  }
});
