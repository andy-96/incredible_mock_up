<template lang="pug">
.section
  h1 Impressum
  p Angaben gem&auml;&szlig; &sect; 5 TMG
  p
    | Andy Chen 
    br
    | Martin-Behaim-Stra&szlig;e 2
    br
    | 81373 M&uuml;nchen 
    br
  p
    strong Vertreten durch: 
    br
    | Andy Chen
    br
    | Leonhard D&ouml;ring
    br
  p
    strong Kontakt:
    br
    | Telefon: 0178-9832452
    br
    | E-Mail: 
    a(href='mailto:andy_chen1996@yahoo.de') andy_chen1996[@]yahoo.de
    br
  p
    strong Haftungsausschluss: 
    br
    br
    strong Haftung f&uuml;r Inhalte
    br
    br
    | Die Inhalte unserer Seiten wurden mit gr&ouml;&szlig;ter Sorgfalt erstellt. F&uuml;r die Richtigkeit, Vollst&auml;ndigkeit und Aktualit&auml;t der Inhalte k&ouml;nnen wir jedoch keine Gew&auml;hr &uuml;bernehmen. Als Diensteanbieter sind wir gem&auml;&szlig; &sect; 7 Abs.1 TMG f&uuml;r eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach &sect;&sect; 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, &uuml;bermittelte oder gespeicherte fremde Informationen zu &uuml;berwachen oder nach Umst&auml;nden zu forschen, die auf eine rechtswidrige T&auml;tigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unber&uuml;hrt. Eine diesbez&uuml;gliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung m&ouml;glich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
    br
    br
    strong Urheberrecht
    br
    br
    | Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielf&auml;ltigung, Bearbeitung, Verbreitung und jede Art der Verwertung au&szlig;erhalb der Grenzen des Urheberrechtes bed&uuml;rfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur f&uuml;r den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
    br
    br
    strong Datenschutz
    br
    br
    | Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten m&ouml;glich. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder eMail-Adressen) erhoben werden, erfolgt dies, soweit m&ouml;glich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdr&uuml;ckliche Zustimmung nicht an Dritte weitergegeben. 
    br
    | Wir weisen darauf hin, dass die Daten&uuml;bertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitsl&uuml;cken aufweisen kann. Ein l&uuml;ckenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht m&ouml;glich. 
    br
    | Der Nutzung von im Rahmen der Impressumspflicht ver&ouml;ffentlichten Kontaktdaten durch Dritte zur &Uuml;bersendung von nicht ausdr&uuml;cklich angeforderter Werbung und Informationsmaterialien wird hiermit ausdr&uuml;cklich widersprochen. Die Betreiber der Seiten behalten sich ausdr&uuml;cklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-Mails, vor.
    br
  br
  | Impressum vom 
  a(href='https://www.impressum-generator.de') Impressum Generator
  |  der 
  a(href='https://www.kanzlei-hasselbach.de/standorte/bonn/') Kanzlei Hasselbach, Bonn

</template>

<script>
export default {
  name: "Impressum",
  mounted() {
    document.title = this.$route.meta.title
  }
}
</script>

<style lang="sass">
@import ../sass/landingPageStyle
</style>
