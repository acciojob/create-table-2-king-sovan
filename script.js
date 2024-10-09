function createTable() {
    //Write your code here
	let rows = prompt("Input number of rows");
	
	let table = document.getElementById("myTable");

	table.innerHTML = "";

	let cols = rows;

	for (let i = 0; i < rows; i++) {
		let tr = document.createElement("tr");

		for (let j = 0; j < cols; j++) {
			let td = document.createElement("td");

			td.textContent = `Row-${i} Column-${j}`

			tr.appendChild(td);
		}

		table.appendChild(tr);
	}
}
