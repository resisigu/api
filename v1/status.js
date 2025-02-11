const express = require('express');
const { createCanvas, loadImage } = require('canvas');
const app = express();

app.get('/api/v1/status', async (req, res) => {
  const { username, rank, xp, money, cardtype, height, weight } = req.query;
  
  // キャンバスの作成とユーザーステータス画像の描画
  const canvas = createCanvas(400, 200);
  const ctx = canvas.getContext('2d');
  
  // ここで画像を描画するロジックを実装
  
  // 画像をバッファとして送信
  const buffer = canvas.toBuffer('image/png');
  res.type('image/png');
  res.send(buffer);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
