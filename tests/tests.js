var expect = chai.expect;

describe("max", function(){

	it('should exist', function() {
		expect(max).to.not.be.undefined;
	});
	it("expect return of the largest number of the two arguments", function(){
		expect(max(-3,789)).to.equal(789);
	});
	it("expect return of either number if they are equal", function(){
		expect(max(1,1)).to.equal(1);
	});
	it("expect return of the largest number of the two arguments", function(){
		expect(max(3,2)).to.equal(3);
	});
	

	it("string throws an Invalid Input", function(){
		expect(function() { max("keith is the bestest") }).to.throw('Invalid Input');
	});

});
describe("maxOfThree", function(){
	it('should exist', function() {
		expect(maxOfThree).to.not.be.undefined;
	});
	it("shouldd return the largest number of three numbers", function(){
		expect(maxOfThree(100,10000,100000)).to.equal(100000);
	});
	it("should return the largest number of three numbers", function(){
		expect(maxOfThree(0,-3,-2)).to.equal(10);
	});
	it("should return one of the numbers if the numbers are all equal", function(){
		expect(maxOfThree(1,1,1)).to.equal(1);
	});
	it("string should throw Invalid Input", function(){
		expect(function() { maxOfThree(3,2,"torchysIsYummy") }).to.throw('Invalid Input');
	});

});
describe("isVowel", function(){
	it('should exist', function() {
		expect(isVowel).to.not.be.undefined;
	});
	it("should return true if vowel", function(){
		expect(isVowel("e")).to.be.true;
	});
	it("should return false if not vowel", function(){
		expect(isVowel("m")).to.be.false;
	});
	it("number should throw Invalid Input", function(){
		expect(function() { isVowel(2) }).to.throw('Invalid Input');
	});
	it("y should throw Only Sometimes", function(){
		expect(function() { isVowel(y) }).to.throw('Only Sometimes');
	});
	it("Y should throw Only Sometimes", function(){
		expect(function() { isVowel(Y) }).to.throw('Only Sometimes');
	});
});

describe("rovarspraket", function(){
	it('should exist', function() {
		expect(rovarspraket).to.not.be.undefined;
	});
	it("should return correct string", function(){
		expect(rovarspraket("this is fun")).to.equal("tothohisos isos fofunon");
	});
	it("should return correct string", function(){
		expect(rovarspraket("keith")).to.equal("kokeiotothoh");
	});
	it("throw an 'invalid input' if given given a number", function(){
		expect(function() { rovarspraket(876578658765876) }).to.throw('Invalid Input');
	});

});

describe("sum", function(){
	it('should exist', function() {
		expect(sum).to.not.be.undefined;
	});
	it("should add all the numbers in an array together", function(){
		expect(sum([0,0,0,1])).to.equal(1);
	});
	it("should add all the numbers in an array together", function(){
		expect(sum([700,20,3,0])).to.equal(723);
	});
	it("!object throws Invalid Input", function(){
		expect(function() { sum("pickles") }).to.throw('Invalid Input');
	});

});
describe("multiply", function(){
	it('should exist', function() {
		expect(multiply).to.not.be.undefined;
	});
	it("should return product of numbers in array", function(){
		expect(multiply([112,1,398731298625,0])).to.equal(0);
	});
	it("should return product of numbers in array", function(){
		expect(multiply([-5,5,-5,5])).to.equal(625);
	});
	it("!object throws invalid input", function(){
		expect(function() { multiply("star wars-a new hope") }).to.throw('Invalid Input');
	});

});
describe("reverse", function(){
	it('should exist', function() {
		expect(reverse).to.not.be.undefined;
	});
	it("should be reverse", function(){
		expect(reverse("dude")).to.equal("edud");
	});
	it("should be reverse", function(){
		expect(reverse("keith is awesome")).to.equal("emosewa si htiek");
	});
	it("!string throws Invalid Input", function(){
		expect(function() { reverse(['keith','is','kinda','fat']) }).to.throw('Invalid Input');
	});

});
describe("findLongestWord", function(){
	it('should exist', function() {
		expect(findLongestWord).to.not.be.undefined;
	});
	it("should return longest word", function(){
		expect(findLongestWord(["a","rabbit","died"])).to.equal("rabbit");
	});
	it("should return longest word", function(){
		expect(findLongestWord(["pickles","pickle"])).to.equal("pickles");
	});
	it("!object throws Invalid Input", function(){
		expect(function() { findLongestWord("meathead") }).to.throw('Invalid Input');
	});

});
describe("filterLongWords", function(){
	it('should exist', function() {
		expect(filterLongWords).to.not.be.undefined;
	});
	it("should return words longer than the number", function(){
		expect(filterLongWords(["kangaroo","cat","pool","I","comedy"],3)).to.equal(["kangaroo","pool","comedy"]);
	});
	it("should return words longer than the number", function(){
		expect(filterLongWords(["i","eat","apples"],0)).to.equal(["i","eat","apples"]);
	});

	it("incorrect types throw invalid Input", function(){
		expect(function() { filterLongWords("eat tacos",2) }).to.throw('Invalid Input');
	});
	it("incorrect types throw invalid Input", function(){
		expect(function() { filterLongWords(12389,"pickle") }).to.throw('Invalid Input');
	});
});
describe("charFreq",function(){
	it('should exist', function() {
		expect(charFreq).to.not.be.undefined;
	});
	it("should return string thats counts number of each letter in a string", function(){
		expect(charFreq("mississississipi")).to.be.equal("m: 1, i: 6, s: 8, p: 1");
	});
	it("should return string thats counts number of each letter in a string", function(){
		expect(charFreq("a")).to.be.equal("a: 1");
	});
	it("!string returns invalid input", function(){
		expect(function() { charFreq([1,2,3,4,5,6,7,8]) }).to.throw('Invalid Input');
	});

});