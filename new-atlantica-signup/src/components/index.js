import {useState} from 'react';
import './styles.css';
import {checkPassword, authorizeEmail} from '../utils/helpers.js';

function Form() {
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    let handleInputChange = (e) => {
        const {target} = e;
        const inputType = target.name;
        const inputValue = target.value;

        if(inputType === 'email') {
            setEmail(inputValue);
        } else if(inputType === 'userName') {
            setUserName(inputValue);
        } else {
            setPassword(inputValue);
        }
    };

    let handleFormSubmit = (e) => {
        e.preventDefault();

        if(!authorizeEmail(email) || !userName) {
            setErrorMessage("Email or username is invalid");
            return;
        }

        if(!checkPassword(password)) {
            setErrorMessage(`Choose a more secure password for ${userName}`);
            return;
        }

        setUserName('');
        setPassword('')
        setEmail('');
        alert(`Hi, ${userName}!`)
    };

    return (
        <div className="container text-center">
          <h1>Hello {userName}</h1>
          <form className="form" onSubmit={handleFormSubmit}>
            <input
              value={email}
              name="email"
              onChange={handleInputChange}
              type="email"
              placeholder="email"
            />
            <input
              value={userName}
              name="userName"
              onChange={handleInputChange}
              type="text"
              placeholder="username"
            />
            <input
                value={password}
                name="password"
                onChange={handleInputChange}
                type="password"
                placeholder="password"   
            />
            <button type="submit">
              Submit
            </button>
          </form>
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
        </div>
      );
}

export default Form;