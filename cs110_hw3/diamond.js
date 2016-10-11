const st = function(ch,num){
	let g='';

	for(let i=0;i<num;i++)
		g+=ch;

	return g;
};

const diamond = function(n){

	if(n%2 === 0)
		n++;
	
	for(let i=0;i<n;i++)
	{
		if(i<= n/2)
			console.log(st(' ',(2*n-1)/2-i)+st('*',i*2+1));
		else
			console.log(st(' ',(2*n-1)/2-(n-i-1))+st('*',(n-i-1)*2+1));
	}
};



diamond(7);

