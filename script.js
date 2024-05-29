let inp = document.getElementById("rope-lengths");

let pDiv = document.getElementById("result");

function calculateMinCost() {
    let str = inp.value;
    let a = str.split(",");
    
    let arr = a.map((elt)=>{
        return parseInt(elt);
    })
    
    arr.sort((a,b)=>{
        return a-b;
    })

    let sm=0;
    while(arr.length>1){
        let tmp = arr[0]+arr[1];
        sm+=tmp;
        arr.shift();arr.shift();
        arr.unshift(tmp);

        arr.sort((a,b)=>{
            return a-b;
        })
    }
    pDiv.textContent = `minimium cost of ropes ${sm}`;
}  
  

