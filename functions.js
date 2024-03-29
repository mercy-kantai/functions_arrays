//Question One
function sort(){
    let arr1 = ["cow","boy","cat"];
    let b = arr1.sort();
    return (b)
}
console.log(sort())

//Question two
var values = [2,-1,3,0,5]
    function conditions(values){
        let negative= values.filter((element)=> element < 0)
         let positive= values.filter((element)=>element>0 )
         zero = values.filter((element)=> element==0 )
         return{
            positive:positive,
            negative:negative,
            zero:zero

         }

    }

    
