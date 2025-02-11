// server.js
const express = require('express');
const { createCanvas, loadImage } = require('canvas');

const app = express();

app.get('/api/v1/status', async (req, res) => {
  const { username = "User", rank = "1", xp = "1000", money = "500", cardtype = "default", height = "170", weight = "60" } = req.query;

  // キャンバスサイズ設定
  const canvas = createCanvas(600, 300);
  const ctx = canvas.getContext('2d');

  // 背景色
  ctx.fillStyle = '#282c34';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // テキストスタイル設定
  ctx.font = 'bold 20px Arial';
  ctx.fillStyle = '#ffffff';

  // ユーザー情報描画
  ctx.fillText(`Username: ${username}`, 20, 50);
  ctx.fillText(`Rank: ${rank}`, 20, 90);
  ctx.fillText(`XP: ${xp}`, 20, 130);
  ctx.fillText(`Money: $${money}`, 20, 170);
  ctx.fillText(`Height: ${height} cm`, 20, 210);
  ctx.fillText(`Weight: ${weight} kg`, 20, 250);

  // カードタイプによる背景画像（例）
  if (cardtype === 'gold') {
    ctx.fillStyle = '#FFD700';
    ctx.fillRect(0, canvas.height - 50, canvas.width, 50);
    ctx.fillStyle = '#000000';
    ctx.fillText('Gold Card', canvas.width / 2 - 50, canvas.height - 20);
  }

  // PNG画像として出力
  res.setHeader('Content-Type', 'image/png');
  res.send(canvas.toBuffer());
});

// サーバー起動
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
