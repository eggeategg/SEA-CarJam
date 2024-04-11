/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 *
 */

/*

/*


//This bellow was my genral thought proccess in the begining before I made any changes to the code
//I mad an error by thinking that github was just a way to turn the project in and not something
//that tracks your progress throught the user's time coding.

// I think istead I'll create a text file of items then make a loop to pull from that file and insert it into an arraylist
// then sort that array list either by year the car was made or alphabeticaly or both and ill just add a drop down list
// so the user can sellect how they want it sorted probbably cars im thinking and when you click on the item you
// get redirrected to a page that displays some pictures of the car and what songs i would like listen to while driving 
// that car just for fun and some specs of course! :^B
// I think i'll also add some links in the top left for redireects back to the home screen and other such pages.

// I know the above immage URL assignment dosen't seem the most efficeint maybe I'll make a binary file of lots of photos and ill 
// read from them simultaniously and attach them to an arraylist of a class called Car which will store The name of the car, year, top speed,
// 2-3 pictures of the car and 3 songs I would listen to. I think this is a solid plan but putting it into action will be the tricky part 
// especially becuase I dont know java script as of now. 4/6/24.
*/

//some of the things above didnt get achieved because I had to learn a lot to get this done

//here I started with making the Car class I was going to use to store data


class Car {
  constructor(name, year, color, topSpeed, imageURL, music) {
    this.name = name;
    this.year = year;
    this.color = color;
    this.topSpeed = topSpeed;
    this.imageURL = imageURL;
    this.music = music;
  }
  //here are a couple of methods to gather data I made in the begining
  getName() {
    return this.name;
  }
  getImage() {
    return this.imageURL;
  }
}

//this is my array of cars that I access using a loop to gather and display all the data!
const cars = [
  new Car(
    "Mini Cooper S",
    2005,
    "Black",
    150,
    "https://bringatrailer.com/wp-content/uploads/2018/10/5be24828d169e_mini_cooper_s_15397131828495d565ef6Screen-Shot-2018-10-15-at-9.51.18-PM-2-e1541532687295.png?fit=940%2C615",
    "Boys Dont Cry - The Cure, Don't Speak - No Doubt, Cemetry Gates - The Smiths"
  ),
  new Car(
    "Toyota Celica",
    1995,
    "Black",
    120,
    "https://images.squarespace-cdn.com/content/v1/56e8421ac2ea5108b73fe126/1467991917968-LB50S2ES8JQ79KBFUQFH/8305_toyota_celica_gt-four_black.jpg",
    "4K - el Alfa, Me Vale - MANA, Lento - Julieta Venega"
  ),
  new Car(
    "Porshe GT3",
    2024,
    "Periwinkle",
    198,
    "https://vehicle-images.dealerinspire.com/dde4-11002837/WP0AC2A90RS263448/7b270d13ebd6c9bbfa64d94c6fd5936a.jpg",
    "M.I.A - Avenge Sevenfold, Walk - Foo Fighters, Slide - GooGoo Dolls"
  ),
  new Car(
    "Acura NSX",
    1995,
    "Black",
    168,
    "https://bringatrailer.com/wp-content/uploads/2019/06/1991_acura_nsx_1561612322be87250d1a0e44c7e91991-Acura-NSX-102.jpg?fit=940%2C629",
    "Lazy Dance - Yoko Oginome, Mystical Composer - Momoko Kikuchi, Stay By Me - Anri"
  ),
  new Car(
    "Nissan GTR R34",
    1995,
    "Purple",
    110,
    "https://bringatrailer.com/wp-content/uploads/2021/04/1999_nissan_skyline_gt-r_16226515140ce7401fRory-Seerden-DSC_9355-Edit.jpg?fit=940%2C626",
    "Out On Bond - Babytron, Crocs and Wock - Babytron, Babies and Fools - Freddie Gibbs"
  ),
  new Car(
    "Ford Bronco",
    1997,
    "Baby Blue",
    80,
    "https://bringatrailer.com/wp-content/uploads/2021/01/1973_ford_bronco_1612219054561cf5d07f20210109_114348.jpg",
    "White Dress - Kanye West, Sundress - A$AP Rocky, My Favorite Part - Mac Miller"
  ),
  new Car(
    "DMC12 Delorean",
    1975,
    "Stainless Steel",
    80,
    "https://static.dezeen.com/uploads/2016/02/delorean-dmc-12-car_dezeen_1568.jpg",
    "Enjoy The Silence - Depeche Mode, Sunglasses at Night - Corey Hart, Blue Moday - New Order"
  ),
  new Car(
    "Toyota Corolla",
    2024,
    "White",
    130,
    "https://o.aolcdn.com/images/dims3/GLOB/legacy_thumbnail/1062x597/format/jpg/quality/100/https://s.aolcdn.com/os/ab/_cms/2023/06/29141849/IMG_96021.jpg",
    "Freaking Out the Neighborhood - Mac Demarco, The Palisades - Childish Gambino, Blow out Radiohead"
  ),
  new Car(
    "Dodge Challenger SRT",
    2019,
    "Lime Green",
    160,
    "https://www.westcoastexoticcars.com/imagetag/365/main/l/Used-2019-Dodge-Charger-SRT-Hellcat-1610082626.jpg",
    "One Dance - Drake, Sky - PlayboiCarti, FEAR. - Kendrick Lamar"
  ),
  new Car(
    "Suzuki Cappuccino",
    1996,
    "Red",
    110,
    "https://www.hagerty.co.uk/wp-content/uploads/2022/07/cappuccino-front-three-quarters.jpg",
    "Sabor a Mi Los Panchos, una Maniana - Jose Jose, Detalles - Roberto Carlos"
  ),
  new Car(
    "BMW E30",
    1992,
    "Hot Pink",
    100,
    "https://pbs.twimg.com/media/FgquKCNWQAIPVAh.jpg",
    "Wilshire - Tyler The Creator, Pyramids - Frank Ocean, Brother - Mac Demarco"
  ),
  new Car(
    "Porsche 911 GT3RS",
    2024,
    "White and Black",
    200,
    "https://pictures.porsche.com/rtt/iris?COSY-EU-100-1711coMvsi60AAt5FwcmBEgA4qP8iBUDxPE3Cb9pNXABuN9dMGF4tl3U0%25z8rMHIspbWvanYb%255y%25oq%25vSTmjMXD4qAZeoNBPUSfUx4RmWBisGK7Zlp0KtYYF%25mVSW8uAlSIuGbmJh0iO5M3tCvNzxMYIGXoq1eHYr6FOb34VwRuT08z4x7e2HLW61UzQKcEWbsd6GPKm56tmcsuhxNwAHYx4iB7qNPUS6h",
    "Como me Encanta - Kevin Kaarl, Good News - Mac Miller, Ser - Maved "
  ),
];

