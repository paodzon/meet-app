import classes from "pages/index.module.css";
import Card from "components/ui/meetup/Card";
import { MongoClient } from "mongodb";
import Head from "next/head";
import { Fragment } from "react";

export default function Home(props) {
  return (
    <>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Browse a huge list of highly active React meetup"
        />
      </Head>
      <div className={classes.home__container}>
        <h1>Meetups</h1>
        <div className={classes.home__cards}>
          {props?.meetups?.map((item, i) => {
            return <Card key={i} data={item} />;
          })}
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  //Fetch data from an API
  const client = await MongoClient.connect(
    "mongodb+srv://paodzon:pawpaw@cluster0.a4zpiwo.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find().toArray();
  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
}
