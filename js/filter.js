function filter(){
    var filter = document.getElementById('filter').value
    var srtFilter = filter.toString()
    var items = document.querySelectorAll('#product')
    
    items.forEach(i=>{
        let filterAtribute = i.getAttribute('dataFilter')
        if(filterAtribute.includes(filter)){

            i.style.display = 'block'
        } else{
            i.style.display = 'none'
        }


    
    })

}
