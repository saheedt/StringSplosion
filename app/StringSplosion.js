'use strict';

class StringSplosion{
	
	constructor(word){
		this.word = word;
	}

	manipulate(){
		let copy = this.word, temp;
		for(let count = this.word.length; count >= 0; count--){

			temp = this.word.substring(0, count-1);

			copy = temp+copy;
		}

		return copy;
	}
}

module.exports = {
	StringSplosion: StringSplosion 
}