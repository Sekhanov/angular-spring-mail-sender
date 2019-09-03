package com.sekhanov.springmailbackend;

import com.sekhanov.springmailbackend.dto.MailMessage;
import com.sekhanov.springmailbackend.service.MailService;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class DemoApplicationTests {

	@Autowired
	private MailService mailService;

	@Test
	public void contextLoads() {	
	}

	@Test
	public void sendTestMail() {
		MailMessage mailMessage = new MailMessage();
        mailMessage.setFromEmail("s.khanov@agroexpert2007.ru");
        mailMessage.setSubject("hello!");
        mailMessage.setToEmail("sekhanov@gmail.com");
		mailMessage.setTextMessage("bla bla bla");
		mailService.sendMail(mailMessage);	
	}


}
