var meter = null;
var WIDTH = 700;
var recordingStarted = false;
​
// // initialize SpeechRecognition object
let recognition = new webkitSpeechRecognition();
recognition.maxAlternatives = 1;
recognition.continuous = true;
​
// // Detect the said words
recognition.onresult = e => {
  var current = event.resultIndex;
​
//   // Get a transcript of what was said.
  var transcript = event.results[current][0].transcript;
​
//   // Add the current transcript with existing said values
  var noteContent = $('#saidwords').val();
  noteContent += ' ' + transcript;
  $('#saidwords').val(noteContent);
};
​
// Stop recording
function stopSpeech() {
  // Change status
  $('#status').text('Recording Stopped.');
  recordingStarted = false;
​
  // Stop recognition
  recognition.stop();
}
​
// Start recording
function startSpeech() {
  try {
    // calling it twice will throw..
    $('#status').text('Recording Started.');
    $('#saidwords').val('');
    recordingStarted = true;
​
    // Start recognition
    recognition.start();
  } catch (e) {}
}
​
navigator.getUserMedia({ audio: true }, startUserMedia, function(e) {
  __log('No live audio input: ' + e);
});
​
function startUserMedia(stream) {
  const ctx = new AudioContext();
  const analyser = ctx.createAnalyser();
  const streamNode = ctx.createMediaStreamSource(stream);
  streamNode.connect(analyser);
​
  // Create a new volume meter and connect it.
  meter = createAudioMeter(ctx);
  streamNode.connect(meter);
​
  drawLoop();
}
​
// Create pitch bar
function drawLoop(time) {
  var pitchVolume = meter.volume * WIDTH * 1.4;
​
  var width = 0;
​
  // Pitch detection minimum volume
  var minimum_volume = 150;
​
  // Get width if Recording started
  if (recordingStarted) {
    if (pitchVolume < minimum_volume) {
      width = 0;
    } else if (
      pitchVolume >= minimum_volume &&
      pitchVolume < minimum_volume + 20
    ) {
      width = 10;
    } else if (
      pitchVolume >= minimum_volume + 20 &&
      pitchVolume < minimum_volume + 40
    ) {
      width = 20;
    } else if (
      pitchVolume >= minimum_volume + 40 &&
      pitchVolume < minimum_volume + 60
    ) {
      width = 30;
    } else if (
      pitchVolume >= minimum_volume + 60 &&
      pitchVolume < minimum_volume + 80
    ) {
      width = 40;
    } else if (
      pitchVolume >= minimum_volume + 80 &&
      pitchVolume < minimum_volume + 100
    ) {
      width = 50;
    } else if (
      pitchVolume >= minimum_volume + 100 &&
      pitchVolume < minimum_volume + 120
    ) {
      width = 60;
    } else if (
      pitchVolume >= minimum_volume + 120 &&
      pitchVolume < minimum_volume + 140
    ) {
      width = 70;
    } else if (
      pitchVolume >= minimum_volume + 140 &&
      pitchVolume < minimum_volume + 160
    ) {
      width = 80;
    } else if (
      pitchVolume >= minimum_volume + 160 &&
      pitchVolume < minimum_volume + 200
    ) {
      width = 90;
    } else if (pitchVolume >= minimum_volume + 500) {
      width = 100;
    }
  }
​
  // Update width
  document.getElementById('voiceVolume').style.width = width + '%';
​
  rafID = window.requestAnimationFrame(drawLoop);
}