const reverse = function(arr){	//modifies arr and returns it 
const len = arr.length;

for(let i=0;i<len/2;i++)
{
	const a=arr[len-i-1];
	arr[len-i-1]=arr[i];
	arr[i]=a;
}

return arr;
};


const reverse1 = function(arr){	//uses a new array, doesn't modify arr

let a = [];
const len = arr.length;

for(let i=0;i<len;i++)
{
	a[i]=arr[len-1-i];
}

return a;
};

const q = [1, 2, 3, 4, 5, 6];

console.log(reverse(q));