function anagram(word, list) {
  // return filtered list
  return list.filter(function(candidate) {
    return areAnagrams(word, candidate);
  });
}

function areAnagrams(word, candidate) {
  // console.log(word.split('').sort());
  // console.log(candidate.split('').sort());

  return word.split('').sort().join() === candidate.split('').sort().join();
}

console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana'])); // [ "inlets" ]
console.log(anagram('listen', ['enlist', 'google', 'inlets', 'banana']));  // [ "enlist", "inlets" ]
