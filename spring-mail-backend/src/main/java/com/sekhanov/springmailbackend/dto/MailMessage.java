package com.sekhanov.springmailbackend.dto;

import javax.validation.constraints.NotBlank;

import com.sekhanov.springmailbackend.validation.Emails;



public class MailMessage {

    @NotBlank(message = "field 'subject' cant be blank")
    private String subject;
    @NotBlank(message = "field 'fromEmail' cant be blank")
    private String fromEmail;
    @Emails
    @NotBlank(message = "field 'toEmail' cant be blank")
    private String toEmailList;
    @NotBlank(message = "field 'textMessage' cant be blank")
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
    

    /**
     * @return String return the toEmailList
     */
    public String getToEmailList() {
        return toEmailList;
    }

    /**
     * @param toEmailList the toEmailList to set
     */
    public void setToEmailList(String toEmailList) {
        this.toEmailList = toEmailList;
    }

}