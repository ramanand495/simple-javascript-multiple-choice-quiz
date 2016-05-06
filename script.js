function answer(){
	
	var total=5;
	var score=0;
	
	var q1=document.forms["quiz"]["q1"].value;
	var q2=document.forms["quiz"]["q2"].value;
	var q3=document.forms["quiz"]["q3"].value;
	var q4=document.forms["quiz"]["q4"].value;
	var q5=document.forms["quiz"]["q5"].value;

	for(var i=1;i<=5;i++)
	{
		if(eval('q'+i) == null || eval('q'+i) =="")
		{
			  alert("You Missed Question NO" + i);
              return false;	
		}
	}
	
	var answer=["b","b","b","a","c"];
	
	
	for(var i=1;i<=5;i++)
	{
		if(eval('q'+i) == answer[ i-1 ])
		{
			  score++;
		}
	}
	document.getElementById('demo').innerHTML= 'Your Score is ' +score;
	alert("Your score Is"+ score);
	
	return false;
}
