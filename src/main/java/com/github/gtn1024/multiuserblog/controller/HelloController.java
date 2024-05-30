package com.github.gtn1024.multiuserblog.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.Instant;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/")
public class HelloController {
    @GetMapping("hello")
    public Map<String, Object> hello() {
        Map<String, Object> map = new HashMap<>();
        map.put("message", "Hello, world!");
        map.put("currentTime", Instant.now());
        return map;
    }
}
