
const freelancers = [
  { name: "Alice", occupation: "Writer", startingPrice: 30 },
  { name: "Bob", occupation: "Teacher", startingPrice: 50 },
];

const freelancerList = document.querySelectorAll("freelancer-list");
const averagePriceElement = document.querySelectorAll("average-price");

function renderFreelancers() {
  freelancerList.innerHTML = '';

  freelancers.forEach(freelancer => {
    const li = document.querySelectorAll('li');
    li.innerHTML = `
      <span><strong>${freelancer.name}</strong> - ${freelancer.occupation}</span>
      <span>$${freelancer.startingPrice}</span>
    `;
    freelancerList.appendChild(li);
  });

  const averagePrice = calculateAveragePrice();
  averagePriceElement.textContent = `Average starting price: $${averagePrice}`;
}

const calculateAveragePrice = () => {
  const total = freelancers.reduce((sum, freelancer) => sum + freelancer.startingPrice, 0);
  return (total / freelancers.length).toFixed(2); 

const addFreelancer = (name, occupation, startingPrice)=> {
  freelancers.push({ name, occupation, startingPrice });
  renderFreelancers();
}
}

renderFreelancers();

setTimeout(() => addFreelancer("Carol", "Programmer", 70), 3000);
setTimeout(() => addFreelancer("Dave", "Designer", 40), 6000);
setTimeout(() => addFreelancer("Eve", "Photographer", 55), 9000);
