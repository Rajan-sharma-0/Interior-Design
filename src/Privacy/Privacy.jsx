import React from "react";
import ReactDOM from "react-dom";
import "./Privacy.css";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from '../Components/Footer/Footer'; 

const Privacy = () => {
  const location = useLocation();

  return (
    <div className="privacy-container">
      <div>
        <div className="heading">
          <h1 className="main">Privacy Policy</h1>
        </div>
        <div>
          <div className="heading2">
            <h2 className="main-head">SECTION 1</h2>
            <p className="main-head2">
            
              - WHAT DO WE DO WITH YOUR INFORMATION?
            </p>
          </div>
          <p className=" para11">
          &#x2022;When you purchase something from our store, as part of the buying
            and selling process, we collect the personal information you give us
            such as your name, address and email address.
          </p>
          <p className="para1">
          &#x2022;When you browse our store, we also automatically receive your
            computers internet protocol (IP) address in order to provide us with
            information that helps us learn about your browser and operating
            system.
          </p>
          <p className="para1">
          &#x2022;Email marketing (if applicable): With your permission, we may send
            you emails about our store, new products and other updates
          </p>
        </div>

        <div>
          <div className="heading2">
            <h2 className="main-head">SECTION 2</h2>
            <p className="main-head2"> - CONSENT</p>
          </div>
          <p className="para11">
          &#x2022;When you provide us with personal information to complete a
            transaction, verify your credit card, place an order, arrange for a
            delivery or return a purchase, we imply that you consent to our
            collecting it and using it for that specific reason only. If we ask
            for your personal information for a secondary reason, like
            marketing, we will either ask you directly for your expressed
            consent, or provide you with an opportunity to say no.
          </p>
          <p className="para1">How do I withdraw my consent?</p>
          <p className="para1">
          &#x2022;If after you opt-in, you change your mind, you may withdrawing your
            consent for us to contact you, for the continued collection, use or
            disclosure of your information, at anytime, by contacting us at
            info@woodstage.in or mailing us at: WOOD STAGE.
          </p>
        </div>

        <div>
          <div className="heading2">
            <h2 className="main-head">SECTION 3</h2>
            <p className="main-head2"> - DISCLOSURE</p>
          </div>
          <p className="para11">
          &#x2022;We may disclose your personal information if we are required by law
            to do so or if you violate our Terms of Service.
          </p>
        </div>

        <div>
          <div className="heading2">
            <h2 className="main-head">SECTION 4</h2>
            <p className="main-head2">  - Hostinger</p>
          </div>
          <p className="para11">
          &#x2022;Our store is hosted on Hostinger. They provide us with the online
            e-commerce platform that allows us to sell our products and services
            to you.
          </p>
          <p className="para1">
            &#x2022;our data is stored through Hostinger’s data storage, databases and
            the general Hostinger application. They store your data on a secure
            server behind a firewall.
          </p>
          <p className="para1">Payment:</p>

          <p className="para1">
          &#x2022;If you choose a direct payment gateway to complete your purchase,
            then Hostinger stores your credit card data. It is encrypted through
            the Payment Card Industry Data Security Standard (PCI-DSS). Your
            purchase transaction data is stored only as long as is necessary to
            complete your purchase transaction. After that is complete, your
            purchase transaction information is deleted.
          </p>

          <p className="para1">
          &#x2022;All direct payment gateways adhere to the standards set by PCI-DSS
            as managed by the PCI Security Standards Council, which is a joint
            effort of brands like Visa, MasterCard, American Express and
            Discover.{" "}
          </p>

          <p className="para1">
            
          &#x2022;PCI-DSS requirements help ensure the secure handling of credit card
            information by our store and its service providers.
          </p>
          <p className="para1">
          &#x2022;All orders are prepaid orders. In case the order is initially placed
            with payment of an advance amount less than the full order value,
            the balance payment needs to cleared before dispatch to mark order
            as paid and fulfill order thereof.
          </p>
        </div>

        <div>
          <div className="heading2">
            <h2 className="main-head">SECTION 5</h2>
            <p className="main-head2"> - THIRD-PARTY SERVICES</p>
          </div>
          <p className="para11">
          &#x2022;In general, the third-party providers used by us will only collect,
            use and disclose your information to the extent necessary to allow
            them to perform the services they provide to us.
          </p>
          <p className="para1">
          &#x2022;However, certain third-party service providers, such as payment
            gateways and other payment transaction processors, have their own
            privacy policies in respect to the information we are required to
            provide to them for your purchase-related transactions.
          </p>
          <p className="para1">
          &#x2022;For these providers, we recommend that you read their privacy
            policies so you can understand the manner in which your personal
            information will be handled by these providers.
          </p>

          <p className="para1">
          &#x2022;In particular, remember that certain providers may be located in or
            have facilities that are located a different jurisdiction than
            either you or us. So if you elect to proceed with a transaction that
            involves the services of a third-party service provider, then your
            information may become subject to the laws of the jurisdiction(s) in
            which that service provider or its facilities are located.
          </p>
          <p className="para1">
          &#x2022; Once you leave our store’s website or are redirected to a
            third-party website or application, you are no longer governed by
            this Privacy Policy or our website’s Terms of Service.
          </p>
        </div>

        <div>
          <div className="heading2">
            <h2 className="main-head">SECTION 6</h2>
            <p className="main-head2"> - SECURITY</p>
          </div>
          <p className="para11">
          &#x2022;To protect your personal information, we take reasonable precautions
            and follow industry best practices to make sure it is not
            inappropriately lost, misused, accessed, disclosed, altered or
            destroyed.
          </p>
          <p className="para1">
          &#x2022;If you provide us with your credit card information, the information
            is encrypted using secure socket layer technology (SSL) and stored
            with a AES-256 encryption. Although no method of transmission over
            the Internet or electronic storage is 100% secure, we follow all
            PCI-DSS requirements and implement additional generally accepted
            industry standards.
          </p>
        </div>

        <div>
          <div className="heading2">
            <h2 className="main-head">SECTION 7</h2>
            <p className="main-head2"> - COOKIES</p>
          </div>

          <p className="para11">
          &#x2022; Here is a list of cookies that we use. We’ve listed them here so you
            that you can choose if you want to opt-out of cookies or not.
          </p>

          <h3 className="para1">Strictly necessary cookies</h3>

          <p className="para1">
          &#x2022; These cookies are required for the operation of our Website. They
            include, for example, cookies that enable storage of information
            filled by you during the browsing session, enable you to log into
            secure areas of our Website. Without these cookies operation of the
            Website would be impossible or its functioning may be severely
            affected.
          </p>
          <h3 className="para1">Preferences / functional cookies</h3>
          <p className="para1">
          &#x2022;These improve the functional performance of our Website and make it
            easier for you to use. These cookies remember the settings selected
            by the Visitors (for example, the settings of language and time
            zone). With the use of these cookies, the Visitors may avoid the
            changes of settings during each visit of the Website. These cookies
            also remember changes made by you in the Website (for example, in
            case you leave comment on the Website). These cookies do not track
            your behavior in other websites
          </p>
        </div>

        <div>
          <div className="heading2">
            <h2 className="main-head">SECTION 8</h2>
            <p className="main-head2"> - AGE OF CONSENT</p>
          </div>

          <p className="para11">
          &#x2022;By using this site, you represent that you are at least the age of
            majority in your state or province of residence, or that you are the
            age of majority in your state or province of residence and you have
            given us your consent to allow any of your minor dependents to use
            this site.
          </p>
        </div>

        <div>
          <div className="heading2">
            <h2 className="main-head">SECTION 9</h2>
            <p className="main-head2">  - CHANGES TO THIS PRIVACY POLICY</p>
          </div>

          <p className="para11">
          &#x2022; We reserve the right to modify this privacy policy at any time, so
            please review it frequently. Changes and clarifications will take
            effect immediately upon their posting on the website. If we make
            material changes to this policy, we will notify you here that it has
            been updated, so that you are aware of what information we collect,
            how we use it, and under what circumstances, if any, we use and/or
            disclose it.
          </p>

          <p className="para1">
          &#x2022;If our store is acquired or merged with another company, your
            information may be transferred to the new owners so that we may
            continue to sell products to you.
          </p>
        </div>


        <div >
          <h2 className="main-head">QUESTIONS AND CONTACT INFORMATION</h2>
          <p className="para11"> &#x2022;If you would like to: access, correct, amend or delete any personal information we have about you, register a complaint, or simply want more information contact our Privacy Compliance Officer at info@woostage.in by mail at 
          WOOD STAGE</p>
          
        </div>

        <div >
          <h2 className="main-head">Returns / Refunds</h2>
          <p className="para11"> &#x2022;Any issues with the product have to be reported within 24 hours of receipt of products, with supporting pictures, to info@woodstage.in. If 24 hours have gone by since delivery, unfortunately we can’t offer you a refund or exchange.</p>
          <p className="para1"> &#x2022;In case of any Damage, defect, our liability is limited to the cost of furniture paid by the customer.</p>
          <p className="para1">&#x2022;Refunds are processed Online. Generally processed within 7 days of approved refund.

</p>
          <p className="para1">&#x2022;The order where, delivery of goods is pending for any reason arising of out from customers end will be treated and fulfilled and will not be eligible for any form of returns or replacement.</p>
        </div>


        <div  >
          <h2 className="main-head">Cancellation:</h2>
          <p className="para11">&#x2022;Since the products are made according to your order, and we have to maintain the fastest shipping time, Order once placed can only be cancelled within 12 hours of placing the order or before the order is put in production, whichever is earlier. Orders placed under any /all Special Sales or Specific Occassion Sales defined by an event / date or occasion for specified/limited time period are not eligible for cancellation.</p>
          <p className="para1" >&#x2022;Cancellation Charges ( Applicable on un-fulfilled order, for cancellation eligible order as stated above ):</p>
          <p className="paraLast">&#x2022;Cancellation charges of 4.5% of the order value is applicable subjected to a minimum of 1000 Rs. . These charges are waived off on Store Credit based cancellations.
          Cancellation charges for fulfilled orders are on order basis and thus will be apportioned as per the prevailing situations and status of the order.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Privacy;