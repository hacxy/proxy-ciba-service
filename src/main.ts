import { AppModule } from './app.module';
import { bootstrap } from 'uni-nest';

bootstrap(AppModule, {
  appOptions: {
    port: 1120
  },
  beforeAppListen(app) {
    app.enableCors({
      origin: '*'
    });
  }
});
