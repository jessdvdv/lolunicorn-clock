var wakeupTime = 6;

var noon = 12;

var lunchTime = 12;

var napTime = lunchTime + 2;

var evening = 18;

var partyTime = 21;





//Getting it to show the current time on the page

var showCurrentTime = function()

{

  //Display the string on the webpage

  var clock = document.getElementById("clock");



  var currentTime = new Date();



  var hours = currentTime.getHours();

  var minutes = currentTime.getMinutes();

  var seconds = currentTime.getSeconds();

  var meridian = "am";



  // Set hours

     if (hours >= noon)

    {

      meridian = "pm";

    }

     if (hours > noon)

    {

      hours = hours - 12;

    }



  // Set Minutes

     if (minutes < 10)

    {

      minutes = "0" + minutes;

    }



  // Set Seconds

     if (seconds < 10)

    {

      seconds = "0" + seconds;

    }



  // put together the string that displays the time

  var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";



  clock.innerText = clockTime;

};





//Getting the clock to increment on its own and change out messages and pictures

var updateClock = function()

{

  var time = new Date().getHours();

  var messageText;

  var image = "https://s-media-cache-ak0.pinimg.com/736x/3b/06/ef/3b06efe25fed62de2960090ff2b8d83a--cute-cartoon-drawings-drawings-of.jpg";



  var message = document.getElementById("timeEvent");

  var lolcat = document.getElementById("lolcat");



  if (time == partyTime)

  {

    messageText = "Get down tonight!!";

    image = "https://ih1.redbubble.net/image.356819643.0110/flat,800x800,070,f.u2.jpg";

  }

  else if (time == napTime)

  {

    messageText = "Zzzzzz...";

    image = "https://s-media-cache-ak0.pinimg.com/originals/43/61/e4/4361e4a18a03c266c5cea94920436eed.png";

  }

  else if (time == lunchTime)

  {

    messageText = "Nom, nom, nom!!";

    image = "https://static1.squarespace.com/static/553b26fde4b08ceb08a4242c/553b2830e4b0eb3719c7c16e/553b283ee4b0eb3719c7e0da/1429949007865/9596060188_dec9eb93ee_b.jpg";

  }

  else if (time == wakeupTime)

  {

    messageText = "Coffee time!!";

    image = "https://image.spreadshirtmedia.net/image-server/v1/compositions/P158045258T812A1PC514841426PA1667PT1X22Y105S41/views/1,width=300,height=300,appearanceId=1,backgroundColor=E8E8E8,version=1498568624/unicorn-needs-coffee-sports-wear-mens-premium-t-shirt.jpg";

  }

  else if (time < noon)

  {

    messageText = "Good morning, beautiful!";

  }

  else if (time > evening) {

    messageText = "Good evening, darling!";

  }

  else {

    messageText = "Good afternoon, my dear!";

  }



  console.log(messageText);

  message.innerText = messageText;

  lolcat.src = image;



  showCurrentTime();

};

updateClock();





//Getting the clock to increment once a second

var oneSecond = 1000;

setInterval( updateClock, oneSecond);





//Getting the Party Time button to work

var partyTimeButton = document.getElementById("partyTimeButton");



var isPartyTime = false;

var partyEvent = function()

{

  if (isPartyTime == false)

   {

     isPartyTime = true;

     time = partyTime;

     partyTimeButton.innerText = "Party Time!";

     partyTimeButton.style.backgroundColor = "#ff00ff";

   }

  else

  {

    isPartyTime = false;

    time = new Date().getHours();

    partyTimeButton.innerText = "Party over :(";

    partyTimeButton.style.backgroundColor = "#0A8DAB";

   }

};



partyTimeButton.addEventListener("click", partyEvent);

partyEvent();





//Activities wake-up selector

var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");



var wakeUpEvent = function()

{

  wakeupTime = wakeUpTimeSelector.value;

};



wakeUpTimeSelector.addEventListener("change", wakeUpEvent);

wakeUpEvent();





//Activities lunch selector

var lunchTimeSelector = document.getElementById("lunchTimeSelector");

var lunchTimeEvent = function()

{

  lunchTime = lunchTimeSelector.value;

};



lunchTimeSelector.addEventListener("change", lunchTimeEvent);

lunchTimeEvent();





//Activities nap selector

var napTimeSelector = document.getElementById("napTimeSelector");

var napTimeEvent = function()

{

  napTime = napTimeSelector.value;

};



napTimeSelector.addEventListener("change", napTimeEvent);

napTimeEvent();
