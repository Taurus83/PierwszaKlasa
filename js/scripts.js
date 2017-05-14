function Telefon(marka, cena, kolor, pamięć) {
	this.marka = marka; //dzięki użyciu this, właściwość "marka" obiektu, który stworzymy, przyjmie wartość argumentu marka
	this.cena = cena;
	this.kolor = kolor;
	this.pamięć = pamięć;
}

Telefon.prototype.printInfo = function() {
	console.log("Marka telefonu to " + this.marka + ", kolor to " + this.kolor + ", cena to " + this.cena + ", a pamięć to " + this.pamięć + ".");
}

var SamsungGalaxyS6 = new Telefon("Samsung", 1800, "brunatny", "64 GB");
var iPhone6S = new Telefon("Apple", 2250, "srebrny", "32 GB");
var OnePlusOne = new Telefon("OnePlus", 1500, "czarny", "16 GB");

SamsungGalaxyS6.printInfo();
iPhone6S.printInfo();
OnePlusOne.printInfo();