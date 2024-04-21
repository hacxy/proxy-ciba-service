import { ApiProperty } from 'uni-nest';

export class TextDto {
  @ApiProperty({
    description: '文本',
    example: '你好',
    required: true,
  })
  text: string;
}
export class TextVo {
  @ApiProperty({ description: '小驼峰' })
  smallHump: string;
}
