# simpleTCP
En simpel TCP connection

Til jeres første opgave er det vigtigt vi tjekker op på jeres miljø, så alle lige kan komme på samme plan.
Derfor bliver første opgave at lave en simpel server med en simpel socket, der blot accepterer data, og skriver det til jeres log.

Koden til denne er allerede skrevet, så I skal blot opsætte jeres miljø så det kan køre. Til dette skal i bruge:

- Git (Hvis I ikke allerede har installeret det):
Følg denne guide: https://git-scm.com/book/en/v2/Getting-Started-Installing-Git

- En vilkårlig IDE (Jeg bruger selv VSC):
https://code.visualstudio.com/download

- MacOS brugere vil drage fordel af at downloade homebrew:
https://brew.sh/

- Server environment Node.js:
https://nodejs.org/en/download/

- Telnet til at pinge jeres server:
MacOS: skrive "brew install telnet" | Windows: Følg denne guide: https://www.technipages.com/windows-10-enable-telnet

- Til sidst bedes i downloade Wireshark, der ikke skal bruges til denne øvelse men vil forekomme senere:
https://www.wireshark.org/download.html

Hvis alt dette er downloaded og installeret korrekt, burde i kunne køre denne kode og dermed få en server der venter ved port 8080.
Hvis I åbner jeres terminal og skriver "telnet 127.0.0.1 8080", vil i dermed kunne skrive beskeder i terminalen til jeres localhost. 
Disse burde meget gerne vises i IDE'ens debug-konsol.

Når dette er færdig, så tag et godt kig på koden (eventuelt leg lidt med den) og overvej følgende:
- Hvad er "net"?
- Hvor bliver der åbnet for en socket?
- Hvorfor bruger vi port 8080?

I tilfælde af du er færdig, overvej følgende spørgsmål:
- Hvorfor er standarder vigtige for protocols?
- Hvad er en protocol stack og hvorfor er den vigtig?
- Hvad er de 5 lag i internettets protocol stack? Hvad er den primære funktion for hver af disse?

