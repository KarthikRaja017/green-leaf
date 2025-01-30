from root.users.createAccount import CreateAccount, LoginAccount
from root.users.otp import GenerateOtp, OtpVerification
from root.users.profile import ProfileSetup
from . import users_api


# users_api.add_resource(GenerateOtp, "/server/api/generate/OTP")
# users_api.add_resource(OtpVerification, "/server/api/verification/OTP")
# users_api.add_resource(ProfileSetup, "/server/api/profile/setup")
users_api.add_resource(CreateAccount, "/server/api/create-Account")
users_api.add_resource(LoginAccount, "/server/api/login-Account")
