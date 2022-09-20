/*************** 
 * S-Clas Test *
 ***************/


// store info about the experiment session:
let expName = 'S-CLAS';  // from the Builder filename that created this script
let expInfo = {'ID': '', 'Audio': ['Yes', 'No'], 'Debug': ['Yes', 'No']};

// Start code blocks for 'Before Experiment'

function make_sound(name, filepath) {
    return new sound.Sound({"win": psychoJS.window, "value": filepath, "secs": (- 1), "stereo": true, "hamming": true, "name": name});
}

function make_img(name, file_name, pos, size, opacity) {
    return new visual.ImageStim({"win": psychoJS.window, "name": name, "image": file_name, "pos": pos, "size": size, "opacity": opacity});
}

function make_slide(num, pos = [0, 0], size = SLIDE_SIZE) {
    return make_img(`slide-${num}`, `${SLIDES_DIR}/slide-${num}.png`, pos, size, 1);
}

function make_rect(name, pos, size, opacity, fillColor = null, lineColor = "red", lineWidth = 3) {
    return new visual.Rect({"win": psychoJS.window, "name": name, "width": size[0], "height": size[1], "pos": pos, "lineWidth": lineWidth, "lineColor": new util.Color(lineColor), "fillColor": fillColor, "opacity": opacity});
}

var cimgs;
function make_boxes(names, xys, sizes, opacity = CLICK_BOX_OPACITY) {
    var cimgs;
    cimgs = [];
    for (var i, _pj_c = 0, _pj_a = util.range(names.length), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        i = _pj_a[_pj_c];
        cimgs.push(make_rect(names[i], xys[i], sizes[i], opacity));
    }
    return cimgs;
}

var lineColor;
var fillColor;
function make_circle(name, pos, size, fillColor = "black", lineColor = "black", lineWidth = 3, opacity = 1) {
    if ((lineColor !== null)) {
        lineColor = new util.Color(lineColor);
    }
    if ((fillColor !== null)) {
        fillColor = new util.Color(fillColor);
    }
    return new visual.Polygon({"win": psychoJS.window, "name": name, "edges": 360, "size": size, "pos": pos, "lineWidth": lineWidth, "lineColor": lineColor, "fillColor": fillColor, "opacity": opacity});
}

function make_radio0(name, pos) {
    return make_circle(name, pos, [0.03, 0.03], null, "black");
}

function make_radio1(name, pos) {
    return make_circle(name, pos, [0.023, 0.023], "black", null, 0);
}

