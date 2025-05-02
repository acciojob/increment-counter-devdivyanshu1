//your JS code here. If required.
<script>
        let counterValue = 0;
        
        const counterElement = document.getElementById('counter');
        const incrementBtn = document.getElementById('incrementBtn');
        
        incrementBtn.addEventListener('click', () => {
            // Show alert with the current counter value before incrementing
            alert(`Current value: ${counterValue}`);
            

            counterValue++;
            counterElement.textContent = counterValue;
        });
    </script>