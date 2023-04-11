import classes from 'components/ui/meetup/Card.module.css';
import { useRouter } from 'next/router'
const Card = ({ data }) => {
  const router = useRouter();
  return (
    <div className={classes.card}>
      <img src={data.image} className={classes.card__image} />
      <div className={classes.card__details}>
        <h2>{data.name}</h2>
        <p>{data.address}</p>
        <button onClick={(_) => router.push(`/${data.id}`)}>Details</button>
      </div>
    </div>
  )
}

export default Card