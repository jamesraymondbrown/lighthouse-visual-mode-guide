const { useState } = require("react");

///  Replace this code with your version of useVisualMode



const useVisualMode = function (initialMode) {
  const [mode, setMode] = useState(initialMode);
  const [history, setHistory] = useState([initialMode]);

  const transition = function(arg, replace = false) {
    setMode(arg)
    const newHistory = [...history];
    if (replace !== false) {
      newHistory.pop();
      newHistory.push(arg)
    } else {
      newHistory.push(arg);
    }
    setHistory(newHistory);

    // Find a way to use prev here instead of "history". That will guard against stale state!!! 
    // This can maybe help - https://blog.logrocket.com/accessing-previous-props-state-react-hooks/ 
    // Andy's example: 
    // setHistory(prev => ([...prev, CREATE]))
  };

  const back = function() {
    if (history.length < 2) {
      setHistory("Cannot go back further")
      return;
    }
    setMode(history[history.length-2])
    const newHistory = [...history];
    newHistory.pop();
    setHistory(newHistory);

  };


  return { mode, transition, back, history }
};

// Exmample starting template
// const useVisualMode = function(initial) {
//   const [history, setHistory] = useState([initial]);
//   const [mode, setMode] = useState(initial);

//   const transition = function(newMode, replace) {
//   };

//   const back = function() {
//   };

//   // Don't forget this -> history is needed here
//   return { mode, transition, back, history };
// };

export default useVisualMode;