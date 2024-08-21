package lk.ijse.jwtauthentication.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/blog")
public class BlogController {
    @GetMapping("/newMethod")
    public String newMethod(){
        return "HI";
    }
}