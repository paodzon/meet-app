import { useRef } from 'react';
import LabeledTextField from '../common/LabeledTextField';
import classes from './AddForm.module.css';

const AddForm = ({onSubmitHandler}) => {
    const titleInputRef = useRef();
    const addressInputRef = useRef();
    const imageInputRef = useRef();

    const onSubmitMeetUp = (e) => {
        e.preventDefault();
        const newMeetup = { title: titleInputRef.current.value, address: addressInputRef.current.value, image: imageInputRef.current.value };
        onSubmitHandler(newMeetup);
    }

    return (
        <form className={classes.addForm__container} onSubmit={(e) => onSubmitMeetUp(e)}>
            <h2 style={{textAlign:'center'}}>Add New Meetup</h2>
            <div className={classes.addForm__input}>
                <LabeledTextField label='Title' inputRef={titleInputRef} required={true}/>
                <LabeledTextField label='Address' inputRef={addressInputRef} />
                <LabeledTextField label='Image' inputRef={imageInputRef} />
            </div>
            <button>Submit</button>
        </form>
    )
}

export default AddForm