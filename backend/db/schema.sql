CREATE TABLE users (
    id         BINARY(16)   NOT NULL DEFAULT (UUID_TO_BIN(UUID())),
    username   VARCHAR(50)  NOT NULL,
    password   VARCHAR(255) NOT NULL,
    CONSTRAINT pk_users     PRIMARY KEY (id),
    CONSTRAINT uq_username  UNIQUE INDEX (username)
);