var min_y;
function find_min_y(cimgs) {
    var min_y, y;
    min_y = 0.5;
    for (var cimg, _pj_c = 0, _pj_a = cimgs, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        cimg = _pj_a[_pj_c];
        y = (cimg.pos[1] - (cimg.height / 2));
        if ((min_y > y)) {
            min_y = y;
        }
    }
    return min_y;
}

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([1, 1, 1]),
  units: 'height',
  waitBlanking: true
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(beginRoutineBegin());
flowScheduler.add(beginRoutineEachFrame());
flowScheduler.add(beginRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'resources/aud/S-CLAS Q09b.m4a', 'path': 'resources/aud/S-CLAS Q09b.m4a'},
    {'name': 'resources/imgs/slides/slide-14.png', 'path': 'resources/imgs/slides/slide-14.png'},
    {'name': 'resources/imgs/slides/slide-15.png', 'path': 'resources/imgs/slides/slide-15.png'},
    {'name': 'resources/aud/S-CLAS Intro.m4a', 'path': 'resources/aud/S-CLAS Intro.m4a'},
    {'name': 'resources/aud/S-CLAS Q03.m4a', 'path': 'resources/aud/S-CLAS Q03.m4a'},
    {'name': 'resources/imgs/slides/slide-02.png', 'path': 'resources/imgs/slides/slide-02.png'},
    {'name': 'resources/aud/Replay instructions.m4a', 'path': 'resources/aud/Replay instructions.m4a'},
    {'name': 'resources/aud/S-CLAS Q01.m4a', 'path': 'resources/aud/S-CLAS Q01.m4a'},
    {'name': 'resources/aud/S-CLAS Q10.m4a', 'path': 'resources/aud/S-CLAS Q10.m4a'},
    {'name': 'resources/seqs/conditions.csv', 'path': 'resources/seqs/conditions.csv'},
    {'name': 'resources/imgs/slides/slide-12.png', 'path': 'resources/imgs/slides/slide-12.png'},
    {'name': 'resources/aud/S-CLAS Q08.m4a', 'path': 'resources/aud/S-CLAS Q08.m4a'},
    {'name': 'resources/imgs/slides/slide-16.png', 'path': 'resources/imgs/slides/slide-16.png'},
    {'name': 'resources/imgs/slides/slide-07.png', 'path': 'resources/imgs/slides/slide-07.png'},
    {'name': 'resources/aud/S-CLAS Q11.m4a', 'path': 'resources/aud/S-CLAS Q11.m4a'},
    {'name': 'resources/imgs/slides/slide-13.png', 'path': 'resources/imgs/slides/slide-13.png'},
    {'name': 'resources/aud/S-CLAS Q07.m4a', 'path': 'resources/aud/S-CLAS Q07.m4a'},
    {'name': 'resources/imgs/slides/slide-09.png', 'path': 'resources/imgs/slides/slide-09.png'},
    {'name': 'resources/imgs/slides/slide-17.png', 'path': 'resources/imgs/slides/slide-17.png'},
    {'name': 'resources/imgs/slides/slide-05.png', 'path': 'resources/imgs/slides/slide-05.png'},
    {'name': 'resources/imgs/slides/slide-11.png', 'path': 'resources/imgs/slides/slide-11.png'},
    {'name': 'resources/imgs/slides/slide-01.png', 'path': 'resources/imgs/slides/slide-01.png'},
    {'name': 'resources/aud/S-CLAS Q06.m4a', 'path': 'resources/aud/S-CLAS Q06.m4a'},
    {'name': 'resources/aud/S-CLAS Q09a.m4a', 'path': 'resources/aud/S-CLAS Q09a.m4a'},
    {'name': 'resources/aud/S-CLAS Q02.m4a', 'path': 'resources/aud/S-CLAS Q02.m4a'},
    {'name': 'resources/imgs/slides/slide-04.png', 'path': 'resources/imgs/slides/slide-04.png'},
    {'name': 'resources/aud/S-CLAS Q14.m4a', 'path': 'resources/aud/S-CLAS Q14.m4a'},
    {'name': 'resources/imgs/slides/slide-08.png', 'path': 'resources/imgs/slides/slide-08.png'},
    {'name': 'resources/imgs/slides/slide-10.png', 'path': 'resources/imgs/slides/slide-10.png'},
    {'name': 'resources/aud/S-CLAS Q04.m4a', 'path': 'resources/aud/S-CLAS Q04.m4a'},
    {'name': 'resources/aud/S-CLAS Q09c.m4a', 'path': 'resources/aud/S-CLAS Q09c.m4a'},
    {'name': 'resources/aud/S-CLAS Q05.m4a', 'path': 'resources/aud/S-CLAS Q05.m4a'},
    {'name': 'resources/imgs/slides/slide-06.png', 'path': 'resources/imgs/slides/slide-06.png'},
    {'name': 'resources/imgs/slides/slide-03.png', 'path': 'resources/imgs/slides/slide-03.png'},
    {'name': 'resources/aud/S-CLAS Q12.m4a', 'path': 'resources/aud/S-CLAS Q12.m4a'},
    {'name': 'resources/aud/S-CLAS Q13.m4a', 'path': 'resources/aud/S-CLAS Q13.m4a'}
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var frameDur;
async function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2021.2.3';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}


