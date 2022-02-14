let count = 0;

document.getElementById('btn-add').addEventListener('click', function(){
    count = count + 1;

    const inputValueField = document.getElementById('input-value');
    const inputValue = inputValueField.value;
    if (inputValue == "") {
       alert('Enter a valid value.')
    } else {
      const mainContainer = document.getElementById('main-container');
      const tableContent = document.createElement('tr');
      
      tableContent.innerHTML = `<th scope="row">${count}</th>
      <td>${inputValue}</td>
      <td>Button</td>`;
      mainContainer.appendChild(tableContent);

        inputValueField.value = '';
    }
})