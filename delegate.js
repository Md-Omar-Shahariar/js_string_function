// document.getElementById('remove-item').addEventListener('click',function(){
//     // const parent = document.getElementById('item-container')
//     // parent.removeChild(parent.lastChild)
    
//     // const parent = document.getElementById('item-container')
//     // parent.removeChild(parent.lastChild)
//     const list  = document.getElementsByClassName('list-item')
//     // this.removeChild(list.)
//     for(item of list){
//         if(item.innerText.includes(list.length)){
            
//         }
//     }
//     console.log(list.length);
    
//     console.log('buttonPressed');
// })
function removeChildLast(){
    const parent = document.getElementById('item-container')
    console.log(parent);
    //console.log(parent.removeChild(parent.lastChild)); catch whitespace along element 

    console.log(parent.removeChild(parent.lastElementChild));
    console.log('button Pressed');
    // let list = document.getElementsByClassName('item-container')
    // list.removeChild(list.childNodes[0]);

    
    // for(item of list){
    //             if(item.innerText.includes(list.length)){
    //                 list.
    //                 console.log(item);
    //             }
    //         }


    /* Another solution */
    // let list  = document.getElementsByClassName('list-item')
    // console.log(list.length);
    // list[list.length-1].remove()

}
document.getElementById('add-item').addEventListener('click',function(){
    const childNode = document.getElementsByClassName('list-item')
    const li = document.createElement('li')
    li.classList.add('list-item')
    li.innerText = `item - ${childNode.length + 1}`
    const parent = document.getElementById('item-container')
    parent.appendChild(li)   
})
