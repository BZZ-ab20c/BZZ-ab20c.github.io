import React from 'react';
import style from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

import  {Navigation} from './Navigation/Navigation';

export const TitleSeite = (props) => {
   return(
      <div>
         <Navigation />
         <h1>Energie Stromerzeugung</h1>
      </div>
   );
}


  