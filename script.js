const freelancers = [
  { name: "Dr. Slice", price: 25, occupation: "gardener" },
  { name: "Dr. Pressure", price: 51, occupation: "programmer" },
  { name: "Prof. Possibility", price: 43, occupation: "teacher" },
  { name: "Prof. Prism", price: 81, occupation: "teacher" },
  { name: "Dr. Impulse", price: 43, occupation: "teacher" },
  { name: "Prof. Spark", price: 76, occupation: "programmer" },
  { name: "Dr. Wire", price: 47, occupation: "teacher" },
  { name: "Prof. Goose", price: 72, occupation: "driver" },
];

let totalPrice = freelancers.reduce((sum, freelancer) => sum + freelancer.price, 0);
const freelancerList = document.querySelector("#freelancer-list");
const averagePriceDisplay = document.querySelector("#average-price");

function displayFreelancers() {
  freelancerList.innerHTML = "";
  freelancers.forEach(freelancer => {
      let listItem = document.createElement("li");
      listItem.textContent = `${freelancer.name} - ${freelancer.occupation} - $${freelancer.price}`;
      freelancerList.appendChild(listItem);
  });
  updateAveragePrice();
}

function updateAveragePrice() {
  const averagePrice = (totalPrice / freelancers.length).toFixed(2);
  averagePriceDisplay.textContent = `Average Starting Price: $${averagePrice}`;
}

function addFreelancer(name, occupation, price) {
  freelancers.push({ name, occupation, price });
  totalPrice += price;
  displayFreelancers();
}

displayFreelancers();

setInterval(() => {
  const newFreelancers = [
      { name: "Carol", occupation: "programmer", price: 70 },
      { name: "Dave", occupation: "designer", price: 40 },
      { name: "Eve", occupation: "marketer", price: 45 },
      { name: "Linda", occupation: "cashier", price: 65 },
      { name: "Dom", occupation: "landscaper", price: 50 },
      { name: "Jared", occupation: "officer", price: 80 },
      { name: "Crystal", occupation: "dental assistant", price: 100 }
  ];
  const randomFreelancer = newFreelancers[Math.floor(Math.random() * newFreelancers.length)];
  addFreelancer(randomFreelancer.name, randomFreelancer.occupation, randomFreelancer.price);
}, 5000); // Every 5 seconds
  