package com.example.application.endpoints.helloworld;

import com.fasterxml.jackson.annotation.JsonFormat;
import dev.hilla.Nonnull;
import jakarta.validation.constraints.NotBlank;
import lombok.Value;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDateTime;

@Value
public class TestObj {

    boolean enabled;

    @Nonnull
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "MM/dd/yyyy hh:mm")
    LocalDateTime timestamp;

    @Nonnull
    @NotBlank
    String name;
}
