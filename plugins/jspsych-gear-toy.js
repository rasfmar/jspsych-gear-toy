jsPsych.plugins["gear-toy"] = (function() {

  var plugin = {};

  plugin.info = {
    name: "gear-toy",
    parameters: {
      parameter_name: {
        type: jsPsych.plugins.parameterType.INT, // BOOL, STRING, INT, FLOAT, FUNCTION, KEYCODE, SELECT, HTML_STRING, IMAGE, AUDIO, VIDEO, OBJECT, COMPLEX
        default: undefined
      },
      parameter_name: {
        type: jsPsych.plugins.parameterType.IMAGE,
        default: undefined
      }
    }
  }

  plugin.trial = function(display_element, trial) {
    var trial_data = {
      parameter_name: 'parameter value'
    };

    jsPsych.finishTrial(trial_data);
  };

  return plugin;
})();
