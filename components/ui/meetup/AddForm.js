import { useRef } from 'react';
import LabeledTextField from '../common/LabeledTextField';
import classes from './AddForm.module.css';

const AddForm = () => {
    const titleInputRef = useRef();
    const addressInputRef = useRef();
    const imageInputRef = useRef();

    const onSubmit = (e) => {
        e.preventDefault();
        console.log({ title: titleInputRef.current.value, address: addressInputRef.current.value, image: imageInputRef.current.value });
    }

    return (
        <form className={classes.addForm__container} onSubmit={onSubmit}>
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