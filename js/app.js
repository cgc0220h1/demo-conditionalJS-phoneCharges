function chargeCal() {
    let calTimer1 = +document.getElementById('prov-time').value;
    let calTimer2 = +document.getElementById('intercom-time').value;
    let  total = 20000 + calTimer1 * 200 + calTimer2 * 100;
    document.getElementById('result').innerText = "Tháng này của bạn hết: " + total + "VND";
}
