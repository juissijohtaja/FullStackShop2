# Full Stack Websovelluskehitys - Harjoitustyö

Harjoitustyönä on toteutettu kuvitteellinen verkkokauppa ja sen ylläpitopuoli. Sivustolla on näkyvillä erilaisia tuotteita, joita asiakas voi listätä ostoskoriin ja tehdä tilauksen. Ylläpitoon voi kirjautua ja hallinnoida tuotteita sekä tilauksia.

Sovelluken käyttöliittymä on tehty Reactilla ja tietokantana on käytössä Firebase. Sivuston tilanhallinta on toteutettu Redux-storella ja ulkoasu on tehty Semantic UI (React) ja Styled components -kirjastoja hyödyntäen. Kuvat on hankittu Unsplash-kuvapankista ja logo on tehty FreeLogoDesign-palvelussa. Tekstisisällöt ovat omaa tuotantoa. 

Sivuston kehittämisessä käytettyjä ohjelmistoja ja työkaluja ovat olleet mm. Visual Studio Code, GitHub Desktop, Chrome ja sen laajennukset React Developer Tools, Redux DevTools, JSONView. Tuotetun koodin versionhallintaan on valjastettu GitHub ja laaduntarkkailuun Code Climate. Backlogia on hallinnoitu Trellolla ja tuntikirjanpito on tehty Google Docs Sheetsilla.

### Sovellus

[FullStackShop](https://fullstackshop.firebaseapp.com/)

### Tuntikirjanpito

[Tuntikirjanpito](https://docs.google.com/spreadsheets/d/10v7fwnziUzUEhIcxzUsMLEZp7PCKzS8y14R1sTwwY_0/edit?usp=sharing)

### Käyttöohjeet

- Mene sivustolle
  - sivusto toimii responsiivisesti, joten kokeile sivustoa eri päätelaitteilla tai muuta selainikkunan kokoa
  - https://fullstackshop.firebaseapp.com/

- Voit selata sivustoa navigaation avulla tai selailemalla tuotteita
  - https://fullstackshop.firebaseapp.com/tuotteet

- Avaa jokin tuotesivu
  - https://fullstackshop.firebaseapp.com/tuotteet/pentax-spotmatic
  - Suurenna kuva
  - Lisää tuote ostoskoriin
  - Klikkaa tagia

- Lisää yksi tai useampi tuote ostoskoriin

- Siirry ostoskoriin
  - https://fullstackshop.firebaseapp.com/ostoskori
  - Vaihda tuotteiden määrää, hinta päivittyy
  - Poista tuote ostoskorista

- Ostoskorisivulla täytä yhteystiedot ja klikkaa Lähetä tilaus -nappia
  - https://fullstackshop.firebaseapp.com/ostoskori
  - Tilaus tallentuu ja ostoskori tyhjenee

HUOM. alla annetuilla tai itse luoduilla tunnuksilla ei voi lisätä eikä poistaa tuotteita tai muutenkaan "hajottaa" mitään sivostolla, joten ylläpitoa voi testailla rauhassa

- Mene kirjautumissivulle 
  - https://fullstackshop.firebaseapp.com/kirjaudu
  - Täytä kenttiin seuraavat tunnukset (myös esitäytetty):
    - sähköpostiosoite: admin@admin.fi
    - salasana: admin123
  - Klikkaa Kirjaudu sisään -nappia  

- Voit myös halutessasi luoda omat tunnukset ja kirjautua ylläpitoon niillä
  - https://fullstackshop.firebaseapp.com/rekisteroidy

- Mene ylläpitosivun Tuotteet-välilehdelle
  - https://fullstackshop.firebaseapp.com/yllapito
  - Selaile kaikkia tuotteita

- Klikkaa Lisää tuote -välilehteä
  - Täytä vomakkeen tiedot
  - Kun tiedot on täytetty oikein, lomakkeen tila muuttuu

- Klikkaa Tilaukset-välilehteä
  - Selaile tehtyjä tilauksia
  - Jos teit tilauksen vaiheessa 6, sen pitäisi näkyä tällä sivulla
  - Etsi tekemäsi tilaus, sen tila on "Käsittelyssä"
  - Klikkaa oikeassa reunassa olevaa "slideria" ja tilauksen tila vaihtuu tilaan "Lähetetty"
  - Kun tilauksen tila on "Lähetetty", sen voi poistaa klikkaaalla nappia "Poista tilaus"
  - Poista tekemäsi tilaus

- Kirjaudu ulos klikkaamalla ylläpitosivun ylälaidassa olevaa napista "Kirjaudu ulos"
  - sivu siirtyy kirjautumissivulle
  - kokeile kirjautua virheellisillä tunnuksilla, ei onnistu

### Lisätietoa

- [FreeLogoDesign](https://www.freelogodesign.org/)
- [UnSplash](https://unsplash.com/)
- [FireBase](https://firebase.google.com/)
- [Semantic UI](https://semantic-ui.com/)
- [Styled Components](https://styled-components.com/)
- [Code Climate](https://codeclimate.com/)
- [Trello](https://trello.com/)

### CodeClimate
[![Maintainability](https://api.codeclimate.com/v1/badges/35952a8a0ca09997734f/maintainability)](https://codeclimate.com/github/juissijohtaja/FullStackShop/maintainability)