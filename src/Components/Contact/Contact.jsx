import React from 'react';
import '../../global.css';
import './ContactPage.css';
const ContactPage = () => {

    const handleEnquirySubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        var data = {};
        formData.forEach(value,key => data[key] = value);
        console.log("df")
    }

    return (

    <div className="contact-container">
        <form onSubmit={handleEnquirySubmit}>
            <input type="text" name="firstname" placeholder="Name"/>
        {/*        */}
        {/*        <input type="text" id="lname" name="lastname" placeholder="Your last name..">*/}
        {/*            <select id="country" name="country">*/}
        {/*                <option value="australia">Australia</option>*/}
        {/*                <option value="canada">Canada</option>*/}
        {/*                <option value="usa">USA</option>*/}
        {/*            </select>*/}

        {/*          */}
        {/*            <textarea id="subject" name="subject" placeholder="Write something.." style="height:200px"></textarea>*/}

        {/*            <input type="submit" value="Submit">*/}

        </form>
    </div>
    )

};

export default ContactPage;