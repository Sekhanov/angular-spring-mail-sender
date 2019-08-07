package com.sekhanov.springmailbackend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * RootRestController
 */
@RestController
@RequestMapping("/")
public class RootRestController {

    @GetMapping
    public String rootMessage() {        
        return "This is root of backend mail";
    }
}