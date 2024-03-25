import React, { useState, useEffect } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import { Newsletter } from "./Newsletter";

export const MailchimpForm = () => {
  const [envVariables, setEnvVariables] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEnvVariables = async () => {
      try {
        const response = await fetch("/.netlify/functions/mailChimp");
        if (!response.ok) {
          throw new Error(`Failed to fetch environment variables: ${response.statusText}`);
        }
        const data = await response.json();
        setEnvVariables(data.envVariables);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching environment variables:", error);
        setLoading(false);
      }
    };

    fetchEnvVariables();
  }, []);

  if (loading) {
    return <p>Loading...</p>; // You might want to render a loading indicator while fetching data
  }

  const postUrl = `${envVariables.MAILCHIMP_URL}?u=${envVariables.MAILCHIMP_U}&id=${envVariables.MAILCHIMP_ID}`;

  return (
    <MailchimpSubscribe
      url={postUrl}
      render={({ subscribe, status, message }) => (
        <Newsletter
          status={status}
          message={message}
          onValidated={formData => subscribe(formData)}
        />
      )}
    />
  );
};
