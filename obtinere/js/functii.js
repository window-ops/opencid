function obtineopenciddincnp(cnp) {
  var openCID = '';
  var nrCifre = 20;

  // Verifică dacă CNP-ul introdus are 13 cifre
  if (cnp.length === 13 && !isNaN(cnp)) {
    // Parcurge fiecare cifră din CNP
    for (var i = 0; i < cnp.length; i++) {
      // Converteste cifra din CNP la număr și înmulțește cu 47
      var cifraInmultita = parseInt(cnp[i]) * 47;
      // Adaugă cifrele rezultate la OpenCID
      openCID += cifraInmultita;
    }

    // Repetă primele cifre până când sunt [nrCifre] de cifre dacă sunt mai puțin de [nrCifre] de cifre
    while (openCID.length < nrCifre) {
      openCID += openCID;
    }

    // Elimină ultimele cifre până se ajunge la [nrCifre] de cifre dacă sunt peste [nrCifre] de cifre
    openCID = openCID.slice(0, nrCifre);

    // Returnează OpenCID-ul obtinut
    return openCID;
  } else {
    // Returnează un mesaj de eroare dacă CNP-ul introdus nu are 13 cifre sau nu este un număr
    return 'CNPInvalid';
  }
}
function afiseazaopencid() {
  var cnp = document.getElementById('cnpinput').value; // Obține CNP-ul introdus de utilizator
  var openCID = obtineopenciddincnp(cnp); // Obține OpenCID-ul
  if (openCID === 'CNPInvalid') {
    alert('Vă rugăm să introduceți un CNP valid de 13 cifre!');
  } else {
    document.getElementById('opencidobtinutinput').value = openCID;
  }
}
