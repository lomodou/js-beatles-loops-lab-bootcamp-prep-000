function theBeatlesPlay(musicians, instruments) {
  
  var phrases = [];
  
  for (var i = 0; i < musicians.length; i++) {
    
    phrases.push(musicians[i] + " plays " + instruments[i])
    
  }
  return phrases
}


function johnLennonFacts(facts) {
  
  var results = [];
  var count = 0;
  
  while (count < facts.length) {
    
    results.push(facts[count] + "!!!");
  
    count++;
  }
  
  return results;
  
}