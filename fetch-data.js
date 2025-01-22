async function fetchUserData (){

    const apiUrl='https://jsonplaceholder.typicode.com/users';

    const dataContainer= document.getElementById('api-data');

    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const users = await response.json();
        displayUserData(users, dataContainer);

    } catch(error){
        dataContainer.innerHTML = '';
        dataContainer.textContent = "Failed to load user Data:" + error.message;
    }   
}
   function displayUserData(users, dataContainer) {
    dataContainer.innerHTML = '';
    //create a <ul> element
    const userList = document.createElement('ul');

    // loop through the user arrays and create list items
    users.forEach(user => {
        const listItem = document.createElement('li');
        listItem.textContent = user.name;
        userList.appendChild(listItem);
    });

    //append the userlist to datacontainer
    dataContainer.appendChild(userList);

   }
 // invoke fetchUserData when DOM content is fully loaded
    document.addEventListener('DOMContentLoaded',() => {
        fetchUserData();

    });
