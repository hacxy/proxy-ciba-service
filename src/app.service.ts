import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}

  async getTextTranslate(text: string) {
    const result = await this.httpService.axiosRef.get('https://dict-co.iciba.com/api/dictionary.php', {
      params: {
        key: '0EAE08A016D6688F64AB3EBB2337BFB0',
        type: 'json',
        w: text
      }
    });
    return result.data;
  }
}
