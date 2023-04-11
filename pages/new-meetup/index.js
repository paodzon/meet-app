import AddForm from "components/ui/meetup/AddForm";
import { headers } from "next.config";
import classes from "pages/new-meetup/index.module.css";
import { useRouter } from "next/router";

function NewMeetup() {
  const router = useRouter();

  const addMeetup = async (meetup) => {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(meetup),
      headers: {'Content-Type': 'application/json'}
    });
    const data = await response.json();
    console.log(data);
    router.push('/');
  };

  return (
    <div className={classes.newmeet__container}>
      <AddForm onSubmitHandler={(e) => addMeetup(e)} />
    </div>
  );
}

export default NewMeetup;
