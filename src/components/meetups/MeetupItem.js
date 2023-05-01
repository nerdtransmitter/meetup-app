import React, { useContext } from 'react';
import classes from './MeetupItem.module.css';
import Card from '../UI/Card';
import FavoritesContext from '../../store/favorites-context.js';

function MeetupItem(props) {
  const favoritesCtx = useContext(FavoritesContext);

  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(props.id);
    } else {
      favoritesCtx.addFavorite({
        id: props.id,
        title: props.title,
        address: props.address,
        description: props.description,
        image: props.image
      })
    }
  }

  return (
    <li className={classes.item}>
      <Card >
        <div className={classes.image}>
          <img src={props.image} alt="meetup image"/>
        </div>
        <div className={classes.content}>
          <h3 className={classes.title}>{props.title}</h3>
          <address className>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteStatusHandler}>
            {itemIsFavorite? 'Remove From Favorites' : 'To Favorites'}
          </button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
