package com.example.spring.note.model;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity             // This tells Hibernate to make a table out of this class

@NoArgsConstructor  // Constructors made to order: Generates constructors that take no arguments, one argument per
@AllArgsConstructor // final / non-nullfield, or one argument for every field.

@Data               // All together now: A shortcut for @ToString, @EqualsAndHashCode, @Getter on all fields, and
                    // @Setter on all non-final fields, and @RequiredArgsConstructor!
public class Note {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NonNull
    private String title;

    @NonNull
    private String text;
}
