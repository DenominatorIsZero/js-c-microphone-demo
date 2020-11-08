c_exp_running_mean = null;
setTimeout(loadWasm, 3000)
var audioContext = new AudioContext();
let volume = 1.0;
const alpha = 0.95;

console.log("audio is starting up ...");

var BUFF_SIZE = 1024;

var audioInput = null,
    microphone_stream = null,
    script_processor_node = null

navigator.getUserMedia({audio:true}, 
		       function(stream) {
			   start_microphone(stream);
		       },
		       function(e) {
			   alert('Error capturing audio.');
		       }
		      );

function process_microphone_buffer(event) { // invoked by event loop
    var i, N, inp, microphone_output_buffer;
    microphone_output_buffer = event.inputBuffer.getChannelData(0); // just mono - 1 channel for now
    var newValue = Math.max(...microphone_output_buffer)
    if(c_exp_running_mean != null){
        volume = c_exp_running_mean(volume, newValue, alpha);
    }
    }

function start_microphone(stream){
    microphone_stream = audioContext.createMediaStreamSource(stream);
    console.log(microphone_stream);

    script_processor_node = audioContext.createScriptProcessor(BUFF_SIZE, 1, 1);
    script_processor_node.onaudioprocess = process_microphone_buffer;

    microphone_stream.connect(script_processor_node);
}

function loadWasm(){
    c_exp_running_mean = Module.cwrap('exp_running_mean', 'number', ['number', 'number', 'number']);
}

function setup(){
    createCanvas(200,200); 
}

function draw(){
    background(0);
    ellipse(100, 100, 500*volume, 500*volume);
}
