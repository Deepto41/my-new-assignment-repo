function changeBg(){
    document.body.style.backgroundColor ='purple'
}

// activity//
// document.getElementById('activity-btn').style.display = 'none'

// document.getElementById('btn-1').addEventListener('click', function(event){
//     event.preventDefault()
// }
  
// )

// activity//
document.getElementById('activity-1').style.display = 'none'
document.getElementById('activity-2').style.display = 'none'
document.getElementById('activity-3').style.display = 'none'
document.getElementById('activity-4').style.display = 'none'
document.getElementById('activity-5').style.display = 'none'
document.getElementById('activity-6').style.display = 'none'

// activity-1//
document.getElementById('btn-1').addEventListener('click', function(event){
    event.preventDefault();
 document.getElementById('activity-1').style.display = 'block';

}
)

// activity-2//
document.getElementById('btn-2').addEventListener('click', function(event){
    event.preventDefault()
    document.getElementById('activity-2').style.display = 'block';}
)


// activity-3//
document.getElementById('btn-3').addEventListener('click', function(event){
    event.preventDefault()
    document.getElementById('activity-3').style.display = 'block';}
)

// activity-4//
document.getElementById('btn-4').addEventListener('click', function(event){
    event.preventDefault()
    document.getElementById('activity-4').style.display = 'block';}
)

// activity-5//

document.getElementById('btn-5').addEventListener('click', function(event){
    event.preventDefault()
    document.getElementById('activity-5').style.display = 'block';}
)

// activity-6//
document.getElementById('btn-6').addEventListener('click', function(event){
    event.preventDefault()
    document.getElementById('activity-6').style.display = 'block';}
)

// clear history btn//
document.getElementById('clear-btn').addEventListener('click', function(){
document.getElementById('activity-1').style.display = 'none'
document.getElementById('activity-2').style.display = 'none'
document.getElementById('activity-3').style.display = 'none'
document.getElementById('activity-4').style.display = 'none'
document.getElementById('activity-5').style.display = 'none'
document.getElementById('activity-6').style.display = 'none'
 
}
)