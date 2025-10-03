let fullList=[]
for(i in model.data.activities){
    fullList.push(model.data.activities[i])
}
fullList.push(model.data.profileInfo)
showSearchPage(fullList)

function resetList(){
    fullList = []
    for(i in model.data.activities){
        fullList.push(model.data.activities[i])
    }
    fullList.push(model.data.profileInfo)
    showSearchPage(fullList)
}
function filter(){
    let input = document.getElementById("input")
    if(input.value==""){
        for(i in model.data.activities){
            fullList.push(model.data.activities[i])
        }
        fullList.push(model.data.profileInfo)
    }
    else{
        for(let i=0;i<fullList.length;i++){
            let n = fullList[i].name
            n = n.toLowerCase()
            if(!n.includes(input.value)){
                fullList.splice(i,1)
                i--
            }
        }
    }
    showSearchPage(fullList)
}

function colorChange(t){
    t.style.backgroundColor = "lightblue"
}