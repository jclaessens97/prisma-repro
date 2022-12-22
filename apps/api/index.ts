import http from 'http';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

http.createServer(async (req: any, res: any) => {
  console.log('/GET');

  await prisma.post.findFirst();

  res.writeHead(200);
  res.end();
}).listen(3500)
console.log(`Server running at http://127.0.0.1:3500/`);
