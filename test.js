const fs = require('fs')
function counting_function(){
     fs.readFile('input.txt', 'utf-8', (err, data) => {// Read data from input.txt file
        if (err) throw err;
        
        let text = data;
        word_count(text);
        word_map(text);
        asc_order(text);
        })
    
}
function word_count(text){
    let word_len = text.split(' ').length;
    console.log("The number of words is:")
    console.log(word_len)
    return word_len;
}
function word_map(text){
    let word_len = word_count(text);//Split wherever there is a space character
    let i, map={};
    let word_arr = text.split(' ');//Split wherever there is a space character
       
        for(i=0;i<word_len;i++){
            if(map[word_arr[i].toLowerCase()]==undefined){// First occurence
                map[word_arr[i].toLowerCase()] = 1;
            }else{//Existing word
                map[word_arr[i].toLowerCase()]++;
            }
        }
    return map;

}
function asc_order(text){
    let map = word_map(text);
    let map_sort = new Map();
        let length = Object.keys(map).length;
        console.log(map)
        console.log(Object.keys(map))
        for(i=0;i<length;i++){
            map_sort.set(Object.keys(map)[i], map[Object.keys(map)[i]])
        }
        let sorted_map = new Map([...map_sort.entries()].sort());
        console.log("The occurence of each word in sorted order is:")
        console.log(sorted_map)
        return sorted_map;
        
}
function unit_test(){
//Case 1: Word Count
  let mock_text='apple apple banana';
  // Test: Check word count
  const expectedWordCount = 3; // 'apple apple banana' has 3 words
  const actualWordCount = word_count(mock_text);
  if (actualWordCount !== expectedWordCount) {
    throw new Error(`Expected word count to be ${expectedWordCount}, but got ${actualWordCount}`);
  } else {
    console.log('Word count test passed.');
  }

    // Test: Check word count
    const expectedMap = {'apple':2, 'banana':1}; // 'apple apple banana' has 3 words
    const actualMap = word_map(mock_text);
    const keys = Object.keys(actualMap);
    const map_len = keys.length;
    let i=0;
    for(i=0; i<map_len;i++){
    if (actualMap[keys[i]] !== expectedMap[keys[i]]) {
      throw new Error(`Expected word count to be ${expectedWordCount}, but got ${actualWordCount}`);
    } else {
      console.log('Word Map test passed.' + keys[i]+","+actualMap[keys[i]]);
    }
    }

    // Test: Check word dictionary
    console.log("-----------------------------------")
    let ascend_map = asc_order(mock_text);
     i=0;
    for (let [key, value] of ascend_map) {
        if(key=='apple' && value==2 && i==0){
            console.log('Sort test passed.' + key+","+value);
            i++;
        }
        else if(key=='banana' && value==1 && i==1){
            console.log('Sort test passed.' + key+","+value);
            i++;
        }
        else{
            console.log('Sort test failed.' + key+","+value);
            i++;
        }
        }
    
  
}
unit_test();


