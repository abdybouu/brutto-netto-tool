function berechnen() {
  const brutto = parseFloat(document.getElementById("brutto").value);
  const steuer = parseFloat(document.getElementById("steuer").value);

  if (isNaN(brutto)) {
    alert("Bitte gültigen Bruttobetrag eingeben.");
    return;
  }

  const netto = brutto / (1 + steuer / 100);
  const steuern = brutto - netto;

  document.getElementById("ergebnis").innerHTML = `
    Netto: ${netto.toFixed(2)} €<br>
    MwSt: ${steuern.toFixed(2)} €
  `;
}