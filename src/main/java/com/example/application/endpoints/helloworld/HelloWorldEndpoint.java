package com.example.application.endpoints.helloworld;

import com.vaadin.flow.server.auth.AnonymousAllowed;
import dev.hilla.Endpoint;
import dev.hilla.Nonnull;

import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.List;

@Endpoint
@AnonymousAllowed
public class HelloWorldEndpoint {

    @Nonnull
    public List<@Nonnull TestObj> getTestObjects() {
        return Arrays.asList(
                new TestObj(true, LocalDateTime.now(), "Name1"),
                new TestObj(false, LocalDateTime.now(), "")
        );
    }

}