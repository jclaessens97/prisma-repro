import { copyFile } from 'fs';
import path from 'path';
import glob from 'tiny-glob';
import type { Plugin } from 'esbuild';
import { build } from 'esbuild';

const postBuild: Plugin = {
  name: 'post-build',
  setup(build) {
    build.onEnd(() => {
      const origin = path.resolve('prisma', 'schema.prisma');
      const target = path.resolve('build', 'schema.prisma');
      copyFile(origin, target, (err) => {
        console.error(err);
      });
    });
  },
};

(async function () {
  const entryPoints = await glob('index.ts');
  build({
    target: 'node18',
    entryPoints,
    logLevel: 'info',
    outdir: 'build',
    bundle: true,
    minify: false,
    platform: 'node',
    format: 'cjs',
    sourcemap: true,
    plugins: [
      postBuild,
    ],
    external: [
      'superagent-proxy',
    ],
  });
})();
