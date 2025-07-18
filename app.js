{
  "name": "INCONNU-XD",
  "description": "🚀 INCONNU XD WhatsApp MultiDevice Bot – BY INCONNU BOY💡✨",
  "logo": "https://files.catbox.moe/230q0c.jpg",
  "keywords": ["INCONNU BOY TECH", "whatsapp-bot", "whatsapp-md-bot"],
  "repository": "https://github.com/INCONNNU-BOY/INCONNU-XD-V1",
  "stack": "container",
  "env": { 
  
    "SESSION_ID": 'INCONNU~XD~ChwTEarA#tjCDKSc6p13H6h6pFn59seUPRpV4JQjdsvKCv90DQ4s'
      "description": "Ensure your session Id starts with the word INCONNU~XD~",
      "required": true,
      "value": ""
    },
    "MODE": 'private'
      "description": "Set to 'public' or 'private' to define bot mode",
      "required": true,
      "value": "private"
    },
    "OWNER_NAME": '🌎__🧃🛫'
      "description": "Your name as the bot owner",
      "required": true,
      "value": "INCONNU BOY"
    },
    "OWNER_NUMBER": '50940309686'
      "description": "Your WhatsApp number",
      "required": true,
      "value": "50940309686"
    },
    "AUTO_READ": 'false'
      "description": "Enable bot to auto-read messages (true/false)",
      "required": false,
      "value": "false"
    },
    "AUTO_TYPING": 'true'
      "description": "Enable bot to show typing status (true/false)",
      "required": false,
      "value": "false"
    },
    "AUTO_RECORDING": {
      "description": "Enable bot to show recording status (true/false)",
      "required": false,
      "value": "false"
    },
    "ALWAYS_ONLINE": {
      "description": "Keep bot always online (true/false)",
      "required": false,
      "value": "false"
    },
    "AUTO_REACT": {
      "description": "Enable bot to auto-react to messages (true/false)",
      "required": false,
      "value": "false"
    },
    "ANTI_DELETE": {
      "description": "Enable anti-delete feature (true/false)",
      "required": true,
      "value": "true"
    },
    "AUTO_STATUS_SEEN": {
      "description": "Enable bot to view statuses (true/false)",
      "required": false,
      "value": "true"
    },
    "AUTO_STATUS_REPLY": {
      "description": "Enable bot to reply after viewing a status (true/false)",
      "required": false,
      "value": "false"
    },
    "STATUS_READ_MSG": {
      "description": "Set the message bot sends after viewing a status",
      "required": false,
      "value": "*Status Seen ⌛*"
    },
    "AUTO_BLOCK": {
      "description": "Enable bot to auto-block specific numbers (true/false)",
      "required": false,
      "value": "false"
    },
    "REJECT_CALL": {
      "description": "Enable bot to reject incoming calls (true/false)",
      "required": false,
      "value": "false"
    }
  },
  "buildpacks": [
    {
      "url": "heroku/nodejs"
    },
    {
      "url": "https://github.com/DuckyTeam/heroku-buildpack-imagemagick.git"
    },
    {
      "url": "https://github.com/jonathanong/heroku-buildpack-ffmpeg-latest"
    },
    {
      "url": "https://github.com/clhuang/heroku-buildpack-webp-binaries.git"
    }
  ]
}