var beginClock;
var expVersion;
var AUD_DIR;
var IMGS_DIR;
var SLIDES_DIR;
var SEQ_FILE;
var USE_AUDIO;
var SHOW_DEBUG;
var CLICK_BOX_OPACITY;
var SLIDE_H;
var SLIDE_W;
var SLIDE_SIZE;
var NEXT_POS;
var NEXT_SIZE;
var NEXT;
var REPLAY_POS;
var REPLAY_SIZE;
var REPLAY;
var COVER_SIZE;
var COVER;
var MOUSE;
var MOUSE_L;
var MOUSE_L_prev;
var SOUND;
var all_cimgs;
var begin_text;
var trialClock;
var trial_text;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "begin"
  beginClock = new util.Clock();
  expVersion = "2022.09.20";
  AUD_DIR = "resources/aud";
  IMGS_DIR = "resources/imgs";
  SLIDES_DIR = `${IMGS_DIR}/slides`;
  SEQ_FILE = "resources/seqs/conditions.csv";
  USE_AUDIO = (expInfo["Audio"] === "Yes");
  SHOW_DEBUG = (expInfo["Debug"] === "Yes");
  CLICK_BOX_OPACITY = (SHOW_DEBUG ? 0.5 : 0);
  /*
  Slides are 1052 x 745 pixels.
  Positions and sizes of clickable areas are hard
  coded, so changing this will break _everything_!
  */
  SLIDE_H = 0.7;
  SLIDE_W = ((SLIDE_H / 745) * 1052);
  SLIDE_SIZE = [SLIDE_W, SLIDE_H];
  NEXT_POS = [0.39, 0.265];
  NEXT_SIZE = [0.165, 0.075];
  NEXT = make_rect("next", NEXT_POS, NEXT_SIZE, CLICK_BOX_OPACITY);
  REPLAY_POS = [(- 0.376), 0.265];
  REPLAY_SIZE = [0.165, 0.075];
  REPLAY = make_rect("replay", REPLAY_POS, REPLAY_SIZE, CLICK_BOX_OPACITY);
  COVER_SIZE = [0.17, 0.08];
  COVER = make_rect("cover", NEXT_POS, COVER_SIZE, null, "white", "white", 0);
  MOUSE = new core.Mouse({"win": psychoJS.window});
  MOUSE_L = 0;
  MOUSE_L_prev = 0;
  SOUND = null;
  all_cimgs = {"02": get_trees, "03": get_vehicles, "04": get_speed, "05": get_weight, "06": get_weather, "07": get_tools, "08": get_carrots, "09": get_badminton, "10": get_prepositions1, "11": get_prepositions2, "12": get_room1, "13": get_pen1, "14": get_pen2, "15": get_animals, "16": get_look, "17": get_mice};
  
  function get_trees() {
      var names, sizes, xys;
      names = ["tree1", "tree2", "tree3", "tree4"];
      xys = [[(- 0.326), (- 0.1)], [(- 0.087), (- 0.195)], [0.135, (- 0.163)], [0.367, (- 0.18)]];
      sizes = [[0.23, 0.38], [0.115, 0.185], [0.16, 0.25], [0.132, 0.215]];
      return make_boxes(names, xys, sizes);
  }
  function get_vehicles() {
      var names, sizes, xys, y0;
      names = ["car", "ball", "bicycle", "bus"];
      y0 = (- 0.178);
      xys = [[(- 0.374), (y0 + 0.002)], [(- 0.153), (y0 + 0.001)], [0.08, y0], [0.3425, y0]];
      sizes = [[0.176, 0.129], [0.18, 0.13], [0.21, 0.135], [0.235, 0.135]];
      return make_boxes(names, xys, sizes);
  }
  function get_speed() {
      var names, sizes, xys, y0;
      names = ["faster", "big", "slow", "old"];
      y0 = (- 0.219);
      xys = [[(- 0.37), y0], [(- 0.149), y0], [0.083, (y0 - 0.003)], [0.338, (y0 - 0.003)]];
      sizes = [[0.172, 0.125], [0.177, 0.13], [0.21, 0.13], [0.217, 0.13]];
      return make_boxes(names, xys, sizes);
  }
  function get_weight() {
      var names, sizes, xys, y0;
      names = ["dark", "heavy", "smooth", "grey"];
      y0 = (- 0.255);
      xys = [[(- 0.37), y0], [(- 0.149), y0], [0.083, (y0 - 0.003)], [0.338, (y0 - 0.003)]];
      sizes = [[0.172, 0.125], [0.177, 0.13], [0.21, 0.13], [0.217, 0.13]];
      return make_boxes(names, xys, sizes);
  }
  function get_weather() {
      var names, sizes, xys, y0;
      names = ["cloudy", "sunny", "rainy"];
      y0 = (- 0.162);
      xys = [[(- 0.36), (y0 + 0.005)], [(- 0.143), y0], [0.111, y0]];
      sizes = [[0.172, 0.125], [0.177, 0.13], [0.208, 0.13]];
      return make_boxes(names, xys, sizes);
  }
  function get_tools() {
      var names, sizes, xys, y0;
      names = ["scissors", "nail", "tweezers", "tongs"];
      y0 = (- 0.133);
      xys = [[(- 0.37), (y0 + 0.003)], [(- 0.149), y0], [0.083, y0], [0.347, y0]];
      sizes = [[0.172, 0.125], [0.177, 0.13], [0.21, 0.13], [0.235, 0.13]];
      return make_boxes(names, xys, sizes);
  }
  function get_carrots() {
      var h0, names, sizes, xys, y0;
      names = ["he", "she", "they", "one_carrot"];
      y0 = (- 0.163);
      h0 = 0.245;
      xys = [[(- 0.34), y0], [(- 0.13), y0], [0.11, (y0 + 0.002)], [0.347, (y0 + 0.002)]];
      sizes = [[0.19, h0], [0.19, h0], [0.24, h0], [0.19, h0]];
      return make_boxes(names, xys, sizes);
  }
  function get_badminton() {
      var h0, names, sizes, xys, y0;
      names = ["playing", "played"];
      y0 = (- 0.252);
      h0 = 0.09;
      xys = [[(- 0.255), y0], [0.27, y0]];
      sizes = [[0.4, h0], [0.37, h0]];
      return make_boxes(names, xys, sizes);
  }
  function get_prepositions1() {
      var names, sizes, xys, y0;
      names = ["at", "on", "in", "above"];
      y0 = (- 0.255);
      xys = [[(- 0.37), y0], [(- 0.149), y0], [0.083, (y0 - 0.003)], [0.339, (y0 - 0.003)]];
      sizes = [[0.172, 0.125], [0.177, 0.13], [0.208, 0.13], [0.217, 0.13]];
      return make_boxes(names, xys, sizes);
  }
  function get_prepositions2() {
      var names, sizes, xys, y0;
      names = ["at", "on", "in", "under"];
      y0 = (- 0.255);
      xys = [[(- 0.37), y0], [(- 0.149), y0], [0.083, (y0 - 0.003)], [0.339, (y0 - 0.003)]];
      sizes = [[0.172, 0.125], [0.177, 0.13], [0.208, 0.13], [0.217, 0.13]];
      return make_boxes(names, xys, sizes);
  }
  function get_room1() {
      var names, sizes, xys, y0;
      names = ["duck", "apple", "bear", "cup"];
      y0 = (- 0.255);
      xys = [[(- 0.37), y0], [(- 0.149), y0], [0.083, (y0 - 0.003)], [0.339, (y0 - 0.003)]];
      sizes = [[0.172, 0.125], [0.177, 0.13], [0.208, 0.13], [0.217, 0.13]];
      return make_boxes(names, xys, sizes);
  }
  function get_pen1() {
      var h0, names, sizes, w0, xys, y0;
      names = ["P", "M", "N", "B"];
      y0 = (- 0.214);
      w0 = 0.123;
      h0 = 0.149;
      xys = [[(- 0.35), y0], [(- 0.128), y0], [0.107, y0], [0.338, y0]];
      sizes = [[w0, h0], [w0, h0], [w0, h0], [w0, h0]];
      return make_boxes(names, xys, sizes);
  }
  function get_pen2() {
      var h0, names, sizes, w0, xys, y0;
      names = ["P", "M", "N", "B"];
      y0 = (- 0.195);
      w0 = 0.123;
      h0 = 0.149;
      xys = [[(- 0.35), y0], [(- 0.128), y0], [0.107, y0], [0.338, y0]];
      sizes = [[w0, h0], [w0, h0], [w0, h0], [w0, h0]];
      return make_boxes(names, xys, sizes);
  }
  function get_animals() {
      var h0, names, sizes, xys, y0;
      names = ["monkey", "goose"];
      y0 = (- 0.138);
      h0 = 0.227;
      xys = [[0.043, y0], [0.315, y0]];
      sizes = [[0.16, h0], [0.25, h0]];
      return make_boxes(names, xys, sizes);
  }
  function get_look() {
      var names, sizes, xys, y0;
      names = ["leaf", "cup", "book"];
      y0 = (- 0.14);
      xys = [[(- 0.09), (y0 + 0.003)], [0.125, (y0 + 0.018)], [0.35, y0]];
      sizes = [[0.135, 0.135], [0.12, 0.17], [0.19, 0.16]];
      return make_boxes(names, xys, sizes);
  }
  function get_mice() {
      var names, sizes, xys, y0;
      names = ["car", "rice", "map"];
      y0 = (- 0.14);
      xys = [[(- 0.075), y0], [0.15, (y0 + 0.023)], [0.368, y0]];
      sizes = [[0.21, 0.09], [0.155, 0.165], [0.18, 0.155]];
      return make_boxes(names, xys, sizes);
  }
  
  begin_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'begin_text',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.6, 0], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  trial_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'trial_text',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.6, 0], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var slide;
