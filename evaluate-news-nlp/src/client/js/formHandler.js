function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    var formText = document.getElementById('website').value

    if(checkForwebsite(formText))
    {
        let submit = document.getElementById("submit-button")   

    console.log("::: Form Submitted :::")
    let receivingData = axios.get('http://localhost:8080/evaluate', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formText),
    })
    .then(function(res) {
        document.getElementById('results').innerHTML = receivingData.message
    })
    }
}
export { handleSubmit }
