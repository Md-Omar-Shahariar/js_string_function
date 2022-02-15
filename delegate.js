document.getElementById('remove-item').addEventListener('click',function(){
    // const parent = document.getElementById('item-container')
    // parent.removeChild(parent.lastChild)
    // const childNode = document.getElementsByClassName('list-item')
    const parent = document.getElementById('item-container')
    // parent.removeChild(parent.lastChild)
    function remove(){
       document.getElementById('item-container').removeChild(parent.lastChild)
    }
    remove()
    
    console.log('buttonPressed');
})
document.getElementById('add-item').addEventListener('click',function(){
    const childNode = document.getElementsByClassName('list-item')
    const li = document.createElement('li')
    li.classList.add('list-item')
    li.innerText = `item - ${childNode.length + 1}`
    const parent = document.getElementById('item-container')
    parent.appendChild(li)   
})
