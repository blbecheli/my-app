export default function handler(req, res) {
    if(req.method === 'POST'){
      res.setHeader('Set-Cookie', ['userid=; Max-Age=0; Path=/;']);
      res.status(200).json({message: 'Cookie deleted'});
    }
  }