let EmojiBtn = document.getElementById('EmojiBtn')
EmojiBtn.addEventListener('click',SelectEmoji)



function SelectEmoji(){
    document.getElementById('DisplayAllEmoji').style.display = 'block'
    fetch('https://emojihub.yurace.pro/api/all')
        .then(data=> data.json())
        .then(data => {
            let div = document.getElementById('DisplayAllEmoji')

            data.map(value=>{
                let span = document.createElement('span')
                span.innerHTML = `${value.htmlCode[0]}`
                div.append(span)
                span.addEventListener('click',()=>AddToTextBox(value.htmlCode[0]))
            })
        })
}

function AddToTextBox(data){
    let textArea = document.getElementById('MessageBox')
    textArea.innerHTML = `${data}`
    let emoji = textArea.innerHTML
    textArea.value = textArea.value + emoji
}

function Send(){
    let textArea = document.getElementById('MessageBox')
    let TextValue  = textArea.value
    if(TextValue =! null){
        TextValue = textArea.value
        let SendMessageDisplay = document.createElement('div')
        SendMessageDisplay.setAttribute('id','SendMessageDisplay')
        let DisplaySpace = document.getElementById('DisplaySpace')
        SendMessageDisplay.innerHTML = `${TextValue}`
        let br = document.createElement('br')
        DisplaySpace.append(SendMessageDisplay,br)
    }
    document.getElementById('DisplayAllEmoji').style.display = 'none'
    document.getElementById('MessageBox').value =''
}