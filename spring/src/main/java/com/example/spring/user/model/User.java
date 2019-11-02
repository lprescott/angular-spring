package com.example.spring.user.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity             // This tells Hibernate to make a table out of this class

@NoArgsConstructor  // Constructors made to order: Generates constructors that take no arguments, one argument per
@AllArgsConstructor // final / non-nullfield, or one argument for every field.

@Data               // All together now: A shortcut for @ToString, @EqualsAndHashCode, @Getter on all fields, and
                    // @Setter on all non-final fields, and @RequiredArgsConstructor!
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NonNull
    private String username;

    @NonNull
    private String password;
}
