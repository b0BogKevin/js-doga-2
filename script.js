//1
function removeFirstAndLast(str) {
    var arr = str.split(",")
    arr = arr.slice(1,arr.length-1)
    return arr.join(' ')
}

console.log(removeFirstAndLast("1,2,3,4,5"))

//2
function isEveryItemArray(arr){
    for (var item of arr) {
        if (Array.isArray(item))
        {
            continue
        }
        return false
    }
    return true
}

console.log(isEveryItemArray([[1],[2]]))
console.log(isEveryItemArray([[1],2]))


//3
function AllOrnothing(key, ans) {
    let correct =0
    let blanc = 0
    for (let i = 0; i < key.length; i++) {
        if (key[i] =="_") {
            blanc+=1
            correct+=1
            continue
        }
        if (key[i]==ans[i]) {
            correct+=1
            continue
        }
    }

    return correct==key.length||correct==blanc
}

console.log(AllOrnothing(["B", "A", "_", "_"], ["B", "A", "C", "C"]))
console.log(AllOrnothing(["A", "B", "A", "_"], ["B", "A", "C", "C"]))
console.log(AllOrnothing(["A", "B", "C", "_"], ["B", "A", "C", "C"]))
