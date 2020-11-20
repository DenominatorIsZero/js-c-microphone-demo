//variables to hold the audio objects
var audioContext = new AudioContext();
var audioInput = null;
var microphone_stream = null;
var script_processor_node = null;

// buffersize of script processor node
// processing will be done everytime the buffer if filled
var BUFF_SIZE = 1024;

// get
async function get_media() {
  console.log('Audio is starting up ...');
  let stream = null;
  try {
    stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    /* use the stream */
    console.log('Audio loaded...');
    start_microphone(stream);
  } catch (err) {
    /* handle the error */
    console.log('Loading audio failed...');
  }
}

function start_microphone(stream) {
  microphone_stream = audioContext.createMediaStreamSource(stream);
  console.log(microphone_stream);

  script_processor_node = audioContext.createScriptProcessor(BUFF_SIZE, 1, 1);
  script_processor_node.onaudioprocess = process_microphone_buffer;

  microphone_stream.connect(script_processor_node);
}

get_media();
