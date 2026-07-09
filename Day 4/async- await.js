/*async / await
Used for API calls. 
Similarly, API calls and database operations take time.
JavaScript doesn't want to stop the whole program while waiting.
So it uses Asynchronous Programming.*/

async function showData() {

  const result = await getData();

  console.log(result);

}

showData();