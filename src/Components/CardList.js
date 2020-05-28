import React from 'react';
import Card from './Card';
const CardList =({ robot }) => {
//If these below commented lines are uncommented then it will show the Error msg on 
//e web page. This ErrorBoundary tool will be helpful after deployment. 
//after uncommenting these lines go to the web and refresh the page you will see ur 
//web page for some few seconds.

	//if (true) {
	//	throw new Error('Noooooooo!!')
	//}
	return (
		<div>
		    {
		    	robot.map((user,i) => {
				return (
					<Card 
					key={i}
					id={robot[i].id} 
					name={robot[i].name} 
					email={robot[i].email}
					/>
				);
			})
		    }
		    		  </div>
  );
}

export default CardList;