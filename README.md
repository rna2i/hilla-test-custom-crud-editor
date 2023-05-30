# Issues

Java TestObj

    @Value
    public class TestObj {

        boolean enabled;

        @Nonnull
        LocalDateTime timestamp;

        @Nonnull
        @NotBlank
        String name;
    }

- boolean property is not mapped to checkbox in CRUD editor
- timestamp is not set in CRUD editor
- validation rules are not respected by CRUD editor 