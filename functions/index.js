/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {setGlobalOptions} = require("firebase-functions");
const {onDocumentCreated} = require("firebase-functions/v2/firestore");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");

admin.initializeApp();

const GMAIL_USER = "elisareine.a.goncalves@gmail.com";
const GMAIL_PASS = "mijk fbul deau rcju";

const mailTransport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: GMAIL_USER,
    pass: GMAIL_PASS,
  },
});

// Break up the long export line for max-len compliance
exports.notifyNewMessage =
  onDocumentCreated("messages/{docId}", async (event) => {
    const data = event.data.data();
    const mailOptions = {
      from: `Portfolio Contact <${GMAIL_USER}>`,
      to: GMAIL_USER,
      subject: "New Contact Form Submission",
      text:
        `\nName: ${data.user_name}\n` +
        `Email: ${data.user_email}\n` +
        `Message: ${data.message}\n`,
    };

    try {
      await mailTransport.sendMail(mailOptions);
      console.log("Email sent to", GMAIL_USER);
    } catch (error) {
      console.error("There was an error while sending the email:", error);
    }
    return null;
  });

setGlobalOptions({maxInstances: 10});
