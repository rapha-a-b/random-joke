const $textArea = document.getElementById("textArea");

async function fetchRequest() {
  let response = fetch(`https://api.api-ninjas.com/v1/dadjokes?limit=1`, {
    method: "GET",
    headers: { "X-Api-Key": `FqSSY/XJWbFaXhERY4lC9A==7LGOmVAV5yaoWRAt` },
    contentType: "application/json",
  });
  let sendData = await response;
  return sendData.json();
}
// FqSSY/XJWbFaXhERY4lC9A==7LGOmVAV5yaoWRAt

async function getJoke() {
  let jokes = await fetchRequest();
  $textArea.innerHTML = jokes[0].joke;
}
