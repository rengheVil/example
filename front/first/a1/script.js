// Simulated database
let cars = [
    { name: 'Toyota Camry', status: 'Available' },
    { name: 'Honda Accord', status: 'Available' },
    { name: 'BMW X3', status: 'Booked' }
];

// Function for Customer Page
function viewAvailableCars() {
    const availableCarsList = document.getElementById('availableCarsList');
    availableCarsList.innerHTML = '';

    cars.forEach(car => {
        if (car.status === 'Available') {
            const li = document.createElement('li');
            li.textContent = `${car.name} - ${car.status}`;
            li.onclick = () => rentCar(car.name);
            availableCarsList.appendChild(li);
        }
    });
}

// Function for Admin Page
function addCar() {
    const carName = document.getElementById('carName').value;
    const carStatus = document.getElementById('carStatus').value;
    
    if (carName && carStatus) {
        cars.push({ name: carName, status: carStatus });
        document.getElementById('carName').value = '';
        document.getElementById('carStatus').value = '';
        alert('Car added successfully!');
        viewCars();
    } else {
        alert('Please fill in all fields');
    }
}

function viewCars() {
    const carList = document.getElementById('carList');
    carList.innerHTML = '';

    cars.forEach((car, index) => {
        const li = document.createElement('li');
        li.textContent = `${car.name} - ${car.status}`;
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => deleteCar(index);
        
        const updateButton = document.createElement('button');
        updateButton.textContent = 'Update Status';
        updateButton.onclick = () => updateCarStatus(index);
        
        li.appendChild(deleteButton);
        li.appendChild(updateButton);
        carList.appendChild(li);
    });
}

function deleteCar(index) {
    cars.splice(index, 1);
    viewCars();
}

function updateCarStatus(index) {
    const newStatus = prompt("Enter new status (Available/Booked):", cars[index].status);
    if (newStatus === 'Available' || newStatus === 'Booked') {
        cars[index].status = newStatus;
        viewCars();
    } else {
        alert('Invalid status. Please enter "Available" or "Booked".');
    }
}

function rentCar(carName) {
    const car = cars.find(c => c.name === carName);
    if (car && car.status === 'Available') {
        car.status = 'Booked';
        alert(`${carName} has been rented!`);
        viewAvailableCars();
    } else {
        alert(`${carName} is not available for rent.`);
    }
}
