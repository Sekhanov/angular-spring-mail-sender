package com.sekhanov.springmailbackend.dta;

import javax.validation.constraints.NotBlank;



public class MailMessage {

    @NotBlank(message = "field cant be blank")
    private String subject;
    private String fromEmail;
    // @Emails
    @NotBlank(message = "field cant be blank")
    private String toEmails;
    @NotBlank(message = "field cant be blank")
    private String textMessage;

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public String getFromEmail() {
        return fromEmail;
    }

    public void setFromEmail(String fromEmail) {
        this.fromEmail = fromEmail;
    }

    public String getToEmails() {
        return toEmails;
    }

    public void setToEmails(String toEmails) {
        this.toEmails = toEmails;
    }

    public String getTextMessage() {
        return textMessage;
    }

    public void setTextMessage(String textMessage) {
        this.textMessage = textMessage;
    }

    
}