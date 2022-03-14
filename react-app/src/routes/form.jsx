import { useLocationChange } from '../tracker';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { enableFormTracking } from '@snowplow/browser-plugin-form-tracking';

export default function Form() {
    useLocationChange();
    useEffect(() => {
        enableFormTracking({
            options: {
                forms: { allowlist: ['formy-mcformface'] },
                events: ['submit', 'focus', 'change']
            },
        });
    });

    return (
        <div className="App">
            <h1>Form tracking demo</h1>

            <p>
                <Link to="/">Go back</Link>
            </p>

            <form id="myForm" className="formy-mcformface" onSubmit={() => alert('Submitted')}>
                <fieldset id="fields">
                    <legend>Personal Info:</legend>
                    <label for="fname">First name:</label><br />
                    <input type="text" id="fname" name="fname" placeholder="John" className="test" /><br />
                    <label for="lname">Last name:</label><br />
                    <input type="text" id="lname" name="lname" placeholder="Doe" /><br /><br />
                    <input type="radio" id="bike" name="vehicle" placeholder="Bike" />
                    <label for="bike"> I have a bike</label><br />
                </fieldset>
                <label for="cars">Choose a car:</label>
                <select id="cars" name="cars">
                    <option id="volvo" value="volvo">Volvo</option>
                    <option id="saab" value="saab">Saab</option>
                </select>
                <br />
                <label for="message">Enter a message:</label><br />
                <textarea id="message" name="message" rows="10" cols="30">This is a message</textarea><br />
                <input type="checkbox" id="terms" name="terms" value="agree" />
                <label for="terms"> Agree to terms</label><br />
                <input type="submit" value="Submit" id="submit" />
            </form>
        </div>
    );
}
