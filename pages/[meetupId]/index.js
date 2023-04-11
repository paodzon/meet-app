import React from "react";
import { useRouter } from "next/router";
import classes from '../[meetupId]/index.module.css';
import { MongoClient, ObjectId } from "mongodb";

function MeetUpPage(props) {
  const { meetup } = props;
  const router = useRouter();
  return (
    <div className={classes.meetup}>
      <img src={meetup.image} width={450} />
      <h1>{meetup.title}</h1>
      <h4>{meetup.address}</h4>
      <button onClick={router.back}>Go Back</button>
    </div>
  );
}

export async function getServerSideProps(context) {
  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect(
    "mongodb+srv://paodzon:pawpaw@cluster0.a4zpiwo.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");
  const selectedMeetup = await meetupsCollection.findOne({
    _id: new ObjectId(meetupId),
  });
  client.close();
  return {
    props: {
      meetup: {
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
        id: selectedMeetup._id.toString()
      },
    },
  };
}

export default MeetUpPage;
