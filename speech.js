var recognition = new webkitSpeechRecognition();
recognition.continuous = true;
recognition.interimResults = true;
var final_transcript = '';
var interim_transcript = '';
var flag = false;
var topic_event = setInterval(generateTopic, 3000);

function generateTopic() {
  if (flag == false) {
    topic_span.innerHTML += 'Give a Topic\n';
  }
  flag = false;
}
recognition.onresult = function(event) { 
  for (var i = event.resultIndex; i < event.results.length; ++i) {
    flag = true;
    console.log(event.results[i]);
    if (!event.results[i].isFinal) {
      final_transcript = '';
      interim_transcript = event.results[i][0].transcript;
    }
    else {
      interim_transcript = '';
      final_transcript += event.results[i][0].transcript;
      if (event.results[i][0].confidence < 0.75) {
        alert("Please Speak ENGLISH");
      }
    }
    final_transcript = capitalize(final_transcript);
    final_span.innerHTML = linebreak(final_transcript);
    interim_span.innerHTML = linebreak(interim_transcript);
  }
}
recognition.start();
var two_line = /\n\n/g;
var one_line = /\n/g;
function linebreak(s) {
  return s.replace(two_line, '<p></p>').replace(one_line, '<br>');
}

var first_char = /\S/;
function capitalize(s) {
  return s.replace(first_char, function(m) { return m.toUpperCase(); });
}
