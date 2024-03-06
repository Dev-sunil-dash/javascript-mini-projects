function calculateInterest() {
    let pAmt = parseFloat(document.getElementById('pAmt').value);
    let time = parseFloat(document.getElementById('time').value);
    let roi = parseFloat(document.getElementById('roi').value);

    const simpleInterest = (pAmt * time * roi) / 100;
    const totalAmount = pAmt + simpleInterest;
    document.getElementById('sInt').innerHTML = `Simple Interest is : ${simpleInterest}`;
    document.getElementById('tAmt').innerHTML = `total Amount is : ${totalAmount}`;
}
