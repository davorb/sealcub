define(
    ['jquery'],
    function($) {
      'use strict';

// search the CSSOM for a specific -webkit-keyframe rule
function findKeyframesRule(rule)
    {
        // gather all stylesheets into an array
        var ss = document.styleSheets;
        
        // loop through the stylesheets
        for (var i = 0; i < ss.length; ++i) {
            
            // loop through all the rules
            for (var j = 0; j < ss[i].cssRules.length; ++j) {
                // find the -webkit-keyframe rule whose name matches our passed over parameter and return that rule
                if (ss[i].cssRules[j].type == window.CSSRule.WEBKIT_KEYFRAMES_RULE && ss[i].cssRules[j].name == rule)
                    return ss[i].cssRules[j];
            }
        }
        
        // rule not found
        return null;
    }

// remove old keyframes and add new ones
function extend(anim, left, top)
    {
          
        // find our -webkit-keyframe rule
        var keyframes = findKeyframesRule(anim);
        //console.log(keyframes);
//        // remove the existing 0% and 100% rules
        keyframes.deleteRule("0%");
//        keyframes.deleteRule("100%");
//        
//        // create new 0% and 100% rules with random numbers
        
      keyframes.insertRule("0% { -webkit-transform: scale(0); left:"+left+"px; top:"+top+"px; opacity:0.5; }");
//        keyframes.insertRule("0% { -webkit-transform: rotate("+randomFromTo(-360,360)+"deg); }");
//        keyframes.insertRule("100% { -webkit-transform: rotate("+randomFromTo(-360,360)+"deg); }");
//        
//        // assign the animation to our element (which will cause the animation to run)
//        document.getElementById('box').style.webkitAnimationName = anim;
    }

//function insertNewAnimation(name, rules){
//  var sheet=document.styleSheets;
//  var index=1;
//  function addCSSRule(sheet, selector, rules, index) {
//    if(sheet.insertRule) {
//      sheet.insertRule(selector + "{" + rules + "}", index);
//    }
//    else {
//      sheet.addRule(selector, rules, index);
//    }
//  }
//}

//// begin the new animation process
//function startChange()
//    {
//        // remove the old animation from our object
//        document.getElementById('box').style.webkitAnimationName = "none";
//        
//        // call the change method, which will update the keyframe animation
//        setTimeout(function(){change("rotate");}, 0);
//    }

// get a random number integer between two low/high extremes
function randomFromTo(from, to){
       return Math.floor(Math.random() * (to - from + 1) + from);
}

//$(function() {
//    $('#update-box').bind('click',function(e) {
//        e.preventDefault();
//        startChange();        
//    });        
//});
  return({
    setInAnimStartPosition: function(left, top){
      extend("specialin", left, top);
    }
  });

});
