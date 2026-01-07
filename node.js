const express = require('express');
const app = express();

// Web Server for UptimeRobot
app.get('/', (req, res) => {
  res.send('Server is active!');
});

app.listen(3000, () => {
  console.log('Keep-alive server is running on port 3000');
});

// --- ဒီအောက်မှာ သင်၏ Vless Code များကို ဆက်ရေးပါ ---
// (ဥပမာ- သင့်ရဲ့ vless functions တွေ သို့မဟုတ် script တွေ)
