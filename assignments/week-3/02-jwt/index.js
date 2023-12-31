const jwt = require('jsonwebtoken'); // Importing the 'jsonwebtoken' library for JWT operations
const jwtPassword = 'secret'; // Setting the secret key for JWT signing

// Importing the 'zod' library for schema validation
const z = require('zod');

/**
 * Generates a JWT for a given username and password.
 *
 * @param {string} username - The username to be included in the JWT payload.
 *                            Must be a valid email address.
 * @param {string} password - The password to be included in the JWT payload.
 *                            Should meet the defined length requirement (e.g., 6 characters).
 * @returns {string|null} A JWT string if the username and password are valid.
 *                        Returns null if the username is not a valid email or
 *                        the password does not meet the length requirement.
 */
const emailSchema = z.string().email(); // Creating a schema for validating email format
const passwordSchema = z.string().min(6); // Creating a schema for password length validation

function signJwt(username, password) {
    // Validating username and password against defined schemas
    const validUsername = emailSchema.safeParse(username);
    const validPassword = passwordSchema.safeParse(password);

    // If either username or password fails validation, return null
    if (validUsername.error || validPassword.error) {
        return null;
    }

    // Generating a JWT with the provided username and the secret key
    let token = jwt.sign({ username: username }, jwtPassword);
    return token;
}

/**
 * Verifies a JWT using a secret key.
 *
 * @param {string} token - The JWT string to verify.
 * @returns {boolean} Returns true if the token is valid and verified using the secret key.
 *                    Returns false if the token is invalid, expired, or not verified
 *                    using the secret key.
 */
function verifyJwt(token) {
    let flag = true;
    try {
        // Verifying the token using the provided secret key
        jwt.verify(token, jwtPassword);
    } catch (e) {
        // If verification fails, set the flag to false
        flag = false;
    }
    return flag; // Returning the flag indicating verification status
}

/**
 * Decodes a JWT to reveal its payload without verifying its authenticity.
 *
 * @param {string} token - The JWT string to decode.
 * @returns {boolean} True if the token is a valid JWT format.
 *                    Returns false if the token is not a valid JWT format.
 */
function decodeJwt(token) {
    // Decoding the token to extract its payload without verification
    let decoded = jwt.decode(token);

    // If decoding returns a payload (valid JWT format), return true; otherwise, return false
    if (decoded) {
        return true;
    } else {
        return false;
    }
}

module.exports = {
    signJwt,
    verifyJwt,
    decodeJwt,
    jwtPassword,
};
