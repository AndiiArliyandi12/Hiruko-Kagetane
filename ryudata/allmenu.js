const fs = require('fs')
const chalk = require('chalk')

exports.allmenu = (quotes, prefix) => {
	return`*🔖 Quotes :* ${quotes}

*👦 OWNER MENU*
⤿❥ࣲ፝֟͜͡◔⃟➣ ${prefix}setmenu
⤿❥ࣲ፝֟͜͡◔⃟➣ ${prefix}join [link]
⤿❥ࣲ፝֟͜͡◔⃟➣ ${prefix}leave
⤿❥ࣲ፝֟͜͡◔⃟➣ ${prefix}self
⤿❥ࣲ፝֟͜͡◔⃟➣ ${prefix}public
⤿❥ࣲ፝֟͜͡◔⃟➣ ${prefix}setppbot
⤿❥ࣲ፝֟͜͡◔⃟➣ ${prefix}block @user
⤿❥ࣲ፝֟͜͡◔⃟➣ ${prefix}unblock @user 
⤿❥ࣲ፝֟͜͡◔⃟➣ ${prefix}bc
⤿❥ࣲ፝֟͜͡◔⃟➣ ${prefix}bcgc

*👥 GROUP MENU*
⤿㊧ ${prefix}antilink
⤿㊧ ${prefix}antiwame
⤿㊧ ${prefix}antivirtex
⤿㊧ ${prefix}nsfw
⤿㊧ ${prefix}event
⤿㊧ ${prefix}afk [alasan]
⤿㊧ ${prefix}tagall
⤿㊧ ${prefix}hidetag
⤿㊧ ${prefix}linkgroup
⤿㊧ ${prefix}revoke
⤿㊧ ${prefix}ephemeral [option]
⤿㊧ ${prefix}setppgc
⤿㊧ ${prefix}setname [text]
⤿㊧ ${prefix}group [option]
⤿㊧ ${prefix}add @user
⤿㊧ ${prefix}kick @user
⤿㊧ ${prefix}promote @user
⤿㊧ ${prefix}demote @user

*📥 DOWNLOAD MENU*
⤿㊙️ ${prefix}ytmp4 [url]
⤿㊙️ ${prefix}ytmp3 [url]
⤿㊙️ ${prefix}play [judul]
⤿㊙️ ${prefix}ytsearch [judul]


*🏔️ RPG MENU*
⤿☃️ ${prefix}profile
⤿☃️ ${prefix}joinrpg
⤿☃️ ${prefix}leaderboard
⤿☃️ ${prefix}daily
⤿☃️ ${prefix}monthly
⤿☃️ ${prefix}gajian
⤿☃️ ${prefix}judi
⤿☃️ ${prefix}berburu
⤿☃️ ${prefix}nebang
⤿☃️ ${prefix}mancing
⤿☃️ ${prefix}mining
⤿☃️ ${prefix}adventure
⤿☃️ ${prefix}transfer
⤿☃️ ${prefix}kill
⤿☃️ ${prefix}slot
⤿☃️ ${prefix}buy
⤿☃️ ${prefix}sell
⤿☃️ ${prefix}heal
⤿☃️ ${prefix}bansos

*📂 DATABASE MENU*
⤿☃️ ${prefix}absen
⤿☃️ ${prefix}hadir
⤿☃️ ${prefix}tidakhadir
⤿☃️ ${prefix}cekabsen
⤿☃️ ${prefix}hapusabsen
⤿☃️ ${prefix}setcmd [reply sticker/pesan]
⤿☃️ ${prefix}delcmd [reply sticker/pesan]
⤿☃️ ${prefix}listcmd
⤿☃️ ${prefix}lockcmd
⤿☃️ ${prefix}addmsg
⤿☃️ ${prefix}getmsg
⤿☃️ ${prefix}listmsg
⤿☃️ ${prefix}delmsg


*✍️ NULIS MENU*
⤿☃️ ${prefix}nulisbiasa
⤿☃️ ${prefix}nuliskanan
⤿☃️ ${prefix}nuliskiri
⤿☃️ ${prefix}foliokanan
⤿☃️ ${prefix}foliokiri


*🎙️ VOICE CHANGER*
⤿☃️ ${prefix}bass
⤿☃️ ${prefix}blown
⤿☃️ ${prefix}deep
⤿☃️ ${prefix}earrape
⤿☃️ ${prefix}fast
⤿☃️ ${prefix}fat
⤿☃️ ${prefix}nightcore
⤿☃️ ${prefix}reverse
⤿☃️ ${prefix}robot
⤿☃️ ${prefix}slow
⤿☃️ ${prefix}tupai


*🎮 FUN MENU*
⤿☃️ ${prefix}truth
⤿☃️ ${prefix}dare
⤿☃️ ${prefix}bagaimanakah [teks]
⤿☃️ ${prefix}kapankah [teks]
⤿☃️ ${prefix}dimanakah [teks]
⤿☃️ ${prefix}suit [✌️/✊/✋]
⤿☃️ ${prefix}aduayam [🐥/🐤🐓/🐣/🦃]
⤿☃️ ${prefix}suitpvp [tag user]
⤿☃️ ${prefix}ttt
⤿☃️ ${prefix}delttt

*🎰 GAME MENU*
⤿☃️ ${prefix}tebak lagu
⤿☃️ ${prefix}tebak gambar
⤿☃️ ${prefix}tebak kata
⤿☃️ ${prefix}tebak kalimat
⤿☃️ ${prefix}tebak lirik
⤿☃️ ${prefix}tebak lontong
⤿☃️ ${prefix}kuismath

*🎡 RANDOM MENU*
⤿☃️ ${prefix}darkjokes
⤿☃️ ${prefix}meme
⤿☃️ ${prefix}quotes
⤿☃️ ${prefix}quotes2
⤿☃️ ${prefix}katabijak
⤿☃️ ${prefix}katailham
⤿☃️ ${prefix}katasenja


*🎨 MAKER MENU*
⤿☃️ ${prefix}toimage
⤿☃️ ${prefix}smeme
⤿☃️ ${prefix}smeme2
⤿☃️ ${prefix}sticker
⤿☃️ ${prefix}tovideo
⤿☃️ ${prefix}togif
⤿☃️ ${prefix}tourl
⤿☃️ ${prefix}emojimix 😎+😂
⤿☃️ ${prefix}readmore
⤿☃️ ${prefix}ttp [teks]
⤿☃️ ${prefix}semoji [emoji]


*☕ OTHER MENU*
⤿☃️ ${prefix}simi [teks]
⤿☃️ ${prefix}ping
⤿☃️ ${prefix}owner
⤿☃️ ${prefix}menu / ${prefix}help / ${prefix}?
⤿☃️ ${prefix}delete
`
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
