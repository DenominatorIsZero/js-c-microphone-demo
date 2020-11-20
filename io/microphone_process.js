// Variables and constants used in the signal processing
const alpha = 0.95;
var running_mean = 1.0;

// invoked every 1024 samples
function process_microphone_buffer(event) {
  // variable to hold the 1024 samples
  var microphone_output_buffer;
  microphone_output_buffer = event.inputBuffer.getChannelData(0);
  // get highest value in buffer ("..." unpacks array into list)
  var max_in_buffer = Math.max(...microphone_output_buffer);
  // only process the data if the wasm function(s) are compiled and loaded
  if (wasm_loaded) {
    running_mean = c_exp_running_mean(running_mean, max_in_buffer, alpha);
  }
}
