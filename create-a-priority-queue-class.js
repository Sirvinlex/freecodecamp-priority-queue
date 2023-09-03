function swap(arr, i, j){
  let first = arr[i]
  arr[i] = arr[j]
  arr[j] = first
}

function PriorityQueue () {
  this.collection = [];
  this.printCollection = function() {
    console.log(this.collection);
  };
  this.enqueue = (item) =>{
    this.collection.push(item)
    for (let i = 0; i < this.collection.length; i++) {
    for (let j = 0; j < this.collection.length - 1 - i; j++) {
      
      if (this.collection[j][1] > this.collection[j + 1][1]) {
        swap(this.collection ,j, j + 1);
      } 
    }
  }
  
  }

  this.dequeue = () =>{
    return this.collection.shift()[0]
  }
  
  this.size = () =>{
    console.log(this.collection.length)
    return this.collection.length
  }
  this.front = () =>{
    console.log(this.collection[0][0])
    return this.collection[0][0]
  }
  this.isEmpty = () =>{
    if (this.collection.length === 0){
      console.log(false)
      return true
    }else{
      console.log(false)
      return false
    }
  }
  
  // Only change code above this line
}
