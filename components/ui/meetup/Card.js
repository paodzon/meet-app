import classes from 'components/ui/meetup/Card.module.css';

const Card = ({ data }) => {
  return (
    <div className={classes.card}>
      <img src={data.image} className={classes.card__image} />
      <div className={classes.card__details}>
        <h2>{data.name}</h2>
        <p>{data.address}</p>
        <button>Details</button>
      </div>
    </div>
  )
}

export default Card