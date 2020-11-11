import React from 'react';

export default function MemberForm(props){

    const { values, update, submit } = props

    const onChange = (evt) => {

        const { name, value } = evt.target
        update(name, value)
    }

    const onSubmit = (evt) => {

        evt.preventDefault()
        submit()
    }

    return (
        <form className='form-container' onSubmit={onSubmit}>
            <div className='form-group inputs'>
                <label> 
                    Username
                    <input
                    type='text'
                    name='name'
                    onChange={onChange}
                    value={values.name}
                    ></input>
                </label>
               
                <label>
                    Email
                    <input
                    type="email"
                    name="email"
                    onChange={onChange}
                    value={values.email}
                    placeholder="enter your email"
                    maxLength="30"
                    ></input>
                </label>
                
                {/* //dropdown */}
                <label>
                    Role 
                    <select name='role' value={values.role} onChange={onChange}>
                        <option value=''>-----</option>
                        <option value='Backend Engineer'>Backend Engineer</option>
                        <option value='Frontend Engineer'>Frontend Engineer</option>
                        <option value='Designer'>Designer</option>
                        <option value='Analyst'>Analyst</option>
                    </select>
                </label>

                <div className='submit'>
                    <button>Submit</button>
                </div>
            </div>
        </form>
    )
}