//this section is my different sorting methods that show up in the drop down menu later
function _sortAZ() {
  cars.sort((a, b) => a.name.localeCompare(b.name));
  showCards();
}

// Function to sort cars by name (Z-A)
function _sortZA() {
  cars.sort((a, b) => b.name.localeCompare(a.name));
  showCards();
}

// Function to sort cars by year
function _sortByYearOld2New() {
  cars.sort((a, b) => a.year - b.year);
  showCards();
}

function _sortByYearNew2Old() {
  cars.sort((a, b) => b.year - a.year);
  showCards();
}

const titles = cars.map((car) => car.getName());

// Extracting names from cars array
titles.sort((a, b) => a.localeCompare(b));

// Your final submission should have much more data than this, and
// you should use more than just an array of strings to store it all.

// This function adds cards to the page to display the data in the array
function _showCards() {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  for (let i = 0; i < cars.length; i++) {
    const car = cars[i];

    // Extract car details
    const title = car.name;
    const imageURL = car.imageURL;
    const speed = "Top Speed: " + car.topSpeed + "MPH";
    const year = "Year: " + car.year;
    const color = "Color: " + car.color;
    const music = car.music;

    const nextCard = templateCard.cloneNode(true); // Copy the template card
    editCardContent(nextCard, title, imageURL, speed, year, color, music); // Edit title and image
    cardContainer.appendChild(nextCard); // Add new card to the container
  }
}
//this method was already here I just added some more stuff to the card
function _editCardContent(
  card,
  newTitle,
  newImageURL,
  speed,
  year,
  color,
  music
) {
  card.style.display = "block";

  const cardHeader = card.querySelector("h2");
  cardHeader.textContent = newTitle;

  const cardImage = card.querySelector("img");
  cardImage.src = newImageURL;
  cardImage.alt = newTitle + " Poster";

  //this is where I added all the info for the list
  const cardListEntry1 = card.querySelector(".top-speed");
  cardListEntry1.textContent = speed;
  const cardListEntry2 = card.querySelector(".car-year");
  cardListEntry2.textContent = year;
  const cardListEntry3 = card.querySelector(".car-color");
  cardListEntry3.textContent = color;
  const cardListEntry4 = card.querySelector(".songs");
  cardListEntry4.textContent = music;

  /*
    
    */
  // You can use console.log to help you debug!
  // View the output by right clicking on your website,
  // select "Inspect", then click on the "Console" tab

  console.log("new card:", newTitle, "- html: ", card);
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);

//I kept these just because they were already there :)
function _quoteAlert() {
  console.log("Button Clicked!");
  alert("I love all these cool cars!! thank youUUU");
}

function _removeLastCard() {
  cars.pop(); // Remove last item in titles array
  showCards(); // Call showCards again to refresh
}
