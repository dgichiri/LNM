document.addEventListener('DOMContentLoaded', function() {
    const payButton = document.getElementById('payButton');
    
    payButton.addEventListener('click', payWithPaystack);
    
    function payWithPaystack() {
      const ref = 'Purchase Plot254 Issue_' + Date.now();
      
      const handler = PaystackPop.setup({
        key: '', 
        email: 'customer@example.com', 
        amount: 1000, 
        currency: 'KES',
        ref: ref,
        label: "Plot 254 Payment",
        callback: function(response) {
          alert(`Payment successful! Reference: ${response.reference}`);
        },
        onClose: function() {
          alert('Payment was not completed. You can try again.');
        }
      });
      
      handler.openIframe();
    }
  });
