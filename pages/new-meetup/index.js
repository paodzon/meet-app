import AddForm from 'components/ui/meetup/AddForm'
import classes from 'pages/new-meetup/index.module.css'

function NewMeetup() {
  return (
    <div className={classes.newmeet__container}>
      <AddForm/>
    </div>
  )
}

export default NewMeetup