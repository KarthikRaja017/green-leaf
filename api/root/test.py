import secrets

# Generate a 64-character random string
secure_key = secrets.token_hex(32)  # 32 bytes = 64 characters in hexadecimal
print(secure_key)