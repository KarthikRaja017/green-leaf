import { Button, Form, Input, message, notification } from 'antd';
import { useEffect, useRef, useState } from 'react';
import RestaurantDetailsPage from '../details';
import { generateOtp, otpVerification } from './service';
import './styles.css';

const OtpVerificationPage = () => {
  const [otp, setOtp] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [otpRequest, setOtpRequest] = useState('');
  const [isFlipped, setIsFlipped] = useState(false);
  const [isVerified, setIsVerified] = useState(false); // State to check if OTP is verified
  const [countdown, setCountdown] = useState(30);
  const [isResendDisabled, setIsResendDisabled] = useState(true);

  const handleMobileSubmit = async () => {
    if (mobileNumber.length === 10) {
      const { status, class: className, message, payload } = await generateOtp({ mobileNumber });
      if (status) {
        notification.success({ message });
        setOtpRequest(payload);
        setIsFlipped(true);
        startCountdown();
      }
    } else {
      message.error('Please enter a valid mobile number.');
    }
  };

  const handleOtpSubmit = async () => {
    if (otp.length === 6) {
      const {
        status,
        class: className,
        message,
      } = await otpVerification({
        otp,
        otpRequest,
        mobileNumber,
      });
      if (status) {
        notification.success({ message });
        setIsVerified(true); // Mark OTP as verified
      } else {
        notification.error({ message });
      }
    } else {
      message.error('Invalid OTP');
    }
  };

  const handleResendOtp = async () => {
    setIsResendDisabled(true);
    setCountdown(30);
    const { status, message, payload } = await generateOtp({ mobileNumber });
    if (status) {
      notification.success({ message });
      setOtpRequest(payload);
      startCountdown();
    } else {
      message.error('Failed to resend OTP.');
    }
  };

  const startCountdown = () => {
    setIsResendDisabled(true);
    let timer = 30; // Initial countdown value
    const countdownInterval = setInterval(() => {
      setCountdown((prev) => {
        if (prev === 1) {
          clearInterval(countdownInterval);
          setIsResendDisabled(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  // Start countdown when flipped to OTP page
  useEffect(() => {
    if (isFlipped) {
      startCountdown();
    }
  }, [isFlipped]);

  // Conditionally render the RestaurantDetailsPage after OTP verification
  if (isVerified) {
    return <RestaurantDetailsPage otpRequest={otpRequest} />;
  }

  return (
    <div className="otp-container">
      <div className={`otp-card ${isFlipped ? 'flipped' : ''}`}>
        {/* Mobile Number Input Section */}
        <div className="otp-side otp-front">
          <div className="otp-header">
            <h2>Enter Mobile Number</h2>
            <p>Please enter your mobile number to receive OTP.</p>
          </div>
          <Form onFinish={handleMobileSubmit} className="otp-form">
            <Input
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              maxLength={10}
              className="otp-input"
              placeholder="Enter Mobile Number"
            />
            <Button type="primary" htmlType="submit" className="otp-submit-btn">
              Request OTP
            </Button>
          </Form>
        </div>
        {/* OTP Input Section */}
        <div className="otp-side otp-back">
          <div className="otp-header">
            <h2>Enter OTP</h2>
            <p>We've sent an OTP to your mobile number.</p>
          </div>
          <Form onFinish={handleOtpSubmit} className="otp-form">
            <OTPInput length={6} onChange={setOtp} onComplete={setOtp} />
            <Button type="primary" htmlType="submit" className="otp-submit-btn">
              Verify OTP
            </Button>
          </Form>
          <div className="footer-links">
            <Button
              type="link"
              // className="resend-otp"
              disabled={isResendDisabled}
              onClick={handleResendOtp}
              style={{ color: 'white' }}
            >
              {isResendDisabled ? `Resend OTP in ${countdown}s` : 'Resend OTP'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtpVerificationPage;

const OTPInput = ({ length = 6, onChange, onComplete }) => {
  const [otp, setOtp] = useState(new Array(length).fill(''));
  const inputRefs = useRef([]);

  const handleChange = (element, index) => {
    const value = element.target.value.replace(/[^0-9]/g, ''); // Only allow numbers
    if (value.length > 1) return; // Prevent entering more than 1 character in each input

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Trigger onChange callback for parent components
    onChange(newOtp.join(''));

    // Focus on next input if the current one is filled
    if (value && index < length - 1) {
      inputRefs.current[index + 1].focus();
    }

    // If all inputs are filled, trigger onComplete callback
    if (newOtp.every((digit) => digit !== '')) {
      onComplete(newOtp.join(''));
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace') {
      const newOtp = [...otp];
      newOtp[index] = '';
      setOtp(newOtp);
      if (index > 0) {
        inputRefs.current[index - 1].focus();
      }
    }
  };

  const handleFocus = (index) => {
    inputRefs.current[index].select();
  };

  return (
    <div className="otp-input-wrapper">
      {otp.map((data, index) => (
        <Input
          key={index}
          value={data}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          onFocus={() => handleFocus(index)}
          ref={(el) => (inputRefs.current[index] = el)}
          maxLength={1}
          className="otp-input-box"
        />
      ))}
    </div>
  );
};
