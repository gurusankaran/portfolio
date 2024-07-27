document.getElementById('contact').addEventListener('submit',(e)=>{
    e.preventDefault()
    const name = document.getElementById('name')
    const email = document.getElementById('email')
    const subject = document.getElementById('subject')
    const message = document.getElementById('message')


    const messageData = `
        name:${name.value},
        email:${email.value},
        date:${new Date().toLocaleString()}
        subject:${subject.value},
        message:${message.value},
    `

    fetch('http://localhost:8000/api/telegram/send',{
        method:"post",
        body:JSON.stringify({
            status:'telegram',
            message:messageData
        }),
        headers: {
            'Content-Type': 'application/json',
            'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
        },
    })
    .then((response)=>{
        return response.json()
    })
    .then((response)=>{
        if(response.status==200){
            document.querySelector('form').reset()
            document.getElementById('displayMessage').hidden = false
            document.getElementById('displayMessage').innerText = "We Will Contact you Soon"
            setTimeout(() => {
                document.getElementById('displayMessage').innerHTML = ''
                document.getElementById('displayMessage').hidden = true
            }, 5000);
        }
        console.log(response);
    })

    // const botToken = '7085757090:AAEcRyJWo9tDtLMRC17YKaPB-71-aEzp2-g'; // Your bot token
    // const chatId = '5661281308';

    // fetch(`https://api.telegram.org/bot${botToken}/sendMessage`,{
    //     method:'post',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body:JSON.stringify({
    //         chat_id:chatId,
    //         text:messageData
    //     })
    // }).then((response)=>{return response.json()})
    // .then((response)=>{
    //     console.log(response);
    // })
})