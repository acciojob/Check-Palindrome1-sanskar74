// complete the given function

function palindrome(str){
	str1=str.toLowerCase();
	let i=str1[0]
	let j=str1.length-1
	while (i<j) {
		if(str1[i]===str1[j])
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
