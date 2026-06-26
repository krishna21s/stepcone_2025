import { useState, useEffect, FormEvent } from 'react';
import axios from 'axios';
import QRCode from 'qrcode';
import { X, AlertCircle } from 'lucide-react';
import './PaymentGateway.css';

interface PaymentGatewayProps {
  amount?: string;
  teamId?: string;
}

const Qr_payment_gateway = ({ amount = '1', teamId }: PaymentGatewayProps) => {
  const [qrCodeUrl, setQrCodeUrl] = useState<string>('');
  const [paymentApp, setPaymentApp] = useState<'googlepay' | 'phonepe'>('googlepay');
  const [transactionId, setTransactionId] = useState('');
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    // Generate QR code on component mount
    const upiID = "QR916302282603-1155@unionbankofindia";
    const upiURL = `upi://pay?pa=${upiID}&am=${amount}&cu=INR`;
    
    QRCode.toDataURL(upiURL, {
      width: 200,
      height: 200,
      margin: 2,
    })
    .then(url => setQrCodeUrl(url))
    .catch(err => console.error('Error generating QR code:', err));

    // Prevent page refresh
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = "Are you sure you want to refresh? This may cause duplicate entries.";
      return e.returnValue;
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    // Prevent back navigation
    window.history.pushState(null, '', window.location.href);
    const handlePopState = () => {
      window.history.pushState(null, '', window.location.href);
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      window.removeEventListener('popstate', handlePopState);
    };
  }, [amount]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Validate transaction ID length
    if (transactionId.length !== 12) {
      const fieldName = paymentApp === 'phonepe' ? 'UTR Number' : 'UPI Transaction ID';
      setErrorMessage(`Invalid ${fieldName}, It must be 12 digits.`);
      setShowError(true);
      return;
    }

    try {
      const response = await axios.post('/qr_event_verification.php', {
        upi_id: transactionId,
        teamId,
      });

      if (response.data.status === 'success') {
        alert('Transaction verification initiated!');
        setTransactionId('');
      } else {
        setErrorMessage(response.data.message || 'Transaction verification failed');
        setShowError(true);
      }
    } catch (error) {
      setErrorMessage('Error verifying transaction. Please try again.');
      setShowError(true);
    }
  };

  return (
    <div className="pg-container">
      <div className="pg-payment-card">
        <div className="pg-header">
          <h1>EVENT REGISTRATION</h1>
          <p>Scan QR code and enter transaction details below</p>
        </div>

        <div className="pg-qr-container">
          <div className="pg-qr-placeholder">
            {qrCodeUrl && <img src={qrCodeUrl} alt="Payment QR Code" />}
          </div>
        </div>

        <form className="pg-transaction-form" onSubmit={handleSubmit}>
          <div className="pg-form-group">
            <label htmlFor="paymentApp">Select Payment App</label>
            <select
              id="paymentApp"
              className="pg-payment-select"
              value={paymentApp}
              onChange={(e) => setPaymentApp(e.target.value as 'googlepay' | 'phonepe')}
              required
            >
              <option value="googlepay">Google Pay</option>
              <option value="phonepe">PhonePe</option>
            </select>
          </div>

          <div className="pg-form-group">
            <label htmlFor="transactionId">
              {paymentApp === 'phonepe' ? 'UTR Number' : 'UPI Transaction ID'}
            </label>
            <input
              type="number"
              id="transactionId"
              placeholder={`Enter ${paymentApp === 'phonepe' ? 'UTR Number' : 'UPI Transaction ID'} (COPY AND PASTE)`}
              value={transactionId}
              onChange={(e) => setTransactionId(e.target.value)}
              required
            />
          </div>

          <div className="pg-payment-note">
            <h4>NOTE:</h4>
            <p>A message will appear (In profile page) indicating that verification is in progress and will be completed within one working day.</p>
          </div>

          <button type="submit" className="pg-submit-button">
            Verify Transaction
          </button>
        </form>
      </div>

      {showError && (
        <div className="pg-error-popup show">
          <div className="pg-error-content">
            <button className="pg-close-button" onClick={() => setShowError(false)}>
              <X size={20} />
            </button>
            <div className="pg-error-message">
              <AlertCircle size={32} />
              <div>
                <h3>Error</h3>
                <p>{errorMessage}</p>
              </div>
            </div>
            <button className="pg-close-popup-button" onClick={() => setShowError(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Qr_payment_gateway;