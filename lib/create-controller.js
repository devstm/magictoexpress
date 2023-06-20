const fs = require('fs');
const path = require('path');
const data = require('./config');

const paths = {
  models: data.models || path.join(__dirname, '../../../server', 'models'),
  controllers: data.controllers || path.join(__dirname, '../../../server', 'controllers'),
  routes: data.routes || path.join(__dirname, '../../../server', 'routes'),
}

const rootPath = path.resolve(__dirname);
console.log(rootPath);

const args = {
  name: process.argv[2],
  model: process.argv[3],
  route: process.argv[4],
};

(function CreateModel() {
  if (!args.model) return;
  const modelTemplate = fs.readFileSync(
    path.join(__dirname, 'templates', 'model.js'),
    'utf8',
  );

  const model = modelTemplate
    .replace(/{{model}}/g, args.model)
    .replace(/{{tableName}}/g, `${args.model}s`);

  fs.writeFileSync(
    path.join(paths.models, `${args.model}.js`),
    model,
  );
  console.log(`model ${args.model} crated successfully,
   in path: ${path.join(paths.models, `${args.model}.js`)}
  `);
}(args));

(function CreateController() {
  if (!args.name) return;
  const controllerTemplate = fs.readFileSync(
    path.join(__dirname, 'templates', 'controller.js'),
    'utf8',
  );

  const controller = controllerTemplate
    .replace(/{{model}}/g, `{ ${args.name} }`);

  fs.writeFileSync(
    path.join(__dirname, '..', 'controllers', `${args.name}.js`),
    controller,
  );
  console.log(`controller ${args.name} crated successfully,
   in path: ${path.join(__dirname, '..', 'controllers', `${args.name}.js`)}
  `);
}(args));

(function RouterController() {
  if (!args.route) return;
  const routeTemplate = fs.readFileSync(
    path.join(__dirname, 'templates', 'route.js'),
    'utf8',
  );

  const controller = routeTemplate
    .replace(/{{model}}/g, args.model);

  fs.writeFileSync(
    path.join(paths.routes, `${args.model}.js`),
    controller,
  );
  console.log(`router ${args.route} crated successfully,
   in path: ${path.join(paths.routes, `${args.model}.js`)}
  `);
}(args));
