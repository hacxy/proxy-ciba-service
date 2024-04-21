import { Controller, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { Method, UniDefine } from 'uni-nest';
import { TextDto } from './dto/index.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UniDefine({
    method: Method.Get,
    isPublic: true,
    query: {
      type: TextDto
    }
  })
  getTranslateResult(@Query() query: TextDto) {
    const { text } = query;
    return this.appService.getTextTranslate(text);
  }
}
