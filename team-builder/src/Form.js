import React from 'react';

function Form(props) {
    return (
        <div>
            <form>
                <div id="name1">
                <label htmlFor='name'>Name:</label>
                    <input type='text' id='name' name='name' />
                </div>
                <div id="email2">
                 <label htmlFor='email'>Email:</label>
                    <input type='text' id='email' name='email'/>
                </div>
                <div id="role3">
                 <label htmlFor='role'>Role:</label>
                    <input type='text' id='role' name='role'/>
                </div>
                <div id="submit4">
                    <input type='submit' value='Submit' />
                    </div>
            </form>
        </div>
    );
}

export default Form;