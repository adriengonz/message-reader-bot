const Discord = require('discord.js')
const c = new Discord.Client()

c.on('ready', function () {
  console.log(`Connecté avec @${c.user.tag} !`)
c.user.setActivity('mhelp En attente de messages...', {type: 'WATCHING'})
});

c.on('message', async msg => {

  function del() {
    msg.delete();
  };

//Messages Reader
  setInterval(function() {c.user.setActivity('mhelp En attente de messages...', {type: 'WATCHING'})}, 3000)
  c.user.setActivity(`@${msg.author.username} à dit "${msg.content}" sur ${msg.guild.name}` , {type: 'WATCHING'})

//Messages

if(msg.content === 'mhelp'){
    del();
    msg.channel.send({embed: {
    color: 3447003,
    author: {
      name: c.user.username,
      icon_url: c.user.avatarURL
    },
    title: `Hey @${msg.author.username} ! Voilà la liste des commandes ! 😁👍 `,
    fields: [{
        name: "mhelp",
        value: "Affiche la **liste des commandes**."
      },
      {
        name: "minvite",
        value: "Envoie le lien pour **inviter** ce bot sur **votre serveur**"
      },
      {
        name: "msupport",
        value: "Envoie le lien du **SERVEUR SUPPORT**"
      },
      {
        name: "mping",
        value: "Mesure le **PING** (latence) entre le **BOT** et l'**API**"
      },
      {
        name: "mcreateur",
        value: "Affiche le nom et l'id du **créateur** de ce **BOT**"
      },
      {
        name: "Autres commandes Prochaînement",
        value: "**Prochainement** 📜"
      },
      {
        name: "Que fait ce **bot**?",
        value: "Ce bot est en fait un \"liseur de messages\", ces messages (que vous envoyez dans n'importe que serveur) seront affichés dans la \"rich presence\" du bot (regarde @...(nom de la personne) à dit ... (message) sur ...(nom du serveur). ⚠**ATTENTION**⚠ Ce bot à tendance à régulièrement bug et crash. Désolé pour le dérangement, je fais tous ce que je peux pour faire de ce bot votre préféré ! 😁 (j'ai peut être parlé un peu trop vite 😂😅)."
      },
      {
        name: "Mis à jour le **03/08/2018**",
        value: "A bientôt "
      },
      {
        name: `Message demandé par : @${msg.author.username}`,
        value: "A bientôt ! 😁😁"
      }

    ],
    timestamp: new Date(),
    footer: {
      icon_url: c.user.avatarURL,
      text: "2018 Adri-djay g"
    }
  }
  });
  }

  if(msg.content === 'minvite'){
    del()
    msg.channel.send(`Voilà le lien d'invitation @${msg.author.name} ! \n\n➡➡➡ https://discordapp.com/oauth2/authorize?client_id=478523562152427551&scope=bot&permissions=67464256`)
  }
  if(msg.content === 'msupport'){
    del()
    msg.channel.send(`Y a un problème ? Va sur le serveur **AdriBot Support** ! \n\n➡➡➡ https://discord.gg/rH24C9m `)
  }
  if(msg.content === 'mping'){
    del();
    msg.channel.send(`🏓Pong! \n\n <@${msg.author.id}>, \n\n➡🌠La latence de mon bot est de ${msg.createdTimestamp - msg.createdTimestamp}ms.🌠 \n➡⌛La latence de l'API (Client) est de ${Math.round(c.ping)}ms⏳ \n\n➡D'autres Questions❓ N'hésite pas à taper **mhelp** Pour connaître toutes les commandes du **bot**❕`)
  }
  if(msg.content === 'mcreateur'){
    del()
    msg.reply('Le créateur de ce Bot se nomme **Adrien** et il code en JS. Tu veux son **Nom d\'utilistateur** ? Le voici ! \n\n➡ Adrien 💯#8588 \n\nBonne Journée ! 🤗🤗')
  }

});


c.login('NDc4NTIzNTYyMTUyNDI3NTUx.DlL-WQ.1kV1-029hWtoYNngucMj7hSNYG8')
