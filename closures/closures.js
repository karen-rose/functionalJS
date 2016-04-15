var nonsense = function(string) {
  var blab = function() {
    alert(string);
  };

  return blab;
};

var blabLater = nonsense('blab later');
var blabAgainLater = nonsense('blab again later');

var printName = function(firstName) {
  var printBothNames = function(lastName) {
    console.log(firstName, " ", lastName);
  };
  return printBothNames;
};

var firstNameString = printName('Karen');
firstNameString('Rose');

var storyWriter = function() {
  var story = '';

  return {
    'addWords' : function(word) {
      story += word;
      return story;
    },
    'erase' : function() {
      story = '';
    }
  };
};

var farmLoveStory = storyWriter();
farmLoveStory.addWords('There once was a lonely cow.');
farmLoveStory.addWords('It saw a friendly face.');

var storyOfMyLife = storyWriter();
storyOfMyLife.addWords('My code broke.');
storyOfMyLife.addWords('I ate some ice cream.');
storyOfMyLife.erase();

var Toaster = function() {
  //private methods and properties
  var timer = 1;
  var isToasting = false;

  return {
    //public methods and properties
    'setTimer' : function(time) {
      //time should be a value 1 to 10
      timer = time;
    },
    'getTimer' : timer,
    'startToaster' : function() {
      isToasting = true;
      return 'Is toasting: ' + isToasting;
    },
    'cancelToaster' : function() {
      isToasting = false;
      return 'Is toasting: ' + isToasting;
    }
  };
};

var toastABagel = Toaster();
toastABagel.setTimer(5);
toastABagel.startToaster();
toastABagel.cancelToaster();

// This is a function that should return an array of functions that console.log() each person's name as a string when invoked.

var checkAttendanceFunc = function(nameArr){
    var resultArr = [];

    for(var i = 0; i < nameArr.length; i++){
        resultArr[i] = (function(j) {
          return function() {
            console.log('hello world', nameArr[j]);
          };
        })(i);
    }

    return resultArr;
};

var x = checkAttendanceFunc(['Karen', 'Matt', 'Josh', 'Jane']); //[func, func, func, func]
x[2]();