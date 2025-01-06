const userInput = document.querySelector("#year");
const result = document.querySelector(".result");
userInput.max = new Date().toISOString().split("T")[0];

function calculator() {
	if (userInput.value == "") {
		alert("Select the Date-Month-Year");
	} else {
		let birthDate = new Date(userInput.value);

		let d1 = birthDate.getDate();
		let m1 = birthDate.getMonth() + 1;
		let y1 = birthDate.getFullYear();

		let today = new Date();

		let d2 = today.getDate();
		let m2 = today.getMonth() + 1;
		let y2 = today.getFullYear();

		let day, month, year;

		year = y2 - y1;

		if (m2 >= m1) {
			month = m2 - m1;
		} else {
			year--;
			month = 12 + m2 - m1;
		}

		if (d2 >= d1) {
			d3 = d2 - d1;
		} else {
			month--;
			day = getDaysInMonths(y1, y2) + d2 - d1;
		}

		if (month < 0) {
			month = 11;
			year--;
		}

		if (day === "undefined") {
			day = 0;
		}

		function getDaysInMonths(years, months) {
			return new Date(years, months, 0).getDate();
		}

		let age = ` You are <span>${year}</span> Years <span>${month}</span> Months <span>${day}</span> Days`;
		result.innerHTML = age;
	}
	userInput.value = "";
}
