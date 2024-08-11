function StringChallenge(sen) { 

    // code goes here  
    var max=0;
    var maxValue="";
    sen=sen.replace(/[^\w\s]|_/g," ")
    const arr=sen.split(' ');
    for(var i=0;i<arr.length;i++){
      if(arr[i].length>max){
        max=arr[i].length;
        maxValue=arr[i];
      }else if(arr[i].length==max){
  
      }
    }
    if(maxValue!=""){
      maxValue=maxValue.replace(/[ie]/gi,"");
    }
  
    return maxValue ? maxValue:"EMPTY"; 
  
  }
     
  // keep this function call here 
  console.log(StringChallenge(readline()));




  function StringChallenge(str) { 

    let output = '';
    let counter=1;
  
    for(var i=0;i<str.length;i++){
      if(i<str.length-1 && str[i]===str[i+1]){
        counter++;
      }else{
        output += counter+str[i];
        counter=1;
      }
    }
    str=output.replace(/[ae]/gi,"");
    // code goes here  
    return str; 
  
  }
     
  // keep this function call here 
  console.log(StringChallenge(readline()));