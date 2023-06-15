// complete the given function

function palindrome(str){
	let i=str[0]
	let j=str.length-1
	while (i<j) {
		if(str[i]===str[j])
		{
			i++
			j--
		}
		else
			return false
		
	}
	if(i>j)
		return true;
	

}
module.exports = palindrome
