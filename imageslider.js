const image_array = ['img-1.jpg','img-2.jpg','img-3.jpg','img-4.jpg','img-5.jpg']
let array_length = image_array.length
let i = 0
let set = setInterval(slider,5000)

function slider(){
    i++
    i=i%array_length
    document.getElementById('image').src=`images/${image_array[i]}`
}
function next(){
    i++
    i = i% array_length
    document.getElementById('image').src=`images/${image_array[i]}`
}
function prev(){
    i--
    if(i<0){
        i=array_length-1 
    }
    document.getElementById('image').src=`images/${image_array[i]}`
}
function stops(){
    clearInterval(set)
}
function starts(){
    set = setInterval(slider,5000)
}