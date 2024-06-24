let table = document.createElement('table');
document.body.appendChild(table);

for (let i = 1; i <= 10; i++) {
    let row = document.createElement('tr');
    
    for (let j = 1; j <= 10; j++) {
        let cell = document.createElement('td');
        let product = i * j;
        
        cell.textContent = product;
        cell.style.padding = '8px';
        cell.style.textAlign = 'center';
        cell.style.border = '1px solid black';
        
        row.appendChild(cell);
    }
    
    table.appendChild(row);
}
