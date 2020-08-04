var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
(function(){for (var name in names) {
  var first = names[name][0].toLowerCase();
  if (first == 'a' || first == 'j') {
    byeSpeaker.speak(names[name]);
  } else {
    helloSpeaker.speak(names[name]);
  }
}
})();