var aud_file;
var beginComponents;
function beginRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'begin'-------
    t = 0;
    beginClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    slide = make_slide("01");
    slide.autoDraw = true;
    NEXT.autoDraw = true;
    if (USE_AUDIO) {
        aud_file = `${AUD_DIR}/S-CLAS Intro.m4a`;
        SOUND = make_sound("sound", aud_file);
        SOUND.play();
    }
    
    // keep track of which components have finished
    beginComponents = [];
    beginComponents.push(begin_text);
    
    beginComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function beginRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'begin'-------
    // get current time
    t = beginClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    MOUSE_L = MOUSE.getPressed()[0];
    if ((MOUSE_L_prev !== MOUSE_L)) {
        console.log(`MOUSE_L_prev = ${MOUSE_L_prev}; MOUSE_L = ${MOUSE_L}`);
        MOUSE_L_prev = MOUSE_L;
        if ((MOUSE_L && NEXT.contains(MOUSE))) {
            continueRoutine = false;
        }
    }
    
    
    // *begin_text* updates
    if (t >= 0.0 && begin_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      begin_text.tStart = t;  // (not accounting for frame time here)
      begin_text.frameNStart = frameN;  // exact frame index
      
      begin_text.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    beginComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function beginRoutineEnd() {
  return async function () {
    //------Ending Routine 'begin'-------
    beginComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    NEXT.autoDraw = false;
    slide.autoDraw = false;
    if (USE_AUDIO) {
        SOUND.stop();
    }
    
    // the Routine "begin" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var trials;
var currentLoop;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, SEQ_FILE, '0:'),
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials.forEach(function() {
      const snapshot = trials.getSnapshot();
    
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(trialRoutineBegin(snapshot));
      trialsLoopScheduler.add(trialRoutineEachFrame());
      trialsLoopScheduler.add(trialRoutineEnd());
      trialsLoopScheduler.add(endLoopIteration(trialsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trials);

  return Scheduler.Event.NEXT;
}


var cimg_names;
var response;
var has_responded;
var slide_num;
var qn_num;
var radio_y;
var radio0s;
var radio1s;
var SOUND_DUR;
var SOUND_START;
var trialComponents;
function trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'trial'-------
    t = 0;
    trialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData("expVersion", expVersion);
    cimgs = [];
    cimg_names = [];
    response = null;
    has_responded = false;
    slide_num = ((slideNum.toString().length === 1) ? `0${slideNum}` : slideNum.toString());
    qn_num = ((qnNum.toString().length === 1) ? `0${qnNum}` : qnNum.toString());
    slide = make_slide(slide_num);
    slide.autoDraw = true;
    cimgs = all_cimgs[slide_num]();
    min_y = find_min_y(cimgs);
    radio_y = (min_y - 0.05);
    radio0s = [];
    radio1s = [];
    for (var cimg, _pj_c = 0, _pj_a = cimgs, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        cimg = _pj_a[_pj_c];
        cimg.autoDraw = true;
        radio0s.push(make_radio0(cimg.name, [cimg.pos[0], radio_y]));
        radio0s.slice((- 1))[0].autoDraw = true;
        radio1s.push(make_radio1(cimg.name, [cimg.pos[0], radio_y]));
    }
    REPLAY.autoDraw = true;
    NEXT.autoDraw = true;
    COVER.autoDraw = true;
    COVER.opacity = 0.9;
    if (USE_AUDIO) {
        aud_file = `${AUD_DIR}/S-CLAS Q${qn_num}.m4a`;
        SOUND = make_sound("sound", aud_file);
        SOUND_DUR = SOUND.getDuration();
        SOUND_START = 0;
        SOUND.play();
    }
    if (SHOW_DEBUG) {
        cimg_names = [];
        for (var i, _pj_c = 0, _pj_a = util.range(cimgs.length), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
            i = _pj_a[_pj_c];
            cimg_names.push(cimgs[i].name);
        }
    }
    
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(trial_text);
    
    trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function trialRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'trial'-------
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    MOUSE_L = MOUSE.getPressed()[0];
    if ((MOUSE_L_prev !== MOUSE_L)) {
        console.log(`MOUSE_L_prev = ${MOUSE_L_prev}; MOUSE_L = ${MOUSE_L}`);
        MOUSE_L_prev = MOUSE_L;
        if (MOUSE_L) {
            if ((has_responded && NEXT.contains(MOUSE))) {
                continueRoutine = false;
            }
            if (REPLAY.contains(MOUSE)) {
                if (((t - SOUND_START) < SOUND_DUR)) {
                    SOUND.stop();
                }
                SOUND = make_sound("sound", aud_file);
                SOUND_START = t;
                SOUND.play();
            }
            for (var i, _pj_c = 0, _pj_a = util.range(cimgs.length), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
                i = _pj_a[_pj_c];
                if ((cimgs[i].contains(MOUSE) || radio0s[i].contains(MOUSE))) {
                    if ((! has_responded)) {
                        has_responded = true;
                        COVER.autoDraw = false;
                        COVER.opacity = 0;
                    }
                    response = cimgs[i].name;
                    for (var radio, _pj_f = 0, _pj_d = radio1s, _pj_e = _pj_d.length; (_pj_f < _pj_e); _pj_f += 1) {
                        radio = _pj_d[_pj_f];
                        radio.autoDraw = false;
                        if ((response === radio.name)) {
                            radio.autoDraw = true;
                        }
                    }
                }
            }
        }
    }
    if (((SOUND_START === 0) && (t > SOUND_DUR))) {
        SOUND = make_sound("sound", `${AUD_DIR}/Replay instructions.m4a`);
        SOUND_START = t;
        SOUND.play();
    }
    if (SHOW_DEBUG) {
        trial_text.text = `
    taskName = ${taskName}
    aud_file = ${aud_file}
    slide_num = ${slide_num}
    qn_num = ${qn_num}
    cimg_names = ${cimg_names}
    corrAns = ${corrAns}
    response = ${response}
    has_responded = ${has_responded}
    min_y = ${round(min_y, 3)}
    t = ${round(t, 3)}`
    ;
    }
    
    
    // *trial_text* updates
    if (t >= 0.0 && trial_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trial_text.tStart = t;  // (not accounting for frame time here)
      trial_text.frameNStart = frameN;  // exact frame index
      
      trial_text.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var is_correct;
function trialRoutineEnd() {
  return async function () {
    //------Ending Routine 'trial'-------
    trialComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    if (USE_AUDIO) {
        SOUND.stop();
    }
    for (var cimg, _pj_c = 0, _pj_a = cimgs, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        cimg = _pj_a[_pj_c];
        cimg.size = [0, 0];
        cimg.autoDraw = false;
    }
    for (var radio, _pj_c = 0, _pj_a = radio0s, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        radio = _pj_a[_pj_c];
        radio.size = [0, 0];
        radio.autoDraw = false;
    }
    for (var radio, _pj_c = 0, _pj_a = radio1s, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        radio = _pj_a[_pj_c];
        radio.size = [0, 0];
        radio.autoDraw = false;
    }
    slide.size = [0, 0];
    slide.autoDraw = false;
    NEXT.autoDraw = false;
    REPLAY.autoDraw = false;
    is_correct = ((response === corrAns) ? 1 : 0);
    psychoJS.experiment.addData("response", response);
    psychoJS.experiment.addData("is_correct", is_correct);
    psychoJS.experiment.addData("end_timestamp", util.MonotonicClock.getDateStr());
    psychoJS.experiment.addData("total_seconds", globalClock.getTime());
    
    // the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        const thisTrial = snapshot.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(snapshot);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
