const buttonGET = document.querySelector('#GET-button')
const buttonPUT = document.querySelector('#PUT-button')
const output = document.querySelector('#output')

buttonGET.addEventListener('click', async function () {
  try {
    const responseGET = await fetch(
      await new Promise(resolve => {
        setTimeout(() => {
          resolve('https://swapi.tech/api/people/1')
        }, 3000)
      })
    )
    const data = await responseGET.json()
    output.textContent = data.result.properties.name
  } catch (error) {
    output.textContent = '!!!ERROR!!!'
    console.log(error)
  }
})

buttonPUT.addEventListener('click', async function () {
  try {
    const responsePUT = await fetch(
      await new Promise(resolve => {
        setTimeout(() => {
          resolve('https://httpbin.org/put')
        }, 3000)
      }),
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ person: { name: 'Max', age: 28 } })
      }
    )
    const data = await responsePUT.json()
    output.textContent = data.json.person.name
  } catch (error) {
    output.textContent = '!!!ERROR!!!'
    console.log(error)
  }
})
// Create a new Promise here and use setTimeout inside the function you pass to the constructor

// <- Store this INSIDE the Promise you created!
// Resolve the following URL: https://swapi.tech/api/people/1

// Handle the Promise "responseGET" (=> the value you resolved) and return a fetch()
// call to the value (= URL) you resolved (use a GET request)

// Handle the responseGET of the fetch() call and extract the JSON data, return that
// and handle it in yet another then() block

// Finally, output the "name" property of the data you got back (e.g. data.name) inside
// the "output" element (see variables at top of the file)

// To finish the assignment, add an error to URL and add handle the error both as
// a second argument to then() as well as via the alternative taught in the module

// Repeat the exercise with a PUT request you send to https://httpbin.org/put
// Make sure to set the appropriate headers
// Send any data of your choice, make sure to access it correctly when outputting it
// Example: If you send {person: {name: 'Max', age: 28}}, you access data.json.person.name
// to output the name (assuming your parsed JSON is stored in "data")
