import { createServer } from 'vite';

const server = await createServer({
  configFile: './vite.config.ts',
});

await server.listen();
console.log('  Vite dev server running at http://localhost:3000');