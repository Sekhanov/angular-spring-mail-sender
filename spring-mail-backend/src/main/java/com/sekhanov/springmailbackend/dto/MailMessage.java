package com.sekhanov.springmailbackend.dto;

import javax.validation.constraints.NotBlank;



public class MailMessage {

    @NotBlank(message = "field cant be blank")
    private String subject;
    private String fromEmail;
    // @Emails
    @NotBlank(message = "field cant be blank")
    private String toEmail;
    @NotBlank(message = "field cant be blank")
    private String textMessage;
    

    /**
     * @return String return the subject
     */
    public String getSubject() {
        return subject;
    }

    /**
     * @param subject the subject to set
     */
    public void setSubject(String subject) {
        this.subject = subject;
    }

    /**
     * @return String return the fromEmail
     */
    public String getFromEmail() {
        return fromEmail;
    }

    /**
     * @param fromEmail the fromEmail to set
     */
    public void setFromEmail(String fromEmail) {
        this.fromEmail = fromEmail;
    }

    /**
     * @return String return the toEmail
     */
    public String getToEmail() {
        return toEmail;
    }

    /**
     * @param toEmail the toEmail to set
     */
    public void setToEmail(String toEmail) {
        this.toEmail = toEmail;
    }

    /**
     * @return String return the textMessage
     */
    public String getTextMessage() {
        return textMessage;
    }

    /**
     * @param textMessage the textMessage to set
     */
    public void setTextMessage(String textMessage) {
        this.textMessage = textMessage;
    }

}