var wasm_loaded = false;
Module['onRuntimeInitialized'] = function () {
  c_exp_running_mean = Module.cwrap('exp_running_mean', 'number', [
    'number',
    'number',
    'number',
  ]);
  console.log('wasm loaded ');
  wasm_loaded = true;
};
