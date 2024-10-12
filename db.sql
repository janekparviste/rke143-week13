CREATE TABLE users (
    id serial PRIMARY KEY,
    username TEXT,
    password TEXT
);

SELECT * FROM users;

INSERT INTO users (username)
VALUES 
('harry');

                db.query('INSERT INTO users (username, password) VALUES ($1, $2)', [user.username, user.password]);