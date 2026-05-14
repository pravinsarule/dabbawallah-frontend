// components/OTPVerification.js
import { useState } from "react";
import { verifyOtp, sendOtp } from "../../services/api";
import { toast } from "react-toastify";

const OTPVerification = ({ email, onSuccess, onClose }) => {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false);

  const handleResend = async () => {
    setResending(true);
    setError("");
    try {
      await sendOtp({ email });
      toast.success("OTP sent successfully to your email.");
    } catch (err) {
      const msg = err?.message || err?.response?.data?.message || "Failed to resend OTP.";
      setError(msg);
    } finally {
      setResending(false);
    }
  };

  const handleVerify = async () => {
    setLoading(true);
    setError("");

    try {
      const data = await verifyOtp({ email, otp });
      const user = data?.data?.user;
      const token = data?.token;
      if (!user || !token) throw new Error("OTP verified but missing login data");

      if (onSuccess) onSuccess(user, token);
    } catch (err) {
      const msg = err?.message || err?.response?.data?.message || "Verification failed. Please try again.";
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
        <button
          className="absolute top-2 right-2 text-gray-600"
          onClick={onClose}
        >
          ✖
        </button>
        <h2 className="text-xl font-semibold mb-4 text-center text-saffron-700">
          OTP Verification
        </h2>

        {error && (
          <p className="text-red-500 text-sm text-center mb-2">{error}</p>
        )}

        <input
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          className="w-full p-2 border border-orange-300 rounded mb-2 outline-none focus:ring-2 focus:ring-saffron-500/50"
        />

        <button
          onClick={handleVerify}
          disabled={loading}
          className="bg-gradient-to-br from-saffron-500 to-saffron-600 text-white px-4 py-2 rounded mt-3 w-full font-bold hover:shadow-lg transition-all"
        >
          {loading ? "Verifying..." : "Verify OTP"}
        </button>

        <button
          onClick={handleResend}
          disabled={resending}
          className="text-saffron-600 text-sm mt-4 w-full text-center hover:underline font-semibold"
        >
          {resending ? "Resending..." : "Resend OTP"}
        </button>
      </div>
    </div>
  );
};

export default OTPVerification;
