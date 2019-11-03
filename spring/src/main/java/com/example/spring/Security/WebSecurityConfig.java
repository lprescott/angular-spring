package com.example.spring.Security;

import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.csrf.CookieCsrfTokenRepository;

@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {


    /* https://docs.spring.io/spring-security/site/docs/current/guides/html5/form-javaconfig.html

        We configure CSRF protection by setting a .crsfTokenRepository().

        Such a repository implements a protection strategy and CookieCsrfTokenRepository is an implementation of
        the Cookie-to-Header Token technique.

        We create the repository .withHttpOnlyFalse() so that cookies are readable by a JavaScript application in
        the web browser.

    */
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
            .authorizeRequests()
                .anyRequest().authenticated()
                .and()
            .formLogin()
                //.loginPage("/login")
                //.permitAll()
                .and()
            .httpBasic()
                .and()
            .csrf()
                .csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse());
    }
}
