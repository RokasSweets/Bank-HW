import { useState } from 'react';

const AddNewAcccount = ({ accountListGenerator }) => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [modal, setModal] = useState({ class: 'hidden', msg: '', color: '' });

    // Name and lastname validation
    function inputIsValidInput(name) {
        return name.trim() && /^[A-Za-z\s]*$/.test(name);
    }

    const addNameHandler = e => {
        setName(e.target.value);
    };

    const addLastNameHandler = e => {
        setLastName(e.target.value);
    };

    const submitHandler = e => {
        e.preventDefault();
        if (inputIsValidInput(name) && inputIsValidInput(lastName)) {
            accountListGenerator(name, lastName);
            setName('');
            setLastName('');
            setModal({
                class: 'visible',
                msg: 'New account successfully created.',
                color: 'hsl(181, 82%, 37%)',
            });
            setTimeout(() => {
                setModal({ class: 'hidden', msg: '' });
            }, 2500);
        } else {
            setModal({
                class: 'visible',
                msg: 'Only LETTERS and SPACES are allowed.',
                color: 'hsl(350, 75%, 60%)',
            });
            setTimeout(() => {
                setModal({ class: 'hidden', msg: '' });
            }, 2500);
        }
    };

    return (
        <form onSubmit={submitHandler}>
            <div>
                <input
                    className='form-control mt-2'
                    type="text"
                    id="name"
                    value={name}
                    onChange={addNameHandler}
                    placeholder="Enter your name"
                    title="Must contain at least one letter."
                    required
                />
            </div>
            <div>
                <input
                    className='form-control mt-1'
                    type="text"
                    id="lastname"
                    value={lastName}
                    placeholder="Enter your surname"
                    title="Must contain at least one letter."
                    onChange={addLastNameHandler}
                    required
                />
            </div>
            <button
                className="btn btn-primary form-control mt-2"
                type="submit">
                Add
            </button>
            {/* ----------------modal---------------------------- */}
            <div className={`${modal.class} modal`}>
                <p style={{ backgroundColor: modal.color }}>{modal.msg} </p>
            </div>
        </form>
    );
};

export default AddNewAcccount;