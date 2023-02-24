import classes from 'pages/index.module.css';
import Card from 'components/ui/meetup/Card';
import { sampleData } from 'components/assets/data';

export default function Home() {
  return (
    <div className={classes.home__container}>
      <h1>Meetups</h1>
      <div className={classes.home__cards}>
        {sampleData.map((item, i) => {
          return <Card key={i} data={item} />
        })}
      </div>
    </div>
  )
}
