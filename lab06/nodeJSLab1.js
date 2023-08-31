const express = require('express')
const app = express();

const hostname = '127.0.0.1'
const port = 8080


app.get("/", (req, res) => {
    res.send(`
    <div style="text-align: center;">
    <h1>Hello My name is Panachat Aiamnam</h1>
    <img src="https://scontent.fbkk10-1.fna.fbcdn.net/v/t39.30808-6/323263268_555835353084009_5407406939759150085_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeH5Y1WzMmOkLVuDwY_726pW3_DWmpEkBxDf8NaakSQHEKK6yaUYqA1HpFuBN1qy7oAJKYHEjgNb4sKggWn-N-Xc&_nc_ohc=T8r155uZK3oAX9Nj4qG&_nc_ht=scontent.fbkk10-1.fna&oh=00_AfAXLFWcB-EJmcTupm4cdsslQF8bMAEX5Teehj7gToDPyg&oe=63CFFE65" width="500" height="500">
    <br><br>This is LAB06 </div>`)
})

app.get("/ITD", (req, res) => {
    res.send(`
    <div style="text-align: center;">
    <h1 style="color:#1084B3;">INFORMATION TECHNOLOGY AND DIGITAL INNOVATIONn</h1>
    <img src="https://scontent.fbkk10-1.fna.fbcdn.net/v/t39.30808-6/279560270_5821053641244444_1641496247686643675_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeF0EY1X0Qdhl07UJiFQsaVZWylXctbtv-pbKVdy1u2_6tf9k1Ytpc8jIphmM3ZHSVw5BcDktrmF-SyZmjBluAYm&_nc_ohc=zluwKvO-85AAX8YuHi6&_nc_ht=scontent.fbkk10-1.fna&oh=00_AfCLc0fBLTnKUO9dwtAGkK7u4Ov8HV6Mxi3NbSaP4Bgspw&oe=63CF9626" width="500" height="400">
    <br><br>This is ITD </div>`)
})

app.get("/IMI", (req, res) => {
    res.send(`
    <div style="text-align: center;">
    <h1 style="color:#11818A;">INNOVATION OF MEDICAL INFORMATICS</h1>
    <img src="https://scontent.fbkk10-1.fna.fbcdn.net/v/t39.30808-6/305066060_486003810201744_2630739109908002104_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGDx9iC5EPKBwj2abNCWbLeh11V7rgOBBqHXVXuuA4EGt-_UiZ7bsPH8u6b_cwVClZhoO5YQKAJzp876kVHpp7F&_nc_ohc=bBmTQhsWcnwAX-djTAG&tn=1pOkLK-yWkOb_Jrk&_nc_ht=scontent.fbkk10-1.fna&oh=00_AfB4IEy0Tjwp0WsaSSiMz3juLuOWITm-QSZEod_ngYRoBA&oe=63CEA026" width="500" height="400">
    <br><br>This is IMI</div>`)
})

app.get("/DCM", (req, res) => {
    res.send(`
    <div style="text-align: center;">
    <h1 style="color:#F58400;">DIGITAL CONTENT AND MEDIA</h1>
    <img src="https://scontent.fbkk10-1.fna.fbcdn.net/v/t39.30808-6/321350038_690895365759051_3896910723558054647_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeG5Mlud_qUN5dPDJIS9R0uh81BfXvDaAnjzUF9e8NoCeNNUq_cYZPgSoz367dCE-Jki3qkULMth0j6MLEeN87QP&_nc_ohc=nH1Y2Q_CpPUAX95OjPn&_nc_ht=scontent.fbkk10-1.fna&oh=00_AfC_gdj9W-tMX5x933gPcicybG7H_q4QuKn4yI1GmD68LQ&oe=63CF6A34" width="500" height="400">
    <br><br>This is DCM</div>`)
})

app.get("/DCA", (req, res) => {
    res.send(`
    <div style="text-align: center;">
    <h1 style="color:#FA1E88;">DIGITAL COMMUNICATION ARTS</h1>
    <img src="https://scontent.fbkk10-1.fna.fbcdn.net/v/t39.30808-1/295352953_461090986022213_2715411595991804934_n.jpg?stp=dst-jpg_p320x320&_nc_cat=100&ccb=1-7&_nc_sid=c6021c&_nc_eui2=AeH2RLKqsACA4joNc7k6yCpWPIF4saRlLcA8gXixpGUtwMJlgWqjLR8lOJovZnkf_zng-c4hbg62lz2AuxJhGmzb&_nc_ohc=kRdQ-_gdV5IAX_5TA0e&_nc_ht=scontent.fbkk10-1.fna&oh=00_AfDtyNy--dSQXlw2NaskFdRiE3AkVoSxQI13VQT22fv3hw&oe=63CF04EB" width="500" height="400">
    <br><br>This is DCA</div>`)
})

app.get("/MTA", (req, res) => {
    res.send(`
    <div style="text-align: center;">
    <h1 style="color:#A4DE28;">MULTIMEDIA TECHNOLOGY, ANIMATION AND GAME</h1>
    <img src="https://scontent.fbkk10-1.fna.fbcdn.net/v/t1.18169-9/28577442_1637655962994570_356518273258031202_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHmpvEYY7RD5VgDkkBRD7rh_8x_9KnefV__zH_0qd59X9BWROc9yI8R1bK_yBzUeWXChRQ5bcl5KIY7worvfmTk&_nc_ohc=hUiYdFfqfQEAX_OLxxh&_nc_ht=scontent.fbkk10-1.fna&oh=00_AfCRTYcvhysxiaO0Nx_rU9AZv5VxcO5AgW3Sad32s-DD2Q&oe=63F16A85" width="500" height="400">
    <br><br>This is MTA</div>`)
})

app.use((req, res) => {
    res.status(404).send("404 Not Found");
})

app.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
});

