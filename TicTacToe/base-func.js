//check if variable is function
//Source - Alex Grande - StackOverflow  - Answer 09/09/11
function isFunction(objToCheck) {
  var getType = {};
  return objToCheck && getType.toString.call(objToCheck) === '[object Function]';
}

//get random integer between a specific range
//Source - Ionuț G. Stan - StackOverflow - Answer 06/10/09
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//truncate decimals to floor
function floorTrunc(num, numDecimals) {
  var strNum = String(num);
  var pointPos = strNum.indexOf('.');
  strNum = strNum.slice(0, pointPos + numDecimals + 1);
  return parseFloat(strNum);
}

//compare two arrays A and B - return true if they are equal in items and length
function compArrs(arrA, arrB) {
  var lenA = arrA.length;
  var lenB = arrB.length;
  var ind  = lenB;

  if (lenA !== lenB) {
    return false;
  } else {      
    arrA = arrA.sort();
    arrB = arrB.sort();

    while(ind--) {
      if (arrA[ind] !== arrB[ind]) {
        return false;
      }
    }
  }
    
  return true;
}

//check if array A is a sub array of B
function compSubArr(arrA, arrB) {
  var str = arrB.join('-');
  var len = arrA.length;
  var flag = true;

  while(len--) {
    var testExp = new RegExp(arrA[len]);
      
    if (!testExp.test(str)) {
      flag = false;
      break;
    }
  }

  return flag;
}


//delete all child nodes from element
//Source - Gabriel McAdams - StackOverflow - Answer 17/10/10
function empty(element) {
  while (element.firstChild) {
     element.removeChild(element.firstChild);
  }
}

//check if an element has a certain class or multiple classes
function classCheck(element, classesToCheck) {
  var newClasses = classesToCheck.replace(/\s+/g,'').split(",");
  var currentClasses = element.className.trim().replace(/\s+/g,' ') + ' ';
  var ind = newClasses.length;
  var hasClass = true;

  while(ind--) {
    var testTerm = new RegExp(newClasses[ind] +' ');

    if (!testTerm.test(currentClasses)) {
      hasClass = false;
      break;
    }  
  }
 
  return hasClass;
}

//add a class or multiple classes to an element
function addClass(element, classesToAdd) {		
  var newClasses = classesToAdd.replace(/\s+/g,'').split(",");		
  var newClassName = element.className.trim().replace(/\s+/g,' ') + ' ';
  var len = newClasses.length;
  var ind = 0;

  while(ind < len) { 
    var testTerm = new RegExp(newClasses[ind] + ' ');

    if (!testTerm.test(newClassName)) {
      //current className doesn't contain class - add it
      newClassName += newClasses[ind] + ' ';			
    }
 
    ind++;
  }

  element.className = newClassName.trim();

}

//remove a class or multiple classes from an element
function removeClass(element, classesToRemove) { 
  var classes = classesToRemove.replace(/\s+/g,'').split(",");
  var ind = classes.length;
  var newClass = element.className.trim().replace(/\s+/g,' ') + ' ';
  
  while(ind--) { 
    //remove class
    newClass = newClass.replace(classes[ind] + ' ','');
  }

  element.className = newClass.trim();
  
}

//toggle class or multiple classes on and off 
function toggleClass(element, classesToToggle) {
  var classes = classesToToggle.replace(/\s+/g,'').split(",")
  var newClassName = element.className.trim().replace(/\s+/g,' ') + ' ';
  var len = classes.length;
  var ind = 0;
  
  while (ind < len) {
    var testTerm = new RegExp(classes[ind] + ' ');
    
    if (testTerm.test(newClassName)) {
      //class exists - remove it
      newClassName = newClassName.replace(classes[ind] + ' ', '');
    } else {
      //class doesn't exist - add it
      newClassName += classes[ind] + ' ';
    }

    ind++;
  }
  
  element.className = newClassName.trim();               

}

//modify multiple elements with similar function
function modifyMultiple(elements, process) {
  var ind = elements.length;
  
  while(ind--) {
    process(elements[ind]);
  }
}

//bind similar event to multiple objects
function bindMultiple(elements, event, handler) {
  var ind = elements.length;

  while(ind--) {
    elements[ind][event] = function(event) {
      handler(this, event);
    };
  }
}


