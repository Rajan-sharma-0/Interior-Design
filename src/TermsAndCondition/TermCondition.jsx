import React from 'react'
import './TermCondition.css'

import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Footer from '../Components/Footer/Footer'; // Adjust the path as necessary


 const TermCondition = () => {
	const location = useLocation();
  const navigate = useNavigate();
	
 
  return (
    <>
    <div>
   
      <div className="term-condition-container">
        <div className="heading">
          <h1 className="term-text">Terms and Conditions</h1>
        </div>
        </div>

        <div>
          <p className="para1">
            In these Terms of Use, any use of the words "you", "yours" or
            similar expressions shall mean any user of this website and the app
            whatsoever. Terms such as "we", "us, "our" or similar expressions
            shall mean the Football Association Premier League Limited.
          </p>
          <p className="para1">
            Lorem ipsum dolor  <a href="https://www.qubinetsinteriors.com/">
                  Qubinets Interiors
                </a>sit amet consectetur adipisicing elit. Sed quasi
            iste dignissimos accusantium eos similique dolore eum asperiores
            tempora quisquam!
          </p>
          <p className="para1">
            Please read this page carefully as it sets out the terms that apply
            to your use of the Website and the App, and any part of their
            content and all materials appearing on them. By using the Website
            you confirm that you accept these Terms of Use and you agree to
            comply with them. If you do not agree to these Terms of Use, please
            refrain from using the Website and App.
          </p>
        </div>

        <div>
          <h2 className="para1 head2">
            YOUR USE OF THE WEBSITE IF YOU ARE UNDER 18
          </h2>
          <p className="para1">
            If you are under 18, you may need your parent/guardian to help you
            with your use of the Website and the App and with reading these
            Terms and Conditions. If anything is hard to understand, please ask
            you parent/guardian to explain. If you still have any questions, you
            or your parent/guardian can contact us at: <a href="https://www.qubinetsinteriors.com/">
                  Qubinets Interiors
                </a>
          </p>
          <p className="para1">
            
            If you are aged 13 or under, you cannot register for a Premier
            League account (“Account”) without the permission of your
            parent/guardian. You need to register if you want to play the
            Fantasy game. You do not need to register to use the Website or App.
          </p>
          <p className="para1  ">
            We may collect your personal information when you use the Website
            and the App. You can find out more about how we use your personal
            information in our Questions and Answers.  <button 
         className="privacy" 
         onClick={()=>{
          navigate('privacy', { replace: true, state: {} });
        window.scrollTo(0, 0);
         }}
          >privacy

         </button>
          </p>
         
        </div>

        <div>
          <h2 className="para1 head2">OTHER APPLICABLE TERMS</h2>
          <p className="para1">
            These Terms of Use are additional to, and should be read in
            conjunction with, our  <button 
         className="privacy" 
         onClick={()=>{
          navigate('privacy', { replace: true, state: {} });
        window.scrollTo(0, 0);
         }}
          >privacy

         </button> and  <button 
         className="privacy" 
         onClick={()=>{
          navigate('privacy', { replace: true, state: {} });
        window.scrollTo(0, 0);
         }}
          > Cookies Policy

         </button>.
          </p>
          <p className="para1">
            If you are under 18, we have tried to explain these policies for you
            in our Questions and Answers. You can find a link here: link.{" "}
          </p>
        </div>

        <div>
          <h2 className="para1 head2">CHANGES TO THESE TERMS OF USE</h2>
          <p className="para1">
            We aim to update the Website regularly, and may change the content
            at any time. If the need arises, we may suspend access to the
            Website, or close it indefinitely. We will not be liable if for any
            reason the Website is unavailable at any time or for any period. Any
            of the material on the Website may be out of date at any given time,
            and we are under no obligation to update such material.
          </p>
        </div>

        <div>
          <h2 className="para1 head2">INTELLECTUAL PROPERTY RIGHTS</h2>

          <p className="para1 gap">
            The Website is protected by copyright, database rights and other
            intellectual property and related rights ("Rights") which are owned
            by us and our suppliers. All such Rights are reserved. Except where
            otherwise indicated on the Website:
          </p>

          <p className="gap2">
            {" "}
            &#x2022; You may download and print material from the Website as is
            reasonable for your own private and personal use;
          </p>
          <p className="gap2">
          &#x2022;You may also forward such material from the Website to other people
            for their private and personal use provided you credit us as its
            source and add the Website address: www.premierleague.com. You must
            draw their attention to these terms which also apply to them; and
          </p>
          <p className="gap2">
          &#x2022;You may provide links to the Website provided they go to the home
            page only and provided you do so in a way that is fair, legal and
            does not damage our reputation or take advantage of it. You must not
            establish a link in such a way as to suggest any form of
            association, approval or endorsement on the part of us where none
            exists. The Website must not be used in any other way, including for
            commercial purposes, and you may not otherwise reproduce, re-utilise
            or redistribute it (including, by way of example, creating a
            database (electronic or otherwise) that includes material downloaded
            or otherwise obtained from the Website), or frame or deep-link to it
            (or to any of its content) on any other website, without our prior
            written approval. If you print off, copy or download any part of the
            Website in breach of these terms, your right to use the Website will
            cease immediately and you must return or destroy any copies of the
            materials you have made at our request.
          </p>
        </div>

        <div>
          
          <h2 className="para1 head2">ACCOUNT</h2>
          <p className="para1">
          &#x2022;You may register for an Account. You are not permitted to register
            multiple Accounts on the Website or App.
          </p>
          <p className="para1">
          &#x2022; When you register for an Account, you will be asked to provide
            certain personal information, including your name, date of birth,
            email address, and other information. You must ensure that all the
            information you provide is accurate and up to date. You can update
            your information at any time in the “My Account” section of the
            Website.
          </p>
          <p className="para1">
          &#x2022;In registering for an Account, you will be providing personal data
            to the Premier League. Any personal data which you do submit will be
            processed in accordance with the Premier League’s Privacy Policy and
            in accordance with relevant data protection legislation including
            the General Data Protection Regulation (“GDPR”) and the Data
            Protection Act 2018. If you are under 18, you can find out more
            about how we use your personal information in our Questions and
            Answers, which is available here: link. We will only share personal
            data in accordance with our Privacy Policy or if required to do so
            by a competent authority or court within the United Kingdom.
          </p>
          <p className="para1">
          &#x2022;You may (at your sole discretion) enable two factor authentication
            on your Account. Two factor authentication improves the security of
            users’ accounts. Before enabling two factor authentication, we
            recommend that you read our guide on two factor authentication which
            can be found here: <a href=""></a>
          </p>
          <p className="para1 head2">You are responsible for:</p>
          <p className="para1">
            Maintaining the security of your Account and/or password including
            (without limitation) by keeping passwords for your Account secure,
            frequently changing your password and keeping it confidential; and
          </p>
          <p className="para1">
            Implementing two factor authentication on your Account.
          </p>
        </div>

        <div>
          <h2 className="para1 head2">NO RELIANCE ON INFORMATION</h2>

          <p className="para1">
            Reasonable skill and care has been used in producing the Website but
            it is only designed for general information purposes. No guarantee
            is given by us or our suppliers that the Website (including any
            statistics contained on the Website) is accurate, complete or
            up-to-date. We therefore disclaim all liability and responsibility
            arising from any reliance placed on the content of the Website by
            you, or by anyone who may be informed of the Websitem contents.
          </p>
        </div>
        <div>
          <h2 className="para1 head2">VIRUSES</h2>
          <p className="para1">
          &#x2022;We and our suppliers take reasonable precautions to prevent computer
            viruses, trojan horses, worms, time bombs, cancelbots, corrupted
            files, or any other items that may damage the operation of computers
            or property or otherwise engage in computer misuse ("Malicious
            Programmes") on the Website but cannot accept any liability for
            them. You are advised to take precautions against such Malicious
            Programmes, including the use of suitable protective software.
          </p>
        </div>

        <div>
          <h2 className="para1 head2">YOUR LAWFUL USE OF THE WEBSITE</h2>
          <p className="para1">
          &#x2022; You must not misuse the Website by knowingly introducing Malicious
            Programmes. You must not attempt to gain unauthorised access to the
            Website, the server on which the Website is stored or any server,
            computer or database connected to the Website. You must not attack
            the Website via a denial-of-service attack or a distributed
            denial-of-service attack. By breaching this provision, you would
            commit a criminal offence under the Computer Misuse Act 1990. We
            will report any such breach to the relevant law enforcement
            authorities and will co-operate with those authorities by disclosing
            your identity to them. In the event of such a breach, your right to
            use the Website will cease immediately.
          </p>
        </div>

        <div>
          <h2 className="para1 head2">GOVERNING LAW</h2>
          <p className="para1">
          &#x2022;These Terms of Use are governed by and interpreted in accordance
            with the laws of india. Any disputes arising under or in
            connection with these terms shall be subject to the non-exclusive
            jurisdiction of the indian courts.
          </p>
        </div>

        <div>
          <h2 className="para1 head2">CONTACT US</h2>
          <p className="paraLastt">
          &#x2022;If you have any concerns about material which appears on the
            Website, please contact us at: <a href="https://www.qubinetsinteriors.com/">
                  Qubinets Interiors
                </a>.
          </p>
        </div>
      </div>
      <Footer />
      </>
    
  );
}
export default TermCondition;