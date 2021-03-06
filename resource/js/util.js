/*
 * util.js
 *
 * @author Joshua Dickson
 * 
 * A file that contains utility functionality for the node flyer
 */


/*
 * A function for generating a random integer between 0 and max
 */
function generateRandomWholeNumberFromZeroTo(max) {
	return Math.floor(Math.random() * (max + 1));
};


/* 
 * A prototype function for converting numbers representing degree values to radians
 */
if (typeof(Number.prototype.toRad) === "undefined") {
  Number.prototype.toRad = function() {
    return this * Math.PI / 180;
  }
};

/* 
 * A prototype function for converting numbers representing radian values to degrees
 */
if (typeof(Number.prototype.toDeg) === "undefined") {
  Number.prototype.toDeg = function() {
    return this * 180 / Math.PI;
  }
};

/*
 * A function that normalizes degree values to their representation between 0 and 360 degrees
 */
function normalizeDegreeValue(angle) {
	while(angle > 360) {
		angle -= 360;
	} while(angle < 0) {
		angle += 360;
	} return angle;

};

/*
 * A function used to generate unique hex keys of a specified length for identification
 */
function generateHexKeyOfLength(length) {
	key = '';
	for(keyIndex = 0; keyIndex < length; keyIndex++) {
		key = key + generateRandomWholeNumberFromZeroTo(16).toString(16);
	}
	return key;
};